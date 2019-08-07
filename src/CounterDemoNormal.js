import React from 'react';

class Counter extends React.Component {

  state = { count: 0 }
  increment = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
    return (
      <div>
        <h2 style={{ marginLeft: '80px' }}>Counter</h2>
        <div>
          <button style={{ marginLeft: '50px' }} onClick={this.decrement}>-</button>
          <span style={{ marginLeft: '50px' }}>{this.state.count}</span>
          <button style={{ marginLeft: '50px' }} onClick={this.increment}>+</button>
        </div>
      </div>
    )
  }
}

export default Counter;
