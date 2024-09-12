# Homeworks-and-Challenges
Estructura de datos II

//1.	Array Length(): Es una propiedad que te indica la cantidad de elementos que hay en un arreglo. 

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

// 2. at(): Es como se accede a elementos dentro de un arreglo

const colores = ['rojo', 'verde', 'azul', 'amarillo'];

const segundoColor = colores.at(1);
console.log("El segundo color es:", segundoColor); 

const tercerColorDesdeElFinal = colores.at(-3);
console.log("El tercer color desde el final es:", tercerColorDesdeElFinal); 

// 3. concat(): combina dos o más arreglos en uno nuevo. Es decir, toma los elementos de varios arreglos y los junta en un solo arreglo más grande.

const frutas = ['manzana', 'banana'];
const verduras = ['zanahoria', 'lechuga'];

const alimentos = frutas.concat(verduras);
console.log(alimentos); 

// 4. constructor(): Se usa para crear objetos.Es una función especial dentro de una clase que se ejecuta automáticamente cuando se crea una nueva instancia de esa clase.

class Coche {
  constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
  }
}

const miCoche = new Coche("Toyota", "Corolla");

console.log(miCoche.marca); 
console.log(miCoche.modelo); 

// 5. copyWhithin(): Permite copiar una sección de un arreglo a otra posición dentro del mismo arreglo. Es decir, toma un segmento de elementos y los mueve a un nuevo lugar, sobrescribiendo los elementos que ya existían allí. Esto resulta útil cuando se necesita reorganizar los datos dentro de un arreglo sin crear un nuevo arreglo.

const numeros = [1, 2, 3, 4, 5];
numeros.copyWithin(1, 3); 
console.log(numeros); 

// 6. entries(): Util para iterar sobre los elementos de un arreglo, proporciona tanto el índice como el valor de cada elemento en cada iteración.

const colores = ['rojo', 'verde', 'azul'];
const objetoColores = {};

for (const [indice, color] of colores.entries()) {
  objetoColores[indice] = color;
}

console.log(objetoColores); 

// 7. every(): Se usa cuando se necesita verificar si todos los elementos de un arreglo cumplen con una determinada condición.

const numeros = [11, 15, 18, 20];

const todosMayoresA10 = numeros.every(numero => numero > 10);

console.log(todosMayoresA10); 

// 8. fill(): Sirve para completar un arreglo; con un valor específico. Es decir, reemplaza todos los elementos de un arreglo por el valor que se le indique.

const saludos = new Array(5).fill('hola');
console.log(saludos); 

// 9. filter():Sirve para crear un nuevo arreglo a partir de un arreglo existente, pero filtrando solo los elementos que cumplan una condición específica.

const numeros = [1, 2, 3, 4, 5];

const numerosPares = numeros.filter(numero => numero % 2 === 0);
console.log(numerosPares); 

// 10. find (): se usa cuando se necesita encontrar el primer elemento de un arreglo que cumpla con una condición específica. A diferencia de filter(), que devuelve un nuevo arreglo con todos los elementos que cumplen la condición, find() solo devuelve el primer elemento que encuentra.

const numeros = [1, 2, 3, 4, 5];
const numeroBuscado = numeros.find(numero => numero === 3);
console.log(numeroBuscado); 

// 11. findIndex ():  Útil cuando se necesita encontrar el índice del primer elemento en un arreglo que cumple con una condición específica. Es decir, en lugar de devolverte el elemento en sí, te dice en qué posición se encuentra ese elemento.

const numeros = [1, 2, 3, 4, 5];
const indiceDelTres = numeros.findIndex(numero => numero === 3);
console.log(indiceDelTres); 

// 12. findLast(): Se usa cuando se quiere encontrar el último elemento de un arreglo que cumple con una condición específica. Es decir, busca desde el final del arreglo hacia el principio, lo opuesto a find().

const numeros = [1, 2, 3, 4, 3, 2, 1];
const ultimoTres = numeros.findLast(numero => numero === 3);
console.log(ultimoTres); 

