let carrito = [];
let eleccionPS5 = true;
let eleccionPS4 = true;
let seguirComprando = false;
let eleccionJuego = "";
let eleccionConsola = "";

function consultaConsola() {

    alert("Bienvenidos a PSstoreCaballito");
    
    do{

        eleccionConsola = prompt('Seleccione una consola(PS5 o PS4)')

        switch(eleccionConsola){
            case "PS5":
                alert("Usted a elegido PS5, continuemos")
                break;
            
            case "PS4":
                alert("Usted a elegido PS4, continuemos")
                break;

            default:
                alert("Por favor seleccionar una de las opciones(PS5 o PS4), proximamente mas opciones")
                break;
        
        }

    }while(eleccionConsola != "PS5" && eleccionConsola != "PS4")

    return;
        
}

function agregarCarrito(){
    
    do{

        eleccionJuego = prompt('Seleccione el juego(GTA4 o GTA5)')

        switch(eleccionJuego){
            case "GTA4":
                cantidad = prompt('¿Cuantas unidades queres?')
                for (let i = 0; i < cantidad; i++){
                    carrito.push({juego:'GTA4', precio: 20});
                }
                console.log(carrito.length)
                seguirComprando = confirm("¿Queres seguir comprando?")
                break;
            
            case "GTA5":
                cantidad = prompt('¿Cuantas unidades queres?')
                for (let i = 0; i < cantidad; i++){
                    carrito.push({juego:'GTA5', precio: 30});
                }
                console.log(carrito.length)
                seguirComprando = confirm("¿Queres seguir comprando?")
                break;

            default:
                alert("Por favor seleccionar una de las opciones(GTA4 o GTA5), proximamente mas opciones")
                console.log(eleccionJuego)
                break;
        }

    }while(seguirComprando == true || eleccionJuego != "GTA4" && eleccionJuego != "GTA5")

    console.table(carrito);
    return;
}

function calcularTotal(){
    let total = 0;
    for(const juegos of carrito){
        total += juegos.precio;
    }
    console.log(total)
    return total;
}

function compra(total){

    alert('El carrito tiene un valor de '+calcularTotal())
    compra = confirm('¿Desea realizar la compra?')
    if (compra == true){
        alert("Muchas gracias por su compra")
        carrito = []
    }
    else{
        carrito = []
        console.table(carrito)
        alert("El carrito se a vaciado")
    }
    

}

consultaConsola()
agregarCarrito()
compra()