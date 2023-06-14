let tabla = document.getElementById("mitabla");

let filas = tabla.rows.length -1;
let crear = document.getElementById("crear");

crear.addEventListener("click", function(){
    let nombrejuego = document.getElementById("nombrejuego").value;
    let tematica = document.getElementById("tematica").value;
    let valor = document.getElementById("valorjuego").value;
    let puntos = document.getElementById("puntosjuego").value;


    let nuevacol = tabla.insertRow(filas +1);

    let celdaid = nuevacol.insertCell(0);
    let celdanom = nuevacol.insertCell(1);
    let celdatematica = nuevacol.insertCell(2);
    let celdavalor = nuevacol.insertCell(3);
    let celdapuntos = nuevacol.insertCell(4);
    let celdadelete = nuevacol.insertCell(5);


    filas++
    celdaid.innerHTML = filas;
    celdanom.innerHTML = nombrejuego;
    celdatematica.innerHTML = tematica;
    celdavalor.innerHTML = valor;
    celdapuntos.innerHTML = puntos;
    celdadelete.innerHTML = '<button type="button" class="btn btn-danger" onclick="deleteFila(this)"><img src="/img/eliminar.png" width="30" height="30"></button>';

    document.getElementById("nombrejuego").value="";
    document.getElementById("tematica").value="";
    document.getElementById("valorjuego").value="";
    document.getElementById("puntosjuego").value="";

});



function deleteFila(e){
    e.parentNode.parentNode.innerHTML = '';
}