const { Categoria } = require('../models/categorias');

const traerCategorias = async (req, res) => {
  try {
    const categorias = await Categoria.find({});
    await res.status(200).json({ data: categorias });
  } catch (error) {
    return res.status(400).send({ message: error });
  }
};

const crearCategoria = async (req, res) => {
  const nuevaCategoria = new Categoria(req.body);
  nuevaCategoria.save((err, categoria) => {
    try {
      return res.status(201).send({ categoria });
    } catch (error) {
      res.status(400).send({ message: err });
    }
  });
};

const actualizarCategoria = async (req, res) => {
  const categoriaId = req.params.id || null;

  const resultado = await Categoria.findByIdAndUpdate(categoriaId, req.body, {
    new: true,
  });

  try {
    res.status(201).send({ resultado });
  } catch (error) {
    res.status(400).send({ message: error });
  }
};

const borrarCategoria = async (req, res) => {
  const categoriaId = req.params.id;

  try {
    await Categoria.findOneAndRemove({ _id: categoriaId });
    res
      .status(200)
      .json({
        message: 'Se borró la categoría seleccionada de la base de datos',
      });
  } catch (error) {
    res.status(400).send({ message: error });
  }
};

module.exports = {
  traerCategorias,
  crearCategoria,
  actualizarCategoria,
  borrarCategoria,
};
