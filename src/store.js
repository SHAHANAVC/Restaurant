import {createStore,combineReducers,applyMiddleware} from 'redux'
import { thunk } from 'redux-thunk'
import {homereducer} from './reducers/HomeReducer'

const reducers=combineReducers({
    Resturentreducer:homereducer
})
const middleware=[thunk]
const store=createStore(reducers,applyMiddleware(...middleware))
export default store