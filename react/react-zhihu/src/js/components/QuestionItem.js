import React from 'react';

export default React.createClass({
    voteHandle(e) {
        const count = e.currentTarget.getAttribute('data-type') === 'up'? 1: -1;
        const newCount = Number.parseInt(this.props.voteCount + count, 10);
        this.props.onVote(this.props.questionKey, newCount);
    },

    render() {
        return (
            <div className="media">
                <div className="media-left">
	              <button className="btn btn-default" onClick={this.voteHandle} data-type="up">
	                <span className="glyphicon glyphicon-chevron-up"></span>
	                <span className="vote-count">{this.props.voteCount}</span>
	              </button>
	              <button className="btn btn-default" onClick={this.voteHandle} data-type="down">
	                <span className="glyphicon glyphicon-chevron-down"></span>
	              </button>
	            </div>
                <div className="media-body">
	              <h4 className="media-heading">{this.props.title}</h4>
	              <p>{this.props.description}</p>
	            </div>
            </div>
        )
    }
});