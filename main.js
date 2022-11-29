let nombre;
let eleccionProducto;
let precioLuces = 500;
let precioSoporte = 2000;
let precioMotor = 5800;
let cantidad;
let montoTotalPrimerArticulo;
let montoTotalSegundoArticulo;

alert("Electro DM. Artículos de electricidad al mejor precio.");
nombre = prompt("Ingrese su nombre");

if (nombre != "") {
    alert("Bienvenido/a " + nombre + " a Electro DM");
}

while (nombre == "") {
    nombre = prompt("No ha ingresado un nombre. Inténtelo de nuevo.");
    if (nombre != "") {
        alert("Bienvenido/a " + nombre + " a Electro DM");
    }
}

eleccionProducto = parseInt(prompt("Elija el producto que desea comprar: \n \n (Aclaración: solo podrá ingresar números. Ej: ponga 1 para elegir luces) \n \n 1- luces LED. \n 2- soporte de TV. \n 3- motor de portón."));

function productoElegido(eleccionProducto) {
    while (eleccionProducto != 1 || eleccionProducto != 2 || eleccionProducto != 3) {
        if (eleccionProducto == 1) {
            return alert("Usted eligio el producto: Luces LED. Cada una tiene un valor de " + precioLuces + " pesos");
        } else if (eleccionProducto == 2) {
            return alert("Usted eligió el producto: soporte de TV. Cada uno tiene un precio de " + precioSoporte + " pesos");
        } else if (eleccionProducto == 3) {
            return alert("Usted eligió el producto: Motor de portón. Cada uno tiene un precio de " + precioMotor + " pesos");
        }
        eleccionProducto = parseInt(prompt("No ha ingresado una opcion correcta. Elija el producto que desea comprar: \n \n (Aclaración: solo podrá ingresar números. Ej: ponga 1 para elegir luces) \n \n 1- luces LED. \n 2- soporte de TV. \n 3- motor de porton."));
    }
}

productoElegido(eleccionProducto);
cantidad = parseInt(prompt("Ingrese la cantidad que desea comprar"));

function multiplicacion(cantidad, eleccionProducto) {
    if (eleccionProducto == 1) {
        return cantidad * precioLuces;
    } else if (eleccionProducto == 2) {
        return cantidad * precioSoporte;
    } else if (eleccionProducto == 3) {
        return cantidad * precioMotor;
    }
}
montoTotalPrimerArticulo = multiplicacion(cantidad, eleccionProducto);

alert("El precio de su primer artículo es de: " + montoTotalPrimerArticulo + " pesos");
let segundoArticulo = prompt("Desea comprar algo más? \n \n 1- Si \n 2- No ")

while (segundoArticulo != 1 || segundoArticulo != 2) {
    if (segundoArticulo == 1) {
        eleccionProducto = parseInt(prompt("Elija el producto que desea comprar: \n \n (Aclaración: solo podrá ingresar números. Ej: ponga 1 para elegir luces) \n \n 1- luces LED. \n 2- soporte de TV. \n 3- motor de porton."));
        productoElegido(eleccionProducto);
        cantidad = parseInt(prompt("Ingrese la cantidad que desea comprar"));
        montoTotalSegundoArticulo = multiplicacion(cantidad, eleccionProducto);
        alert("El precio de su segundo articulo es de " + montoTotalSegundoArticulo + " pesos");
        break;
    } else if (segundoArticulo == 2) {
        montoTotalSegundoArticulo = 0;
        alert("El monto total de su compra es de: " + montoTotalPrimerArticulo + " pesos");
        break;
    } else {
        segundoArticulo = prompt("La opción indicada no es correcta. Desea comprar algo más? \n \n 1- Si \n 2- No ")
    }
}

let montoGlobal = alert("El monto global de su compra es de: " + (montoTotalPrimerArticulo + montoTotalSegundoArticulo) + " pesos");

alert("Muchas gracias por confiar en nosotros. Puede pasar a retirar por el local 24 hs después de la fecha de compra");
