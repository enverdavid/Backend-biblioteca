const { Libros } = require('../models/libros');

const traerLibros = async (req, res) => {
  try {
    const libros = await Libros.find({});
    await res.status(200).json({ data: libros });
  } catch (error) {
    return res.status(400).send({ message: error });
  }
};

const crearLibro = async (req, res) => {
  const nuevosLibros = new Libros(req.body);
  nuevosLibros.save((err, books) => {
    try {
      return res.status(201).send({ books });
    } catch (error) {
      res.status(400).send({ message: err });
    }
  });
};

const actualizarLibro = async (req, res) => {
  const libroId = req.params.id || null;
  if (libroId === undefined) {
    return res.status(404).send({ message: 'libroId no válido!' });
  }

  const resultado = await Libros.findByIdAndUpdate(libroId, req.body, {new: true});

  try {
    res.status(201).send({resultado});
  } catch (error) {
    res.status(400).send({message: error});
  }
};

const borrarLibro = async (req, res) => {
  const libroId = req.params.id;

  // NO valida un id vacío 
  // if (libroId == null) {
  //   return res.status(404).send({message: 'Id de libro no válido'});
  // }

  try {
    await Libros.findOneAndRemove({_id: libroId});
    res.status(200).json({message: 'Se borro el libro de la base de datos'});
  } catch (error) {
    res.status(400).send({message: error});
  }

};

module.exports = { traerLibros, crearLibro, actualizarLibro, borrarLibro };
