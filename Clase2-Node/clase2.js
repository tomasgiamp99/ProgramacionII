//TODO Main Title
//& Subtitle
//* Notes
// Content
//! Important

_________________________________________________________________________-

//TODO 1. ARROW FUNCTIONS
//Ahora usamos Versión ES5

//& 1.1 Sintaxis

//* Version Tradicional:
function sumar(a,b){ return a + b; } //Todas las funciones deben tener un return.

//* Versión ES5:
(a,b) => a + b; 
//Ya no se le pone un nombre (función anonima) 
// Remplaza el { } por => (también implica un return)

//Para ponerle un nombre tengo que guardarla dentro de una variable
let sumar =  (a,b) => a + b; 

//Lo que esta a la IZQUIERDA de la flecha son los parámetros y loq ue esta a la DERECHA lo que queremos ejecutar / retornar,
//Para retornar / ejecutar mas cosas usamos {}

let saludo = (a,b) => {
    let nombre = a + ' José'
    return nombre + ' ' + b
}

//& 1.2 Métodos
//Es muy común que las funciones esten dentro de objetos -> métodos.

let persona {
    nombre: 'Tomy',
    apellido: 'Giampaoletti',
    saludar: function (){
        return 'Hola ' + this.nombre + ' ' + this.apellido
    }

}

_________________________________________________________________________-

//TODO 2. ARQUITECTURA CLIENTE - SERVIDOR
//Por un lado hay un cliente y por otro lado el servidor.
//CLIENTE -> hace pedidos (Request) (Programacion 1)
//SERVIDOR -> le responde con información (Response) (Programacion 2)

//Ahora el cliente será nuestro navegador y el servidor Node.js

//& 2.1 Node.js
//Para armar el servidor vamos a usar JS (hay otros)

//* NPM (Node package manager)
//Es el gestor de paquetes de node. Permite descargar e instalar librerias para incorporar a nuestro proyecto.

//TODO 3. MODULOS
//Un modulo es un bloque de codigo reusable -> no altera el comportamiento de otros bloques de codigo.
//Son GRANDES objetos literales con muchas propiedades y muchas funciones.
//Son manejados por NPM.
//Los modulos se EXPORTAN (Modulos Propios) o se REQUIEREN

//& 3.1 Tipos:
//* 1. Modulo nativo: 
//Usamos require() y le pasasmos como argumento el nombre del modulo que quermos requerir.
const fs = require('fs');

//* 2. Modulos de terceros:
//Primero hay que instalarlo usando 'npm install PACKAGE --save' en la consola (el --save no hace falta)
//Lo guardamos en una variable con su mismo nombre

//* 3. Modulo Creado:
//Para requerir un modulo creado por nosotros creamos un archivo .js y dentro de este escribimos el script que necesitemos.
//Una vez definido en nuestro codigo tenemos que dejarlo accesible para poder importarlo dentro de nuestra aplicación.
//Uso el objeto nativo 'module' y su propiedad 'exports'

//Ej:
    const series = [
        {titulo: 'Mad Men', Temporadas: 7},
        {titulo: 'Breakin Bad', Temporadas: 5},
        {titulo: 'Suits', Temporadas: 9}
    ]

    module.exports = series;

//Una vez que exporrtamos nuestro modulo, vamos al archivo en donde lo queremos importar y usamos require().
//Si está en una carpeta, colocamos la ruta en el require

//Ej:
    const series = require('./series/index')

//& 3.2 Cómo requerir un módulo:
//1. Creamos una variable
//2. Le indicamos a node que requerimos un modulo (require)

let modulo = require('nombreModulo');
modulo.propiedad;
modulo.funcionalidad();

//Lo que hay adentro de los modulos es un objeto literal -> tiene propiedades y funciones.
//Por convencion el nombre de la variable es el mismo del modulo.

//? Para inciar un proyecto en npm uso npm init y completo lo que me piden.