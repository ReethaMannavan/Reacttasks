import React, { Component } from 'react';

class Countertwo extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      count: 0
    };
  }

  incrementCounter = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  };

  render() {
    return (
      <div>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={this.incrementCounter} className='btn' >Increment</button>
      </div>
    );
  }
}

export default Countertwo;