// React入门 生命周期
import React from 'react';
import './App.css';

const App = React.createClass({
  getInitialState() {
    console.info('init');
    return {
      opacity: 1.0,
      fontSize: '18px'
    }
  },

  componentWillMount() {
    console.info('willMount');
  },

  componentDidMount() {
    console.info('didMount');
    window.setTimeout(()=> {
      this.setState({
        opacity: .5,
        fontSize: '24px'
      });
    }, 1000)
  },

  render() {
    return (
      <div className="App">
        <h2 style={{opacity:this.state.opacity, fontSize: this.state.fontSize}}>Welcome to React</h2>
      </div>
    );
  }
})

export default App;
