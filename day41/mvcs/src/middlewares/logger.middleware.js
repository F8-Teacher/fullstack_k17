module.exports = (req, res, next) => {
  console.log("logger middleware");
  next();
};
