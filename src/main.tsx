import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import SocialMediaButtons from './components/SocialMediaButtons.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <SocialMediaButtons/>
      <App />
    </Router>
  </React.StrictMode>,
)