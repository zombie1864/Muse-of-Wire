const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

const validateLoginInput = require("../../validation/login");
const validateSignupInput = require("../../validation/signup");

// private auth route - signup
router.post("/signup", (req, res) => {
  const { errors, isValid } = validateSignupInput(req.body);

  if (!isValid) {
   return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      errors.email = "An account with this email address already exists.";
      return res.status(400).json(errors);
    } else {

      const newUser = new User({
        email: req.body.email,
        password: req.body.password,
        status: req.body.status
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser.save().then(user => {
            const payload = { id: user.id, email: user.email, status: user.status}

            jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
              res.json({
                success: true,
                token: "Bearer " + token
              });
            });
          })
          .catch(err => console.log(err));
        });
      }); 
    }
  });
});

// private auth route - login

router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body); 

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const status = req.body.status;
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email }).then((user) => {
    if (!user) {
      return res.status(404).json({ email: "Email not found - please enter a valid email"})
    }

    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        const payload = { id: user.id, email: user.email, status: user.status };

        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          });
        } else {
          errors.password = "Invalid password";
          return res.status(400).json(errors);
        }
    });
  });
});

router.get(
  "/current", 
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      email: req.user.email,
      status: req.user.status,
    });
  }
);
module.exports = router;