document.getElementById('boton').addEventListener('click', hacer,false)
let myWindow
let width=document.getElementById('x').value
let height=document.getElementById('y').value
myWindow=window.open("","","width=200, height=100")
function hacer(){
    if (document.getElementById('Resize1').checked){
        myWindow.resizeTo(width, height)
    }
    else if (document.getElementById('Resize2').checked){
        myWindow.resizeBy(width, height)
    }
    else if (document.getElementById('Move1').checked){
        myWindow.moveTo(width, height)
    }
    else if (document.getElementById('Move2').checked){
        myWindow.moveBy(width, height)
    }
}