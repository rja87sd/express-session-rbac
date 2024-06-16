"use strict";

function role(requiredRole) {
  return (req, res, next) => {
    if (req.user.user.role !== requiredRole) {
      return res.status(403).json({ error: "Access denied." });
    } else if (req.user.user.role === "admin") {
      next();
    }
    next();
  };
}

module.exports = role;
