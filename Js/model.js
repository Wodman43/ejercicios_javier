/*alert ("holi soy sena");

document.write("hola soy el sena, en estre apoartado puedo escribir palabras sin estar en el index.html"
);*/
/*var i = "estas actualizado :)";
// comentario de linea
var nombre = "pepito";
console.log (nombre);*/
/*var nombre;
nombre = "alvaro";
alert(nombre);
prompt("escribe tu nombre");
document.getElementById('.titulo').innerHTML = `${nombre} estas aprendiendo javascriot`*/
/*const nombre = prompt ('cual es el nombre mas lindo del mundo')
//alert (" ES ALVARO OMG");
var nombre = "alvaro";
if (nombre = "alvaro") {
    console.log ("el nombre mas lindo");
} else if (nombre = "camilo"){
    console.log ("ese nombre es feo");
}*/
/*const nombre = prompt("dijita tu nombre");
const apellido = prompt("dijita tu apellido")
alert(nombre + apellido)
document.write(nombre + apellido);*/

/*let num1 = prompt ("escriba un numero");
let num2 = prompt("esciba otro numero");
alert(num1 * num2);*/
/*let num1 = 1;
let num2 = 2;
let num3 = 3;
let num4 = 4;
let num5 = 5;
let num6 = 6;
let num7 = 7;
let num8 = 8;
let num9 = 9;

if (num1 = document.getSelection(num1-1).in){
    document,getElementsByClassName (".result")
}*/
//alert('ola 20\'');
/*let ciudad1 = "asuncion paraguay";
console.log(ciudad1);
console.log(ciudad1.length);
console.log(ciudad1.indexOf("paraguay"));
console.log(ciudad1.includes ("praguay"));
let ciudad = "popayan";
let dpto = "cauca";
console.log(ciudad.concat(dpto));
let nom1 = "alvaro, yecid y luis :"
console.log(nom1,('son los lideres de adso ') , ('son de la ciudad de :') , ciudad1) 
console.log(`${nom1}  pertenecen a adso ${dpto}`)
let programa = "      TGO EN DESARROLO DE SOFTWARE        ";
console.log(programa)
console.log(programa.trim());
let city = "popayan-cauca";
console.log(city.replace('popayan-cauca','la ciudad blanca de colombia'));
console.log(city.slice(8));


let Venta = "monitor de 20\" pulgadas";
let Dias = "solo por HOY";
let Prom = "APROVECHA YA ".repeat(4);
console.log(`${Venta} ${Dias} ${Prom}`);
let textosena = "todos los de la ficha 2556678 estan aprendiendo JS menos ruben, que tendran que recuperar";
console.log(textosena);
console.log(textosena.split(","));
let correousuario = "LOPEZQUIRA10@GMAIL.COM";
let usuario = "alvaro lopez";
console.log(correousuario.toLowerCase());
console.log(usuario.toUpperCase());


//console.log(prompt("escriba un numero"));

let resultado1;
resultado1 = Math.round(2.5); //redondear
console.log(resultado1);

resultado1 = Math.sqrt(25); //raiz cuadrada
console.log(resultado1);
resultado1 = Math.abs(-500); //valor absoluto(elimina el minimo)
console.log(resultado1);
resultado1 = Math.min(5,8,7,9,5); //devuelve # el minimo
console.log(resultado1);
resultado1 = Math.max(5,8,7,9,5); //
console.log(resultado1);
resultado1 = Math.pow(2,4);
console.log(resultado1);
resultado1 = Math.floor(2,8);
console.log(resultado1);

//incrementos

let puntaje = 0;
puntaje++;
console.log(puntaje);
puntaje++;
console.log(puntaje);
puntaje++;
console.log(puntaje);
let puntajes = 5;
++puntajes;
console.log(puntajes);
++puntajes;
console.log(puntajes);
++puntajes;
console.log(puntajes);
++puntajes;
console.log(puntajes);
--puntajes;
console.log(puntajes);*/

/*let numero1 = "55";
let numero2 = "10";
let resultadosuma;
resultadosuma = Number.parseInt(numero1)+Number.parseInt(numero2);
console.log(numero1);
console.log(numero2);
console.log(resultadosuma);


//operadores JS

/*const NUMERO1 = "5";
const NUMERO2 = 5;
const NUMERO3 = 20;

console.log(NUMERO1 === NUMERO2);


const NUMERO1 = 5;
const NUMERO2 = 5;
const NUMERO3 = 20;

console.log(NUMERO1 < NUMERO2);*/

