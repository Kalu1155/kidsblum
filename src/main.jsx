import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import "./assets/css/style.css"
import "./assets/css/fontawesome.min.css"
import "./assets/css/app.min.css"
// import "./assets/js/vendor/jquery-3.7.1.min.js"
// import "./assets/js/app.min.js"
// import "./assets/js/particles-config.js"
// import "./assets/js/main.js"



 
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
