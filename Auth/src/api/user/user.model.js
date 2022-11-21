const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

//encriptamos la contraseña, haciendo una función antes de guardar
//la contraseña, y la "hasheará", le cambia los valores
userSchema.pre("save", function (next) {
  this.password = bcrypt.hashSync(this.password, 10);
  next();
});

module.exports = mongoose.model("users", userSchema);
