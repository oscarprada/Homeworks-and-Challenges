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
  isEvenArrow(6); // Imprime "El número 6 es par.""