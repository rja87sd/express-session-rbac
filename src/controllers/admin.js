function adminsOnly(req, res, next) {
  res.status(200).json({
    message: "Welcome to the secret endpoint for admins only!",
  });
}

module.exports = adminsOnly;
