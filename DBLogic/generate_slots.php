<?php

require_once __DIR__ . '/dbConect.php';

if (!$pdo) {
    exit("Нет подключения к базе данных.\n");
}

$startDate = new DateTime('first day of this month');
$endDate = (clone $startDate)->modify('+2 months');

$workDayStart = '09:00';
$workDayEnd = '18:00';
$slotStepMinutes = 30;

$startTime = new DateTime($workDayStart);
$endTime = new DateTime($workDayEnd);

$inserted = 0;

$sql = "
    INSERT INTO appointment_slots (appointment_date, appointment_time, is_available)
    VALUES (:appointment_date, :appointment_time, TRUE)
    ON CONFLICT (appointment_date, appointment_time) DO NOTHING
";

$stmt = $pdo->prepare($sql);

for ($date = clone $startDate; $date < $endDate; $date->modify('+1 day')) {
    $dayOfWeek = (int) $date->format('N');

    if ($dayOfWeek >= 6) {
        continue;
    }

    $currentTime = clone $startTime;

    while ($currentTime < $endTime) {
        $stmt->execute([
            ':appointment_date' => $date->format('Y-m-d'),
            ':appointment_time' => $currentTime->format('H:i:s'),
        ]);

        if ($stmt->rowCount() > 0) {
            $inserted++;
        }

        $currentTime->modify("+{$slotStepMinutes} minutes");
    }
}

echo "Добавлено слотов: {$inserted}\n";
