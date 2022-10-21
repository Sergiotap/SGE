document.getElementById('enviar').addEventListener('click', llamar,false)    
function llamar()
{   
    color=document.getElementById('colores').value

    document.getElementById('mostrar').innerHTML=document.getElementById('nombre').value

    if(color=="rojo"){
        document.getElementById('mostrar').style.color='red'

    }
    if(color=="verde"){
        document.getElementById('mostrar').style.color='green'

    }
    if(color=="azul"){
        document.getElementById('mostrar').style.color='blue'

    }
    if(document.getElementById('negro').checked){
        document.getElementById('mostrar').style.fontWeight='bold'
    }
    if(document.getElementById('torcido').checked){
        document.getElementById('mostrar').style.fontStyle='italic'
    }
    if(document.getElementById('rayado').checked){
        document.getElementById('mostrar').style.textDecoration='line-through'

    }
    
}