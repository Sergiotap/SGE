let palabra
for(let i=0;i<5;i++){
    palabra=window.prompt("Escribe la palabra: ")
    palabra=palabra.toLowerCase()
    console.log(palabra.replace('bomba','*****'))
}