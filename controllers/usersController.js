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
      // Contraseña encriptada con bcrypt
      password: await bcrypt.hash(password, 10),
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

// Login de usuario
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Verificar si el usuario existe
    const user = await User.findOne({ email });

    // Si el usuario no existe, enviar un mensaje de error
    if (!user) {
      return res.status(400).json({ message: "Usuario no encontrado" });
    }

    // Verificar la contraseña
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(400).json({ message: "Contraseña incorrecta" });
    }

    res.status(200).json({ message: "Usuario logueado" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error al loguear usuario", error: error.message });
  }
};
