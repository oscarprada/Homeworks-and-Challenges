import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Función para manejar el inicio de sesión
  const handleLogin = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para iniciar sesión con Firebase
    console.log('Iniciando sesión con:', email, password);
  };

  // Función para manejar el registro
  const handleRegister = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para registrar el usuario con Firebase
    console.log('Registrando nuevo usuario con:', email, password);
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Iniciar Sesión</button>
      </form>

      <h2>Registrarse</h2>
      <form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default Login;
