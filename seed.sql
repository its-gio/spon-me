DROP TABLE IF EXISTS users;

CREATE TABLE users
(
  user_id SERIAL PRIMARY KEY,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  hash TEXT,

);