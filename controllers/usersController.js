const User = require("../models/usersModel");
const bcrypt = require("bcryptjs");

// POST: Crear un usuario
exports.createUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Verificar si el usuario o correo ya está registrado
    let user = await User.findOne({ username });
    let correo = await User.findOne({ email });

    // Si el usuario o email ya existe, enviar un mensaje de error
    if (user) {
      return res.status(400).json({ message: "El usuario ya existe" });
    } else if (correo) {
      return res.status(400).json({ message: "El correo ya está registrado" });
    }

    // Crear un nuevo usuario
    user = new User({
      username,
      email,
      password: await bcrypt.hash(password, 10), // Encriptar la contraseña
    });

    await user.save();

    res.status(201).json({ message: "Usuario creado" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error al crear usuario", error: error.message });
  }
};
