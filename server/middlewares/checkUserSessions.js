module.exports = function(req, res, next) {
  if (req.session.user === undefined) req.session.user = { user_id: null, first_name: null, last_name: null };
  next();
}