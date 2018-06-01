import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App'
import './styles/normalize.css'
import './styles/layout.css'
import './styles/animation.css'

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('app'))