/*alert("FACTURA DE VENTA SENAMARKET")
let cliente = prompt("Ingrese el nombre del cliente");
let producto1 = prompt("Ingrese el nombre del producto numero 1 a comprar");
let precio1 = parseInt( prompt("Ingrese el precio del producto"));
let producto2= prompt("Ingrese el nombre del producto numero 2 a comprar");
let precio2 = parseInt( prompt("Ingrese el precio del producto"));
let producto3 = prompt("Ingrese el nombre del producto numero 3 a comprar");
let precio3 = parseInt( prompt("Ingrese el precio del producto"));
let producto4 = prompt("Ingrese el nombre del producto numero 4 a comprar");
let precio4 = parseInt( prompt("Ingrese el precio del producto"));
let subtotal = (precio1 + precio2 + precio3 + precio4);
let descuento = (subtotal * 0.10);
let iva = (subtotal * 0.19);
let total = (subtotal + iva - descuento);
console.log("SENAMARKET"); 
console.log("FACTURA DE VENTA 001")
console.log(`${producto1} ${precio1}`);
console.log(`${producto2} ${precio2}`);
console.log(`${producto3} ${precio3}`);
console.log(`${producto4} ${precio4}`);
console.log("EL SUBTOTAL DE LA FACTURA ES:",subtotal);
console.log("EL IVA DE LA FACTURA ES:",iva);
console.log("EL DESCUENTO DE LA FACTURA ES:",descuento);
console.log("EL TOTAL A PAGAR POR EL SEÑOR",cliente,"EL TOTAL DE LA FACTURA ES:",total);*/

/*alert("RESULTADO DE NOSTAS APRENDICES");
let aprendiz1 = prompt("Ingrese el nombre del Aprendiz");
let nota1A1 = parseFloat( prompt("Ingrese la primera Nota: esta nota es del 20%"));
let nota2A1 = parseFloat( prompt("Ingrese la Segunda Nota: esta nota es del 20%"));
let nota3A1 = parseFloat( prompt("Ingrese la Terecera Nota: esta nota es del 60%"));

let porcen1A1 = (nota1A1*0.2);
let porcen2A1 = (nota2A1*0.2);
let porcen3A1 = (nota3A1*0.6);

let totalA1 = (porcen1A1 + porcen2A1 + porcen3A1);

let aprendiz2 = prompt("Ingrese el nombre del Aprendiz");
let nota1A2 = parseFloat( prompt("Ingrese la primera Nota: esta nota es del 20%"));
let nota2A2 = parseFloat( prompt("Ingrese la Segunda Nota: esta nota es del 20%"));
let nota3A2 = parseFloat( prompt("Ingrese la Terecera Nota: esta nota es del 60%"));
let aprendiz3 = prompt("Ingrese el nombre del Aprendiz");

let porcen1A2 = (nota1A2*0.2);
let porcen2A2 = (nota2A2*0.2);
let porcen3A2 = (nota3A2*0.6);

let totalA2 = (porcen1A2 + porcen2A2 + porcen3A2);

let nota1A3 = parseFloat( prompt("Ingrese la primera Nota: esta nota es del 20%"));
let nota2A3 = parseFloat( prompt("Ingrese la Segunda Nota: esta nota es del 20%"));
let nota3A3 = parseFloat( prompt("Ingrese la Terecera Nota: esta nota es del 60%"));

let porcen1A3 = (nota1A3*0.2);
let porcen2A3 = (nota2A3*0.2);
let porcen3A3 = (nota3A3*0.6);

let totalA3 = (porcen1A3 + porcen2A3 + porcen3A3);


console.log("Nombre del Aprendiz",aprendiz1);
console.log("Resultado final de notas del aprendiz",totalA1);

console.log("Nombre del Aprendiz",aprendiz2);
console.log("Resultado final de notas del aprendiz",totalA2);

console.log("Nombre del Aprendiz",aprendiz3);
console.log("Resultado final de notas del aprendiz",totalA3);*/

