import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import "./assets/css/style.css"
import "./assets/css/fontawesome.min.css"
import "./assets/css/app.min.css"
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
