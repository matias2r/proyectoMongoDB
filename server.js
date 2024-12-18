const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Conectar base de datos
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Rutas de productos (CRUD)
app.use("/api/product", require("./routes/productsRoutes"));

// Rutas de usuarios (CRUD)
app.use("/api/user", require("./routes/usersRoutes"));

app.use("/uploads", express.static(path.join(__dirname, "public/uploads")));

// Mostrar enlaces de la API
const showApiLinks = (port) => {
  console.log(`\nAPI disponible en las siguientes rutas:`);
  console.log(`\nEndpoints Productos:`);
  console.log(
    `\n- Product (GET Todos los productos): \x1b[36mhttp://localhost:${port}/api/product/readall\x1b[0m`
  );
  console.log(
    `- Product (GET Por ID): \x1b[36mhttp://localhost:${port}/api/product/readone/:id\x1b[0m`
  );
  console.log(
    `- Product (POST Crear productos): \x1b[36mhttp://localhost:${port}/api/product/create\x1b[0m`
  );
  console.log(
    `- Product (PUT Actualizar por ID): \x1b[36mhttp://localhost:${port}/api/product/update/:id\x1b[0m`
  );
  console.log(
    `- Product (DELETE Eliminar): \x1b[36mhttp://localhost:${port}/api/product/delete/:id\x1b[0m`
  );

  console.log(`\nEndpoints Usuarios:`);
  // Enlaces de usuarios
  console.log(
    `\n- User (POST Crear Usuario): \x1b[36mhttp://localhost:${port}/api/user/create\x1b[0m`
  );
  console.log(
    `- User (PUT Actualizar por ID): \x1b[36mhttp://localhost:${port}/api/user/update/:id\x1b[0m`
  );
  console.log(
    `- User (POST Iniciar sesión): \x1b[36mhttp://localhost:${port}/api/user/login\x1b[0m`
  );
  console.log(
    `- User (GET Verificar el token): \x1b[36mhttp://localhost:${port}/api/user/verifytoken\x1b[0m`
  );
};

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
  showApiLinks(PORT);
});
