const fs = require('fs');

const funciones = [
  {
    name: 'agregar',
    code: `let frutas = ['manzana', 'plátano'];\nfrutas.push('naranja'); // ['manzana', 'plátano', 'naranja']\n`
  },
  {
    name: 'eliminarUltimo',
    code: `let frutas = ['manzana', 'plátano', 'naranja'];\nlet ultimaFruta = frutas.pop(); // ultimaFruta es 'naranja', frutas es ['manzana', 'plátano']\n`
  },
  {
    name: 'eliminarPrimero',
    code: `let frutas = ['manzana', 'plátano', 'naranja'];\nlet primeraFruta = frutas.shift(); // primeraFruta es 'manzana', frutas es ['plátano', 'naranja']\n`
  },
  {
    name: 'agregarAlInicio',
    code: `let frutas = ['plátano', 'naranja'];\nfrutas.unshift('manzana'); // ['manzana', 'plátano', 'naranja']\n`
  },
  {
    name: 'porCada',
    code: `let numeros = [1, 2, 3];\nnumeros.forEach(num => console.log(num)); // imprime 1, 2, 3\n`
  },
  {
    name: 'mapear',
    code: `let numeros = [1, 2, 3];\nlet duplicados = numeros.map(num => num * 2); // [2, 4, 6]\n`
  },
  {
    name: 'filtrar',
    code: `let numeros = [1, 2, 3, 4];\nlet numerosPares = numeros.filter(num => num % 2 === 0); // [2, 4]\n`
  },
  {
    name: 'reducir',
    code: `let numeros = [1, 2, 3, 4];\nlet suma = numeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0); // 10\n`
  },
  {
    name: 'encontrar',
    code: `let numeros = [1, 2, 3, 4];\nlet encontrado = numeros.find(num => num > 2); // 3\n`
  },
  {
    name: 'encontrarIndice',
    code: `let numeros = [1, 2, 3, 4];\nlet indice = numeros.findIndex(num => num > 2); // 2\n`
  },
  {
    name: 'incluye',
    code: `let frutas = ['manzana', 'plátano', 'naranja'];\nlet tienePlatano = frutas.includes('plátano'); // true\n`
  },
  {
    name: 'concatenar',
    code: `let frutas = ['manzana', 'plátano'];\nlet masFrutas = ['naranja', 'mango'];\nlet todasLasFrutas = frutas.concat(masFrutas); // ['manzana', 'plátano', 'naranja', 'mango']\n`
  },
  {
    name: 'rebanar',
    code: `let frutas = ['manzana', 'plátano', 'naranja', 'mango'];\nlet algunasFrutas = frutas.slice(1, 3); // ['plátano', 'naranja']\n`
  },
  {
    name: 'cortar',
    code: `let frutas = ['manzana', 'plátano', 'naranja', 'mango'];\nfrutas.splice(2, 1, 'piña'); // ['manzana', 'plátano', 'piña', 'mango']\n`
  },
  {
    name: 'unir',
    code: `let frutas = ['manzana', 'plátano', 'naranja'];\nlet frutasUnidas = frutas.join(', '); // 'manzana, plátano, naranja'\n`
  },
  {
    name: 'ordenar',
    code: `let numeros = [4, 2, 1, 3];\nnumeros.sort(); // [1, 2, 3, 4]\n`
  },
  {
    name: 'revertir',
    code: `let frutas = ['manzana', 'plátano', 'naranja'];\nfrutas.reverse(); // ['naranja', 'plátano', 'manzana']\n`
  },
  {
    name: 'todos',
    code: `let numeros = [2, 4, 6];\nlet todosPares = numeros.every(num => num % 2 === 0); // true\n`
  },
  {
    name: 'algunos',
    code: `let numeros = [1, 2, 3];\nlet hayImpar = numeros.some(num => num % 2 !== 0); // true\n`
  },
  {
    name: 'aplanar',
    code: `let arr = [1, 2, [3, 4], [5, [6]]];\nlet aplanado = arr.flat(2); // [1, 2, 3, 4, 5, 6]\n`
  },
  {
    name: 'mapearAplanar',
    code: `let arr = [1, 2, 3];\nlet resultado = arr.flatMap(x => [x, x * 2]); // [1, 2, 2, 4, 3, 6]\n`
  },
  {
    name: 'rellenar',
    code: `let arr = [1, 2, 3, 4];\narr.fill(0, 2, 4); // [1, 2, 0, 0]\n`
  },
  {
    name: 'copiarDentro',
    code: `let arr = [1, 2, 3, 4, 5];\narr.copyWithin(0, 3); // [4, 5, 3, 4, 5]\n`
  },
  {
    name: 'aCadena',
    code: `let arr = [1, 2, 3];\nlet str = arr.toString(); // '1,2,3'\n`
  },
  {
    name: 'reducirDerecha',
    code: `let arr = [1, 2, 3, 4];\nlet resultado = arr.reduceRight((acc, val) => acc + val); // 10\n`
  }
];

funciones.forEach(fn => {
  fs.writeFileSync(`${fn.name}.js`, fn.code, err => {
    if (err) {
      console.error(`Error al escribir el archivo para ${fn.name}:`, err);
    } else {
      console.log(`El archivo ${fn.name}.js ha sido creado`);
    }
  });
});

console.log('Todos los archivos se han creado exitosamente.');
