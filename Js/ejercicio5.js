//Uso de Iteradores proyecto

const motoviajeros = [];
 
for( let i=1; i<4; i++){
    moto ={
        nombre:prompt('ingresa tu nombre'),
        placa:prompt('ingresa tu placa')
    };

    motoviajeros.unshift(moto);

};

console.table(motoviajeros);
