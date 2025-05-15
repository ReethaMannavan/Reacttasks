import React, { Component } from 'react';

class LifecycleDemo extends Component {
  componentDidMount() {
   
    console.log('Component has been mounted!');
  }

  render() {
    return (
      <div>
        <h1>Check the console!</h1>
      </div>
    );
  }
}

export default LifecycleDemo;