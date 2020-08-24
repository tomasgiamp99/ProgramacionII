//& Ejercicio 1: Transformar a arrow function

//1.
function saludar () {
    return 'Hola';
}

let saludar2 = () => 'Hola'

//console.log(saludar())

//* Cuando las funciones no tienen un return -> devuelven undefined

//console.log(saludar() + ' Tomy sos un capo.')

//2.
function multiplicar (valor1, valor2){
    return valor1 * valor2;
};

let multiplicar2 = (valor1,valor2) => valor1 * valor2
//console.log(multiplicar2(90,2))

//3.
let calcularAniosPerrunos = edad => 'Tu perro tiene ' + edad * 7 + ' años perrunos.'

//console.log(calcularAniosPerrunos(2))

//4.
let celsiusAFarenheit = temperatura => temperatura + 'ºC son ' + temperatura*6 + 'ºF' 
console.log (celsiusAFarenheit(6))

//5.
function calcularConsumo (edadActual, consumoPorDia, producto){
    let edadMaxima= 60;
    let añosDeVIda = edadMaxima - edadActual;
    let consumoTotal = consumoPorDia * añosDeVIda + 'Kg'

    return 'Necesitaras ' + consumoTotal + ' de ' + producto + ' para que dure el resto de tu vida.'
}

console.log(calcularConsumo(20,1,'pan'))

//6.
let cambiarElUltimo = (array, dato) => {
    array.pop();
    array.push(dato);
    return array
}

let test = [1,2,3,4]

console.log(cambiarElUltimo(test,6))

//7.
let libro = {
    nombre: 'Harry Potter',
    genero: 'Ficción',
    cantidadDePalabras: 100000,
    paraAdultos: false,
    describirse: function (){
        return 'El nombre es ' + this.nombre + ' y el género es ' + this.genero
    },
    puedeLeerlo: function (edad) {
        if (edad > 18 && this.paraAdultos == true){
            return  false
        } else {
            return true
        }
        
    }
}

console.log(libro.describirse())
console.log(libro.puedeLeerlo(19))