import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Menu } from './components/Menu/Menu'
import './index.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Menu/>
  </StrictMode>,
)
