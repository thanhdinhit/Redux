// Set initial state as object with type color white
import { createStore, Redux } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
const initialState = {
  color: 'white'
}

//-----------------
// 1. REDUCER
//-----------------
// Create a Reducer that takes in state and action as arguments and returns a new state
// In ES6, state takes in initialState whenever state is undefined
// State is immutable
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RED':
      return { ...state, color: 'red' };
    case 'BLUE':
      return { ...state, color: 'blue' };
    case 'GREEN':
      return { ...state, color: 'green' };
    case 'YELLOW':
      return { ...state, color: 'yellow' };      
    default:
      return state;
  };
}

//-----------------
// 2. STORE
//-----------------
// Create a Redux store to manage state
// Declare a store variable and assign it to the createStore() method
const store = Redux.createStore(reducer);
console.log('[Store]', store.getState());
// -> [Store] { color: 'white' }

//-----------------
// 3. SUBSCRIBE
//-----------------
// Subscribe takes a function that will be executed whenever the state is updated
store.subscribe(() => {
  console.log('[Subscribe]', store.getState());
});


//-----------------
// 4. DISPATCH
//-----------------
// Dispatch action
// An action contains information and sends it to your Redux store
// Here the action is an object with a type property
store.dispatch({ type: 'RED' });
console.log('[Dispatch]', store.getState());
// -> [Subscribe] { color: 'red' }
// -> [Dispatch] { color: 'red' }

// Create a React component that has props value, redSwitch, blueSwitch, greenSwitch, yellowSwitch
const Color = ({ 
  value,
  redSwitch,
  blueSwitch,
  greenSwitch,
  yellowSwitch
}) => (
  <div className={value}>
    <button onClick={redSwitch}>Red</button>
    <button onClick={blueSwitch}>Blue</button>
    <button onClick={greenSwitch}>Green</button>
    <button onClick={yellowSwitch}>Yellow</button>
  </div>
);

// Create a function render that renders React component to the Dom
const render = () => {
  ReactDOM.render(
    <Color 
      value={store.getState().color}
      redSwitch={() => store.dispatch({
        type: 'RED'
      })}
      blueSwitch={() => store.dispatch({
        type: 'BLUE'
      })} 
      greenSwitch={() => store.dispatch({
        type: 'GREEN'
      })} 
      yellowSwitch={() => store.dispatch({
        type: 'YELLOW'        
      })}
    />,
    document.getElementById('root')
  );
}

// Subscribe render function to the store
store.subscribe(render);

// Call render to render the state
render();