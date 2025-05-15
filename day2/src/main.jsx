import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const element = <h1 className='render'>Hello, React! - Render a simple JSX element</h1>; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
 
    <App />
       {element}
  </StrictMode>,
)
