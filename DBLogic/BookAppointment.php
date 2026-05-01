<?php

require_once __DIR__ . '/AppointmentManager.php';

header('Content-Type: application/json; charset=UTF-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Method not allowed. Use POST.',
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

$rawBody = file_get_contents('php://input');
$jsonData = json_decode($rawBody, true);

if (is_array($jsonData) && !empty($jsonData)) {
    $requestData = $jsonData;
} else {
    $requestData = $_POST;
}

$result = createAppointment($requestData);

http_response_code($result['success'] ? 200 : 400);

echo json_encode($result, JSON_UNESCAPED_UNICODE);