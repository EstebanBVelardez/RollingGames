 //Validacion del registro

 function usuario(usuario) {
     console.log('desde el usuario')
     if (usuario.value.trim() === "") {
         usuario.className = "form-control is-invalid"
         return false;
     } else {
         usuario.className = "form-control is-valid"
         return true;
     }
 }

 function mail(mail) {
     let expresion = /\w+@\w+\.[a-z]{2,}$/
     if (mail.value.trim() != '' && expresion.test(email.value)) {
         mail.className = 'form-control is-valid';
         return true;
     } else {
         mail.className = 'form-control is-invalid';
         return false;
     }
 }

 let pass1 = document.getElementById("password");
 let pass2 = document.getElementById("verificarPass");

 function pass(contrasenia) {
     if (contrasenia.value.trim() != '' && contrasenia.value.length >= 4) {
         contrasenia.className = 'form-control is-valid';
         return true;
     } else {
         contrasenia.className = 'form-control is-invalid';
         return false;
     }
 }

 function validarPass(contrasenia) {
     console.log(pass2.value);
     if (pass1.value === pass2.value) {
         contrasenia.className = "form-control is-valid";
         return true;
     } else {
         contrasenia.className = "form-control is-invalid";
         return false;
     }
 }

 let checkTerminos = document.getElementById('terminos')
 checkTerminos.addEventListener('change', function() {
     validarTerminos();
 })

 function validarTerminos() {
     if (checkTerminos.checked) {
         checkTerminos.className = 'form-check-input is-valid';
         return true;
     } else {
         checkTerminos.className = 'form-check-input is-invalid';
         return false;
     }
 }

 function validarRegistro(event) {
     event.preventDefault()
     if (usuario(document.getElementById("nombreDeUsuario")) == true &&
         mail(document.getElementById("email")) &&
         pass(document.getElementById("password")) &&
         validarPass(document.getElementById("verificarPass")) &&
         validarTerminos(document.getElementById("terminos"))
     ) {
         enviarRegistro()
         Swal.fire(
             'Usuario registrado',
             'El usuario se registro correctamente',
             'success'
         )
     } else {
         alert('datos erroneos')
     }
 }

 function enviarRegistro() {
     emailjs.send("service_jotaxkc", "template_vd6j8p9", {
         from_name: document.getElementById('nombreDeUsuario').value,
         to_name: "Administrador",
         message: `Email: ${document.getElementById('email').value} - Password: ${document.getElementById('password').value}`
     });
 }

 //Validacion de contacto

 function nombreContacto(usuarioContacto) {
     console.log('desde el usuario')
     if (usuarioContacto.value.trim() === "") {
         usuarioContacto.className = "form-control is-invalid"
         return false;
     } else {
         usuarioContacto.className = "form-control is-valid"
         return true;
     }
 }

 function mailContacto(mailContacto) {
     let expresion = /\w+@\w+\.[a-z]{2,}$/
     if (mailContacto.value.trim() != '' && expresion.test(emailContacto.value)) {
         mailContacto.className = 'form-control is-valid';
         return true;
     } else {
         mailContacto.className = 'form-control is-invalid';
         return false;
     }
 }

 function consultaContacto(consultaContacto) {
     if (consultaContacto.value.trim() != '' && consultaContacto.value.length >= 20) {
         consultaContacto.className = 'form-control is-valid';
         return true;
     } else {
         consultaContacto.className = 'form-control is-invalid';
         return false;
     }
 }

 function contadorCaracteres(caracter) {
     document.getElementById('caracteres').innerHTML = caracter.value.length + ' /20'
 }

 function validarContacto(event) {
     event.preventDefault()
     if (nombreContacto(document.getElementById("nombreYapellido")) == true &&
         mailContacto(document.getElementById('emailContacto')) &&
         consultaContacto(document.getElementById('consulta'))
     ) {
         enviarConsulta()
         Swal.fire(
             'Su consulta fue enviada',
             'Les responderemos a la brevedad',
             'success'
         )
         limpiarFormulario()
     } else {
         alert('datos erroneos')
     }
 }



 function enviarConsulta() {
     emailjs.send("service_jotaxkc", "template_vd6j8p9", {
         from_name: document.getElementById('nombreYapellido').value,
         to_name: "Administrador",
         message: `Email: ${document.getElementById('emailContacto').value} - Consulta: ${document.getElementById('consulta').value}`,
     });

 }

 function limpiarFormulario() {
     document.getElementById('formContacto').reset()
 }