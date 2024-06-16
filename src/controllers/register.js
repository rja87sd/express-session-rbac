"use strict";

const User = require("../models/User");

async function register(req, res, next) {
  try {
    const { name, email, password } = req.body;
    const user = new User({ name, email, password });
    await user.save();

    res.status(201).json({ message: "User registered.", user });
  } catch (error) {}
}

module.exports = register;
