import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'
import { Table } from './components/Table/Table'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='main-container'>
      <Navbar/>
      <Table/>
      <Footer/>
    </div>
  </StrictMode>,
)
