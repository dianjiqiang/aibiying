import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import '@/assets/css/reset.less'
import store from './store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter fallback="loading">
        <Suspense>
          <App />
        </Suspense>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
