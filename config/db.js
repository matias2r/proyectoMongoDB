// Importacion modulo mongoose
const mongoose = require("mongoose");

// Conexion a la base de datos
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Conectado a la base de datos");
  } catch (error) {
    console.log(error);
    console.log("Error al conectar a la base de datos");

    // Salir del proceso con error
    process.exit(1);
  }
};

module.exports = connectDB;
