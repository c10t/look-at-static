import React from 'react'
import { Provider } from 'react-redux'

import configureStore from './src/store'
import { initialState } from './src/services/hackernews-actions';

export default ({ element }) => {
  // Instantiating store in `wrapRootElement` handler ensures:
  //  - there is fresh store for each SSR page
  //  - it will be called only once in browser, when React mounts
  const store = configureStore(initialState)
  return <Provider store={store}>{element}</Provider>
}
