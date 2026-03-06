module.exports = (req, res, next) => {
  console.log("auth middleware");
  req.user = "Hoàng An";
  res.locals.user = req.user;
  next();
};
