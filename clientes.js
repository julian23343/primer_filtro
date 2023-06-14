let tabla = document.getElementById("mitabla");

let filas = tabla.rows.length -1;
let crear = document.getElementById("crear");

crear.addEventListener("click", function(){
    let cedula = document.getElementById("cedula").value;
    let nombre = document.getElementById("nombre").value;
    let telefono = document.getElementById("telefono").value;
    let correo = document.getElementById("correo").value;
    let fechnacimiento = document.getElementById("fechnac").value;
    let nacionalidad = document.getElementById("nacionalidad").value;

    let nuevacol = tabla.insertRow(filas +1);

    let celdaid = nuevacol.insertCell(0);
    let celdacc = nuevacol.insertCell(1);
    let celdanom = nuevacol.insertCell(2);
    let celdatel = nuevacol.insertCell(3);
    let celdacorreo = nuevacol.insertCell(4);
    let celdafechnac = nuevacol.insertCell(5);
    let celdanacionalidad = nuevacol.insertCell(6);
    let celdaeleiminar = nuevacol.insertCell(7);

    filas++
    celdaid.innerHTML = filas;
    celdacc.innerHTML = cedula;
    celdanom.innerHTML = nombre;
    celdatel.innerHTML = telefono;
    celdacorreo.innerHTML = correo;
    celdafechnac.innerHTML = fechnacimiento;
    celdanacionalidad.innerHTML = nacionalidad;
    celdaeleiminar.innerHTML = '<button type="button" class="btn btn-danger" onclick="deleteFila(this)"><img src="/img/eliminar.png" width="30" height="30"></button>';

    document.getElementById("cedula").value="";
    document.getElementById("nombre").value="";
    document.getElementById("telefono").value="";
    document.getElementById("correo").value="";
    document.getElementById("fechnac").value="";
    document.getElementById("nacionalidad").value="";

});

function deleteFila(e){
    e.parentNode.parentNode.innerHTML = '';
}