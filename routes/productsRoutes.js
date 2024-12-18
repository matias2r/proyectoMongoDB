const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController");
const upload = require("../services/multerConfig");

// POST: Crear un producto
router.post(
  "/create",
  upload.single("imagen"),
  productsController.createProduct
);

// GET: Obtener todos los productos
router.get("/readall", productsController.getProducts);

// GET: Obtener un producto por ID
router.get("/readone/:id", productsController.getProductsById);

// PUT: Actualizar un producto por ID
router.put("/update/:id", productsController.updateProduct);

// DELETE: Eliminar un producto por ID
router.delete("/delete/:id", productsController.deleteProduct);

module.exports = router;
