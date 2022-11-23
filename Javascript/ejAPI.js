const cors ='https://cors-anywhere.herokuapp.com/'
const yourUrl =cors+'https://nodejs-mysql-restapi-production-d8bd.up.railway.app/api/employees'; 
document.getElementById('add').addEventListener('click', anyadir, false)
document.getElementById('edit').addEventListener('click',editar,false)
document.getElementById('del').addEventListener('click',eliminar,false)
document.getElementById('showID').addEventListener('click',mostrarID,false)
document.getElementById('showAll').addEventListener('click',mostrar,false)
function mostrar(){
    const options = {
        method:"GET"
    }
    fetch(yourUrl, options)
        .then(response => response.json())
        .then((data) =>
        {   for (i=1;i<((data.length)+1);i++){
                let tabla=document.getElementById('tabla')
                let row=tabla.insertRow(i)
                let celda1=row.insertCell(0)
                let celda2=row.insertCell(1)
                let celda3=row.insertCell(2)
                let textoID=document.createTextNode(data[i-1].id)
                celda1.appendChild(textoID)
                let textoNombre=document.createTextNode(data[i-1].name)
                celda2.appendChild(textoNombre)
                let textoSalario=document.createTextNode(data[i-1].salary)
                celda3.appendChild(textoSalario)
            }
        }
        )
}
function mostrarID(){
    const options = {
        method:"GET"
    }
    let id=window.prompt("Introduce el id del usuario a mostrar")
    fetch(yourUrl+"/"+id, options)
        .then(response => response.json())
        .then((data) =>
            {                
            if(JSON.stringify(data)==='{"message":"Employee not found"}'){
                alert('El empleado con id '+id+' no existe')
            }
            else{
                let tabla=document.getElementById('tabla')
                let row=tabla.insertRow(1)
                let celda1=row.insertCell(0)
                let celda2=row.insertCell(1)
                let celda3=row.insertCell(2)
                let textoID=document.createTextNode(data.id)
                celda1.appendChild(textoID)
                let textoNombre=document.createTextNode(data.name)
                celda2.appendChild(textoNombre)
                let textoSalario=document.createTextNode(data.salary)
                celda3.appendChild(textoSalario)
            }
        }
    )
}
function eliminar(){
    const options = {
        method:"DELETE"
    }
    let id=window.prompt("Introduce el id del usuario a eliminar")
    fetch(yourUrl+"/"+id, options)
        .then(response => {
        if((response.status<200)||(response.status>300)){
            window.alert("error")
        }
        else{
            mostrar()
        }
    })
        
}
function editar(){
    validado=true
    let id=window.prompt("Introduce el id del usuario a editar")
    if(contieneLetras(id)){
        alert("¡El id solo puede tener números!")
    }
    else{
        validarDatos();
        if(validado){
            valor={
                name:document.getElementById("nombre").value,
                salary:document.getElementById("salario").value
            } 
            const options= {
                method:"PATCH",
                body:JSON.stringify(valor),
                headers:{
                    'Content-type':'application/json'
                }
            }
            fetch(yourUrl+"/"+id, options)
            .then(response => response.json())
            .then((data) =>
                {                
                    if(JSON.stringify(data)==='{"message":"Employee not found"}'){
                        alert('El empleado con id '+id+' no existe')
                    }
                    else{
                        mostrar()
                    }
                }
            )
        }
    }
}
function anyadir(){
    validado=true
    validarDatos();
    if(validado){
        valor={
            name:document.getElementById("nombre").value,
            salary:document.getElementById("salario").value
        }
        options = {
            method:'POST',
            body:JSON.stringify(valor),
            headers:{
                'Content-type':'application/json'
            }
        }
        fetch(yourUrl, options)
        .then(response => response.json())
        .then((data) =>{
            mostrar()
        })
    }
}
function validarDatos(){
    if((document.getElementById("nombre").value.length<5)||(document.getElementById("nombre").value.length>40)||contieneNumeros(document.getElementById("nombre").value)){
        validado=false
        alert('¡ERROR! Solo se pueden introducir entre 5 y 40 letras');
    }
    if((parseInt(document.getElementById("salario").value)<0)||(document.getElementById("salario").value.length<1)||(document.getElementById("salario").value.length>5)||(contieneLetras(document.getElementById("salario").value))){
        validado=false;
        alert('¡ERROR! Solo se pueden introducir números entre 0 y 9999');
    }
}
function contieneNumeros(str){
    return /\d/.test(str);
}
function contieneLetras(str) {
    return /[a-zA-Z]/.test(str);
}