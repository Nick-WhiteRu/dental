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

$month = trim((string) ($_GET['month'] ?? ''));

if ($month !== '' && !preg_match('/^\d{4}-\d{2}$/', $month)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Month must be in YYYY-MM format.',
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

$availableDates = getAvailableDates($month);

echo json_encode([
    'success' => true,
    'month' => $month !== '' ? $month : date('Y-m'),
    'availableDates' => $availableDates,
], JSON_UNESCAPED_UNICODE);
