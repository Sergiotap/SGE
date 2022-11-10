document.getElementById('traducir').addEventListener('click', traducir, false)
document.getElementById('detectar').addEventListener('click',detectar,false)
document.getElementById('auto').addEventListener('click',auto,false)

    function traducir(){
        
        const encodedParams = new URLSearchParams();
        encodedParams.append("source", document.getElementById('elegir1').value);
        encodedParams.append("target", document.getElementById('elegir2').value);
        encodedParams.append("q", document.getElementById('texto1').value);
        
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'Accept-Encoding': 'application/gzip',
                'X-RapidAPI-Key': 'e87b534bfbmsh556021102049e50p1c36f5jsnb1a7ae98a3bb',
                'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
            },
            body: encodedParams
        };
        if(!(document.getElementById('elegir1').value==document.getElementById('elegir2').value)){
            fetch('https://google-translate1.p.rapidapi.com/language/translate/v2', options)
                .then(response => response.json())
                .then((data) => document.getElementById('texto2').value=(data.data.translations[0].translatedText))
        }
}
function detectar(){
    const encodedParams = new URLSearchParams();
encodedParams.append("q", document.getElementById('texto1').value);

const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'Accept-Encoding': 'application/gzip',
		'X-RapidAPI-Key': 'e87b534bfbmsh556021102049e50p1c36f5jsnb1a7ae98a3bb',
		'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
	},
	body: encodedParams
};

fetch('https://google-translate1.p.rapidapi.com/language/translate/v2/detect', options)
	.then(response => response.json())
	.then((data) => document.getElementById('texto2').value=data.data.detections[0][0].language)
	.catch(err => console.error(err));
}
function auto(){
    const encodedParams = new URLSearchParams();
        encodedParams.append("source", document.getElementById('elegir1').value);
        encodedParams.append("target", "es");
        encodedParams.append("q", document.getElementById('texto1').value);
        
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'Accept-Encoding': 'application/gzip',
                'X-RapidAPI-Key': 'e87b534bfbmsh556021102049e50p1c36f5jsnb1a7ae98a3bb',
                'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
            },
            body: encodedParams
        };
        if((document.getElementById('elegir1').value=="es")){
            document.getElementById('texto2').value="No te voy a traducir de español a español"
        }
        else{
            
            fetch('https://google-translate1.p.rapidapi.com/language/translate/v2', options)
                .then(response => response.json())
                .then((data) => document.getElementById('texto2').value=(data.data.translations[0].translatedText))
        }
}