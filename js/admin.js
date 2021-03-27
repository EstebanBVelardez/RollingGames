import { Games } from "./gamesClass.js";
//import { validarGeneral } from "./validaciones.js";

let listaJuegos = [];

//llamar a la funcion leer datos
leerDatos();

window.agregarJuego = function(event) {
    /*  if (validarGeneral()) {
          alert('son correctos')
      } else {
          event.preventDefault()
          alert('son incorrectos')
      } */
    event.preventDefault();
    let codigo = document.getElementById("codigo").value;
    let nombre = document.getElementById("nombre").value;
    let categoria = document.getElementById("categoria").value;
    let consulta = document.getElementById("descripcion").value;
    let publicado = document.getElementById("publicado").value;
    //creo el nuevo producto
    let nuevoJuego = new Games(codigo, nombre, categoria, consulta, publicado);
    //agrego el producto
    listaJuegos.push(nuevoJuego);
    console.log(listaJuegos);
    //guardo en localStorage
    localStorage.setItem("listaProductos", JSON.stringify(listaJuegos));
    //limpio
    limpiarFormulario();
    //mensaje
    alert("se agrego el producto");
    //leerdatos
    leerDatos();
};

function limpiarFormulario() {
    document.getElementById("formJuego").reset();
}

function leerDatos() {
    if (localStorage.length > 0) {
        //traer los datos del local storage
        let _listaJuegos = JSON.parse(localStorage.getItem("listaProductos"));
        console.log(_listaJuegos);

        //Preguntar si mi arreglo listaFunkopop tiene datoss
        if (listaJuegos.length === 0) {
            listaJuegos = listaJuegos;
        }

        dibujarDatosEnTabla(_listaJuegos);
    }
}

function dibujarDatosEnTabla(_listaJuegos) {
    //esta funcion se encargara de agregar los datos del LS en cada fila de la tabla
    let tabla = document.getElementById("tablaGames");
    //borramos las filas
    tabla.innerHTML = "";
    let filas;
    //recorro todo el arreglo
    for (let i in _listaJuegos) {
        filas = `<tr>
<td scope="col">${_listaJuegos[i].codigo}</td>
<td scope="col">${_listaJuegos[i].nombre}</td>
<td scope="col">${_listaJuegos[i].categoria}</td>
<td scope="col">${_listaJuegos[i].descripcion}</td>
<td scope="col"><i class="fas fa-check"></i></td>
<td scope="col">
    <button class="btn btn-warning" onclick="prepararGames(this)">Editar</button>
    <button class="btn btn-danger" onclick="eliminarGames(this)">Borrar</button>
    <i class="fas fa-star text-warning"></i>
</td>
</tr>`;
        //agrega la fila al padre
        tabla.innerHTML += filas
    }
}