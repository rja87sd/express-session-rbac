"use strict";

const express = require("express");
const home = require("../controllers/home");
const register = require("../controllers/register");
const login = require("../controllers/login");
const auth = require("../middleware/auth");
const adminsOnly = require("../controllers/admin");
const eForEveryone = require("../controllers/dashboard");
const role = require("../middleware/role");
const router = express.Router();

router.route("/").get(auth, home);
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/admin").get(auth, role(["admin"]), adminsOnly);
router.route("/dashboard").get(auth, role(["user", "admin"]), eForEveryone);

module.exports = router;
