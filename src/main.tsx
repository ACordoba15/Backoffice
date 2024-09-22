import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar/>
      <div>Tabla</div>
    <Footer/>
  </StrictMode>,
)
