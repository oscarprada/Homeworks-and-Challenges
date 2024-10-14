# Proyecto de Árbol Genealógico

Este proyecto utiliza una estructura de datos para manejar información sobre un árbol genealógico, donde cada persona puede tener varios hijos y cada persona es descendiente de solo una persona.

## Estructura de Datos

- **Clase `Person`:** 
  - Representa a una persona en el árbol genealógico.
  - Contiene propiedades para el nombre, los hijos y el padre.
  - Métodos:
    - `addChild(child)`: Agrega un hijo a la persona y establece el padre.
    - `getFamily()`: Devuelve un objeto con el nombre de la persona y los nombres de sus hijos.

## Cómo Usar

1. Clona o descarga este repositorio.
2. Asegúrate de tener [Node.js](https://nodejs.org/) instalado en tu máquina.
3. Navega a la carpeta del proyecto en la terminal.
4. Ejecuta el archivo `familyTree.js` con el siguiente comando:
   ```bash
   node familyTree.js
