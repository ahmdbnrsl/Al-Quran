import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Register from './pages/Register.tsx';
import ListSurah from './pages/ListSurah.tsx';
import App from './App.tsx'
import './index.css'
import 'react-loading-skeleton/dist/skeleton.css'

const router = createBrowserRouter([
    {
        path: "/",
        element: <ListSurah/>,
        errorElement: <p>404</p>
    },
    {
        path: "/tes",
        element: <App/>
    },
    {
        path: "/daftar",
        element: <Register/>
    }
])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)