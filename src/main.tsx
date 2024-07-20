// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import '@aws-amplify/ui-react/styles.css'

import { Amplify } from 'aws-amplify'
import outputs from '../amplify_outputs.json'

import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './Routes'

Amplify.configure(outputs)
// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRoutes />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
