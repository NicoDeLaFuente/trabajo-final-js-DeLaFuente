const productos = [
    // creo objetos de iluminacion
    {
        id: "iluminacion-01",
        titulo: "Bola disco led",
        precio: 2350,
        imagen: "./assets/iluminacion/iluminacion-01.jpg",
        categoria: {
            nombre: "Iluminacion",
            id: "iluminacion",
        },
        cantidad: 1,
    },
    {
        id: "iluminacion-02",
        titulo: "Faroles exteriores dobles",
        precio: 13100,
        imagen: "./assets/iluminacion/iluminacion-02.png",
        categoria: {
            nombre: "Iluminacion",
            id: "iluminacion",
        },
        cantidad: 1,
    },
    {
        id: "iluminacion-03",
        titulo: "Colgante de luces",
        precio: 1300,
        imagen: "./assets/iluminacion/iluminacion-03.jpg",
        categoria: {
            nombre: "Iluminacion",
            id: "iluminacion",
        },
        cantidad: 1,
    },
    {
        id: "iluminacion-04",
        titulo: "Luz led de emergencia",
        precio: 3200,
        imagen: "./assets/iluminacion/iluminacion-04.jpg",
        categoria: {
            nombre: "Iluminacion",
            id: "iluminacion",
        },
        cantidad: 1,
    },
    {
        id: "iluminacion-05",
        titulo: "Iluminaria fija exterior led",
        precio: 2000,
        imagen: "./assets/iluminacion/iluminacion-05.jpg",
        categoria: {
            nombre: "Iluminacion",
            id: "iluminacion",
        },
        cantidad: 1,
    },
    {
        id: "iluminacion-06",
        titulo: "Lámpara led dicroica",
        precio: 1500,
        imagen: "./assets/iluminacion/iluminacion-06.jpg",
        categoria: {
            nombre: "Iluminacion",
            id: "iluminacion",
        },
        cantidad: 1,
    },
    {
        id: "iluminacion-07",
        titulo: "Lámpara led color",
        precio: 1850,
        imagen: "./assets/iluminacion/iluminacion-07.jpg",
        categoria: {
            nombre: "Iluminacion",
            id: "iluminacion",
        },
        cantidad: 1,
    },
    {
        id: "iluminacion-08",
        titulo: "Lámpara led comun",
        precio: 1850,
        imagen: "./assets/iluminacion/iluminacion-08.jpg",
        categoria: {
            nombre: "Iluminacion",
            id: "iluminacion",
        },
        cantidad: 1,
    },
    {
        id: "iluminacion-09",
        titulo: "Lámpara led globo",
        precio: 1850,
        imagen: "./assets/iluminacion/iluminacion-09.jpg",
        categoria: {
            nombre: "Iluminacion",
            id: "iluminacion",
        },
        cantidad: 1,
    },
    {
        id: "iluminacion-10",
        titulo: "Lámpara led gota",
        precio: 1850,
        imagen: "./assets/iluminacion/iluminacion-10.jpg",
        categoria: {
            nombre: "Iluminacion",
            id: "iluminacion",
        },
        cantidad: 1,
    },
    {
        id: "iluminacion-11",
        titulo: "Lámpara led party lamp",
        precio: 2600,
        imagen: "./assets/iluminacion/iluminacion-11.jpg",
        categoria: {
            nombre: "Iluminacion",
            id: "iluminacion",
        },
        cantidad: 1,
    },
    {
        id: "iluminacion-12",
        titulo: "Lámpara led velita",
        precio: 1850,
        imagen: "./assets/iluminacion/iluminacion-12.jpg",
        categoria: {
            nombre: "Iluminacion",
            id: "iluminacion",
        },
        cantidad: 1,
    },
    {
        id: "iluminacion-13",
        titulo: "Lámpara led vintage",
        precio: 1900,
        imagen: "./assets/iluminacion/iluminacion-13.jpg",
        categoria: {
            nombre: "Iluminacion",
            id: "iluminacion",
        },
        cantidad: 1,
    },
    {
        id: "iluminacion-14",
        titulo: "Velador E27 con base",
        precio: 3450,
        imagen: "./assets/iluminacion/iluminacion-14.jpg",
        categoria: {
            nombre: "Iluminacion",
            id: "iluminacion",
        },
        cantidad: 1,
    },
    {
        id: "iluminacion-15",
        titulo: "Velador E27 con pinza",
        precio: 3200,
        imagen: "./assets/iluminacion/iluminacion-15.jpg",
        categoria: {
            nombre: "Iluminacion",
            id: "iluminacion",
        },
        cantidad: 1,
    },
    {
        id: "iluminacion-16",
        titulo: "Velador E27 para dibujo",
        precio: 4500,
        imagen: "./assets/iluminacion/iluminacion-16.jpg",
        categoria: {
            nombre: "Iluminacion",
            id: "iluminacion",
        },
        cantidad: 1,
    },
    {
        id: "iluminacion-17",
        titulo: "Velador led",
        precio: 4000,
        imagen: "./assets/iluminacion/iluminacion-17.jpg",
        categoria: {
            nombre: "Iluminacion",
            id: "iluminacion",
        },
        cantidad: 1,
    },
    {
        id: "iluminacion-18",
        titulo: "Velador led pared",
        precio: 4250,
        imagen: "./assets/iluminacion/iluminacion-18.jpg",
        categoria: {
            nombre: "Iluminacion",
            id: "iluminacion",
        },
        cantidad: 1,
    },
    //creo objetos de materiales electricos
    {
        id: "mat-electrico-01",
        titulo: "Alargue con USB",
        precio: 3100,
        imagen: "./assets/materiales-electricos/01.png",
        categoria: {
            nombre: "Materiales Electricos",
            id: "materiales-electricos",
        },
        cantidad: 1,
    },
    {
        id: "mat-electrico-02",
        titulo: "Alargue con cuatro enchufes",
        precio: 2500,
        imagen: "./assets/materiales-electricos/02.png",
        categoria: {
            nombre: "Materiales Electricos",
            id: "materiales-electricos",
        },
        cantidad: 1,
    },
    {
        id: "mat-electrico-03",
        titulo: "Alargue con seis enchufes",
        precio: 2900,
        imagen: "./assets/materiales-electricos/03.png",
        categoria: {
            nombre: "Materiales Electricos",
            id: "materiales-electricos",
        },
        cantidad: 1,
    },
    {
        id: "mat-electrico-04",
        titulo: "Caja para interruptores con tapa",
        precio: 1900,
        imagen: "./assets/materiales-electricos/04.png",
        categoria: {
            nombre: "Materiales Electricos",
            id: "materiales-electricos",
        },
        cantidad: 1,
    },
    {
        id: "mat-electrico-05",
        titulo: "Caja para interruptores sin tapa",
        precio: 1500,
        imagen: "./assets/materiales-electricos/05.png",
        categoria: {
            nombre: "Materiales Electricos",
            id: "materiales-electricos",
        },
        cantidad: 1,
    },
    {
        id: "mat-electrico-06",
        titulo: "Tapa sies módulos oro",
        precio: 1400,
        imagen: "./assets/materiales-electricos/06.png",
        categoria: {
            nombre: "Materiales Electricos",
            id: "materiales-electricos",
        },
        cantidad: 1,
    },
    /*
    {
        id: "mat-electrico-07",
        titulo: "Tapa interruptor simple",
        precio: 800,
        imagen: "./assets/materiales-electricos/07.png",
        categoria: {
            nombre: "Materiales Electricos",
            id: "materiales-electricos",
        },
        cantidad: 1,
    },
    */
    {
        id: "mat-electrico-08",
        titulo: "Tapa seis módulos bronce",
        precio: 1400,
        imagen: "./assets/materiales-electricos/08.png",
        categoria: {
            nombre: "Materiales Electricos",
            id: "materiales-electricos",
        },
        cantidad: 1,
    },
    {
        id: "mat-electrico-09",
        titulo: "Tapa seis módulos hierro",
        precio: 1400,
        imagen: "./assets/materiales-electricos/09.png",
        categoria: {
            nombre: "Materiales Electricos",
            id: "materiales-electricos",
        },
        cantidad: 1,
    },
    {
        id: "mat-electrico-10",
        titulo: "Tapa seis módulos plata",
        precio: 1400,
        imagen: "./assets/materiales-electricos/10.png",
        categoria: {
            nombre: "Materiales Electricos",
            id: "materiales-electricos",
        },
        cantidad: 1,
    },
    {
        id: "mat-electrico-11",
        titulo: "Tapa tres módulos bronce",
        precio: 1000,
        imagen: "./assets/materiales-electricos/11.png",
        categoria: {
            nombre: "Materiales Electricos",
            id: "materiales-electricos",
        },
        cantidad: 1,
    },
    {
        id: "mat-electrico-12",
        titulo: "Tapa tres módulos hierro",
        precio: 1000,
        imagen: "./assets/materiales-electricos/12.png",
        categoria: {
            nombre: "Materiales Electricos",
            id: "materiales-electricos",
        },
        cantidad: 1,
    },
    {
        id: "mat-electrico-13",
        titulo: "Tapa tres módulos oro",
        precio: 1000,
        imagen: "./assets/materiales-electricos/13.png",
        categoria: {
            nombre: "Materiales Electricos",
            id: "materiales-electricos",
        },
        cantidad: 1,
    },
    {
        id: "mat-electrico-14",
        titulo: "Tapa tres módulos plata",
        precio: 1000,
        imagen: "./assets/materiales-electricos/14.png",
        categoria: {
            nombre: "Materiales Electricos",
            id: "materiales-electricos",
        },
        cantidad: 1,
    },
    {
        id: "mat-electrico-15",
        titulo: "Toma corriente simple",
        precio: 700,
        imagen: "./assets/materiales-electricos/15.png",
        categoria: {
            nombre: "Materiales Electricos",
            id: "materiales-electricos",
        },
        cantidad: 1,
    },
    {
        id: "mat-electrico-16",
        titulo: "Toma corriente con seguridad",
        precio: 1800,
        imagen: "./assets/materiales-electricos/16.png",
        categoria: {
            nombre: "Materiales Electricos",
            id: "materiales-electricos",
        },
        cantidad: 1,
    },
    {
        id: "mat-electrico-17",
        titulo: "Toma corriente doble",
        precio: 1200,
        imagen: "./assets/materiales-electricos/17.png",
        categoria: {
            nombre: "Materiales Electricos",
            id: "materiales-electricos",
        },
        cantidad: 1,
    },
    {
        id: "mat-electrico-18",
        titulo: "Toma corriente multiple",
        precio: 2200,
        imagen: "./assets/materiales-electricos/18.png",
        categoria: {
            nombre: "Materiales Electricos",
            id: "materiales-electricos",
        },
        cantidad: 1,
    },
    // Creacion objetos equipamiento
    {
        id: "equipamiento-01",
        titulo: "Cúter retráctil",
        precio: 4000,
        imagen: "./assets/equipamiento/01.jpg",
        categoria: {
            nombre: "Equipamiento",
            id: "equipamiento",
        },
        cantidad: 1,
    },
    {
        id: "equipamiento-02",
        titulo: "Destornillador buscapolos",
        precio: 8000,
        imagen: "./assets/equipamiento/02.jpg",
        categoria: {
            nombre: "Equipamiento",
            id: "equipamiento",
        },
        cantidad: 1,
    },
    {
        id: "equipamiento-03",
        titulo: "Destornillador Phillips",
        precio: 10000,
        imagen: "./assets/equipamiento/03.jpg",
        categoria: {
            nombre: "Equipamiento",
            id: "equipamiento",
        },
        cantidad: 1,
    },
    {
        id: "equipamiento-04",
        titulo: "Destornillador plano",
        precio: 10000,
        imagen: "./assets/equipamiento/04.jpg",
        categoria: {
            nombre: "Equipamiento",
            id: "equipamiento",
        },
        cantidad: 1,
    },
    {
        id: "equipamiento-05",
        titulo: "Pasacables profesional",
        precio: 6500,
        imagen: "./assets/equipamiento/05.jpg",
        categoria: {
            nombre: "Equipamiento",
            id: "equipamiento",
        },
        cantidad: 1,
    },
    {
        id: "equipamiento-06",
        titulo: "Pelacables profesional",
        precio: 15000,
        imagen: "./assets/equipamiento/06.jpg",
        categoria: {
            nombre: "Equipamiento",
            id: "equipamiento",
        },
        cantidad: 1,
    },
    {
        id: "equipamiento-07",
        titulo: "Pinza universal",
        precio: 7800,
        imagen: "./assets/equipamiento/07.jpg",
        categoria: {
            nombre: "Equipamiento",
            id: "equipamiento",
        },
        cantidad: 1,
    },
    {
        id: "equipamiento-08",
        titulo: "Set destornilladores",
        precio: 30000,
        imagen: "./assets/equipamiento/08.jpg",
        categoria: {
            nombre: "Equipamiento",
            id: "equipamiento",
        },
        cantidad: 1,
    },
]


