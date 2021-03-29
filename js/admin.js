import { Games } from "./gamesClass.js";
//import { validarGeneral } from "./validaciones.js";

let listaJuegos = [];

//llamar a la funcion leer datos
leerDatos();

window.agregarJuego = function(event) {
    event.preventDefault();
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
            let filtrarProducto = listaJuegos.filter(function(producto) {
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
    console.log(boton)
        //buscar el producto seleccionado
    let encontrarProducto = listaJuegos.find((producto) => { return producto.codigo === boton.id });

    console.log(encontrarProducto);
    //completar con datos los inputs del formulario
    document.getElementById('codigo').value = encontrarProducto.codigo;
    document.getElementById('nombre').value = encontrarProducto.nombre;
    document.getElementById('categoria').value = encontrarProducto.categoria;
    document.getElementById('descripcion').value = encontrarProducto.descripcion;
    document.getElementById('publicado').value = encontrarProducto.publicado;
    //mostrar ventana modal

}


/*window.cambiarTilde = function(cambiar) {
    cambiarTilde = false

}*/