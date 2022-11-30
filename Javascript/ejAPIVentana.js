const cors ='https://cors-anywhere.herokuapp.com/'
const yourUrl =cors+'https://nodejs-mysql-restapi-production-d8bd.up.railway.app/api/employees';
urlE=new URL(window.location.href)
id=urlE.searchParams.get("id")
window.onload(verID(id))
function verID(id){
    const options = {
        method:"GET"
    }
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