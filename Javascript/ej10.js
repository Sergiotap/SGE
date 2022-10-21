window.onload=function(){
    
    let so=navigator.appVersion.indexOf
    let browser=navigator.userAgent;
    let device
    if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
        device="Mobile";
    } else {
        device="Desktop or laptop";
    }
    let ln = navigator.language || navigator.userLanguage;
   console.log(ln,", ",browser,", ",so,", ",device)
}