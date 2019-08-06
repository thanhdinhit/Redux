var initState = {
    by: 'name',
    value: 1
}


var reducer = (state = initState, action) => {

    if (action.type === 'SORT') {
        var by = action.sort.by;
        var value = action.sort.value;
        return {
            sort: {
                newby: by,
                newvalue: value
            }
        }
    }
    return state;
}

export default reducer;