//Creacion de los productos ofrecidos
class Producto {
    constructor(producto, precioMinorista, precioMayorista,) {
        this.producto = producto;
        this.precioMinorista = precioMinorista;
        this.precioMayorista = precioMayorista;
    }
}

const lucesLed = new Producto("Luces Led", 500, 300);
const soporteTv = new Producto("Soporte de TV", 2000, 1500);
const motorPorton = new Producto("Motor de porton", 5800, 3000);
const cajasTermicas = new Producto("Cajas para termicas", 1250, 800);
const spotLucesTecho = new Producto("Spot para luces de techo", 600, 350);

const arrayProducto = [];

arrayProducto.push(lucesLed);
arrayProducto.push(soporteTv);
arrayProducto.push(motorPorton);
arrayProducto.push(cajasTermicas);
arrayProducto.push(spotLucesTecho);

const arrayProductosMinoristas = [];
const arrayProductosMayoristas = [];
const arrayProductosElegidos = [];

arrayProductosElegidos.push(arrayProductosMinoristas);
arrayProductosElegidos.push(arrayProductosMayoristas);


//Funcion para elegir la opcion a realizar. 

function menu() {
    let opcion = parseInt(prompt(`Elija la acción que desea realizar: \n \n (Aclaración: solo podrá ingresar números. Ej: ponga 1 para comprar productos minorista) \n \n 1- Comprar productos minorista \n 2- Comprar productos mayorista \n 3- Soporte técnico \n 4- Salir \n\n Nota aclarativa: el mínimo de productos iguales para ser tomado como mayorista es de 10 unidades del mismo producto. Sin excepción`));
    return opcion;
};

//funcion para comprar productos minorista
function compraMinorista() {
    const opcion = (prompt(`Elija el producto que desea comprar: \n\n 1- Luces Led \n 2- Soporte de TV \n 3- Motor de porton \n 4- Cajas para termicas \n 5- Spot para luces de techo\n\n Nota aclarativa: Escriba la opcion que desea tal y como se muestra arriba; caso contrario va a ser incorrecta la opcion elegida`));
    let productoElegido = arrayProducto.find(producto => producto.producto === opcion);
    let indiceProducto = arrayProducto.indexOf(productoElegido);
    console.log(indiceProducto)
    arrayProductosMinoristas.push(productoElegido);
    console.log(arrayProductosMinoristas);
    console.log(`Felicidades. Ha elegido comprar ${productoElegido.producto}. El precio minorista es de: ${productoElegido.precioMinorista} pesos.`)
    let cantidadProducto = parseInt(prompt("Elija la cantidad que desea comprar: \n\n Recuerde que la cantidad máxima para compras minoristas es de 9 productos iguales."))
    while (cantidadProducto >= 10) {
        cantidadProducto = parseInt(prompt("La cantidad elegida supera el máximo para compras minoristas. Indique nuevamente la cantidad a comprar: \n\n Recuerde que la cantidad máxima para compras minoristas es de 9 productos iguales."))
        if (cantidadProducto < 10) {
            let precioTotalCompra = productoElegido.precioMinorista * cantidadProducto;
            console.log(`El monto total a abonar por el producto es de ${precioTotalCompra}`);
        }
    }
    if (cantidadProducto < 10) {
        let precioTotalCompra = productoElegido.precioMinorista * cantidadProducto;
        console.log(`El monto total a abonar por el producto  es de ${precioTotalCompra}`);
    }
}

//funcion compra mayorista
function compraMayorista() {
    const opcion = (prompt(`Elija el producto que desea comprar: \n\n 1- Luces Led \n 2- Soporte de TV \n 3- Motor de porton \n 4- Cajas para termicas \n 5- Spot para luces de techo\n\n Nota aclarativa: Escriba la opcion que desea tal y como se muestra arriba; caso contrario va a ser incorrecta la opcion elegida`));
    let productoElegido = arrayProducto.find(producto => producto.producto === opcion);
    let indiceProducto = arrayProducto.indexOf(productoElegido);
    console.log(indiceProducto)
    arrayProductosMayoristas.push(productoElegido);
    console.log(arrayProductosMayoristas);
    console.log(`Felicidades. Ha elegido comprar ${productoElegido.producto}. El precio mayorista es de: ${productoElegido.precioMayorista} pesos.`)
    let cantidadProducto = parseInt(prompt("Elija la cantidad que desea comprar: \n\n Recuerde que la cantidad mínima para compras mayorista es de 10 productos iguales."))
    while (cantidadProducto < 10) {
        cantidadProducto = parseInt(prompt("La cantidad elegida es inferior al mínimo exigido para compras mayoristas. Indique nuevamente la cantidad a comprar: \n\n Recuerde que la cantidad mínima para compras mayoristas es de 10 productos iguales."))
        if (cantidadProducto >= 10) {
            let precioTotalCompra = productoElegido.precioMinorista * cantidadProducto;
            console.log(`El monto total a abonar por el producto es de ${precioTotalCompra}`);
        }
    }
    if (cantidadProducto >= 10) {
        let precioTotalCompra = productoElegido.precioMinorista * cantidadProducto;
        console.log(`El monto total a abonar por el producto es de ${precioTotalCompra}`);
    }
}

// funcion soporte tecnico
function soporteTecnico() {
    const opcion = prompt(`Elija el producto que ha comprado: \n\n 1- Luces Led \n 2- Soporte de TV \n 3- Motor de porton \n 4- Cajas para termicas \n 5- Spot para luces de techo\n\n Nota aclarativa: Escriba la opcion que desea tal y como se muestra arriba; caso contrario va a ser incorrecta la opcion elegida`);
    const numeroTelefono = parseInt(prompt("Escriba su número de teléfono para que un especialista se comunique."));
    let productoElegido = arrayProducto.find(producto => producto.producto === opcion);
    const detalleReclamo = prompt(`Detalle lo ocurrido con el producto que ha comprado.`)
    console.log("Felicidades. Se ha ingresado el reclamo correctamente.\n Un especialista se pondrá en contacto con usted a la brevedad. ")
    console.log(`Detalles del reclamo realizado:\n\n Nombre: ${nombre} \n Producto: ${productoElegido.producto}.\n Número de contacto: ${numeroTelefono} \n Reclamo: ${detalleReclamo}. `)
}

//funcion salir
function salir() {
    console.log("Gracias por utilizar nuestro sitio web. Vuelva pronto.");
}

/** EJECUCION PROGRAMA **/
alert("Electro DM. Artículos de electricidad al mejor precio.");
nombre = prompt("Ingrese su nombre");

if (nombre != "") {
    console.log(`Bienvenido/a ${nombre} a Electro DM`);
}

while (nombre == "") {
    nombre = console.log(`No ha ingresado un nombre. Inténtelo de nuevo.`);
    if (nombre != "") {
        console.log(`Bienvenido/a ${nombre} a Electro DM`);
    }
}

let opcion = menu()
switch (opcion) {
    case 1:
        compraMinorista();
        break;
    case 2:
        compraMayorista();
        break;
    case 3: soporteTecnico();
        break;
    case 4: salir();
        break;
    default: alert("La opcion elegida es incorrecta. Recargue e inténtelo de nuevo.");
} 