const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let productoCarrito = document.querySelectorAll(".producto-boton");

function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("carta");
        div.innerHTML = `
                        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                        <div class="producto-abajo">
                            <p class="producto-titulo">${producto.titulo}</p>
                            <small class="producto-precio">${producto.precio}$</small>
                            <button class="producto-boton" id="${producto.id}">Agregar</button>
                        </div>
        `;
        
        contenedorProductos.append(div);
    });
    agregarBotonCarrito();
    console.log(agregarBotonCarrito);
};

cargarProductos(productos);

botonesCategorias.forEach(boton =>{
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => {
            boton.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
    
        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;

            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        }else { 
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos)
            
        };
    })
});

function agregarBotonCarrito () {
    botonProducto = document.querySelectorAll(".producto-boton");
    botonProducto.forEach(boton => {
        boton.addEventListener("click", agregarProductosCarrito);
    });
}

let arrayProductosCarrito;
const productosEnCarritoLS = JSON.parse(localStorage.getItem("productos-en-carrito"));

if (productosEnCarritoLS) {
    arrayProductosCarrito = productosEnCarritoLS;

} else {
    arrayProductosCarrito  = [];
}; 

function agregarProductosCarrito (e) {
    const idBoton = e.currentTarget.id;
   
    const productoAgregado = productos.find(producto => producto.id === idBoton);
   
    if(arrayProductosCarrito.some(producto => producto.id === idBoton)) {
        const index = arrayProductosCarrito.findIndex(producto => producto.id === idBoton);
        arrayProductosCarrito[index].cantidad++;
    } else {
    arrayProductosCarrito.push(productoAgregado);
    };

    localStorage.setItem("productos-en-carrito", JSON.stringify(arrayProductosCarrito));
    
};

