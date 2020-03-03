async function editUser(req, res) {
  const { first_name, last_name, email } = req.body;
  const { id } = req.params;
  const db = req.app.get('db');

  const emailCheck = await db.user.get_user(email);
  if (emailCheck.length !== 0 && emailCheck[0].email !== req.session.user.email) return res.status(409).json('Email taken');

  await db.user.edit_user(id, first_name, last_name, email);
  req.session.user = { user_id: id, first_name, last_name, email }
  return res.status(200).json(req.session.user);
}

async function deleteUser(req, res) {
  const { id } = req.params;
  const db = req.app.get('db');

  await db.user.delete_user(id);
  req.session.destroy();
  res.sendStatus(200);
}

module.exports = {
  editUser,
  deleteUser
}