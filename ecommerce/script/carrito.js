const productosEnCarrito = JSON.parse(localStorage.getItem("productos-en-carrito"));


const contenedorProductos = document.querySelector("#carrito-productos");
const contenedorCarritoBotones = document.querySelector("#carrito-botones");
const contenedorCarritoVacio = document.querySelector("#carrito-vacio");

if(productosEnCarrito) {

    contenedorCarritoVacio.classList.add("disabled");
    contenedorProductos.classList.remove("disabled");
    contenedorCarritoBotones.classList.remove("disabled");

    contenedorProductos.innerHTML = "";

    productosEnCarrito.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("carrito-producto");
        div.innerHTML = `
                <img class="carrito-producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                <div class="carrito-producto-titulo">
                    <small>Nombre</small>
                    <h2>${producto.titulo}</h2>
                </div>
                <div class="carrito-producto-cantidad">
                    <small>Cantidad</small>
                    <p>${producto.cantidad}</p>
                </div>
                <div class="carrito-producto-precio">
                    <small>Precio</small>
                    <p>$${producto.precio}</p>
                </div>
                <div class="carrito-producto-subtotal">
                    <small>Subtotal</small>
                    <p>$${producto.precio * producto.cantidad}</p>
                </div>
                <button id = ${producto.id} class="carrito-producto-borrar"><i class="bi bi-trash3-fill"></i></button>
                `

    contenedorProductos.append(div);            
    });
} else {

};