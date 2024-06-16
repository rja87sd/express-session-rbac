function eForEveryone(req, res, next) {
  res.status(200).json({
    message: "This is the dashboard.",
  });
}

module.exports = eForEveryone;
