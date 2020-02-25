DROP TABLE IF EXISTS users;

CREATE TABLE users
(
  user_id SERIAL PRIMARY KEY,
  event_id INT REFERENCES event
(event_id),
  f_name VARCHAR
(50),
  l_name VARCHAR
(40),
  email TEXT,
  available BOOLEAN,
  isArrived BOOLEAN
);

CREATE TABLE event
(
  event_id SERIAL PRIMARY KEY,
  category VARCHAR(50),
  location TEXT,
  duration TIME
);