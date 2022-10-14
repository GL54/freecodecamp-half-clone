const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const User = require("../../model/UserModel");
const jwt = require("jsonwebtoken");
const { OAuth2Client } = require("google-auth-library");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};
const signIn = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  console.log(email, password);
  if (!email || !password) {
    console.log("invalid data");
    res.status(400);
    throw new Error("Please enter all the fields");
  }
  if (await User.findOne({ email: email })) {
    console.log("email exist");
    res.status(400).json("user already exists");
    throw new Error("User already exists");
  }

  const salt = await bcrypt.genSalt(Number(process.env.SALT));
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = User.create({ name, email, password: hashedPassword });

  if (user) {
    res.status(201).json({ email: user.email, token: generateToken(user._id) });
  } else {
    console.log("invalid");
    res.status(400);
    throw new Error("Invalid data");
  }
});

// handles google login
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const googleSignIn = asyncHandler(async (req, res) => {
  //login
  const { idToken } = req.body;
  console.log("test");

  client
    .verifyIdToken({ idToken, audience: process.env.GOOGLE_CLIENT_ID })
    .then((response) => {
      console.log("verified");
      const { email_verified, name, email } = response.payload;

      if (email_verified) {
        User.findOne({ email }).exec((err, user) => {
          if (user) {
            generateToken(user._id);
            const { _id, email, name } = user;
            return res.json({
              token,
              user: { _id, email, name },
            });
          } else {
            const password = email + process.env.JWT_SECRET;

            user = User.create({ name, email, password });
            user
              .save((err, data) => {
                if (err) {
                  return res.status(400).json({
                    error: "User signup failed with google",
                  });
                }
                const token = jwt.sign(
                  { _id: data._id },
                  process.env.JWT_SECRET,
                  { expiresIn: "7d" }
                );
                const { _id, email, name } = data;
                if (User.findOne({ email: email })) {
                  res.json({ message: "Email already exist" });
                } else {
                  return res.json({
                    token,
                    user: { _id, email, name },
                  });
                }
              })
              .catch((err) => {
                return res.status(401).json({
                  message: "signup error",
                });
              });
          }
        });
      } else {
        return res.status(400).json({
          error: "Google login failed. Try again",
        });
      }
    });
});
module.exports = { signIn, googleSignIn };
