INSERT INTO events
  (discussion_leader, category, description, long, lati, start_time, end_time)
VALUES
  ($1, $2, $3, $4, $5, $6, $7)
RETURNING *;