const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect Database
connectDB();

// Init Middleware
app.use(cors());
app.use(express.json());

// Rutas de la API
app.use("/api", require("./routes/productsRoutes"));

// Show API links
const showApiLinks = (port) => {
  console.log(`\nAPI disponible en las siguientes rutas:`);
  console.log(
    `- Products (GET todos): \x1b[36mhttp://localhost:${port}/api/product/readall\x1b[0m`
  );
  console.log(
    `- Product (GET por ID): \x1b[36mhttp://localhost:${port}/api/product/readone/:id\x1b[0m`
  );
  console.log(
    `- Product (POST crear): \x1b[36mhttp://localhost:${port}/api/product/create\x1b[0m`
  );
  console.log(
    `- Product (PUT actualizar): \x1b[36mhttp://localhost:${port}/api/product/update/:id\x1b[0m`
  );
  console.log(
    `- Product (DELETE eliminar): \x1b[36mhttp://localhost:${port}/api/product/delete/:id\x1b[0m`
  );
};

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
  showApiLinks(PORT);
});
