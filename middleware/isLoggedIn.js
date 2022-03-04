module.exports = (req, res, next) => {
  // checks if the user is logged in when trying to access a specific page
  if (!req.session.user) {
    req.app.locals.isLoggedIn = false;
    return res.redirect("/auth/login");
  }
  req.app.locals.isLoggedIn = true;
  req.user = req.session.user;
  next();
};
