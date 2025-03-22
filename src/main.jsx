import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { createContext } from 'react'
 export const themeContext = createContext()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      {/* <themeContext.Provider value={}> */}
        <App/>
      {/* </themeContext.Provider> */}
    </BrowserRouter>
  </StrictMode>,
)
