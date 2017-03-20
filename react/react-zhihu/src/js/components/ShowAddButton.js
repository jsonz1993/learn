import React from 'react';

export default class ShowAddButton extends React.Component {
    render() {
        return (
            <button id="add-question-btn" onClick={this.props.onToggleForm} className="btn btn-success">添加问题</button>
        );
    }
}