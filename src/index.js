import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store  from './store'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'

const target = document.querySelector('#root')


render(
      <Provider store={store}>
        <App />
      </Provider>,
    target
  )