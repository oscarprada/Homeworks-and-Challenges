

const express = require('express');
const connectDB = require('./db');

const categoryRoutes = require('./routes/categories');
const newsRoutes = require('./routes/news');

const app = express();
const PORT = process.env.PORT || 5000;

// Conectar a la base de datos
connectDB();

// Middleware para parsear JSON
app.use(express.json());

// Usar las rutas
app.use('/api/categories', categoryRoutes);
app.use('/api/news', newsRoutes);

// Ruta principal
app.get('/', (req, res) => {
    res.send('API en funcionamiento');
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});






