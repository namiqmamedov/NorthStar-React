import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter as Router} from 'react-router-dom'
import store from './store/store.jsx'
import { Provider } from 'react-redux'
import ScrollToTop from './components/UI/scrollToTop/scrollToTop.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Router>
    <Provider store={store}>
    <ScrollToTop/>
      <App />
    </Provider>
   </Router>
  </React.StrictMode>,
)
