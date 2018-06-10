import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAIL } from './constants'
import { put, takeEvery } from 'redux-saga/effects'

import callApi from './api'

function* fetchData(action){
    try {
        const data = yield callApi()
        yield put({ type: FETCHING_DATA_SUCCESS, data})
    } catch (error) {
        yield put({ type: FETCHING_DATA_FAIL})
    }
}

function* dataSaga(){
    yield takeEvery(FETCHING_DATA, fetchData)
}

export default dataSaga