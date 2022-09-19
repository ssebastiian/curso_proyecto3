// eventos con el input 

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leertexto);
email.addEventListener('input', leertexto);
mensaje.addEventListener('input', leertexto);

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();
    const { nombre, email, mensaje } = datos;

    if (nombre === '' || email === '' || mensaje === '') {
        mostarerror('todos deben diliguenciarse');
        return;
    }
    console.log('enviando Formulario');
});

function mostarerror(mensaje) {
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('error');

    formulario.appendChild(error);
}

function leertexto(e) {
    datos[e.target.id] = e.target.value;
    // console.log(datos)
}