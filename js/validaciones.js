 function validarCodigo(codigo) {
     console.log("desde el blur");
     if (codigo.value.trim() === "") {
         codigo.className = "form-control is-invalid";
         return false;
     } else {
         codigo.className = "form-control is-valid";
         return true;
     }
 }

 function validarNombre(nombre) {
     console.log("desde el blur");
     if (nombre.value.trim() === "") {
         nombre.className = "form-control is-invalid";
         return false;
     } else {
         nombre.className = "form-control is-valid";
         return true;
     }
 }

 function validarCategoria(categoria) {
     console.log("desde el blur");
     if (categoria.value.trim() === "") {
         categoria.className = "form-control is-invalid";
         return false;
     } else {
         categoria.className = "form-control is-valid";
         return true;
     }
 }

 function validarConsulta(consulta) {
     console.log("desde el blur");
     if (consulta.value.trim() === "") {
         consulta.className = "form-control is-invalid";
         return false;
     } else {
         consulta.className = "form-control is-valid";
         return true;
     }
 }

 /*export function validarGeneral() {
     if (validarCodigo(document.getElementById("codigo")) == true &&
         validarNombre(document.getElementById("nombre")) &&
         validarCategoria(document.getElementById("categoria")) &&
         validarConsulta(document.getElementById("descripcion"))
     ) {
         return true;
     } else {
         return false;
     }
 }*/


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