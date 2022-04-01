const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var librosSchema = Schema({
  nombre: { type: String, required: true, unique: true },
  estado: { type: Boolean, required: true, default: false },
  // categoriaId: { type: Schema.ObjectId, ref: 'Categoria' },
});

const Libros = mongoose.model('Libros', librosSchema);
module.exports = { Libros };
