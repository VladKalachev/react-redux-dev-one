import { createStore } from 'redux'
import reducer from '../reducer'

const store = createStore(reducer)

// dev only
window.store = store


export default store


// import { createStore, applyMiddleware } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension'
// import thunk from 'redux-thunk'
// import reducers from './reducers'
//
// const middlewares = applyMiddleware(thunk)
//
// export default createStore(reducers, composeWithDevTools(middlewares))
