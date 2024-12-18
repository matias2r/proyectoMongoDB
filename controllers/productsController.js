const productsModel = require("../models/productsModel");

// POST: Crear un producto
exports.createProduct = async (req, res) => {
  try {
    const { nombre, precio, descripcion, stock, categoria } = req.body;
    const imagen = req.file
      ? `/uploads/${req.file.filename.replace(/\\/g, "/")}`
      : null;

    const newProduct = new productsModel({
      nombre,
      precio,
      descripcion,
      stock,
      categoria,
      imagen,
    });

    await newProduct.save();
    res
      .status(200)
      .json({ message: "Producto creado exitosamente", product: newProduct });
  } catch (error) {
    console.error("Error al crear el producto:", error); // Log de error
    res
      .status(500)
      .json({ message: "Error interno del servidor", error: error.message });
  }
};

// GET: Obtener todos los productos
exports.getProducts = async (req, res) => {
  try {
    let products = await productsModel.find(); // Obtén los productos desde la base de datos

    // Corrige las rutas de las imágenes
    products = products.map((product) => ({
      ...product._doc, // Desestructura el objeto del producto
      imagen: product.imagen
        ? product.imagen.replace(/^public[\\/]+/, "").replace(/\\/g, "/")
        : null,
    }));

    res.status(200).json(products); // Envía los productos con rutas corregidas
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los productos", error });
  }
};

// GET: Obtener un producto por ID
exports.getProductsById = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).send({ message: "ID de producto no válido" });
    }

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
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).send({ message: "ID de producto no válido" });
    }

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
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).send({ message: "ID de producto no válido" });
    }

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
