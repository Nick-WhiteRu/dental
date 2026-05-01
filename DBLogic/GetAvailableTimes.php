<?php

require_once __DIR__ . '/AppointmentManager.php';

header('Content-Type: application/json; charset=UTF-8');

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Method not allowed. Use GET.',
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

$date = trim((string) ($_GET['date'] ?? ''));

if ($date === '') {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Date parameter is required.',
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

$times = getAvailableTimes($date);

echo json_encode([
    'success' => true,
    'date' => $date,
    'times' => $times,
], JSON_UNESCAPED_UNICODE);
