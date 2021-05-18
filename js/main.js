//variables 
const ctaEnviar = document.querySelector('#enviar')
const ctaReset = document.querySelector('#resetear')


const email = document.querySelector('#email')
const asunto = document.querySelector('#asunto')
const sms = document.querySelector('#sms')

const contenedor = document.querySelector('#container')
const formulario = document.querySelector('#formulario')



const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
evenlistener();


function evenlistener() {

    //cuando la app carga
    document.addEventListener('DOMContentLoaded', iniciarApp);

    //campos del formulario
    email.addEventListener('blur', validarFormulario)

    asunto.addEventListener('blur', validarFormulario)

    sms.addEventListener('blur', validarFormulario)


    //enviar email

    ctaEnviar.addEventListener('click', enviarEmail)

    //reiniciar formulario
    ctaReset.addEventListener('click', () => {
        formulario.reset();
    })

}

//funciones

function iniciarApp() {
    ctaEnviar.disabled = true;
    ctaEnviar.classList.add('opacity')

}

//valida el formulario

function validarFormulario(e) {


    if (e.target.value.length > 0) {
        //eliminar mensaje
        eliminar();
        e.target.style.borderColor = 'darkblue'
    } else {
        e.target.style.borderColor = 'red';
        mostrarError("Todos los campos son necesarios")
    }

    if (e.target.type === 'email') {


        if (er.test(e.target.value)) {
            const error = document.querySelector('p.error');

        } else {
            e.target.style.borderColor = 'red';
            mostrarError("Email no valido")
        }
    }

    if (er.test(email.value) != '' && asunto.value != '' && sms.value != '') {
        ctaEnviar.disabled = false;
        ctaEnviar.classList.remove('opacity')

    }
}

function mostrarError(mensajes) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensajes;
    mensajeError.classList.add('mensaje', 'error');

    //verificar si existe el mensaje de error
    const errores = document.querySelectorAll('.error')
    if (errores.length === 0) {

        formulario.appendChild(mensajeError);
    }
}


function eliminar() {
    const error = document.querySelector('p.error');
    error.remove();
}


function enviarEmail(e) {
    e.preventDefault();
    const spiner = document.querySelector('.gif_img')
    spiner.style.display = 'flex'

    //mensaje


    //parrafo.classList.add('buttons_cta');


    //ocultar
    setTimeout(() => {
        spiner.style.display = 'none';
        //mensaje 
        const cont_spiner = document.querySelector('.gif_img1');
        const parrafo = document.createElement('p');
        parrafo.textContent = 'El mensaje ha sido enviado correctamente';
        parrafo.classList.add('mensaje', 'mensaje1')
        formulario.insertBefore(parrafo, cont_spiner);

        setTimeout(() => {
            //remover parrafo 
            parrafo.remove();
            resetearFormulario();

        }, 5000);
    }, 3000);
}

function resetearFormulario() {
    formulario.reset();
    iniciarApp();
}