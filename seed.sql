DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS events;

CREATE TABLE events
(
  event_id SERIAL PRIMARY KEY,
  category VARCHAR(50),
  description TEXT,
  location TEXT
);

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
  hasArrived BOOLEAN
);

-- {
-- 	"first_name": "Gio",
-- 	"last_name": "Aguirre",
-- 	"email": "media@its-g.io",
-- 	"password": "password" 
-- }