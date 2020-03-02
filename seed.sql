DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS events;

CREATE TABLE events
(
  event_id SERIAL PRIMARY KEY,
  category VARCHAR(50),
  description TEXT,
  long FLOAT,
  lati FLOAT,
  start_time TIME,
  end_time TIME
);

-- {
--   "category": "Harry Potter Univers",
--   "description": "Exploring the Harry Potter Universe. Won't you join us!?",

-- }


CREATE TABLE users
(
  user_id SERIAL PRIMARY KEY,
  event_id INT REFERENCES events
(event_id),
  first_name VARCHAR
(50),
  last_name VARCHAR
(40),
  email TEXT UNIQUE,
  hash TEXT,
  discussion_leader BOOLEAN,
  available BOOLEAN,
  has_arrived BOOLEAN
);

-- {
-- 	"first_name": "Gio",
-- 	"last_name": "Aguirre",
-- 	"email": "media@its-g.io",
-- 	"password": "password" 
-- }

-- select TO_CHAR(starttime :: TIME, 'HH:MI') as starttime, TO_CHAR(endtime :: TIME, 'HH:MI') as endtime
-- from events where users_id = $1