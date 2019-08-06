var initState = false;

var reducer = (state = initState, action) => {
    if (action.type === 'CHANGESTATUS') {
        state = !state;
        return state;
    }
    return state;
}

export default reducer;