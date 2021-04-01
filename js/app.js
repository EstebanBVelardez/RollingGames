//almacenar los datos del LS

let listaProductos = [];
leerProducto()

function leerProducto() {
    if (localStorage.length > 0) {
        listaProductos = JSON.parse(localStorage.getItem('listaProductos'))
    }
    //borrar maquetado


    //dibujar columnas
    for (let i in listaProductos) {
        let columna = ` <div class="col-md-4 col-sm-6 my-3">
        <div class="card w-100 shadow bg-dark text-light">
            <div class="card-body">
                <h5 class="card-title">${listaProductos[i].nombre}</h5>
                <p class="card-text my-3">
                    <img src="img/juegos/${listaProductos[i].imagen}" alt="Juego ${listaProductos[i].nombre}" class="w-100" height="200px">
                </p>
                <p>  
                ${listaProductos[i].nombre}
                </p>
                <a href="#" class="btn btn-danger">Ver más</a>
            </div>
        </div>
    </div>`
            //agregar las columnas
        filasDeJuegos.innerHTML += columna
    }
}