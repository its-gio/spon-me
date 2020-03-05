async function createEvent(req, res) {
  const { category, description, long, lati, start_time, end_time } = req.body;
  const db = req.app.get('db');

  const createdEvent = db.events.create_event(req.session.user.user_id, category, description, long, lati, start_time, end_time).catch(() => res.status(501).json('Error when creating Event'));
  res.status(200).json(createdEvent[0]);
}

async function getEvents(req, res) {
  const db = req.app.get('db');

  const gottenEvents = await db.events.get_events().catch(() => res.status(501).json('Get Events Failed'));
  
  res.status(200).json(gottenEvents);
}

async function joinEvent(req, res) {
  const { event_id } = req.body
  const db = req.app.get('db');

  await db.events.join_event(event_id, req.session.user.user_id, false).catch(() => res.status(501).json('Join Event Failed'));

  res.sendStatus(200);
}

module.exports = {
  createEvent,
  getEvents,
  joinEvent
}