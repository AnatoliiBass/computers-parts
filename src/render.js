import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { addCategory } from './Redux/state'


export const renderMainTree = (state) => {
   ReactDOM.render(
      <React.StrictMode>
         <BrowserRouter>
            <App state={state} addCategory={addCategory} />
         </BrowserRouter>
      </React.StrictMode>,
      document.getElementById('root')
   )
}
