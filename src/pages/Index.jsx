import { useLoaderData } from 'react-router-dom';
import Cliente from '../components/Cliente';

export function loader (){
    const clientes = [
        {
            id: 1,
            nombre: 'Juan Perez',
            telefono: 983498064,
            email: "juan.perez@netlife.ec",
            empresa: 'Netlife'
        },
        {
            id: 2,
            nombre: 'Maria Salazar',
            telefono: 973499063,
            email: "maria.salarzar@cnt.ec",
            empresa: 'CNT'
        },
        {
            id: 3,
            nombre: 'Josue Espinoza',
            telefono: 983478069,
            email: "jespinoza@bancopichincha.fin.ec",
            empresa: 'Banco Pichincha'
        },
        {
            id: 4,
            nombre: 'Miguel Carapaz',
            telefono: 983498064,
            email: "miguel.carapaz@gmail.com",
            empresa: 'Dev Tecnology'
        },
        {
            id: 5,
            nombre: 'Mayra Jara',
            telefono: 983494447,
            email: "mjara01@tesalia.com.ec",
            empresa: 'Tesalia'
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
