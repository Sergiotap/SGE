document.getElementById('ir').addEventListener('click', llamada, false)
function llamada(){
    switch(document.getElementById('elegir').value){
        case 'Piplup':
            fetch('https://pokeapi.co/api/v2/pokemon/piplup')
            .then(res => res.json())
            .then((data)=>(
                document.getElementById('nombre').innerHTML=data.name,
                document.getElementById('habilidades').innerHTML=data.abilities[0].ability.name+", "+data.abilities[1].ability.name,
                document.getElementById('stats').innerHTML=data.stats[0].stat.name+" "+data.stats[0].base_stat+" / "+data.stats[1].stat.name+" "+data.stats[1].base_stat+" / "+data.stats[2].stat.name+" "+data.stats[2].base_stat+" / "+data.stats[3].stat.name+" "+data.stats[3].base_stat+" / "+data.stats[4].stat.name+" "+data.stats[4].base_stat+" / "+data.stats[5].stat.name+" "+data.stats[5].base_stat,
                document.getElementById('tipo').innerHTML=data.types[0].type.name
            ));
        break;
        case 'Turtwig':
            fetch('https://pokeapi.co/api/v2/pokemon/turtwig')
            .then(res => res.json())
            .then((data)=>(
                document.getElementById('nombre').innerHTML=data.name,
                document.getElementById('habilidades').innerHTML=data.abilities[0].ability.name+", "+data.abilities[1].ability.name,
                document.getElementById('stats').innerHTML=data.stats[0].stat.name+" "+data.stats[0].base_stat+" / "+data.stats[1].stat.name+" "+data.stats[1].base_stat+" / "+data.stats[2].stat.name+" "+data.stats[2].base_stat+" / "+data.stats[3].stat.name+" "+data.stats[3].base_stat+" / "+data.stats[4].stat.name+" "+data.stats[4].base_stat+" / "+data.stats[5].stat.name+" "+data.stats[5].base_stat,
                document.getElementById('tipo').innerHTML=data.types[0].type.name
            ));
        break;
        case 'Chimchar':
            fetch('https://pokeapi.co/api/v2/pokemon/chimchar')
            .then(res => res.json())
            .then((data)=>(
                document.getElementById('nombre').innerHTML=data.name,
                document.getElementById('habilidades').innerHTML=data.abilities[0].ability.name+", "+data.abilities[1].ability.name,
                document.getElementById('stats').innerHTML=data.stats[0].stat.name+" "+data.stats[0].base_stat+" / "+data.stats[1].stat.name+" "+data.stats[1].base_stat+" / "+data.stats[2].stat.name+" "+data.stats[2].base_stat+" / "+data.stats[3].stat.name+" "+data.stats[3].base_stat+" / "+data.stats[4].stat.name+" "+data.stats[4].base_stat+" / "+data.stats[5].stat.name+" "+data.stats[5].base_stat,
                document.getElementById('tipo').innerHTML=data.types[0].type.name
            ));
        break;
    }
}
