import { createStore } from 'redux';
import { changeStatus, sort } from './actions/index';
import reducer from './reducers/index';

const store = createStore(reducer);
console.log("DefaultRedux..........separateComponent:", store.getState())

// change status
store.dispatch(changeStatus());
console.log('CHANGESTATUS', store.getState());

// action sort
store.dispatch(sort({
    by: 'name',
    value: -1
}));
console.log('SORT', store.getState());



