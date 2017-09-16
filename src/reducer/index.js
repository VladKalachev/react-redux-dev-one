import { combineReducers } from 'redux'

import app from './app'
import counterReducer from './counter'

export default combineReducers({
  count: counterReducer
})
