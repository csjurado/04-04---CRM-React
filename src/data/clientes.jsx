export async function obtenerClientes(){
    const respuesta = await fetch(import.meta.env.VITE_API_URL)
    const resultado = await respuesta.json()
    return resultado;
}
export async function obtenerCliente(id){
    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`)
    const resultado = await respuesta.json()
    return resultado;
}

export async function agregarClientes(datos) {
  try {
    const respuesta = await fetch(import.meta.env.VITE_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(datos),
    });

    const resultado = await respuesta.json();
    return resultado; // Devuelve el resultado de la API para su uso posterior
  } catch (error) {
    console.error('Error al agregar cliente:', error);
    throw error; // Propaga el error para un manejo adecuado
  }
}
export async function acutlizarCliente(id , datos){
  try {
    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(datos),
    });

    const resultado = await respuesta.json();
    return resultado; // Devuelve el resultado de la API para su uso posterior
  } catch (error) {
    console.error('Error al agregar cliente:', error);
    throw error; // Propaga el error para un manejo adecuado
  }
}
export async function eliminarCliente(id){

  try {
    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
      method: 'DELETE',
    });

    const resultado = await respuesta.json();
    return resultado; // Devuelve el resultado de la API para su uso posterior
  } catch (error) {
    console.error('Error al agregar cliente:', error);
    throw error; // Propaga el error para un manejo adecuado
  }
}