// familyTree.js

class Person {
    constructor(name) {
        this.name = name;
        this.children = [];
        this.parent = null;
    }

    addChild(child) {
        child.parent = this;  // Establece al padre
        this.children.push(child);  // Añade el hijo a la lista de hijos
    }

    getFamily() {
        const family = {
            name: this.name,
            children: this.children.map(child => child.name),
        };
        return family;
    }
}

// Ejemplo de uso
const parent = new Person('Padre');
const child1 = new Person('Hijo 1');
const child2 = new Person('Hijo 2');

parent.addChild(child1);
parent.addChild(child2);

console.log(parent.getFamily());  // Muestra la familia del padre
