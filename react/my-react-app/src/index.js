const React = require('react');
const ReactDOM = require('react-dom');
const Remarkable = require('remarkable');
const $ = require('jQuery');
const data = [
  {
    id: 1,
    author: "Pete Hunt",
    text: "This is one comment"
  }, {
    id: 2,
    author: "Jordan Walke",
    text: "This is *another* comment"
  }
];

const CommentBox = React.createClass({
  getInitialState: function() {
    return {data: []};
  },

  loadCommentsFromeServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: (data) => {
        this.setState({data});
      },
      error: (xhr, status, err) => {
        console.error(this.props.url, status, err.toString());
      }
    })
  },

  handleCommentSubmit(comment) {},

  componentDidMount() {
    this.loadCommentsFromeServer();
    // setInterval(this.loadCommentsFromeServer, this.props.pollInterval);
  },

  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data}/>
        <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
      </div>
    );
  }
});

const CommentList = React.createClass({
  render: function() {
    const commentNodes = this.props.data.map(function(comment) {
      return (
        <Comment author={comment.author} key={comment.id}>
          {comment.text}
        </Comment>
      )
    });

    return (
      <div className="commentList">
        {commentNodes}
      </div>
    )
  }
});

const CommentForm = React.createClass({
  getInitialState() {
    return {author: '', text: ''};
  },
  handleAuthorChange() {
    this.setState({author: e.target.value});
  },
  handleTextChange() {
    this.setState({text: e.target.value});
  },
  handleSubmit() {
    e.preventDefault();
    let author = this.state.author.trim();
    let text = this.state.text.trim();
    if (!text || !author)
      return;
    this.setState({author: '', text: ''});
  },
  render: function() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Your name" value={this.state.author} onChange={this.handleAuthorChange}/>
        <input type="text" placeholder="say something..." value={this.state.text} onChange={this.handleTextChange}/>
        <input type="submit" value="post"/>
      </form>
    );
  }
});

const Comment = React.createClass({
  rawMarkup: function() {
    const md = new Remarkable();
    const rawMarkup = md.render(this.props.children.toString());
    return {__html: rawMarkup};
  },

  render: function() {

    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={this.rawMarkup()}></span>
      </div>
    )
  }
});

ReactDOM.render(
  <CommentBox url="/api/comments" pollInterval={2000}/>, document.getElementById('root'));
