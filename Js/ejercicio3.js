//Uso de Objetos con el proyecto

let motocicleta = {
    marca: prompt('Ingrese la Marca de la Moto'),
    modelo: prompt('Imgrese el modelo de su Motocicleta'),
    cilindraje: prompt('Ingrese el cilindraje de su motocicleta'),
    color: prompt('Ingrese el Color de su motocicleta'),
    placa: prompt('Ingrese el numero de su Placa')
}

console.log(motero);
console.log(moto);
const motero1 = Object.assign(motero,moto);
console.log(motero1);
const motero2 = {...motero,...moto};
console.log(motero2);

const motoviajero = {
    nombre_motoviajero: prompt('ingrese su nombre'),
    apellido_motoviajero: prompt('ingrese su apellido'),
    tipo_de_identificacion:prompt("ingrese el tipo de identificacion"),
    numero_identificacion:prompt("ingrese el numero de identificacion"),
    nacionalidad:prompt("ingrese pais de nacimiento")
}



const ruta = {
    nombreruta:prompt('Ingrese el nombre de la ruta'),
    ptoinicio:prompt('Ingrese el punto donde inicio la ruta'),
    ptofinal:prompt('Ingrese el punto de llegada'),
    kilometros:parseFloat(prompt('Ingrese el numero de kilometros de la ruta')),
    paradas:parseFloat(prompt('Ingrese el numero donde realizo paradas'))
}

const presupuesto = {
    gasolina:parseFloat(prompt('ingrese el total de dinero gastado en gasolina')),
    hospedaje:parseFloat(prompt('Ingrese el total de dinero gastado en hospedaje')),
    recreacion:parseFloat(prompt('Ingrese el total de dinero gastado en recreacion')),
    alimentacion:parseFloat(prompt('Ingrese el total de dinero gastado en alimentacion')),
    mantenimiento:parseFloat(prompt('Ingrese el total de dinero gastado en mantenimiento'))
}



console.log(motoviajero);
console.log(ruta);
console.log(presupuesto);


let totalpresupuesto = (presupuesto.gasolina+presupuesto.hospedaje+presupuesto.recreacion+presupuesto.alimentacion+presupuesto.mantenimiento);

console.log('========================================================');

console.log(`el moto viajero: ${motoviajero.nombre_motoviajero}, de nacionalidad ${motoviajero.nacionalidad} y con numero de identificacion: ${motoviajero.numero_identificacion}`);

console.log(`viajo por la ruta: ${ruta.nombreruta} con un punto de inicio en: ${ruta.ptoinicio} y punto final en: ${ruta.ptofinal}`);

console.log(`El numero de kilometros realizados fue: ${ruta.kilometros} y el numero de paradas fueron: ${ruta.paradas}`);

console.log('Lo gastado en la ruta fue lo siguiente');
console.log(`Gasolina: ${presupuesto.gasolina}`);
console.log(`hospedaje: ${presupuesto.hospedaje}`);
console.log(`recreacion: ${presupuesto.recreacion}`);
console.log(`alimentacion: ${presupuesto.alimentacion}`);
console.log(`mantenimiento: ${presupuesto.mantenimiento}`);

console.log(`El total gastado en la ruta fue de: ${totalpresupuesto}`);