let carrito = [];
let eleccionPS5 = true;
let eleccionPS4 = true;
let eleccionJuego = "";
let eleccionConsola = "";

function consultaConsola() {

    alert("Bienvenidos a PSstoreCaballito");
    
    do{
        eleccionConsola = prompt('Seleccione una consola(PS5 o PS4)')
        if(eleccionConsola == null){
            alert("Por favor seleccionar una opcion");
        }
        console.log(eleccionConsola)
    }while(eleccionConsola == null);
    return;
        
}

function agregarCarrito(){
    do{
        eleccionJuego = prompt('Seleccione el juego(GTA4 o GTA5)')
        if (eleccionJuego == "GTA4"){
            cantidad = prompt('¿Cuantas unidades queres?')
            for (let i = 0; i < cantidad; i++){
                carrito.push({juego:'GTA4', precio: 20});
            }
            console.log(carrito.length)    
        }
        else{
            cantidad = prompt('¿Cuantas unidades queres?')
            for (let i = 0; i < cantidad; i++){
                carrito.push({juego:'GTA5', precio: 30});
            }
            console.log(carrito.length)    
        }
        seguirComprando = confirm("¿Queres seguir comprando?")
    }while(seguirComprando == true)
    console.table(carrito)
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
        alert("el carrito se a vaciado")
    }
    

}

consultaConsola()
agregarCarrito()
compra()