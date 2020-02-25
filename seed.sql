DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS events;

CREATE TABLE events
(
  event_id SERIAL PRIMARY KEY,
  category VARCHAR(50),
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

-- INSERT INTO users
--   (first_name, last_name, email, hash)
-- VALUES
--   (
--     "Gio",
--     "Aguirre",
--     "me@its-g.io",
--     "adsouaf9383hr97htgreuhiurp9ufp981hp9fhepvuid923hr9pefeuwbywbef"
--   )