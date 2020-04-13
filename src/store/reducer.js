import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST } from './actionTypes'

const defaultState = {
    inputVal: 'Write Something',
    list: []
}
export default (state = defaultState, action) => {

    //Reducer里只能接受state，不能改变state
    if (action.type === CHANGE_INPUT) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputVal = action.value
        return newState
    }

    if (action.type === ADD_ITEM) {
        let newState = JSON.parse(JSON.stringify(state))
        if (newState.inputVal == '') return newState
        newState.list.push(newState.inputVal)
        newState.inputVal = ''
        return newState
    }
    
    if (action.type === DELETE_ITEM) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index, 1)
        return newState
    }

    if (action.type === GET_LIST) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list = action.data
        return newState
    }

    return state
}