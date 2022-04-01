const express = require('express');
const routerCategorias = express.Router();

// Traemos los controladores necesarios
const {
  traerCategorias,
  crearCategoria,
  actualizarCategoria,
  borrarCategoria
} = require('../controllers/categoriaControllers.');

routerCategorias.get('/', traerCategorias);
routerCategorias.post('/', crearCategoria);
routerCategorias.put('/:id', actualizarCategoria);
routerCategorias.delete('/:id', borrarCategoria);

module.exports = { routerCategorias };
