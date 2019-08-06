import changeStatus from './status';//reducer status
import sort from './sort';//reducer sort
import {combineReducers} from 'redux';

const reducer = combineReducers({
    status: changeStatus,
    sort : sort
});

export default reducer;