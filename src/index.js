import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import '@/assets/css/reset.less'
import store from './store'
import theme from './assets/theme/index'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter fallback="loading">
        <Suspense>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </Suspense>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
