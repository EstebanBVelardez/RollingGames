const modalProducto = new bootstrap.Modal(document.getElementById('modalAdmin'))

let btnAgregar = document.getElementById('btnAgregar')
btnAgregar.addEventListener('click', function() {
    modalProducto.show();
})