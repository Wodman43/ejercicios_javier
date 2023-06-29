// Meses 


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
}

//38.14
