document.getElementById('boton').addEventListener('click', hacer,false)
function hacer(){
    const ul=document.createElement('ul')
    var li=document.createElement('li')
    li.innerHTML=document.getElementById('texto').value
    ul.appendChild(li)
    if(document.getElementById('addFirst').checked){
       document.getElementById('lista').insertBefore(ul,document.getElementById('lista').firstChild)
    }
    else if(document.getElementById('addLast').checked){
        document.getElementById('lista').appendChild(ul)
    }
    else if(document.getElementById('deleteFirst').checked){
        document.getElementById('lista').removeChild(document.getElementById('lista').firstChild)
    }
    else if(document.getElementById('deleteLast').checked){
        document.getElementById('lista').removeChild(document.getElementById('lista').lastChild)
    }
    else if(document.getElementById('replaceFirst').checked){
        document.getElementById('lista').replaceChild(ul,document.getElementById('lista').firstChild)
    }
    else if(document.getElementById('replaceLast').checked){
        document.getElementById('lista').replaceChild(ul,document.getElementById('lista').lastChild)
    }
}
