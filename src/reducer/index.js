import { combineReducers } from 'redux'

import app from './app'
import counterReducer from './counter'
import articles from './articles'

export default combineReducers({
  count: counterReducer,
  articles
})
