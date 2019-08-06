import { createStore } from 'redux';
import { status, sort} from './actions/index';
var init = {
    status: false,
    sort: {
        by: 'name',
        value: 1
    }
}

var reducer = (state = init, action) => {
    if (action.type === 'CHANGESTATUS') {
        state.status = !state.status;
        return state;
    }

    if (action.type === 'SORT') {
        // state.sort = {
        //     by : action.sort.by,
        //     value : action.sort.value
        // }
        // return state;
        //note: viết theo kiểu này thì giá trị nó sẽ update lại chính cái biến cũ(cùng vùng nhớ cùng giá trị)nên giá trị sẽ change ở tất cả
        var by = action.sort.by; // var {by, value} = action.sort; =>ES6 => updated by and value
        var value = action.sort.value;
        var status = state.status;
        return {
            status: status,
            sort: {
                newby: by,
                newvalue: value
            }
        }
    }
    return state;
}

const store = createStore(reducer);
console.log("Default:", store.getState())

// change status
var action = { type: 'CHANGESTATUS' };
store.dispatch(action);
console.log('CHANGESTATUS', store.getState());

// action sort
var sortAction = {
    type: 'SORT',
    sort: {
        by: 'name',
        value: -1
    }
}
store.dispatch(sortAction);
console.log('SORT', store.getState());



