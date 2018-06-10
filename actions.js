import {FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAIL} from './constants'
import apiCall from './api'

export const getData = ()=>({type: FETCHING_DATA})

// export const getDataDone = data =>({
//     type: FETCHING_DATA_SUCCESS,
//     data
// })

// export const getDataFail = () =>({
//     type: FETCHING_DATA_FAIL,

// })

// export const fetchData1 = ()=>{
//     return (dispatch)=>{
//         dispatch(getData())

//         apiCall()
//         .then((data)=>{dispatch(getDataDone(data))})
//         .catch((error)=>{dispatch(getDataFail())})
//     }
// }

export default fetchData = ()=>({
    type: FETCHING_DATA
})