const btnVolverArriba = document.querySelector("#btn-volver-arriba");
// Obtenemos el formulario y los campos del mismo
const form = document.querySelector('.form');
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');

localStorage.clear();

// Escuchamos el evento 'submit' del formulario
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Cancelamos el envío del formulario

  // Obtenemos los valores de los campos del formulario
  const nombreValor = nombre.value.trim();
  const emailValor = email.value.trim();
  const mensajeValor = mensaje.value.trim();

  // Verificamos que los campos tengan valores válidos
  if (nombreValor === '' || emailValor === '' || mensajeValor === '') {
    console.log('Por favor, complete todos los campos del formulario.');
    return;
  }
  else{
    nombre.value = "";
    email.value = "";
    mensaje.value = "";
  }

  // Creamos un objeto con los datos del formulario
  const datos = {
    nombre: nombreValor,
    email: emailValor,
    mensaje: mensajeValor
  };

  // Convertimos el objeto a JSON
  const datosJSON = JSON.stringify(datos);

  // Guardamos los datos en el Local Storage
  localStorage.setItem('datosFormulario', datosJSON);

  // Mostramos un mensaje de confirmación
  console.log('Los datos del formulario se han guardado correctamente en el Local Storage.');
});


// Mostrar el botón cuando el usuario baja la página
window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    btnVolverArriba.classList.add("show");
  } else {
    btnVolverArriba.classList.remove("show");
  }
});

// Volver arriba cuando se toca el botón
btnVolverArriba.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});