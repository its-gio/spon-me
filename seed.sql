DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS events;
DROP TABLE IF EXISTS event_users;

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
  start_time DATE,
  end_time DATE
);

CREATE TABLE event_users
(
  eu_id SERIAL PRIMARY KEY,
  event_id INT REFERENCES events(event_id),
  user_id INT REFERENCES users(user_id),
  has_arrived BOOLEAN
)

-- {
-- 	'category': 'Crepes',
-- 	'description': 'We are in the dark alleyway behand the creepy building. Join us!',
-- 	'long': -96.80153334971428,
-- 	'lati': 32.7767217344625,
-- 	'start_time': '8:00',
-- 	'end_time': '9:00' 
-- }
-- {
-- 	'category': 'Bird Watching',
-- 	'description': 'We are in the park. Come down!',
-- 	'long': -96.79657326963051,
-- 	'lati': 32.777674995703215,
-- 	'start_time': '18:00',
-- 	'end_time': '19:00' 
-- }

-- INSERT INTO events (category, description, long, lati, date, start_time, end_time)
-- VALUES
-- (
--   'Crepes',
--   'We are in the dark alleyway behand the creepy building. Join us!',
--   -96.80153334971428,
--   32.7767217344625,
--   current_date,
--   '18:00',
--   '19:00'
-- )

-- INSERT INTO events (category, description, long, lati, date, start_time, end_time)
-- VALUES
-- (
--   'Bird watching',
--   'Watching burds',
--   -96.80153334971428,
--   32.7767217344625,
--   current_date,
--   '19:00',
--   '20:00'
-- )

-- INSERT INTO events (category, description, long, lati, date, start_time, end_time)
-- VALUES
-- (
--   'Happi Tyme',
--   'Tyme tu bi Happ!i',
--   -96.80153334971428,
--   32.7767217344625,
--   current_date,
--   '9:00',
--   '11:00'
-- )


-- {
-- 	"first_name": "Gio",
-- 	"last_name": "Aguirre",
-- 	"email": "media@its-g.io",
-- 	"password": "password" 
-- }

-- select TO_CHAR(start_time :: TIME, 'HH:MI am') as start_time, TO_CHAR(end_time :: TIME, 'HH:MI am') as end_time
-- from events where users_id = $1