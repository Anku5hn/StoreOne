import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CartContextProvider } from './ContextAPI/CartContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
<CartContextProvider>{/*Wrap the app in the context provider*/}
    <App />
    </CartContextProvider>
  </StrictMode>
)
