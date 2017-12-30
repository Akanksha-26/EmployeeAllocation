import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import projectReducer from './projectReducer';
import employeeReducer from './employeeReducer';

export default combineReducers({
  routing: routerReducer,
  projectReducer,
  employeeReducer
})