const express = require('express');
const Category = require('../models/Category');

const router = express.Router();

// Crear una categoría
router.post('/', async (req, res) => {
    const { title } = req.body;
    try {
        const newCategory = new Category({ title });
        await newCategory.save();
        res.status(201).json(newCategory);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Obtener todas las categorías
router.get('/', async (req, res) => {
    try {
        const categories = await Category.find().populate('news');
        res.json(categories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Otras rutas (actualizar, eliminar) se pueden agregar aquí

module.exports = router;
