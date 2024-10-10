// src/Counter.js
import React, { useState } from 'react';

const Counter = ({ value }) => {
  // Definir el estado inicial usando el valor pasado como prop
  const [counter, setCounter] = useState(value);

  // Función para restar del contador
  const handleSubstract = () => {
    setCounter(counter - 1); // Restar 1 al contador actual
  };

  // Función para restablecer el contador al valor inicial
  const handleReset = () => {
    setCounter(value); // Establecer el contador al valor inicial pasado por props
  };

  return (
    <div>
      <h1>Counter Component</h1>
      <span>Counter Value: {counter}</span>
      <div>
        <button onClick={handleSubstract}>Substract</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
