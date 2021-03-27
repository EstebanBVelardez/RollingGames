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