import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './scss/index.scss'
import { Provider } from 'react-redux'
import { todoStore } from './redux-store/store.js'



ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={todoStore}>
    <App />
  </Provider>
)
