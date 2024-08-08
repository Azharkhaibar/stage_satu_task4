const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  nama: { type: String, required: true },
  alamat: { type: String, required: true },
  telepon: { type: String, required: true },
  email: { type: String, required: true },
  tanggal_lahir: { type: Date, required: true },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
