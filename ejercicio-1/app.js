const fs = require('fs');
const path = require('path');
let dni = "3209876Q";
let mensaje = `El DNI ${dni} introducido no está en la base de datos.`

//Sincrono leemos el json
const fileContent = fs.readFileSync ("./hacienda.json", "utf-8");
const parsedData = JSON.parse(fileContent);

parsedData.forEach((element) => {
    if (element.dni == dni && element.notificacionesPendientes) {
        mensaje = `El/la contribuyente ${element.name} tiene notificaciones pendientes. Se enviará un mail a ${element.email}.`  
    }else if (element.dni == dni){
        mensaje = `El/la contribuyente ${element.name} NO tiene notificaciones pendientes.`
    }
});
//Mostramos mensaje y guardamos resultado en notifiaciones.txt
console.log(mensaje);
fs.appendFileSync ("./notificaciones.txt", `${mensaje}\n`);





