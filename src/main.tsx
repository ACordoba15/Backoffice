import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'
import { Menu } from './components/Menu/Menu'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar/>
    <Menu/>
    <Footer/>
  </StrictMode>,
)
