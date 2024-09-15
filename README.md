//LA DIFERENCIA ENTRE LAS FUNCIONES REGULARES Y LAS FUNCIONES FLECHA
•	 Las funciones flechas son la alternativa reducida de una función normal, no se pueden usar como métodos, tampoco se pueden usar como constructores.
Principales diferencias: 
-	Sintaxis: En la función regular se define con la palabra function y en las Flecha se usa =>
-	El this: En la función regular El valor de this depende de cómo se llama a la función. Si se llama desde un objeto, this hace referencia a ese objeto. En la función Flecha No tiene su propio this, sino que hereda el this del contexto donde fue definida.
-	En los Argumentos: En la función regular Puede acceder al objeto especial arguments, que es un array-like con todos los argumentos pasados a la función. en las funciones flechas; No tiene su propio objeto arguments. Si intentas acceder a arguments, lo tomará del contexto externo, si existe.
-	Constructores: En las funciones regulares Se puede usar como constructor con new para crear instancias de objetos. En las funciones flechas: No puede ser utilizada como constructor y arrojará un error si se intenta usar con new.
-	Call, Apply, y Bind: En las regulares las puedes usar para cambiar el valor de un this explícitamente. En las flechas no se pueden usar porque es this es heredado
En resumen, las funciones flecha son ideales para callbacks y funciones de corta extensión debido a su sintaxis concisa y manejo predecible de this. Por otro lado, las funciones regulares ofrecen mayor flexibilidad, siendo más adecuadas cuando se requiere un control dinámico de this o acceso al objeto arguments.//


//Create a new function in Regular and Arrow types, which should receive a number and will print in console if that number is either odd or even

// Función regular
function isEvenRegular(number) {
  if (number % 2 === 0) {
    console.log("El número " + number + " es par.");
  } else {
    console.log("El número " + number + " es impar.");
  }
}

// Función de flecha
const isEvenArrow = (number) => {
  if (number % 2 === 0) {
    console.log("El número " + number + " es par.");
  } else {
    console.log("El número " + number + " es impar.");
  }
};

// Usando las funciones
isEvenRegular(5); // Imprime "El número 5 es impar."
isEvenArrow(6); // Imprime "El número 6 es par."
