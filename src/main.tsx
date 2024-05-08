import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Register from './pages/Register.tsx';
import Login from './pages/Login.tsx';
import ListSurah from './pages/ListSurah.tsx';
import DetailSurah from './pages/DetailSurah.tsx'
import PrivacyPolicy from './pages/PrivacyPolicy.tsx'
import App from './App.tsx'
import './index.css'
import 'react-loading-skeleton/dist/skeleton.css'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <p>404</p>
    },
    {
        path: "/surah",
        element: <ListSurah/>
    },
    {
        path: "/daftar",
        element: <Register/>
    },
    {
        path: "/masuk",
        element: <Login/>
    },
    {
        path: "/surah/:id",
        element: <DetailSurah/>
    },
    {
        path: "/kebijakan_privasi",
        element: <PrivacyPolicy/>
    }
])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)