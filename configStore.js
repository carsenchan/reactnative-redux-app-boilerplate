import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './reducers'

export default configStore = ()=>{
    const store = createStore(rootReducer, applyMiddleware(thunk))
    return store
}