import React from 'react';
import PropTypes from 'prop-types';

class Sidebar extends React.Component {
  render() {
    return (
      <div>
        <p>Sidebar</p>
        <Navbar></Navbar>
      </div>
    )
  }
}

class Navbar extends React.Component {
  static contextType = {
    user: PropTypes.string
  }
  render() {
    console.log(this.context);
    return (
      <div>{this.context.user} Navbar</div>
    )
  }
}

class Page extends React.Component {
  static childContextTypes = {
    user: PropTypes.string
  }
  constructor(props) {
    super(props);
    this.state = {user: 'Jack'}
  }
  getChildContext() {
    return this.state;
  }
  render() {
    return (
      <div>
        <p>我是{this.state.user}</p>
        <Sidebar />
      </div>
    )
  }
}


export default Page;