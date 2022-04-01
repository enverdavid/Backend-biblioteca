const mongoose = require('mongoose');

const conectar = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/ejemplito'); // Conectar a la base de datos correcta
    console.log('Conexión a la db exitosa');
  } catch (error) {
    console.log(error)
  }
};

conectar();