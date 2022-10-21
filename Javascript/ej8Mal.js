document.getElementById('boton').addEventListener('click', hacer,false)
function hacer(){
    
    if(document.getElementById('addFirst').checked){
        AddFirst()
    }
    else if(document.getElementById('addLast').checked){
        AddLast()
    }
    else if(document.getElementById('deleteFirst').checked){
        RemoveFirst()
    }
    else if(document.getElementById('deleteLast').checked){
        RemoveLast()
    }
    else if(document.getElementById('replaceFirst').checked){
        ReplaceFirst()
    }
    else if(document.getElementById('replaceLast').checked){
        ReplaceLast()
    }
}
function AddFirst(){
    const ul=document.createElement('ul')
    var li=document.createElement('li')
    li.innerHTML=document.getElementById('texto').value
    ul.appendChild(li)
    document.getElementById('lista').insertBefore(ul,document.getElementById('lista').firstChild)
}
function AddLast(){
    const ul=document.createElement('ul')
    var li=document.createElement('li')
    li.innerHTML=document.getElementById('texto').value
    ul.appendChild(li)
    document.getElementById('lista').appendChild(ul)
}
function RemoveFirst(){
    document.getElementById('lista').removeChild(document.getElementById('lista').firstChild)
}
function RemoveLast(){
    document.getElementById('lista').removeChild(document.getElementById('lista').lastChild)
}
function ReplaceFirst(){
    const ul=document.createElement('ul')
    var li=document.createElement('li')
    li.innerHTML=document.getElementById('texto').value
    ul.appendChild(li)
    document.getElementById('lista').replaceChild(ul,document.getElementById('lista').firstChild)
}
function ReplaceLast(){
    const ul=document.createElement('ul')
    var li=document.createElement('li')
    li.innerHTML=document.getElementById('texto').value
    ul.appendChild(li)
    document.getElementById('lista').replaceChild(ul,document.getElementById('lista').lastChild)
}