import React from 'react';

export default class QuestionForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!this.refs.title.value) return;

        const newQuestion = {
            title: this.refs.title.value,
            description: this.refs.description.value,
            voteCount: 0
        };

        this.refs.addQuestionForm.reset();
        this.props.onNewQuestion( newQuestion );

    }

    render() {
        const styleObj = {
            display: this.props.formDisplay? 'block': 'none'
        };
        return (
            <form ref="addQuestionForm" name="addQuestion" className="clearfix" style={styleObj} onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="qtitle">问题</label>
                    <input type="text" ref="title" className="form-control" id="qtitle" placeholder="您的问题的标题" />
                    <textarea ref="description" className="form-control" rows="3" placeholder="问题的描述"></textarea>
                    <button className="btn btn-success pull-right">确认</button>
                    <button type="button" className="btn btn-default pull-right" onClick={this.props.onToggleForm}>取消</button>
                </div>
            </form>
        )
    }
}