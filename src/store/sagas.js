import { takeEvery, put } from 'redux-saga/effects'
import { GET_MY_LIST } from './actionTypes'
import { getListAction } from './actionCreators'
import axios from 'axios'

//generator函数
function* mySaga() {
    yield takeEvery(GET_MY_LIST, getList) //等待监听
}

function* getList() {
    // axios.post('https://easydoc.xyz/mock/ikKncVxb/api/getList').then((res) => {
    //     const data = res.data.list
    //     const action = getListAction(data)
    //     put(action)
    //     console.log(action)
    // })

    const res = yield axios.post('https://easydoc.xyz/mock/ikKncVxb/api/getList')
    const action = getListAction(res.data.list)
    console.log(action)
    yield put(action)
}

export default mySaga