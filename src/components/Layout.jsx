import React from 'react'
import { Outlet , Link , useLocation} from 'react-router-dom'

function Layout() {
  const location = useLocation();
  // console.log(location);
  return (
   <div className='md:flex md:min-h-screen'>
    <aside className='md:w-1/4 bg-slate-700 px-5 py-10'>
      <h2 className='text-4xl font-black text-center text-white'> CRM - Usuarios</h2>
      <nav className='mt-10'>
          <Link 
              className={`${location.pathname === '/' ? 'text-sky-400' : 'text-white'} text-2xl block mt-2 hover:text-sky-200 ` }
              to='/'> 
              Empresas
          </Link>

          <Link   
          className={`${location.pathname === '/clientes/nuevo' ? 'text-sky-400' : 'text-white'} text-2xl block mt-2 hover:text-sky-200 ` }
          to='/clientes/nuevo'> 
          Nuevo Clientes 
          </Link>
      </nav>
    </aside>
    <main className='md:w-3/4 p-10 md:h-screen overflow-scroll'>
      <Outlet />
      {/* Outlet :Inyecta el contenido de los hijos  " Children" */}
    </main>

   </div>
  )
}

export default Layout
