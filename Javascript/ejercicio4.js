let listaNotas=new Array
let name=window.prompt("Escribe el nombre: ")
let ape=window.prompt("Escribe el apellido: ")
for(let i=0;i<6;i++){
    listaNotas[i]=window.prompt("Introduce la nota: ")
}
const alumno={
    nombre:name,
    apellido:ape,
    nota:listaNotas
}
document.write(
    "El alumno con nombre "+alumno.nombre+" y apellido "+alumno.apellido+" ha obtenido las siguientes notas: <br>"+alumno.nota
)