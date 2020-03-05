SELECT eu.event_id, u.first_name, u.last_name, eu.has_arrived
FROM users u
  JOIN event_users eu
  ON u.user_id = eu.user_id