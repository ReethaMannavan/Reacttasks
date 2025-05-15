import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);
   
    this.state = {
      time: new Date().toLocaleTimeString()
    };
  }

 
  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString()
      });
    }, 1000);
  }


  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div>
        <h1>Current Time:</h1>
        <h2>{this.state.time}</h2>
      </div>
    );
  }
}

export default Clock;