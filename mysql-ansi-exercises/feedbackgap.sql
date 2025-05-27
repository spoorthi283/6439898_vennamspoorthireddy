USE CommunityEvents;
SELECT 
    DISTINCT e.title
FROM 
    Events e
JOIN Registrations r ON e.event_id = r.event_id
LEFT JOIN Feedback f ON r.event_id = f.event_id
WHERE 
    f.feedback_id IS NULL;
