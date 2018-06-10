import {FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAIL} from './constants'

export const getData = ()=>({type: FETCHING_DATA})

export const getDataDone = data =>({
    type: FETCHING_DATA_SUCCESS,
    data
})

export const getDataFail = () =>({
    type: FETCHING_DATA_FAIL,

})

export const fetchData = ()=>{}