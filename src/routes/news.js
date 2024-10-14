const express = require('express');
const News = require('../models/News');

const router = express.Router();

// Crear una noticia
router.post('/', async (req, res) => {
    const { title, description, category } = req.body;
    try {
        const newNews = new News({ title, description, category });
        await newNews.save();
        res.status(201).json(newNews);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Obtener todas las noticias
router.get('/', async (req, res) => {
    try {
        const news = await News.find().populate('category');
        res.json(news);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Otras rutas (actualizar, eliminar) se pueden agregar aquí

module.exports = router;
