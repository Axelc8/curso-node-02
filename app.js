const { crearArechivo } = require("./helpers/multiplicar");
const  argv  = require("./config/yargs");
const colors = require('colors');


console.clear();


crearArechivo( argv.base, argv.listar, argv.hasta )
    .then( nombreArechivo => console.log(nombreArechivo.yellow, 'creado') )
    .catch( err => console.log( err ) );
