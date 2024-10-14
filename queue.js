class Queue {
    constructor() {
      this.items = [];
    }
  
    // Agregar una persona a la cola
    enqueue(element) {
      this.items.push(element);
    }
  
    // Retirar una persona de la cola
    dequeue() {
      if (this.isEmpty()) {
        return "La cola está vacía";
      }
      return this.items.shift();
    }
  
    // Verificar si la cola está vacía
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Ver el primer elemento de la cola
    front() {
      if (this.isEmpty()) {
        return "La cola está vacía";
      }
      return this.items[0];
    }
  
    // Ver todos los elementos de la cola
    printQueue() {
      return this.items;
    }
  }
  
  module.exports = Queue;
  