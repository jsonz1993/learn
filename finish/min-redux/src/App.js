import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from './mini-redux/mini-react-redux'
import { add, remove, addAsync, addTwice } from './index.redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>初始值{this.props.num}</p>
        <button onClick={this.props.add}>Add</button>
        <button onClick={this.props.remove}>Remove</button>
        <button onClick={this.props.addAsync}>addAsync</button>
        <button onClick={this.props.addTwice}>addTwice</button>
      </div>
    );
  }
}

App = connect(state=> ({num: state}), {add, remove, addAsync, addTwice})(App);

export default App;
