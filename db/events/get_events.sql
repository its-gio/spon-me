SELECT discussion_leader, category, description, long, lati, TO_CHAR(start_time :: TIME, 'HH:MI am') as start_time, TO_CHAR(end_time :: TIME, 'HH:MI am') as end_time
FROM events
WHERE end_time > timezone('CST', current_timestamp);