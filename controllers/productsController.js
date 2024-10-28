const productsModel = require("../models/productsModel");

// POST: Crear un producto
exports.createProduct = async (req, res) => {
  try {
    const producto = new productsModel(req.body);
    const nuevoProducto = await producto.save();
    console.log("Producto creado con éxito", nuevoProducto);
    res.status(201).json(producto);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

// GET: Obtener todos los productos
exports.getProducts = async (req, res) => {
  try {
    const productos = await productsModel.find();
    res.json(productos);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// GET: Obtener un producto por ID
exports.getProductsById = async (req, res) => {
  try {
    const producto = await productsModel.findById(req.params.id);
    if (!producto) {
      return res.status(404).send({ message: "Producto no encontrado" });
    }
    res.json(producto);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// PUT: Actualizar un producto por ID
exports.updateProduct = async (req, res) => {
  try {
    const producto = await productsModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!producto) {
      return res.status(404).send({ message: "Producto no encontrado" });
    }
    res.json(producto);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// DELETE: Eliminar un producto por ID
exports.deleteProduct = async (req, res) => {
  try {
    const productoEliminado = await productsModel.findByIdAndDelete(
      req.params.id
    );
    if (!productoEliminado) {
      return res.status(404).send({ message: "Producto no encontrado" });
    }
    res.json({ message: "Producto eliminado con éxito" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
