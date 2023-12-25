import { obtenerCliente , acutlizarCliente } from '../data/clientes.jsx';
import { Form , useActionData, useLoaderData, useNavigate , redirect} from 'react-router-dom';
import  Formulario  from '../components/Formulario.jsx'
import Error from '../components/Error.jsx';

export async function loader({ params }){
    const cliente = await obtenerCliente(params.clienteId);
    // Este codigo es para ver los errores que ocurran al buscar un id y que este no exista
    if(Object.values(cliente).length === 0 ){
        throw new Response('',{
            status: 404,
            statusText : 'El cliente no fue encontrado',
        })
    }
    console.log('====================================');
    console.log(cliente);
    console.log('====================================');
    return cliente
}
export async function action({params, request }){
    const formData = await request.formData()
    const datos = Object.fromEntries(formData)
    const email = formData.get('email');
  
    //Validación 
    const errores = [];
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
    //Actualizar el cliente 
    await acutlizarCliente(params.clienteId,datos)
  
    return redirect('/')
}
function EditarCliente() {
    const navigate= useNavigate()
    const cliente = useLoaderData()
    const errores = useActionData()
    
  return (
    <>
      <h1 className='font-black text-4xl text-sky-900'> Editar Cliente </h1>
      <p className='mt-3'> A continuación podrás modificar los datos cliente</p>
      <div className='flex justify-end'>
        <button 
          className='bg-sky-900 text-white px-3 py-1 font-bold uppercase rounded-md'
          onClick={()=> navigate(-1)}
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
          <Formulario 
            cliente={cliente}
            />
            <input
              type='submit'
              className='mt-5 w-full bg-sky-900 p-3 uppercase text-white font-bold text-lg'
              value='Guardar Cambios'
            />
        </Form>
      </div>
   </>
  )
}

export default EditarCliente