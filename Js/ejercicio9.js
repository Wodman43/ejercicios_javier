// let saldo = 5000;



//     while(saldo>1){
//         let apuesta = parseInt(prompt('ingrese el dinero que desea apostar'));
//         if(apuesta<=saldo){
     
//      let num = parseInt(prompt('ingrese un numero de 1 a 10'));
//      let aleatorio = Math.floor( Math.random()*(0,10));

//     if(num === aleatorio){
//         saldo=saldo+(apuesta*3);
//         alert(`has acertado al numero ganadaor, estas son tus ganancias ${saldo}    ${aleatorio}`);
//     }
//      else if(num !== aleatorio){
//         saldo=saldo-apuesta;
//         alert(`has perdido, esto es lo que te queda en stock: ${saldo}   ${aleatorio}`);
//      }
     
//       else if(saldo>7000){
//         alert('ya has ganado mucho retirate');
//          break;
//      }
    
//     }
//     else if(apuesta>saldo){
//         alert('no puedes apostar tu saldo no es suficiente');
//      }
// }


//Casino apuestas
let saldo = 5000;
let saldoactual = saldo;

while(saldo>1){
    if(saldo<=5000){
    let apuesta = prompt('ingrese la apuesta');
    let aleatorio = Math.floor( Math.random()*(0,10));
    let prediccion = prompt('digite la prediccion del numero entre 1 a 10');
     
    if(apuesta==0){
        alert(`usted perdio su saldo es: ${saldo}`)
    }
    else if(apuesta>saldo){
        alert('no puedes apostar')
        break;
    }
    else{

        if(prediccion==aleatorio){
            saldo=saldo+(apuesta*3);
            alert(`usted gano, su nuevo saldo es ${saldo}   el numero ganador es: ${aleatorio}`);
        }
        else{
            saldo= (saldo-apuesta);
            alert(`usted perdio, su nuevo saldo es: ${saldo}  ${aleatorio}`)
        }
    }

    
   
    }
    }
