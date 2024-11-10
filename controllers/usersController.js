const User = require("../models/usersModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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

    // Crear token de usuario
    const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({ message: "Usuario logueado", token });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error al loguear usuario", error: error.message });
  }
};

exports.verifyUser = async (req, res) => {
  try {
    const userId = req.user.id;

    const user = await User.findById(userId).select("-password");

    if (!user) {
      return res.status(400).json({ message: "Usuario no encontrado" });
    }

    res.status(200).json({ user });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error al verificar usuario", error: error.message });
  }
};

// PUT: Actualizar usuario por ID
exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!user) {
      return res.status(404).send({ message: "Usuario no encontrado" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los usuarios", error });
  }
};
