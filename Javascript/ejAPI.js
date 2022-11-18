const cors ='https://cors-anywhere.herokuapp.com/'
const yourUrl =cors+'https://nodejs-mysql-restapi-production-d8bd.up.railway.app/api/employees'; 
//document.getElementById('add').addEventListener('click', anyadir, false)
//document.getElementById('edit').addEventListener('click',editar,false)
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
    fetch(yourUrl, options)
        .then(response => response.json())
        .then((data) =>
        {
            let id=window.prompt("Introduce el id del usuario a mostrar")
            let datoEncontrado=false
            
            for (i=1;i<((data.length)+1);i++){
                
                if(!(id==data[i-1].id)&&!datoEncontrado){
                    document.getElementById('error').innerHTML=("No se ha encontrado el empleado")
                }
                else{
                    datoEncontrado=true
                    let tabla=document.getElementById('tabla')
                    let row=tabla.insertRow(1)
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
        }
        )
}
function eliminar(){
    const options = {
        method:"DELETE"
    }
    let id=window.prompt("Introduce el id del usuario a mostrar")
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
    const options= {
        method:"POST"
    }
}