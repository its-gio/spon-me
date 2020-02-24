const bcrypt = require('bcryptjs');

async function register(req, res) {
  const { first_name, last_name, email, password } = req.body;
  const db = req.app.get('db');

  const result = await db.get_user(email);
  if (result.length !== 0) return res.status(409).json('Username taken');

  const hash = bcrypt.hashSync(password, 12);
  const registeredUser = await db.register_user(first_name, last_name, email, hash);
  const user = registeredUser[0];
  req.session.user = { id: user.user_id, first_name: user.first_name, last_name: user.last_name }
  return res.status(201).json(req.session.user);
}

async function login(req, res) {
  const { email, password } = req.body;
  const db = req.app.get('db');

  const foundUser = await db.get_user(email);
  if (foundUser.length === 0) return res.status(409).json('User not found. Please register as a new user before logging in.');
  const user = foundUser[0];
  const isAuthenticated = await bcrypt.compare(password, user.hash);
  if (isAuthenticated === true) {
    req.session.user = { id: user.user_id, first_name: user.first_name, last_name: user.last_name };
    return res.status(200).json(req.session.user);
  }
  return res.status(403).json('Incorrect password');
}

function logout(req, res) {
  req.session.destroy();
  res.sendStatus(200);
}

module.exports = {
  register,
  login,
  logout
}