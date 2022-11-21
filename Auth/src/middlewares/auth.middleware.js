const jwt = require("jsonwebtoken");

const { setError } = require("../helpers/error/handle.error");

const isAuth = (req, res, next) => {
  const authorization = req.headers.authorization;

  if (!authorization)
    return res.json(setError(401, "Not authorized"));
  //llamamos a la función que devuelve el token con la autorización
  const splits = authorization.split(" ");
  //debería aparecer un strings con dos valores, el bearer y el token
  //si no aparecen esos dos valores, devolvemos error
  if (splits.length != 2 || splits[0] != "Bearer")
    return res.json(setError(400, "Not beared"));
  //si aparecen, devolvemos el token
  const jwtStringify = splits[1];
  //comprobamos que el token es válido con la secretKey
  try {
    var token = jwt.verify(jwtStringify, req.app.get("secretKey"));
  } catch (error) {
    return next(setError(500, "Token invalid"));
  }
//creamos una id y un name para autorizar y avanzar en la página
  const authority = {
    id: token.id,
    name: token.name,
  };

  req.authority = authority;
  //con el next() dejamos a user continuar en la página, lo autorizamos
  next();
};

module.exports = { isAuth };