import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Home } from './pages/Home'

import './index.css'
import { Record } from './pages/Record'
import { User } from './pages/User'
import { NotFound } from './pages/NotFound'

// Validación para mostrar navbar y header
const paths = ["/", "/Records", "/Users"]
const showNavAndHeader = paths.includes(location.pathname.trim());

// Rutas
const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
        errorElement: <NotFound/>
    },
    {
        path: '/Records',
        element: <Record/>,
        errorElement: <NotFound/>
    },
    {
        path: '/Users',
        element: <User/>,
        errorElement: <NotFound/>
    }
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <div className='main-container'>
            {showNavAndHeader && <Navbar />}
            <RouterProvider router={router} />
            {showNavAndHeader && <Footer />}
        </div>
    </StrictMode>,
)
