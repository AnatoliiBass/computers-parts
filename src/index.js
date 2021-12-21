import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import store from './Redux/store'


let renderMainTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} addCategory={store.addCategory.bind(store)} updateCategory={store.updateCategory.bind(store)} min={store.min.bind(store)} max={store.max.bind(store)} />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  )
}

renderMainTree(store.getState())
store.subscribe(renderMainTree)