/*let boolean1 = true;
let boolean2 = 1;
console.log(typeof boolean1);
console.log(typeof boolean2);
let sesion = false;
console.log(sesion ? 'SI ESTA AUNTENTICADO' : 'NO ESTA AUTENTICADO');

const aprendiz = {
    nombre:"Alvaro",
    apellido:"Lopez Quira",
    telefono:"3126611404",
    alias:"Wodman",
    identificacion:"1061690776",
    placa:{
        numero_de_placa: 10615

    }
    
}

aprendiz.moto = "YAMAHA";
console.log(aprendiz);
console.log(aprendiz['alias']);
console.log(aprendiz.apellido);
console.log(aprendiz.moto);

/*let usuarios = {
    usuario1: prompt("ingrese usuario 1"),
    usuario2: prompt("ingrese usuario 2")
}
console.log(usuarios);
delete aprendiz.telefono;

const {alias,placa:{numero_de_placa}} = aprendiz;
console.log(alias);
console.log(numero_de_placa);

Object.freeze(aprendiz);//es para congelar un objeto

delete aprendiz.apellido;
let motoviajero = {
    identificacion:"",
    tipo_de_identificacion:prompt("ingrese el tipo de identificacion"),
    numero_identificacion:prompt("ingrese el numero de identificacion"),
    nacionalidad:prompt("ingrese pais de nacimiento"),
    nomApellido:{
        nombre: prompt('ingrese su nombre'),
        apellido: prompt('ingrese su apellido')
    }
}
console.log(motoviajero);
let {nacionalidad,nombre} = motoviajero;
console.log(nacionalidad,nombre);

const motero = {
    nombre:"Alvaro lopez",
    apellido:"Lopez Quira",
    telefono:'3215465685'
}

const moto = {
    placa:'SKN-54F',
    color:'negro',
    modelo:'2024'
}
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
//funciones dentro de objetos

const aprendiz = {
    nombre : "Alvaro lopez",
    apellido : "quira",
    mostrar:function(){
        console.log(`este es mi apelllido: ${this.apellido}`)
    }
}
aprendiz.mostrar();
console.log(aprendiz);

//Arrays en java script

const libros = ['la iliada','la odisea','el moro','el quijote','la biblia'];
const meses = new Array('enero','febrero','marzo','abril');

console.table(libros[1],libros[2]);
console.table(meses);
const datos = ['adso',25566678,null,true,{nombre:'alvaro',apellido:'lopez'}];
console.table(datos)


const aprendices = ['yecid','cristi','camilo','wilman'];

console.table(aprendices)

for(let i=0; i<4; i++ ){
    console.log(aprendices[i])
}
 
const libros = ['la maria','paraiso travel',];
console.table(libros);

libros[1] = 'el oso';
console.table(libros);

libros.push('la biblia');
console.table(libros);

libros.unshift('que frio hace aqui arriba');
console.table(libros);
 


for(i=0; i<2; i++){
    const motoviajeros = [{nombre:prompt('ingrese su nombre'),placa:prompt('ingrese la placa de su moto'),modelo:prompt('íngrese el modelo de su moto')
}];
    console.table(motoviajeros);
}

const motoviajeros = [{nombre:prompt('ingrese su nombre'),placa:prompt('ingrese la placa de su moto'),modelo:prompt('íngrese el modelo de su moto')
},{nombre:prompt('ingrese su nombre'),placa:prompt('ingrese la placa de su moto'),modelo:prompt('íngrese el modelo de su moto')
},{nombre:prompt('ingrese su nombre'),placa:prompt('ingrese la placa de su moto'),modelo:prompt('íngrese el modelo de su moto')}];



console.table(motoviajeros);

const motoviajeros = [ moto1={nombre:prompt('ingrese su nombre'),placa:prompt('ingrese la placa de su moto'),modelo:prompt('íngrese el modelo de su moto')
},moto2={nombre:prompt('ingrese su nombre'),placa:prompt('ingrese la placa de su moto'),modelo:prompt('íngrese el modelo de su moto')
},moto3={nombre:prompt('ingrese su nombre'),placa:prompt('ingrese la placa de su moto'),modelo:prompt('íngrese el modelo de su moto')}];

motoviajeros[0]= moto3;
motoviajeros[2]=moto1;

console.table(motoviajeros);


    const aprendices = [];

    const aprendiz1 = {
        nombre:'alvaro',
        materia:'sociales'
    }
    const aprendiz2 = {
        nombre:'luis',
        materia:'matematica'
    }
    const aprendiz3 = {
        nombre:'yecid',
        materia:'calculo'
    }do

    resultado = [...aprendices,aprendiz1];
    resultado = [...resultado,aprendiz2];
    resultado = [aprendiz3,...resultado];
    console.table(resultado);

    const semana =['lunes','martes','miercoles','jueves','viernes'];

    const [,,,,dia5]= semana;
    console.log(dia5)

    const libros = [
        {nombre:'la odisea',precio:4500,pasta:'dura'},
        {nombre:'la iliada',precio:5000,pasta:'dura'},
        {nombre:'la biblia',precio:2000,pasta:'dura'}
    ]

    for(let i=0; i<libros.length; i++){
        console.table(libros[i].nombre)
    }
    

    
    libros.forEach(function(libreria){
        console.table(`${libreria.nombre} - precio: ${libreria.precio}`);
    });

const motoviajeros = [];
 
for( let i=1; i<4; i++){
    moto ={
        nombre:prompt('ingresa tu nombre')
    };

    motoviajeros.push(moto);

};

console.table(motoviajeros);

    
// definicion funcion
    function sumar () {  //aqui defino la funcion multiplicar
        console.log(7+7);
    }

sumar(); //aqui realizo la invocacion de la funcion para que pueda ser ejecutada

//expresion funcion
const multiplicar1 = function (){
    console.log(5*3)
}

multiplicar1();

let a = parseFloat (prompt('ingrese un numero'));
let b = parseFloat( prompt('ingrese otro numero'));

function resta(a,b){
   
    resultado = (a-b);
    console.log(re)
}
resta();
// let nombre = prompt('ingresa tu nombre');
// let apellido = prompt('ingresa tu apellido');
// let ciudad = prompt('ingresa tu ciudad')


function inicio (nombre,apellido,ciudad){
    console.log(`Bienvenido señor: ${nombre} ${apellido} lo estamos viendo desde la ciudad de: ${ciudad}`)
}
inicio(prompt('ingrese su nombre'),prompt('ingrese su apellido'),prompt('ingrese su ciudad'));

function suma(num1,num2){
    console.log(num1+num2)

}
suma(parseFloat(prompt('ingrese el primer numero')),parseFloat(prompt('ingrese el segundo numero')));

let pr1 = parseFloat(prompt('ingrese un numero'));
    for (let i=pr1; i=0; i++){
    console.log()
    }

    function motero(nombre,apellido,placa){

        console.log(`el motero ${nombre} de apellido ${apellido} con plca #: ${placa}`)
    }
    
    motero(prompt('ingrese nombre'),prompt('ingrese apellido'),prompt('ingrese placa'));

    function motero(){
        console.log(`Bienvenido Motero`)
    }
    
    function sesion(){
       motero();
       garaje();
    }

    function garaje(){
        console.log(`Usted en su garaje tiene 4 motos`)
    }
    motero();
    garaje();


    function Bienvenido(){
        console.log('ya estas autenticado');
        iniciosesion('alvaro');
    }

    Bienvenido();

    function iniciosesion(usuario){
        console.log('estamos verificando su identidad');
        console.log(`Bienvenido ${usuario}`);
    }

    function suma (a,b){
        return a+b;
    }
    const result = suma(5,5);

    console.log(result);

    let total =0;

    function agregar(precio){
        return total+=(precio);

    }

    function iva(){
        return total*1.19;
    }

    total=agregar(500);
    total=agregar(500);
    total=agregar(500);

    const totalpagar = iva(total);
    console.log(total)
    console.log(`El  valor total de la factura es ${totalpagar}`)

    const netflix = {
        drama: function(nombre){
            console.log('USTED ESTA EN EL APARTADO DE PELICULAS DE DRAMA',nombre)
        },
        infantil: function(){
            console.log('USTED ESTA EN EL APARTADO DE PELICULAS  INFANTILES')
        },
        terror: function(){
            console.log('USTED ESTA EN EL APARTADO DE PELICULAS DE TERROR')
        },
        accion: function(){
            console.log('USTED ESTA EN EL APARTADO DE PELICULAS DE ACCION')
        }
    }
    netflix.infantil();
    netflix.drama('estas viendo deedpool1');
    netflix.terror();
    netflix.accion();

    const reproductor ={
        play: function(){
            console.log(`Usted acabo de dar Play al audio`)
        },
        stop: function(){
            console.log(`Usted acabo de dar stop al audio`)
        },
        pausa: function(){
            console.log(`Usted acabo de dar pausa al audio`)
        },
        forward: function(nombre){
            console.log(`Usted acabo de dar click a la siguiente cancion que se llama:${nombre}`)
        },
        reverse: function(){
            console.log(`Usted acabo de dar reversa al audio`)
        }
    }

    reproductor.play();
    reproductor.stop();
    reproductor.pausa();
    reproductor.forward(prompt('ingrese la cancion'));
    reproductor.reverse();
    const aprender1 = function(){
        console.log('esto es una funcion normal')
    }
    aprender1();

    const aprender2 = ()=>{ // puedes quitar las llaves cuando la funcion solo abarca una sola linea 
        console.log('esto es una funcion flecha') //puedes quitar el console y ponerlo donde llamas a la funcion en la parte de abajo
    }
    aprender2();

    const aprender3 = (asignatura)=> `estamos aprendiendo ${asignatura}`;

    console.log(aprender3('ciencias politicas'));

    const suma = (a,b)=>  a+b;

    console.log(suma(5,5)); // fin functions

//INICIO DE CONDICIONALES

const flores = ['margarita','amapola','petunia','geranio'];

flores.reduce((ac,item)=> {
    console.log({ac, item});
    console.log(item,"tiene", item.length, "letras");
    return ac + item.length;
},0);

const tareas = [
    {nombre: 'regar las plantas', prioridad: 'A'},
    {nombre: 'Comprar el pan', prioridad: 'B'},
    {nombre: 'Enviar e-mails', prioridad: 'A'},
    {nombre: 'Poner la lavadora', prioridad: 'C'},
    {nombre: 'Cargar el movil', prioridad: 'B'},
    {nombre: 'Limpiar la cocina', prioridad: 'A'},
];

 const final = tareas.reduce((obj, tarea) => {
    console.log(tarea);
    if (!obj[tarea.prioridad]){
        obj[tarea.prioridad] = [];
    }
    obj[tarea.prioridad].push(tarea.nombre);
    return obj;
},{});
console.table({final});?

let nota1,nota2,nota3,media,calificacion;

nota1= parseFloat(prompt('primer trimestre'));
nota2= parseFloat(prompt('segundo trimestre'));
nota3= parseFloat(prompt('tercer trimestre'));

media=(nota1+nota2+nota3)/3;

if(media<2.9){
    calificacion='aun no aprueba';
}
else{ if(media>=3 && media<=4.5){
calificacion= 'aprobado';
}

else{if(media>=4.6){
    calificacion='exelente';
}}}alert('calificacion media: '+calificacion);

const edad = parseFloat(prompt('ingresa tu edad'));

if(edad>=18){
    if(edad<60)console.log('es mayor de edad');
}
else{
    console.log('no es mayor de edad');
}
if(edad>=60){
    console.log('ya estas en la tercera edad');
    }

// if(edad>=60){
//     console.log('ya estas en la tercera edad')
// }

const dinero= 1000;
const factotal =2000;
const tarjeta = true;
const tarjcredito= true;
const cheque = 8000;

if(dinero){
    console.log(`puedo pagar porque tengo tarjeta`)
}
else if(tarjcredito){
    console.log(`puedo pagar porque tengo tarjet de credito`)
}

else if(cheque){
    console.log(`puedo pagar con mi cheque`)
}
else{
    console.log(`no es suficiente`)
}

const metodopago = prompt('que metodo de pago utilizas');

switch(metodopago){
    case 'efectivo':
        console.log(`el pago fue realizado con: ${metodopago}`);
        break;
        case 'tarjeta':
            console.log(`el pago fue realizado con: ${metodopago}`);
            break;
            case 'nequi':
        console.log(`el pago fue realizado con: ${metodopago}`); 
        break;
        default:
            console.log('no seleccionaste ningun metodo');
            break;   
}


// const edad = parseFloat(prompt('ingresa tu edad'));

// if(edad>=18){
//     if(edad<60)console.log('es mayor de edad');
// }
// else{
//     console.log('no es mayor de edad');
// }
// if(edad>=60){
//     console.log('ya estas en la tercera edad');
//     }


    
const edad1 = parseFloat(prompt('ingresa tu edad'));

if(edad1>=18 && edad1 <60){
    console.log('es mayor de edad');
}
else if(edad1>=60){
    console.log('ya estas en la tercera edad');
    }

else{
    console.log('no es mayor de edad');
}
let usuario = true;
let puedepagar = false;

if(usuario && puedepagar){
    console.log(`el usuario puede comprar`)
}
else if(!usuario){
    console.log(`no tienes usuario debes de registrarte`)
}

const efectivo  = 1000;
const credito = 5000;
const disponible = (efectivo +  credito);
let totalpagar;

totalpagar = 3000;

if(efectivo>totalpagar){
    console.log(`si puedes pagar`)
}

else{
    console.log(`no puedes pagar`)
}

if(efectivo > totalpagar || credito>totalpagar || disponible>totalpagar){
    console.log(`si puedes pagar`)
}
else{
    console.log(`no puedes pagar`)
}




let i = 0;
while (i <= 5){
    console.log(i);
    i++
}

let i;
 for(i=0; i < 10; i++){
    console.log(i)
 }

 let y;
  for(y=0; y<=50; y++){
    if(y%2===0){
        console.log('el numero es par'+[y])
    }
  }

  const libros = [
    {nombre:'la odisea',precio:4500,pasta:'dura'},
    {nombre:'la iliada',precio:5000,pasta:'dura'},
    {nombre:'la biblia',precio:2000,pasta:'dura'}
]
let i;
console.log(i);

for(i=0; i<libros.length; i++){
    console.log(libros[i].nombre);
}

const motoviajeros = [{nombre:'alvaro',placa:'skn34l',modelo: 2004
},{nombre:'yecid',placa:'hjg25a',modelo:2014
},{nombre: 'luis',placa:'hgd45',modelo:2012}];


// let a;
// for(a = 0; a < motoviajeros.length; a++){
//     console.table(motoviajeros[a].nombre,motoviajeros[a].placa)
// }

let a=0; 
while(a < motoviajeros.length){
    console.log(motoviajeros[a].nombre,motoviajeros[a].placa);
    a++;
}

let i;
for(i=0; i<=10; i++){
    console.log(i);
    if(i===5){
        console.log(`hasta aqui va el ${i}`);
        continue;
        //break;
    }
}


let numero = prompt('ingresa un numero');

if(numero%2===0 || numero%2===1){

for(let i=0; i<=numero; i++ ){
    // if(numero === parseInt ){
    //     console.log(`el numero  valido`+numero[i]);
    
    // }
    // else {
    //     console.log('el numero no  es valido');
        
    // }
    if(i%3===0 && i%5===0){
        console.log(`el numero ${i} es ping pong`)
    }

    
    else if(i%5===0){
        console.log(`el numero ${i} es pong`);
    }
    
    if(i%3===0){
        console.log(`el numero ${i} es ping`);
    }

    else{
        console.log(`${i}`)
        continue;
    }
}

}

else{
    console.log(` el numero ${numero} no es valido`)
}
let num= prompt('ingresa un numero');
let i =0;
if(num%2===0  || num%2===1){

console.log('el numero es corecto')
}
 else {
    while(i !== num){
       num = prompt('ingrese otra vez');
       i++
    }
}

let =0;

 while(i<10){
    consolse.log(`el numero ${i}`);
    i++;
 }

let num

let x=10;

while(x<=20){
    if(x%2 ===0){
        console.log(`el numero ${x} es par`)
    }
    else{
        console.log(`el numero ${x} es impar`)
    }
    x++;
}


let i=0;
let num;
num = prompt('ingrese un numero');

if(num%2===0){
do{

    if(i%3===0 && i%5===0){

        console.log(`el numero ${i} es ping pong`)
    }

    
    else if(i%5===0){
        console.log(`el numero ${i} es pong`);
    }
    
    if(i%3===0){
        console.log(`el numero ${i} es ping`);
    }
    else{
        console.log(`${i}`)
    }
    
    i++; 
}while(i <= num);
}

else{
    console.log('el numero es impar')
}

let pendientes=['tarea','comer','estudiar','bañar']

for (let otra of  pendientes){
    console.log(otra[0]);
}

let mostrar = (a,b)=>{ let c = a+b
console.log(c)}

mostrar(5,5)


switch(metodopago){
    case 'efectivo':
        console.log(`el pago fue realizado con: ${metodopago}`);
        break;
        case 'tarjeta':
            console.log(`el pago fue realizado con: ${metodopago}`);
            break;
            case 'nequi':
        console.log(`el pago fue realizado con: ${metodopago}`); 
        break;
        default:
            console.log('no seleccionaste ningun metodo');
            break;   
}

// ejercicio 5 clase jueves 8-6-2023



switch (num_mes){
    case '1':
        console.log(`es el mes de enero que tiene 31 dias y estamos en invierno`);
        break;
        case '2':
            console.log(`es el mes de febrero que tiene 29 dias y estamos en invienoro`)

}
let num_mes = prompt('ingrese un numero de 1 a 12');

let inviero= ['enero mes 1','febrero mes 2','marzo mes 3'];
let primavera= ['abril', 'mayo'];
let verano =['junio','julio','agosto'];
let otoño =['septiembre', 'octubre','noviembre','diciembre'];

if(num_mes == 1){
    console.log('es el mes de enero que tiene 31 dias');
    console.log(`esta en la temporada de invierno con los siguientes meses: ${inviero[1]} y ${inviero[2]}`);
}


else if(num_mes == 2){
   
    console.log('es el mes de febrero que tiene 29 dias');
    console.log(`esta en la temporada de invierno con los siguientes meses: ${inviero[0]} y  ${inviero[2]}`);
}

else if(num_mes == 3){
   
    console.log('es el mes de marzo que tiene 31 dias');
    console.log(`esta en la temporada de invierno con los siguientes meses: ${inviero[0]} y ${inviero[1]}`);
}

else if(num_mes == 4){
   
    console.log('es el mes de abril que tiene 30 dias');
    console.log(`esta en la temporada de primavera con los siguientes meses: ${primavera[1]}`);
}

else if(num_mes == 5){
   
    console.log('es el mes de mayo que tiene 31 dias');
    console.log(`esta en la temporada de primavera con los siguientes meses: ${primavera[0]}`);
}

else if(num_mes == 6){
   
    console.log('es el mes de junio que tiene 30 dias');
    console.log(`esta en la temporada de verano con los siguientes meses: ${verano[1]} y ${verano[2]}`);
}

else if(num_mes == 7){
   
    console.log('es el mes de julio que tiene 31 dias');
    console.log(`esta en la temporada de verano con los siguientes meses: ${verano[0]} y ${verano[2]}`);
}

else if(num_mes == 8){
   
    console.log('es el mes de agosto que tiene 31 dias');
    console.log(`esta en la temporada de verano con los siguientes meses: ${verano[0]} y ${verano[1]}`);
}

else if(num_mes == 9){
   
    console.log('es el mes de septiembre que tiene 30 dias');
    console.log(`esta en la temporada de otoño con los siguientes meses: ${otoño[1]} , ${otoño[2]} y ${otoño[3]}`);
}
else if(num_mes == 10){
   
    console.log('es el mes de octubre que tiene 31 dias');
    console.log(`esta en la temporada de otoño con los siguientes meses: ${otoño[0]} , ${otoño[2]} y ${otoño[3]}`);
}
else if(num_mes == 11){
   
    console.log('es el mes de noviembre que tiene 30 dias');
    console.log(`esta en la temporada de otoño con los siguientes meses: ${otoño[0]} , ${otoño[1]} y ${otoño[3]}`);
}
else if(num_mes == 12){
   
    console.log('es el mes de diciembre que tiene 31 dias');
    console.log(`esta en la temporada de NAVIDAD  con los siguientes meses DE OTOÑO: ${otoño[0]} , ${otoño[1]} y ${otoño[2]}`);
}

else if (num_mes>12){
    console.log('ese numero no corresponde a ningus mes ');
}*/

//38.14





//  else{
//      alert('no puedes apostar esa cantidad, no hay saldo suficiente')

//  }


let saldo = 5000;



    while(saldo>1){
        let apuesta = parseInt(prompt('ingrese el dinero que desea apostar'));
        if(apuesta<=saldo){
     
     let num = parseInt(prompt('ingrese un numero de 1 a 10'));
     let aleatorio = Math.floor( Math.random()*(0,10));

    if(num === aleatorio){
        saldo=saldo+(apuesta*3);
        alert(`has acertado al numero ganadaor, estas son tus ganancias ${saldo}    ${aleatorio}`);
    }
     else if(num !== aleatorio){
        saldo=saldo-apuesta;
        alert(`has perdido, esto es lo que te queda en stock: ${saldo}   ${aleatorio}`);
     }
     
      else if(saldo>7000){
        alert('ya has ganado mucho retirate');
         break;
     }
    
    }
    else if(apuesta>saldo){
        alert('no puedes apostar tu saldo no es suficiente');
     }
}