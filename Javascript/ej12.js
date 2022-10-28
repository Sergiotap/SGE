const Persona={
    nombre: "Sergio",
    edad: 20,
    sexo:'H',
    asignaturas:[
        "AD",
        "SGE",
        "PMDM",
        "DI",
        "PSP",
        "ITGS",
        "EIE"
    ],
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
Amigos.Amigo1=Amigo1
Amigos.Amigo2=Amigo2
Amigos.Amigo3=Amigo3
Persona.Amigos=Amigos
Persona.direccion=direccion
Persona.centros=centros
document.write(Persona.Amigos.Amigo1.nombre)
document.write("<br>")
console.log(Persona)
console.log(JSON.stringify(Persona))
Amigos.Amigo1=""
document.write(Persona.Amigos.Amigo1.nombre)
console.log(Persona)
console.log(JSON.stringify(Persona))