const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");

// POST: Crear un usuario
router.post("/create", usersController.createUser);

// Login de usuario
router.post("/login", usersController.loginUser);

// GET: Obtener todos los usuarios
// router.get("/readall", userController.getUsers);

// // GET: Obtener un usuario por ID
// router.get("/readone/:id", userController.getUsersById);

// // PUT: Actualizar un usuario por ID
// router.put("/update/:id", userController.updateUser);

// // DELETE: Eliminar un usuario por ID
// router.delete("/delete/:id", userController.deleteUser);

module.exports = router;
