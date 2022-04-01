const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var categoriaSchema = Schema({
  nombre: { type: String, required: true, unique: true },
});

const Categoria = mongoose.model('Categoria', categoriaSchema);
module.exports = { Categoria };
