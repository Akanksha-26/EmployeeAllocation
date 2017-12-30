import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import projectReducer from './projectReducer';

export default combineReducers({
  routing: routerReducer,
  projectReducer
})