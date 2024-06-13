// call fs module
const fs = require('fs');
const readline = require('readline')
let fileName = "2abril_participants_94849208356.csv"
let asistentes = [];
let date = "";

//Obtengo nombre todos los ficheros
let ficheros = fs.readdirSync("./files");


//read File async
fs.readFile(`./files/${fileName}`, "utf-8", (err, data) =>{
    asistentes = obtenerListaAsistentes(data);
    //console.log(asistentes);
    date = fileName.split('_')[0];
    datosAsistentes(asistentes, date);

})

function datosAsistentes(asistentes, date){
    fs.appendFileSync("./files/informe.txt", `Datos Asistencia clase: ${date}.`);
    asistentes.forEach(persona =>{
        if(persona.presente =="Sí"){
            fs.appendFileSync("./files/informe.txt", `${persona.nombre} sí ha asistido a la clase. Minutos asistidos: ${persona.duracion}`);
        }else{
            fs.appendFileSync("./files/informe.txt",`${persona.nombre} no ha asistido a la clase.`)  
        }
    })
}

function obtenerListaAsistentes (data){
    let listaCruda = data.split('\n');
    let asistentes = [];
    listaCruda.forEach(persona =>{
        persona = persona.replace('\r', '');
        persona = persona.split(',');
        //Creamos una lista de objetos persona
        asistentes.push(
            {
                nombre: persona[0],
                email: persona[1],
                duracion: persona[2],
                presente: persona[3],
            }
        );

    })
    return asistentes;
}

