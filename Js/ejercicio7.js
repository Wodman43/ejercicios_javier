//ping pong


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