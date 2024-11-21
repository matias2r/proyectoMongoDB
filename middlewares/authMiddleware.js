const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.header["authorization"];

  if (!token) {
    return res
      .status(401)
      .json({ message: "Acceso denegado. No se proporcionó token." });
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.email = verified.email;
    next();
  } catch (error) {
    res.status(400).json({ message: "Token no válido." });
  }
};

module.exports = verifyToken;
