SELECT 
    e.title,
    COUNT(r.user_id) AS registration_count
FROM 
    Events e
JOIN Registrations r ON e.event_id = r.event_id
GROUP BY 
    e.event_id
ORDER BY 
    registration_count DESC
LIMIT 3;

SELECT 
    e.title,
    COUNT(r.user_id) AS registration_count
FROM 
    Events e
JOIN Registrations r ON e.event_id = r.event_id
GROUP BY 
    e.event_id
ORDER BY 
    registration_count DESC
LIMIT 3;
