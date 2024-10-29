const mongoose = require("mongoose");

// Definicion de esquema Schema para usuarios
const usuariosSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      match: /.+\@.+\..+/,
    },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const usuariosModel = mongoose.model("users", usuariosSchema);

// Exportar el modelo
module.exports = usuariosModel;
