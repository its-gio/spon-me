SELECT *
FROM events
WHERE end_time > timezone('CST', current_timestamp);