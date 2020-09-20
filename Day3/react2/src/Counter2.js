import React, { Component } from 'react';

class Counter2 extends Component {
  handleIncrease = () => {
    console.log('increase 호출');
  };

  handleDecrease = () => {
    console.log('Decrease 호출');
  };

  render() {
    return (
      <div>
        <h2>0</h2>
        <button onClick={this.handleIncrease}>1더하기</button>
        <button onClick={this.handleDecrease}>1빼기</button>
      </div>
    );
  }
}

export default Counter2;
