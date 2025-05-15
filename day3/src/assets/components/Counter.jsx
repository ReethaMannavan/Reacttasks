import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
   
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        <h1>Counter Value: {this.state.count}</h1>
      </div>
    );
  }
}

export default Counter;