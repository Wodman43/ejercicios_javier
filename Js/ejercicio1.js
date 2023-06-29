//factura


alert("FACTURA DE VENTA SENAMARKET")
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
console.log("EL TOTAL A PAGAR POR EL SEÑOR",cliente,"EL TOTAL DE LA FACTURA ES:",total);