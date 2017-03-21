// React 入门事件
import React from 'react';
import ReactDOM from 'react-dom';

const Event = React.createClass({
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>显示|隐藏</button>
                <span ref="tip">我是一个span</span>
                <TextInputComponent/>
            </div>
        )
    },

    handleClick(event) {
        event.stopPropagation();
        event.preventDefault();
        let tipE = ReactDOM.findDOMNode(this.refs.tip);
        if (tipE.style.display === 'none') {
            tipE.style.display = 'inline';
        } else {
            tipE.style.display = 'none';
        }
    }
});

const TextInputComponent = React.createClass({
    getInitialState() {
        return {inputContent: ''}
    },

    updateHandle(e) {
        event.stopPropagation();
        event.preventDefault();

        this.setState({
            inputContent: e.target.value
        });
    },

    render() {
        return (
            <div>
                <input type="text" onChange={this.updateHandle}/>
                <span>{this.state.inputContent}</span>
            </div>
        )
    }
});

export default Event;