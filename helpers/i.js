const fs = require('fs');
const result = 10;   

const crearArechivo = async ( result) => {

    try {
        let salida = '';

        for  (let i = 2; i <= result; i++) {
            const operacion = i % 2;

            if (operacion == 0 ) {
                salida += `Este numero ${ i }, es par!\n`;                
            }  

    
        }
        fs.writeFileSync(`Numeros primos ${ result }.txt`, salida)
        
            console.clear();        
            return `Numeros pares hasta el ${ result }.txt`;
    } catch (error) {
        throw error;
      }
        
}



const resul =  crearArechivo( result );

console.log(resul);
   
