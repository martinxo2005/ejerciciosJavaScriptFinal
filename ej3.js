const productos = [
    { id: 1, nombre: "Teclado", precio: 30, stock: 4 },
    { id: 2, nombre: "Ratón", precio: 15, stock: 0 },
    { id: 3, nombre: "Monitor", precio: 180, stock: 3 },
    { id: 4, nombre: "Webcam", precio: 55, stock: 2 },
    { id: 5, nombre: "Auriculares", precio: 70, stock: 0 },
    { id: 6, nombre: "SSD", precio: 90, stock: 5 }
];

// a) obtenerNombresDisponibles(productos, precioMaximo)
// Recibe el catálogo y un precio máximo. Devuelve los nombres de los 
// productos que tengan stock y cuyo
// precio no supere el precio máximo indicado.
// obtenerNombresDisponibles(productos, 100);
// // Resultado esperado: ["Teclado", "Webcam", "SSD"]

const obtenerNombresDisponibles2= (productos, preciomax) =>{
    const disponibles= [];
    for(producto of productos){
        if(producto.stock!== 0 && producto.precio < preciomax){
            disponibles.push(producto.nombre);
        };
    };

    return disponibles;
};

console.log(obtenerNombresDisponibles2(productos, 50));

console.log("-----");


// b) buscarProductoDisponible(productos, id)
// Recibe el catálogo y un identificador. Devuelve el producto 
// correspondiente únicamente si existe y tiene
// stock disponible. En caso contrario, devuelve undefined.
// buscarProductoDisponible(productos, 4);
// // Resultado esperado:
// { id: 4, nombre: "Webcam", precio: 55, stock: 2 }
// buscarProductoDisponible(productos, 2);
// // Resultado esperado: undefined


const buscarProductoDisponible = (productos, idBuscado) => {
    let productoBuscado = undefined;
    for (producto of productos) {
        if (producto.id === idBuscado && producto.stock !== 0) {
            productoBuscado = producto;
        };
    };

    return productoBuscado;
};

console.log(buscarProductoDisponible(productos, 4));
console.log(buscarProductoDisponible(productos, 2));

console.log("-----");


// c) existeProductoCaroDisponible(productos, precio)
// Recibe el catálogo y un precio. Devuelve true si entre los productos 
// que actualmente tienen stock existe
// alguno cuyo precio sea superior al indicado; devuelve false en caso 
// contrario.
// existeProductoCaroDisponible(productos, 150); // true
// existeProductoCaroDisponible(productos, 200); // false

const existeProductoCaroDisponible = (productos, precioBuscado) => {
    let disponible = false;
    for (producto of productos) {
        if (producto.stock !== 0 && producto.precio > precioBuscado) {
            disponible = true;
        };
    };

    return disponible;
};

console.log(existeProductoCaroDisponible(productos, 150));
console.log(existeProductoCaroDisponible(productos, 200));

console.log("-----");

// d) calcularValorStockDisponible(productos)
// Recibe el catálogo y devuelve el valor económico de todo el stock 
// disponible, teniendo en cuenta
// únicamente los productos de los que 
// quede alguna unidad. El valor del stock de cada producto es su precio
// multiplicado por las unidades disponibles.
// calcularValorStockDisponible(productos); // 1220

const calcularValorStockDisponible = productos => {
    let valor = 0;
    for (producto of productos) {
        valor += producto.precio * producto.stock;
    };

    return valor;
};

console.log(calcularValorStockDisponible(productos));

console.log("-----");


// e) obtenerProductosRebajados(productos, porcentaje)
// Recibe el catálogo y un porcentaje de descuento. Devuelve un nuevo 
// array únicamente con los productos
// que tengan stock, aplicando a cada uno el descuento indicado sobre su 
// precio. Los objetos originales no
// deben modificarse.
// obtenerProductosRebajados(productos, 10);
// // Resultado esperado:
// [
//  { id: 1, nombre: "Teclado", precio: 27, stock: 4 },
//  { id: 3, nombre: "Monitor", precio: 162, stock: 3 },
//  { id: 4, nombre: "Webcam", precio: 49.5, stock: 2 },
//  { id: 6, nombre: "SSD", precio: 81, stock: 5 }
// ]

const obtenerProductosRebajados2 = (productos, porcentaje) =>{
    let rebajado =[];
    for(producto of productos){
        if(producto.stock!==0){
            producto.precio =calcularPrecioFinal2(producto.precio, porcentaje);
            rebajado.push(producto);
        };
    };
    return rebajado;
}
const calcularPrecioFinal2 = (precio, descuento) => {
    return precioFinal = +precio - (+precio * +descuento / 100);
};
console.log(obtenerProductosRebajados2(productos, 10));
