"use strict";

function home(req, res, next) {
  res.status(200).json({ message: "Server online", nextMessage: req.user });
}

module.exports = home;
