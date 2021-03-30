import { Games } from "./gamesClass.js";
//import { validarGeneral } from "./validaciones.js";

let listaJuegos = [];

let modalProducto = new bootstrap.Modal(document.getElementById('modalAdmin'));
let btnAgregar = document.getElementById('btnAgregar');

btnAgregar.addEventListener('click', function() {
    limpiarFormulario()
    modalProducto.show()
})

//variable bandera

let modificarProducto = false

//llamar a la funcion leer datos
leerDatos();

function agregarJuego() {

    /*  if (validarGeneral()) {
          alert('son correctos')
      } else {
          event.preventDefault()
          alert('son incorrectos')
      } */
    let codigo = document.getElementById("codigo").value;
    let nombre = document.getElementById("nombre").value;
    let categoria = document.getElementById("categoria").value;
    let consulta = document.getElementById("descripcion").value;

    //creo el nuevo producto
    let nuevoJuego = new Games(codigo, nombre, categoria, consulta);
    //agrego el producto
    listaJuegos.push(nuevoJuego);
    console.log(listaJuegos);
    //guardo en localStorage
    localStorage.setItem("listaProductos", JSON.stringify(listaJuegos));
    //limpio
    limpiarFormulario();
    //mensaje
    Swal.fire(
            'Nuevo producto',
            'Se agrego el nuevo producto',
            'success'
        )
        //cerrar modal
    modalProducto.hide();

    //leerdatos
    leerDatos();
};

function limpiarFormulario() {
    document.getElementById("formJuego").reset();
    modificarProducto = false
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
    <button class="btn btn-warning" onclick="prepararGames(this)" id="${_listaJuegos[i].codigo}">Editar</button>
    <button class="btn btn-danger" onclick="eliminarGames(this)" id="${_listaJuegos[i].codigo}">Borrar</button>
    <i class="fas fa-star text-warning"></i>
</td>
</tr>`;
        //agrega la fila al padre
        tabla.innerHTML += filas
    }
}

window.eliminarGames = function(boton) {
    console.log(boton.id)
    Swal.fire({
        title: '¿Estas seguro de eliminar el producto?',
        text: "",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Eliminar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            //logica de eliminar
            let filtrarProducto = listaJuegos.filter((producto) => {
                return producto.codigo != boton.id
            });
            console.log(filtrarProducto);
            listaJuegos = filtrarProducto
                //guardar en localstorage
            localStorage.setItem('listaProductos', JSON.stringify(filtrarProducto));
            //cargar los nuevos datos en la tabla
            leerDatos()
            Swal.fire(
                'Eliminado!',
                'Su producto fue eliminado',
                'success'
            )
        }
    })
}




window.prepararGames = function(boton) {

    //buscar el funkopop seleccionado
    let encontrarProducto = listaJuegos.find((producto => { return producto.codigo === boton.id }))

    document.getElementById('codigo').value = encontrarProducto.codigo
    document.getElementById('nombre').value = encontrarProducto.nombre
    document.getElementById('categoria').value = encontrarProducto.categoria
    document.getElementById('descripcion').value = encontrarProducto.descripcion
    modificarProducto = true
    modalProducto.show()

}

window.guardarProducto = function(event) {
    event.preventDefault()
        // if(true) es lo mismo que if(true===true)
    if (modificarProducto === true) {
        // modificar un funkopop existente
        modificarProductoExistente()
    } else {
        agregarJuego();
    }
}

function modificarProductoExistente() {
    //tomar los valores modificados
    //validar con el validar general
    let codigo = document.getElementById('codigo').value
    let nombre = document.getElementById('nombre').value
    let categoria = document.getElementById('categoria').value
    let descripcion = document.getElementById('descripcion').value

    //buscar el objeto y modificar el dato
    for (let i in listaJuegos) {
        if (listaJuegos[i].codigo === codigo) {
            listaJuegos[i].nombre = nombre;
            listaJuegos[i].categoria = categoria;
            listaJuegos[i].descripcion = descripcion;


        }
    }
    //actualizar el localStorage
    localStorage.setItem('listaProductos', JSON.stringify(listaJuegos))
    Swal.fire(
            'Producto modificado',
            'Se modifico el producto',
            'success'
        )
        //dibujar los datos
    leerDatos();
    //cerrar ventana
    modalProducto.hide()
}