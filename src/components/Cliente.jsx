import { Form, useNavigate, redirect} from 'react-router-dom'
import { eliminarCliente } from "../data/clientes";
import Swal from 'sweetalert2'

// export async function action({params}){
//     await eliminarCliente(params.clienteId)
//     return redirect('/')
// }
export async function action({params}){
    
    await Swal.fire({
        title: "¿ Eliminar Cliente?",
        text: "Una vez eliminado, no se puede recuperar!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, borrar !",
        cancelButtonText: "Cancelar"
    }).then((result) => {
        if (result.isConfirmed) {
        eliminarCliente(params.clienteId)
          Swal.fire({
            title: "Eliminado!",
            text: "El cliente ha sido eliminado.",
            icon: "success"
          });
        }
    })
    return redirect('/')
}

function Cliente({cliente}) {

    const navigate = useNavigate()
    const {nombre ,empresa , email, telefono, id }= cliente;

    return (
        <tr className="border-b">
            <td className='p-6 space-y-2'>
                <p className="text-2xl text-gray-800"> {nombre} </p>
                <p > {empresa} </p>
            </td>
            <td className="p-6">
                <p className="text-gray-600">
                    <span className="text-gray-800 uppercase font-bold"> Email : </span>
                    {email}
                </p>
                <p className="text-gray-600">
                    <span className="text-gray-800 uppercase font-bold"> Telefono : </span>
                    {telefono}
                </p>
            </td>
            <td className="p-6 flex gap-3">
                <button
                    type="button"
                    className="text-blue-500 hover:text-blue-800 uppercase font-bold text-xs"
                    onClick={()=>navigate(`/clientes/${id}/editar`)}
                    >
                    Editar
                </button>
                <Form
                    method='POST'
                    action={`/clientes/${id}/eliminar`}
                    // onSubmit={(e)=> {
                    //   if(!confirm('Deseas eliminar este registro')){
                    //     e.preventDefault()
                    // }
                    // }}
                    onSubmit={(e)=> e.action}
                    
                    >
                    <button
                        type="submit"
                        className="text-red-500 hover:text-red-800 uppercase font-bold text-xs"
                        >
                        Eliminar
                    </button>
                </Form>
              
            </td>
        </tr>
    )
}

export default Cliente
