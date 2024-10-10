import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home'; // Asegúrate de importar tus componentes
import Profile from './Profile';
import Dashboard from './Dashboard';
import NavComponent from './NavComponent';

const App = () => {
  return (
    <>
      <NavComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/" replace />} /> {/* Redirecciona a Home si no se encuentra */}
      </Routes>
    </>
  );
};

export default App;
