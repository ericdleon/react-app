import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import HelloWorld from './components/hello-world';
import About from './components/About';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <HelloWorld title="Hello from React webpack!" />
        <About title="Good Bye World" />
      </div>
    );
  }
}

export default hot(module)(App);
