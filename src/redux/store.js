import { createStore, combineReducers, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import userReducer from './reducers/userReducer'

const rootReducers = combineReducers({
  user: userReducer
})

export default createStore(rootReducers, applyMiddleware(promiseMiddleware));