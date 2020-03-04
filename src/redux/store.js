import { createStore, combineReducers, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import userReducer from './reducers/userReducer'
import eventsReducer from './reducers/eventReducer'

const rootReducers = combineReducers({
  user: userReducer,
  events: eventsReducer
})

export default createStore(rootReducers, applyMiddleware(promiseMiddleware));