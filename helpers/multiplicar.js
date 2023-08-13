const colors = require('colors');
const fs = require('fs');

const crearArechivo = async ( base = 5, listar = false, hasta = 10 ) => {
    try {

    
     let salida = '';


    for ( let i = 1; i <= hasta; i++ ) {
        salida += `${ base } x ${ i } = ${ base * i }\n`; 
    }
    if ( listar ){
        
        console.log('==========================='.blue);
        console.log (            'Tabla del:'.bgGreen, colors.red(base)   );
        console.log('==========================='.blue);
        
        console.log(salida.green);
    }
    

    fs.writeFileSync(`./salida/Tabla de Multiplicar del ${base}.txt`, salida) 

    

    return `Tabla de Multiplicar del ${ base }.txt`.bgCyan;

        
    } catch (error) {
        throw error;
    }
}    

module.exports = {
    crearArechivo
}