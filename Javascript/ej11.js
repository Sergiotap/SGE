window.onload=function cambiarIdioma(){
    var tags=document.getElementsByTagName('label')
    let idioma = navigator.language || navigator.userLanguage;
    console.log(idioma)
    if(idioma=='en-US'){
        tags[0].innerHTML='Create Account'
        document.getElementById('google').value='Login with Google'
        tags[2].innerHTML='--------------O well--------------'
        document.getElementById('nombre').placeholder='Name'
        document.getElementById('contra').placeholder='Password*'
        document.getElementById('repetir').placeholder='Repeat Password*'
        tags[7].innerHTML='I have read and accept the privacy policy'
        tags[8].innerHTML='Receive exclusive discounts, news and trends by e-mail. I can unsubscribe from my panel'
        document.getElementById('crear').value='Create account'
        tags[10].innerHTML='--------------I have already an account--------------'
        document.getElementById('iniciar').value='Login'
        document.getElementById('bandera')
    }
    else if(idioma=='de-DE'){
        tags[0].innerHTML='Konto anlegen'
        document.getElementById('google').value='Melden Sie sich mit Google an'
        tags[2].innerHTML='--------------Ach ja--------------'
        document.getElementById('nombre').placeholder='Name'
        document.getElementById('contra').placeholder='Passwort*'
        document.getElementById('repetir').placeholder='Passwort wiederholen*'
        tags[7].innerHTML='Ich habe die Datenschutzerklärung gelesen und akzeptiere sie'
        tags[8].innerHTML='Erhalten Sie exklusive Rabatte, Neuigkeiten und Trends per E-Mail. Ich kann mich von meinem Panel abmelden'
        document.getElementById('crear').value='Konto anlegen'
        tags[10].innerHTML='--------------Ich habe bereits ein Konto--------------'
        document.getElementById('iniciar').value='Anmeldung'
    }
    else if(idioma=='fr-FR')
    document.write("")
}