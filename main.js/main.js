
const string1 = "HOLA";
const string2 = "COMO ESTAS";
const string3 = ",";


const saludo = string1 + string2;

const saludoConEspacios = string1 + string3 + string2;


console.log (saludoConEspacios);


// const nombre = prompt("Ingrese un producto");

// switch (nombre) {
//     case "Procesador ryzen 5":
//     console.log("El precio de producto es $150.000");
//     console.log("El precio con transferencia o debito se mantiene");
//     console.log("El precio de lista es 165.000")
//     break;
    
//     case "Procesador intel i5":
//     console.log("El precio del producto es $155.000")
//     console.log("El precio con transferencia o debito se mantiene");
//     console.log("El precio de lista es $185.000")
//     break;
//     case "Procesador ryzen 7":
//     console.log("El precio del producto es $250.000")
//     console.log("El precio con transferencia o debito se mantiene");
//     console.log("El precio de lista es $275.000")
//     break;
//     case "Procesador intel i7":
//     console.log("El precio del producto es $400.000")
//     console.log("El precio con transferencia o debito se mantiene");
//     console.log("El precio de lista es $440.000")
//     break;

//     default:
//         console.log("Sin stock");
//         break;
    
       
// }
// const producto = prompt("Ingrese el cooler que necesita");

// switch (producto) {
//     case "Cooler gama baja":
//     console.log("El precio del producto es $40.000");
//     console.log("El precio con transferencia se mantiene");
//     console.log("El precio de lista es 55.000")
//     break;
    
//     case "Cooler gama media":
//     console.log("El precio del producto es $65.000")
//     console.log("El precio en 3 cuotas sin interes");
//     console.log("El precio en 6 cuotas con interes es de $80.000")
//     break;

//     case "Cooler gama alta":
//     console.log("El precio del producto es $110.000")
//     console.log("El precio en 3 cuotas sin interes");
//     console.log("El precio en 6 cuotas con interes es de $125.000")
//     break;

//     default:
//         console.log("Sin stock");
//         break;
//     }

// let operacion = prompt("Ingrese la operacion a realizar. \n+ Para sumar los productos\n INGRESE CUALQUIER LETRA PARA SALIR");

// while( operacion == "+") {

//     const numero1 = parseInt(prompt("Ingrese el numero"));
//     const numero2 = parseInt(prompt("Ingrese el numero"));

//     switch(operacion) {

//         case "+":
//         console.log("La suma es: " + (numero1 + numero2));
//       break;

//        default: 
//        alert("Operacion no valida");
//         break;
//         }

//         operacion = prompt("Ingrese la operacion a realizar. \n+ Para suma\n- para resta\n* para multiplicacion\n INGRESE CUALQUIER LETRA PARA SALIR");
//    }

 
//SEGUNDA PREENTREGA

class Producto {
    constructor(nombre, precio, stock){
    this.nombre = nombre; 
    this.precio = precio;
    this.stock = stock;
    }
}

function nombreProductoValido(nombre) {
    let indice = -1;

    for(let i = 0; i < productos.length; i++) {

        if(productos[i].nombre === nombre){

            indice =i;
        }
    }

    return indice;
}



function comprar(){
    let nombreDeProducto = prompt("ingrese el nombre del producto que quiere comprar"); 
    
    let indiceProducto = nombreProductoValido(nombreDeProducto);

        while(nombreProductoValido(nombreDeProducto) === -1) {

            nombreDeProducto = prompt("ingrese el nombre del producto que quiere comprar");

            indiceProducto = nombreProductoValido(nombreDeProducto);
        }  
        const producto = productos[indiceProducto];
        const cantidad = parseInt(prompt("Ingrese la cantidad a comprar"));
        
        producto.stock = producto.stock - cantidad;

        alert("Se compró " + cantidad + " de " + producto.nombre + "El total de su compra es de $" +(producto.precio * cantidad) + ".El stock actual es de: " + producto.stock);

    }

    function Eliminar(){
        let nombreDeProducto = prompt("ingrese el nombre del producto que quiere eliminar"); 
    
    let indiceProducto = nombreProductoValido(nombreDeProducto);

        while(nombreProductoValido(nombreDeProducto) === +1) {

            nombreDeProducto = prompt("ingrese el nombre del producto que quiere eliminar");

            indiceProducto = nombreProductoValido(nombreDeProducto);
        }  
        const producto = productos[indiceProducto];
        const cantidad = parseInt(prompt("Ingrese la cantidad a eliminar"));
        
        producto.stock = producto.stock + cantidad;

        alert("Se elimino " + cantidad + " del producto " + producto.nombre + "El total de su compra es de $" +(producto.precio * cantidad) + ".El stock actual es de: " + producto.stock);



    }


    const producto1 = new Producto("Ryzen 5 5600x", 280000 , 10);
    const producto2 = new Producto("Ryzen 7 5800x", 380000, 7);
    const producto3 = new Producto("Ryzen 9 5900x", 560000, 5);

const productos = [producto1, producto2, producto3];

let opcion = parseInt(prompt("Elige que producto desea comprar:\n1-Comprar producto\n2- Eliminar producto del carrito\n3- Salir"));

while(opcion !== 3) {
    switch(opcion) {
        case 1: 
        comprar();
        break;

        case 2:
        Eliminar();
        break;

        default:
            alert("Opcion incorrecta");
            break;
    }
    opcion = parseInt(prompt("Elige que producto desea comprar:\n1-Comprar producto\n2- Eliminar producto del carrito\n3- Salir"));

}

alert("Gracias por usar nuestros servicios");


























