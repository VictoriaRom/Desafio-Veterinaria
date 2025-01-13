const fs = require('fs');

const registrar = (nombre, edad, animal, color, enfermedad) => {
    const cita = { nombre, edad, animal, color, enfermedad };
    const citasNueva = JSON.parse(fs.readFileSync('./citas.json', 'utf-8') || '[]');
    citasNueva.push(cita);

    fs.writeFileSync('./citas.json', JSON.stringify(citasNueva, null, 2));
    console.log('Cita creada con exito!')
}

const leer = () => {
    const salida = fs.readFileSync('./citas.json', 'utf-8')
    console.log('Cita registrada con éxito!')
    console.log(salida)
}

module.exports = {registrar, leer}