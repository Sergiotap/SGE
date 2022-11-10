document.getElementById('ir').addEventListener('click', llamada, false)
function llamada(){
    fetch('https://api.nasa.gov/techport/api/projects/17792?api_key=DEMO_KEY')
    .then(res => res.json())
    .then((data)=>(
        console.log(
            "El proyecto con título "
            +
            data.project.title
            +
            " se inicia en el año "
            +
            data.project.startYear
            +
            " y finaliza en el año "
            +
            data.project.endYear
            )
    ));
}