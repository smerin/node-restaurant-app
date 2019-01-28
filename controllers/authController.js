const passport = require("passport");

exports.login = passport.authenticate("local", {
  failureRedirect: "/login",
  failureFlash: "Failed Login!",
  successRedirect: "/",
  successFlash: "You are now logged in"
});

exports.logout = (req, res) => {
  req.logout();
  req.flash("success", "You are now logged out");
  res.redirect("/");
};

exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
    return;
  }
  req.flash("error", "You must be logged in to do that");
  res.redirect("/login");
};

exports.forgot = async (req, res) => {
  // 1. See if that user exists
  const user = await user.findOne({ email: req.body.email });
  // 2. Set reset tokens and expiry on their account
  // 3. Send them an email with the token
  // 4. Redirect to login page after email token has been sent
};
