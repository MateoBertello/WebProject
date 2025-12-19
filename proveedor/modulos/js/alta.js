// import {
//     procesarFormulario,
//     altaRegistro,
// } from '../../recursos/js/utilidades';
// // ----------------------------------------------
// // Referenciamos
// const formulario = document.getElementById('form-alta');
// const mensajes = document.getElementById('mensajes');
// // ----------------------------------------------
// // Asignar escuchador evento
// formulario.addEventListener('submit', async (evento) => {
//     evento.preventDefault();
//     // Obtener datos formulario
//     const datosFormulario = procesarFormulario(formulario);
//     // Enviar datos al back
//     try{

//         const respuesta = await altaRegistro(
//             '/api/v1/proveedores',
//             'POST',
//             datosFormulario
//         );
//         const datos = await respuesta.json();
//         const { mensaje } = datos;
//         mensajes.innerHTML = mensaje;
//         mensajes.innerHTML = 'Proveedor creado con éxito';
//     }catch(error){
//         console.log(error);
//         mensajes.innerHTML = 'No se pudo dar de alta el registro';
//     }
// });

import {
  procesarFormulario,
  altaRegistro,
} from '../../recursos/js/utilidades.js';

const formulario = document.getElementById('form-alta');
const mensajes = document.getElementById('mensajes');

formulario.addEventListener('submit', async (evento) => {
  evento.preventDefault();

  const datosFormulario = procesarFormulario(formulario);

  try {
    const respuesta = await altaRegistro(
      '/api/v1/proveedores',
      'POST',
      datosFormulario
    );
    const datos = await respuesta.json();

    // Mostrar mensaje si viene, o uno genérico
    mensajes.innerHTML = datos.mensaje || 'Proveedor creado con éxito';


  } catch (error) {
    console.log(error);
    mensajes.innerHTML = 'No se pudo dar de alta el registro';
  }
});
