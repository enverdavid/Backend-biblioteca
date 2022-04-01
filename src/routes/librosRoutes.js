const express = require('express');
const routerLibros = express.Router();

// Traemos los controladores necesarios
const {
  traerLibros,
  crearLibro,
  actualizarLibro,
  borrarLibro
} = require('../controllers/librosControllers');

routerLibros.get('/', traerLibros);
routerLibros.post('/', crearLibro);
routerLibros.put('/:id', actualizarLibro);
routerLibros.delete('/:id', borrarLibro);

module.exports = { routerLibros };
