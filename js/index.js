const inputCorreo = document.getElementById('email');
const formulario  =document.getElementById('form');
const mensajeError = document.getElementById('mensaje');
const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;



formulario.addEventListener('submit', e=>{
    e.preventDefault();
    validateInput();
})

const validateInput=()=>{
    const validar = inputCorreo.value.trim();

    if(validar===''){
        inputCorreo.focus();
        inputCorreo.style.borderColor='yellow';
        mensajeError.style.display='none';
    }else if(validar !=='' && emailRegex.test(validar)){
        inputCorreo.value='';
        inputCorreo.style.borderColor='hsl(223, 100%, 88%)';
        alert("la información será enviada al correo")
        mensajeError.style.display='none';
    }else{
        mensajeError.innerHTML = "Please provide a valid email address";
        mensajeError.style.display='block';
        inputCorreo.style.borderColor='red';
        alert('Escribe bien el correo');
    }
}