// 13. findLastIndex(): Es una herramienta muy útil cuando se necesita encontrar el índice del último elemento en un arreglo que cumple con una determinada condición. Es decir, busca desde el final del arreglo hacia el principio e imprime en qué posición se encuentra el último elemento que cumple el criterio.

const numeros = [1, 2, 3, 4, 3, 2, 1];

const indiceDelUltimoTres = numeros.findLastIndex(numero => numero === 3);
console.log(indiceDelUltimoTres); 

// 14. flat(): Convierte un arreglo que contiene otros arreglos en un único arreglo unidimensional. Esto es especialmente útil cuando se trabaja con datos estructurados en múltiples niveles y se necesita obtener una representación más plana.

const arrayAnidado = [1, 2, [3, 4], 5, [6, 7]];

const arrayAplanado = arrayAnidado.flat();
console.log(arrayAplanado); 

// 15, flatMap(): Es una combinación de los métodos map() y flat(). Primero aplica una función a cada elemento de un arreglo y luego aplana el resultado en un nuevo arreglo. Es una forma eficiente de transformar y aplanar arreglos anidados en una sola operación.

const numeros = [1, 2, 3];

const numerosDobladosYConLetras = numeros.flatMap(num => [num * 2, 'x' + num]);
console.log(numerosDobladosYConLetras); 

// 16. forEach(): Itera sobre cada elemento de un arreglo y ejecuta una función específica para cada uno. En otras palabras, permite recorrer todos los elementos de un arreglo y realizar alguna acción con cada uno de ellos.

const frutas = ['manzana', 'banana', 'cereza'];

frutas.forEach(function(fruta) {
  console.log(fruta);
});

// 17. includes (): Se utiliza para determinar si un arreglo contiene un elemento específico. Es una forma sencilla y directa de verificar la existencia de un valor dentro de un arreglo.

const frutas = ['manzana', 'banana', 'cereza'];

const existeManzana = frutas.includes('manzana');
console.log(existeManzana); 

// 18. indexOf: Se usa cuando se quiere encontrar la posición (índice) del primer elemento que coincida con un valor específico dentro de un arreglo. Es decir, te dice en qué lugar se encuentra ese elemento.

const frutas = ['manzana', 'banana', 'cereza', 'manzana'];
const indicePrimeraManzana = frutas.indexOf('manzana');
console.log(indicePrimeraManzana);

// 19. join(): se utiliza para convertir un arreglo en una cadena de texto. Toma todos los elementos del arreglo y los une en una sola cadena, utilizando un separador que el usuario puede especificar.

const frutas = ['manzana', 'banana', 'cereza'];
const cadenaDeFrutas = frutas.join('-');
console.log(cadenaDeFrutas); 

// 20. keys(): Se usa para obtener un iterador que contiene las claves de un arreglo. Este iterador te permite recorrer las claves (índices) de un arreglo de manera secuencial.

const frutas = ['manzana', 'banana', 'cereza'];
const claves = frutas.keys();

for (let clave of claves) {
  console.log(clave); 
}

// 21. lastIndexOf: Permite encontrar el último índice en el que un elemento específico aparece dentro de un arreglo. A diferencia de indexOf(), que busca desde el principio, lastIndexOf() comienza la búsqueda desde el final del arreglo y retrocede.

const frutas = ['manzana', 'banana', 'cereza', 'manzana'];

const indiceUltimaManzana = frutas.lastIndexOf('manzana');
console.log(indiceUltimaManzana); 

// 22. length:0 : Este arreglo en JavaScript tiene como efecto principal vaciar completamente dicho arreglo. Es decir, elimina todos los elementos que contenía el arreglo, dejándolo sin ningún elemento.

const frutas = ['manzana', 'banana', 'cereza'];
console.log(frutas); // Imprime: ['manzana', 'banana', 'cereza']

frutas.length = 0;
console.log(frutas); 

