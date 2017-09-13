import createHistory from 'history/createBrowserHistory'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import rootReducer from '../reducers/index'
import DevTools from '../../containers/DevTools'
import thunkMiddleware from 'redux-thunk'

export const history = createHistory()
const middleware = routerMiddleware(history)

export function configureStore (initialState) {
  const store = createStore(rootReducer, initialState,
    compose(
      applyMiddleware(thunkMiddleware, middleware),
      DevTools.instrument()
    )
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers/index')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
