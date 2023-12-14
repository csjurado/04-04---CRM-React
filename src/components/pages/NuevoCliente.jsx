import React from 'react'
import { useNavigate ,Form } from 'react-router-dom'
import Formulario from '../Formulario';
 
export async function action({request}){
  const formData = await request.formData()
  const datos = Object.fromEntries(formData)
  console.log(datos);
  return datos
}

function NuevoCliente() {
  const navigate = useNavigate();
  // const handleClick = () => {
  //   navigate("/");
  // };
  return (
   <>
      <h1 className='font-black text-4xl text-sky-900'> Nuevo Cliente </h1>
      <p className='mt-3'> LLena todos los campos para registrar un nuevo cliente</p>
      <div className='flex justify-end'>
        <button 
          className='bg-sky-900 text-white px-3 py-1 font-bold uppercase rounded-md'
          onClick={()=> navigate("/")}
          > 
            Volver 
        </button>
      </div>

      <div className='bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-10'>
        <Form
          method='post'
        >
          <Formulario />
            <input
              type='submit'
              className='mt-5 w-full bg-sky-900 p-3 uppercase text-white font-bold text-lg'
              value='Registrar Cliente'
            />
        </Form>
         
     
      </div>
   </>
  )
}

export default NuevoCliente
