let totalpuntos = 0

function abrirformulario(fila){
    let formulario = document.getElementById("formulario");
     let tabla = document.getElementById("mitabla");
     let filatabla =tabla.rows[fila];
     let juego = filatabla.cells[3];
     let puntos = filatabla.cells[4];

     document.getElementById("juegosdisp").value = juego.innerText;
     document.getElementById("puntosjuego").value = puntos.innerText;

     formulario.dataset.fila = fila;
}

function actualizardatos(){
    let formulario = document.getElementById("formulario");
    let fila = formulario.dataset.fila;

    let tabla = document.getElementById("mitabla");
    let filatabla = tabla.rows[fila];
    let juego = filatabla.cells[3];
    let puntos = filatabla.cells[4];

    juego.innerText = document.getElementById("juegosdisp").value;
    puntos.innerText = document.getElementById("puntosjuego").value;

}


function actualizarPuntos(){
    let seleccionado = document.getElementById("juegosdisp");
    let puntos = document.getElementById("puntosjuego");
    let juegoseleccionado = seleccionado.options[seleccionado.selectedIndex].dataset.puntos;

    puntos.value = juegoseleccionado;
}

function actuprecio(){
    let seleccionado = document.getElementById("juegosdisp");
    let precio = document.getElementById("valorjuego")
    let precioconiva = document.getElementById("precioiva")
    let juegoseleccionado = seleccionado.options[seleccionado.selectedIndex].dataset.precio;

    precio.value = juegoseleccionado;
     let iva = parseInt(precio.value) * 0.16;
     let impuesto = parseInt(precio.value)*0.04;
     let totalpagar = parseInt(precio.value) + iva + impuesto;

     precioconiva.value = totalpagar;

}