import React from 'react'
import { useNavigate ,Form , useActionData , redirect} from 'react-router-dom'
import Formulario from '../components/Formulario';
import Error from '../components/Error';
import { agregarClientes } from '../data/clientes.jsx'
 
export async function action({request}){
  const formData = await request.formData()
  const datos = Object.fromEntries(formData)
  const errores = [];
  const email = formData.get('email');

  //Validación 
  if(Object.values(datos).includes('')){
    errores.push('Todos los campos son obligatorios')
  }

  //Falta el comando para validar el email 
   let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");      
  if (!regex.test(email)){
    errores.push('El email no es válido')
  }

  // Retornar datos si hay errores
  if(Object.keys(errores).length){
    //console.log('Si hay errores');
    //console.log(Object.keys(errores));
    return errores;
  }
  //Agregamos los clientes 
  await agregarClientes(datos)

  return redirect('/')
}

function NuevoCliente() {
  const errores = useActionData();
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
      { errores?.length && errores.map((error , i) => <Error key={i}> {error} </Error>) }
        <Form
          method='post'
          noValidate
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
