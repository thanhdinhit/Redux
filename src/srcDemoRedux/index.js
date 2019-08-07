import React from 'react';
//import { render } from 'react-dom';
import Counter from './Counter';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initState = {
  count: 0
};

function reducer(state = initState, action) {
  switch (action.type) {
    case 'INC':
      return {
        count: state.count + 1
      };
    case 'DEC':
      return {
        count: state.count - 1
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

const AppDemoRedux = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);
// provider => use function connect to connect store

export default AppDemoRedux;