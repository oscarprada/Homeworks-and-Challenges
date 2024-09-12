# Homeworks-and-Challenges
Estructura de datos II

//1.	Array Length: Es una propiedad que te indica la cantidad de elementos que hay en un arreglo. 

const numeros = [10, 25, 5, 30, 15];

const longitud = numeros.length;
console.log("La longitud del arreglo es:", longitud); 

for (let i = 0; i < numeros.length; i++) {
  console.log("Elemento en la posición", i, ":", numeros[i]);
}

if (numeros.length === 0) {
  console.log("El arreglo está vacío");
} else {
  console.log("El arreglo tiene elementos");
}

numeros.length = 3;
console.log("Nuevo arreglo:", numeros); 

// 2. at: Es como se accede a elementos dentro de un arreglo

const colores = ['rojo', 'verde', 'azul', 'amarillo'];

const segundoColor = colores.at(1);
console.log("El segundo color es:", segundoColor); 

const tercerColorDesdeElFinal = colores.at(-3);
console.log("El tercer color desde el final es:", tercerColorDesdeElFinal); 

// 3. concat: combina dos o más arreglos en uno nuevo. Es decir, toma los elementos de varios arreglos y los junta en un solo arreglo más grande.

const frutas = ['manzana', 'banana'];
const verduras = ['zanahoria', 'lechuga'];

const alimentos = frutas.concat(verduras);
console.log(alimentos); 

// 4. constructor: Se usa para crear objetos.Es una función especial dentro de una clase que se ejecuta automáticamente cuando se crea una nueva instancia de esa clase.

class Coche {
  constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
  }
}

const miCoche = new Coche("Toyota", "Corolla");

console.log(miCoche.marca); 
console.log(miCoche.modelo); 

// 5. copyWhithin
