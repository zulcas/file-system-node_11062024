// call fs module
const fs = require('fs');
const readline = require('readline')

//Obtengo nombre todos los ficheros
let ficheros = fs.readdirSync("./files");
ficheros.forEach(file=>{
    if(file.includes("csv")){
        //read File async
        data = fs.readFileSync(`./files/${file}`, "utf-8");
        let asistentes = obtenerListaAsistentes(data);
        let date = file.split('_')[0];
        datosAsistentes(asistentes, date);
    }
})

function datosAsistentes(asistentes, date){
    fs.appendFileSync("./files/informe.txt", `Datos Asistencia clase: ${date}.\n\n`);
    asistentes.forEach(persona =>{
        if(persona.presente =="Sí"){
            fs.appendFileSync("./files/informe.txt", `\t--${persona.nombre} sí ha asistido a la clase. Minutos asistidos: ${persona.duracion}.\n`);
        }else{
            fs.appendFileSync("./files/informe.txt",`\t--${persona.nombre} no ha asistido a la clase. \n`)  
        }
    })
}

function obtenerListaAsistentes (data){
    let listaCruda = data.split('\r\n');
    let asistentes = [];
    listaCruda.forEach(persona =>{
        console.log(persona)
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

