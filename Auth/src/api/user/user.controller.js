const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("./user.model");
const {setError} = require("../../helpers/error/handle.error")


const register = async (req, res, next) => {
  try {
    const newUser = new User(req.body);
    //comprobar si el user existe o no
    const userDuplicate = await User.findOne({ username: newUser.username });
    //si ya existe ese user, indicamos que ya existe
    if (userDuplicate) return next("User alredy exists");
    //si no existe, guardamos el user y devolvemos el mensaje
    const newUserDb = newUser.save();
    return res.json({
      status: 201,
      message: "user registered",
      data: newUserDb,
    });
  } catch (err) {
    return next(setError(500, "User register fail"));
  }
};

const login = async (req, res, next) => {
  try {
    const userInfo = await User.findOne({ username: req.body.username });
    if (bcrypt.compareSync(req.body.password, userInfo.password)) {
      //la contraseña la ponemos a null para que no se visualice
      userInfo.password = null;
      const token = jwt.sign(
        {
          id: userInfo._id,
          username: userInfo.username,
        },
        req.app.get("secretKey"),
        { expiresIn: "1h" }
      );
      return res.json({
        status: 200,
        message: "welcome User",
        user: userInfo,
        token: token,
      });
    } else {
      return next("Incorrect password");
    }
  } catch (error) {
    return next(setError(500, "User login fail"));
  }
};


const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    return res.json({
      status: 200,
      message: "Recovered all Users",
      data: { users },
    });
  } catch (error) {
    return next(setError(500, "Fail to recover Users"));
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    return res.status(200).json("User deleted");
  } catch (err) {
    return next(err);
  }
};

module.exports = { register, login, getUsers, deleteUser };
