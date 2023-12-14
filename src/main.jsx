import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import Layout from './components/Layout'
import NuevoCliente, { action as NuevoClienteAction } from './components/pages/NuevoCliente';
import Index, { loader as clientesLoader } from './components/pages/Index';
const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout/> , 
    children: [
      {
        index: true,
        element : <Index />,
        loader: clientesLoader
      },
      {
        path:'/clientes/nuevo',
        element: <NuevoCliente/>, 
        action : NuevoClienteAction, 
      },
    ]
  },
 
  
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider 
      router={router}
      />
  </React.StrictMode>,
)
