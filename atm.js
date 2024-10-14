const Queue = require('./queue');

// Crear una nueva instancia de la cola
const atmQueue = new Queue();

// Simular agregar personas a la cola
atmQueue.enqueue({ name: 'Persona 1', amount: 100, arrivalTime: '09:00' });
atmQueue.enqueue({ name: 'Persona 2', amount: 200, arrivalTime: '09:05' });
atmQueue.enqueue({ name: 'Persona 3', amount: 150, arrivalTime: '09:10' });

// Mostrar la cola
console.log("Personas en la cola:");
console.log(atmQueue.printQueue());

// Atender a la primera persona en la cola
console.log("\nAtendiendo a:");
console.log(atmQueue.dequeue());

// Mostrar la cola después de atender a la primera persona
console.log("\nPersonas restantes en la cola:");
console.log(atmQueue.printQueue());
