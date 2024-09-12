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
