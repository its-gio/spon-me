async function createEvent(req, res) {
  const { category, description, long, lati, start_time, end_time } = req.body;
  const db = req.app.get('db');

  const createdEvent = await db.events.create_event(req.session.user.user_id, category, description, long, lati, start_time, end_time).catch(() => res.status(501).json('Error when creating Event'));
  let { event_id } = createdEvent[0];

  await db.events.join_event(event_id, req.session.user.user_id, false).catch(() => res.status(501).json('Join Event Failed'));

  res.sendStatus(200);
}

async function getEvents(req, res) {
  const db = req.app.get('db');

  const gottenAttendees = await db.events.get_attendees().catch(() => res.status(501).json('Get Events Failed'));
  const gottenEvents = await db.events.get_events().catch(() => res.status(501).json('Get Events Failed'));
  const eventLength = gottenEvents.length;

  gottenEvents.forEach(event => event.attendees = []);

  gottenAttendees.forEach(attendee => {
    const { user_id, first_name, last_name, has_arrived } = attendee
    for (let i = 0; i < eventLength; i++){
      if (gottenEvents[i].event_id === attendee.event_id) gottenEvents[i].attendees.push({ user_id, first_name, last_name, has_arrived });
    }
  })

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