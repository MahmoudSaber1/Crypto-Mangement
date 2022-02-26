const { default: mongoose } = require("mongoose");

const UsersScheme = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  key: {
    type: String,
    required: true,
  },
});

const Users = mongoose.model("Users", UsersScheme);

module.exports = Users;
