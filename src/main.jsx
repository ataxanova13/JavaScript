import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./assets/scss/main.scss"

createRoot(document.querySelector('.wrapper')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
