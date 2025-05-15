import React, { Component } from 'react';

class CounterButton extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      count: 0
    };
  }


  handleIncrement = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  };

  render() {
    return (
      <div>
        <h1>Counter Value: {this.state.count}</h1>
        <button onClick={this.handleIncrement} className='click'>Increment</button>
      </div>
    );
  }
}

export default CounterButton;