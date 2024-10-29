// Importacion modulo mongoose
const mongoose = require("mongoose");

// Conexion a la base de datos
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log(`\nConectado a la base de datos: ${mongoose.connection.name}`);
  } catch (error) {
    console.log(error);
    console.log("Error al conectar a la base de datos");

    // Salir del proceso con error
    process.exit(1);
  }
};

module.exports = connectDB;
