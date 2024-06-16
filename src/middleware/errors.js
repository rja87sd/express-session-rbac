function serverError(err, req, res, next) {
  res
    .status(500)
    .json({ error: "Something went wrong.", message: err.message });
}

function notFound(req, res, next) {
  res.status(404).json({ error: "Endpoint not found." });
}

module.exports = { serverError, notFound };
