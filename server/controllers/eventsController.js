async function createEvent(req, res) {
  const { category, description, long, lati, start_time, end_time } = req.body;
  const db = req.app.get('db');

  const createdEvent = db.events.create_event(req.session.user.user_id, category, description, long, lati, start_time, end_time).catch(() => res.sendStatus(501).json('Error when creating Event'));
  res.sendStatus(200).json(createdEvent[0]);
}

async function getEvents(res, req) {

}

module.exports = {
  createEvent,
  getEvents
}