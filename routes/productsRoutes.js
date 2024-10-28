const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController");

// POST: Crear un producto
router.post("/product/create", productsController.createProduct);

// GET: Obtener todos los productos
router.get("/product/readall", productsController.getProducts);

// GET: Obtener un producto por ID
router.get("/product/readone/:id", productsController.getProductsById);

// PUT: Actualizar un producto por ID
router.put("/product/update/:id", productsController.updateProduct);

// DELETE: Eliminar un producto por ID
router.delete("/product/delete/:id", productsController.deleteProduct);

module.exports = router;
