DROP TABLE IF EXISTS event_users;
DROP TABLE IF EXISTS events;
DROP TABLE IF EXISTS users;

CREATE TABLE users
(
  user_id SERIAL PRIMARY KEY,
  first_name VARCHAR
(50),
  last_name VARCHAR
(40),
  email TEXT UNIQUE,
  hash TEXT
);

CREATE TABLE events
(
  event_id SERIAL PRIMARY KEY,
  discussion_leader INT REFERENCES users(user_id),
  category VARCHAR(50),
  description TEXT,
  long FLOAT,
  lati FLOAT,
  start_time TIMESTAMP
  WITH TIME ZONE,
  end_time TIMESTAMP
  WITH TIME ZONE
);

  CREATE TABLE event_users
  (
    eu_id SERIAL PRIMARY KEY,
    event_id INT REFERENCES events(event_id),
    user_id INT REFERENCES users(user_id),
    has_arrived BOOLEAN
  )

-- {
-- 	"category": "Bird Watching,
-- 	"description": "We are in the park. Come down!",
-- 	"long": -96.79657326963051,
-- 	"lati": 32.777674995703215,
-- 	"start_time": "2020-3-4 18:30:00",
-- 	"end_time": "2020-3-4 20:00:00"
-- }
-- {
-- 	"category": "Canceled",
-- 	"description": "We are in the park. Come down!",
-- 	"long": -96.79657326963051,
-- 	"lati": 32.777674995703215,
-- 	"start_time": "2020-3-4 11:30:00",
-- 	"end_time": "2020-3-4 12:00:00"
-- }

-- SELECT discussion_leader, category, description, long, lati, TO_CHAR(start_time :: TIME, 'HH:MI am') as start_time, TO_CHAR(end_time :: TIME, 'HH:MI am') as end_time
-- FROM events
-- WHERE end_time > timezone('CST', current_timestamp);