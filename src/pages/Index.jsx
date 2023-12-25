import { useLoaderData } from 'react-router-dom';
import Cliente from '../components/Cliente.jsx';
import { obtenerClientes } from '../data/clientes.jsx'

export function loader (){
   const datos = obtenerClientes()
   //    Siempre debe haber un return en los loader
   return datos   
}
import React from 'react'

function Index() {
    const datos = useLoaderData();
    
  return (
    <>
        <h1 className='font-black text-4xl text-sky-900'> Empresas </h1>
        <p className='mt-3'> Administra tus usuarios - empresas</p>
        {datos.length ? (
            <table className='w-full bg-white shadow mt-5 table-auto'>
                <thead className=' bg-slate-700  text-white'>
                    <tr>
                        <th className=' p-2 '> Usuario </th>
                        <th className=' p-2 '> Contacto  </th>
                        <th className=' p-2 '> Acciones  </th>
                    </tr>
                </thead>
                <tbody>
                    {datos.map( datos => (
                       <Cliente
                       cliente={datos}
                       key={datos.id}/>
                    ))}
                </tbody>
                
            </table>
        ):(
            <p className='text-center mt-10'> No hay clientes aún </p>
        ) }
    </>
  )
}

export default Index
