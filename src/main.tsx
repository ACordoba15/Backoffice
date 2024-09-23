import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'
import { Table } from './components/Table/Table'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Home } from './pages/Home'

import './index.css'
import { Record } from './pages/Record'
import { User } from './pages/User'

// Rutas
const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
        errorElement: <div>404 Not Found</div>
    },
    {
        path: '/Records',
        element: <Record/>,
        errorElement: <div>404 Not Found</div>
    },
    {
        path: '/Users',
        element: <User/>,
        errorElement: <div>404 Not Found</div>
    }
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <div className='main-container'>
            <Navbar />
            <RouterProvider router={router} />
            <Footer />
        </div>
    </StrictMode>,
)
