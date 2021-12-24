import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import store from './Redux/reduxStore'
import { max, min } from './Redux/store'
import StoreContext from './StoreContext'


let renderMainTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <StoreContext.Provider value={store}>
          <App store={store} min={min} max={max} />
        </StoreContext.Provider>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  )
}
window.store = store
renderMainTree(store.getState())
store.subscribe(() => {

  renderMainTree(store.getState())
})
