const mongoose = require("mongoose");

// Definicion de esquema Shema para productos
const productsSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    precio: { type: Number, required: true },
    stock: { type: Number, required: true },
    categoria: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const productsModel = mongoose.model("products", productsSchema);

module.exports = productsModel;
