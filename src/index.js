import React from 'react'
import ReactDOM from 'react-dom'

import App from '@components/App'

import './index.css'

ReactDOM.render(<App />, document.getElementById('app'))

if (process.env.NODE_ENV === 'production') {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
  }
}
