import * as types from'./../constants/Type'
export const changeStatus = () =>{
    return {
        type : types.CHANGESTATUS
    }
}
export const sort = (sort) =>{
    return {
        type : types.SORT,
        sort : sort
    }
}