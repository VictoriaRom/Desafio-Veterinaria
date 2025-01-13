const {registrar, leer} = require('./operaciones')

const args = process.argv.slice(2);

const operacion = args[0];

if (operacion === 'registrar'){
    const [nombreAnimal, edad, tipoAnimal, colorAnimal, enfermedad] = args.slice(1)
    if (nombreAnimal && edad && tipoAnimal && colorAnimal && enfermedad){
        registrar(nombreAnimal, edad, tipoAnimal, colorAnimal, enfermedad);
    }
    else{
        console.log("Faltan datos, por favor ingresalos todos")
    }
}
else if (operacion === 'leer'){
    leer();
}
else{
    console.log('Operación no válida. Usa "registrar" o "leer".');
}