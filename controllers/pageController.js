export const getHomePageHandler = (req, res) => {
  return res.render("home", {
    user: req.user,
  });
};

export const getSignupPageHandler = (req, res) => {
  return res.render("signup");
};

export const getSigninPageHandler = (req, res) => {
  return res.render("signin");
};
