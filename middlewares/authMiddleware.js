const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.header("Autorizacion");

  if (!token) {
    return res
      .status(401)
      .json({ message: "Acceso denegado. No se genero el token de acceso" });
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).json({ message: "Token no es válido" });
  }
};

module.exports = verifyToken;
