const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");
const verifyToken = require("../middlewares/authMiddleware");

// POST: Crear un usuario
router.post("/create", verifyToken, usersController.createUser);

// Login de usuario
router.post("/login", usersController.loginUser);

// GET: Leer todos los usuarios
router.get("/readall", usersController.getUsers);

// PUT: Actualizar un usuario por ID
router.put("/update/:id", verifyToken, usersController.updateUser);

// Ruta protegida
router.get("/verifytoken", verifyToken, (req, res) => {
  res.json({
    message: `Bienvenido, ${req.email}! Acceso permitido! Token validado con éxito.`,
  });
});

module.exports = router;
