const Persona={
    nombre: "Sergio",
    edad: 20,
    sexo:'H',
    /*asignaturas:[
        "AD",
        "SGE",
        "PMDM",
        "DI",
        "PSP",
        "ITGS",
        "EIE"
    ],*/
    telefono:686001205,
    coche:"false"
}
const direccion={
    calle:"Lago Blanco",
    localidad:"Parla",
    puerta:"1ºA",
    CP:28981
}
const centros={
    nombres:[
    "Juan de la Cierva",
    "Enrique Tierno Galván",
    "La Laguna"
    ],
    localidad:[
        "Parla",
        "Parla",
        "Madrid"
    ]
}
const Amigos=[]
const Amigo1={
    nombre:"Pepe",
    edad:"21",
    trabaja:"true",
    telefono:"123456789",
    estudios:[
        "familia profesional: Informatica",
        "nivel: junior",
        "lugar: Parla"
    ]
}
const Amigo2={
    nombre:"Pepe",
    edad:"22",
    trabaja:"false",
    telefono:"987654321",
    estudios:[
        "familia profesional: Informatica",
        "nivel: senior",
        "lugar: Madrid"
    ]
}
const Amigo3={
    nombre:"Pepe",
    edad:"23",
    trabaja:"true",
    telefono:"135792468",
    estudios:[
        "familia profesional: Informatica",
        "nivel: junior",
        "lugar: Madrid"
    ]
}
let numAsig=window.prompt("Introduce el número de asignaturas")
numAsig=parseInt(numAsig)
asignaturas:[]
for( i=0; i<numAsig;i++){
    asignatura:window.prompt("Introduce la asignatura")
    asignaturas[i]=asignatura
}
Persona.asignaturas=asignaturas
Amigos.Amigo1=Amigo1
Amigos.Amigo2=Amigo2
Amigos.Amigo3=Amigo3
Persona.Amigos=Amigos
Persona.direccion=direccion
Persona.centros=centros
document.write(Persona.Amigos.Amigo3.nombre,", ",Persona.Amigos.Amigo3.edad,", ",Persona.Amigos.Amigo3.trabaja,", ",Persona.Amigos.Amigo3.telefono,", ",Persona.Amigos.Amigo3.estudios)
document.write("<br>")
console.log(Persona)
console.log(JSON.stringify(Persona))