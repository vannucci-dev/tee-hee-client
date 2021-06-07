const express = require("express");

const auth = express.Router();

const bcrypt = require("bcrypt");
const pool = require("../../config/dbConfig");
require("dotenv").config();
const session = require("express-session");
const passport = require("passport");

const initializePassport = require("../../config/passportConfig");

initializePassport(passport);

auth.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

auth.use(passport.initialize());
auth.use(passport.session());

const checkAuthenticated = (req, res) => {
  console.log("Check if authenticated:");
  console.log(req.isAuthenticated());
  res.send(req.isAuthenticated());
};

auth.get("/login", checkAuthenticated);
auth.get("/signup", checkAuthenticated);

auth.post("/signup", async (req, res) => {
  const { email, first_name, last_name, username, password, password2 } =
    req.body;
  let errors = [];
  if (
    !email ||
    !first_name ||
    !last_name ||
    !username ||
    !password ||
    !password2
  ) {
    errors.push({ message: "All fields need to be filled." });
  }
  if (password.length < 6) {
    errors.push({ message: "Password needs to be 6 characters or more." });
  }
  if (password !== password2) {
    errors.push({
      message: "The two passwords do not match. Please try again.",
    });
  }
  if (errors.length > 0) {
    res.status(400).send({ errors: errors });
  } else {
    //Form validation passed
    let hashedPassword = await bcrypt.hash(password, 10);
    pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email],
      (err, results) => {
        if (err) {
          throw err;
        }
        if (results.rows.length > 0) {
          errors.push({
            message:
              "The email has already been used. Please login or use a different email.",
          });
          res.status(400).send({ errors: errors });
        } else {
          pool.query(
            "INSERT INTO users (email, password, first_name, last_name, username) VALUES ($1, $2, $3, $4, $5) RETURNING user_id;",
            [email, hashedPassword, first_name, last_name, username],
            (err, results) => {
              if (err) {
                throw err;
              }
              res.status(200).send(results.rows[0]);
            }
          );
        }
      }
    );
  }
});

auth.post(
  "/login",
  (req, res, next) => {
    console.log("index.js/auth, login, the value of req.body is: ");
    console.log(req.body);
    next();
  },
  passport.authenticate("local"),
  (req, res) => {
    console.log("loggedin", req.user);

    var userInfo = {
      userID: req.user.user_id,
      username: req.user.username,
      name: req.user.first_name,
      email: req.user.email,
    };
    res.send(userInfo);
  }
);

auth.get("/logout", (req, res) => {
  req.logOut();
  res.status(200).send("loggedout");
});

module.exports = auth;
