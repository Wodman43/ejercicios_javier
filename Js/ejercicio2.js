alert("RESULTADO DE NOTAS APRENDICES");
let aprendiz1 = prompt("Ingrese el nombre del Aprendiz");
let nota1A1 = parseFloat( prompt("Ingrese la primera Nota: esta nota es del 20%"));
let nota2A1 = parseFloat( prompt("Ingrese la Segunda Nota: esta nota es del 20%"));
let nota3A1 = parseFloat( prompt("Ingrese la Terecera Nota: esta nota es del 60%"));

let porcen1A1 = (nota1A1*0.2);
//Promedio de Notas


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
console.log("Resultado final de notas del aprendiz",totalA3);