const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: [true, "Enter your Email"],
      unique: true,
    },

    password: {
      type: String,
      required: [true, "Enter your Password"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", schema);
