document.getElementById('add').addEventListener('click', anyadir,false)
document.getElementById('kill').addEventListener('click', matar,false)    
document.getElementById('enviar').addEventListener('click', llamar,false)   
var elemento1=[]
var elemento2=[]
var elemento3=[]
function llamar()
{
    var tags=document.getElementsByTagName('input')
    var clases=document.getElementsByTagName('div')
    for(i=0;i<tags.length-2;i++){
        if((!tags[i].value))
            clases[i].innerHTML='VACIO'
            clases[i].style.color='red'
    }
    if(!document.getElementsByTagName('select')[0].value)
        clases[4].innerHTML='VACIO'
        clases[4].style.color='red'
    if(!tags[4].checked){
        clases[5].innerHTML='VACIO'
        clases[5].style.color='red'
    }
}
function anyadir(){
    const image=document.createElement('img');
    if(document.getElementById('gato').checked){
        image. src = 'https://static.wikia.nocookie.net/onepiece/images/6/66/Nekomamushi_Manga_Infobox.png/revision/latest?cb=20160210094736&path-prefix=es' //gato 
        let a =document.createElement('a')
        a.setAttribute('href', "https://es.wikipedia.org/wiki/Felis_silvestris_catus")
        a.appendChild(image)
        elemento1.push(a)
        document.body.appendChild(a)
    }
    if(document.getElementById('perro').checked){
        image. src='https://static.wikia.nocookie.net/onepiece/images/0/0c/Inuarashi_Manga_Infobox.png/revision/latest?cb=20200316193217&path-prefix=es' //perro
        let a =document.createElement('a')
        a.setAttribute('href', "https://es.wikipedia.org/wiki/Canis_familiaris")
        a.appendChild(image)
        elemento2.push(a)
        document.body.appendChild(a)
    }
    if(document.getElementById('kappa').checked){
        image. src='https://static.wikia.nocookie.net/onepiece/images/3/3b/Kawamatsu_Manga_Infobox.png/revision/latest?cb=20190825200317&path-prefix=es' //kappa
        let a =document.createElement('a')
        a.setAttribute('href', "https://es.wikipedia.org/wiki/Kappa_(mitolog%C3%ADa)")
        a.appendChild(image)
        elemento3.push(a)
        document.body.appendChild(a)
    }


}
function matar()
{
    if(document.getElementById('gato').checked){
        document.body.removeChild(elemento1.pop())
    }
    if(document.getElementById('perro').checked){
        document.body.removeChild(elemento2.pop())
    }
    if(document.getElementById('kappa').checked){
        document.body.removeChild(elemento3.pop())
    }
}