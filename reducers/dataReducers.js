import {FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAIL} from '../constants'
import { getDefaultSettings } from 'http2';

const initState = {
    data:[],
    dataFetched: false,
    error: false,
    isFetching: false
}

export default reducer =  (state = initState, action)=>{
    switch (action.type) {
        case FETCHING_DATA:
            return {
                ...state, 
                data: [],
                isFetching: true,
            }
        
        case FETCHING_DATA_SUCCESS:
            return {
                ...state,
                data: action.data,
                isFetching: false,
            }

        case FETCHING_DATA_FAIL:
            return {
                ...state,
                error: true,
                isFetching: false
            }
        default:
            return state
    }
}