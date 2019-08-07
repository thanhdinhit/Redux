import React from 'react';
import { connect } from 'react-redux';
import * as types from'./../constants/Type'

class Counter extends React.Component {
  increment = () => {
    this.props.dispatch({ type: types.INC });
  }

  decrement = () => {
    this.props.dispatch({ type: types.DEC });
  }

  render() {
    return (
      <div>
        <h2 style = {{ marginLeft: '80px' }}>Counter</h2>
        <div>
          <button style = {{ marginLeft: '50px' }} onClick={this.decrement}>-</button>
          <span style = {{ marginLeft: '50px' }}>{this.props.count}</span>
          <button style = {{ marginLeft: '50px' }} onClick={this.increment}>+</button>
        </div>
      </div>
    )
  }
}
// link state Redux - property(prop) Component

function mapStateToProps(state) {
  return {
    count: state.counts
  };
}

export default connect(mapStateToProps)(Counter);

//note:
//redux: create store state, get state, action when state change
//react-redux: link between store state - component
// mapStateToProps return object -> component Counter get value from object via prop(this.props.count)