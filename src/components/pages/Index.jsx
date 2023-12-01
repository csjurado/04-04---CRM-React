import { useLoaderData } from 'react-router-dom';
import Cliente from '../Cliente';

export function loader (){
    const clientes = [
        {
            id: 1,
            nombre: 'Juan',
            telefono: 102013313,
            email: "juan@juan.com",
            empresa: 'Codigo Con Juan'
        },
        {
            id: 2,
            nombre: 'Karen',
            telefono: 138198313,
            email: "karen@juan.com",
            empresa: 'Codigo Con Juan'
        },
        {
            id: 3,
            nombre: 'Josue',
            telefono: 31983913,
            email: "josue@juan.com",
            empresa: 'Codigo Con Juan'
        },
        {
            id: 4,
            nombre: 'Miguel',
            telefono: 319381983,
            email: "miguel@juan.com",
            empresa: 'Codigo Con Juan'
        },
        {
            id: 5,
            nombre: 'Pedro',
            telefono: 1398198938,
            email: "pedro@juan.com",
            empresa: 'Codigo Con Juan'
        },
    ];
    return clientes;
}
import React from 'react'

function Index() {

    const datos = useLoaderData();
    console.log('====================================');
    console.log(datos);
    console.log('====================================');
  return (
    <>
        <h1 className='font-black text-4xl text-sky-900'> Clientes </h1>
        <p className='mt-3'> Administra tus clientes</p>
        {datos.length ? (
            <table className='w-full bg-white shadow mt-5 table-auto'>
                <thead className=' bg-slate-700  text-white'>
                    <tr>
                        <th className=' p-2 '> Cliente </th>
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
