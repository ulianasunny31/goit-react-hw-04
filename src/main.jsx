import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Toaster
  position="bottom-center"
  toastOptions={{
      duration: 2000,
      removeDelay: 1000,
      style: {
        background: '#451609',
        color: '#fff',
      }
    }} />
  </StrictMode>,
)
