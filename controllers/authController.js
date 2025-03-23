const { User, users } = require("../models/User");

exports.getRegister = (req, res) => {
  res.render("register", { message: "" });
};

exports.postRegister = async (req, res) => {
  const { username, password } = req.body;

  if (users.find((user) => user.username === username)) {
    return res.render("register", { message: "User already exists" });
  }

  const newUser = new User(username, password);
  await newUser.setPassword(password);
  users.push(newUser);

  res.redirect("/login");
};

exports.getLogin = (req, res) => {
  res.render("login", { message: "" });
};

exports.postLogin = async (req, res) => {
  const { username, password } = req.body;
  const user = users.find((user) => user.username === username);

  if (!user || !(await user.checkPassword(password))) {
    return res.render("login", { message: "Invalid credentials" });
  }

  req.session.user = username;
  res.redirect("/jobs");
};

exports.logout = (req, res) => {
  req.session.destroy();
  res.redirect("/");
};