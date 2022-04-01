const express = require('express');
const app = express();
const { routerLibros } = require('./routes/librosRoutes');
const { routerCategorias } = require('./routes/categoriaRoutes');
require('./config/db');

const PORT = 4001;

// Middlewares
app.use(express.json());

app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`));

// API Route
app.use('/libros', routerLibros);
app.use('/categorias', routerCategorias);
