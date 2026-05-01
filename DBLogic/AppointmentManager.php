<?php

require_once __DIR__ . '/dbConect.php';

function getAvailableDates(string $month): array
{
    global $pdo;

    if (!$pdo) {
        return [];
    }

    if ($month === '') {
        $monthDate = new DateTime('first day of this month');
    } else {
        $monthDate = DateTime::createFromFormat('Y-m', $month);

        if (!$monthDate) {
            return [];
        }

        $monthDate->setDate(
            (int) $monthDate->format('Y'),
            (int) $monthDate->format('m'),
            1
        );
    }

    $startDate = $monthDate->format('Y-m-01');
    $endDate = (clone $monthDate)->modify('+1 month')->format('Y-m-01');

    $sql = '
        SELECT DISTINCT appointment_date
        FROM appointment_slots
        WHERE is_available = TRUE
          AND appointment_date >= :start_date
          AND appointment_date < :end_date
        ORDER BY appointment_date
    ';

    $stmt = $pdo->prepare($sql);
    $stmt->execute([
        ':start_date' => $startDate,
        ':end_date' => $endDate,
    ]);

    return $stmt->fetchAll(PDO::FETCH_COLUMN);
}

function getAvailableTimes(string $date): array
{
    global $pdo;

    if (!$pdo) {
        return [];
    }

    $selectedDate = DateTime::createFromFormat('Y-m-d', $date);

    if (!$selectedDate || $selectedDate->format('Y-m-d') !== $date) {
        return [];
    }

    $sql = '
        SELECT id AS slot_id, appointment_time
        FROM appointment_slots
        WHERE is_available = TRUE
          AND appointment_date = :appointment_date
        ORDER BY appointment_time
    ';

    $stmt = $pdo->prepare($sql);
    $stmt->execute([
        ':appointment_date' => $date,
    ]);

    $times = [];

    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        $times[] = [
            'slot_id' => (int) $row['slot_id'],
            'time' => substr($row['appointment_time'], 0, 5),
        ];
    }

    return $times;
}

function createAppointment(array $data): array
{
    global $pdo;

    if (!$pdo) {
        return [
            'success' => false,
            'message' => 'Database connection is not available.',
        ];
    }

    $firstName = trim((string) ($data['first_name'] ?? ''));
    $lastName = trim((string) ($data['last_name'] ?? ''));
    $phone = trim((string) ($data['phone'] ?? ''));
    $email = trim((string) ($data['email'] ?? ''));
    $comment = trim((string) ($data['comment'] ?? ''));
    $serviceId = (int) ($data['service_id'] ?? 0);
    $slotId = (int) ($data['slot_id'] ?? 0);

    if ($firstName === '' || $lastName === '' || $phone === '') {
        return [
            'success' => false,
            'message' => 'First name, last name and phone are required.',
        ];
    }

    if ($email !== '' && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        return [
            'success' => false,
            'message' => 'Email address is invalid.',
        ];
    }

    if ($serviceId <= 0 || $slotId <= 0) {
        return [
            'success' => false,
            'message' => 'Service and slot must be selected.',
        ];
    }

    try {
        $pdo->beginTransaction();

        $serviceStmt = $pdo->prepare('
            SELECT id
            FROM services
            WHERE id = :service_id
        ');
        $serviceStmt->execute([
            ':service_id' => $serviceId,
        ]);

        if (!$serviceStmt->fetchColumn()) {
            $pdo->rollBack();

            return [
                'success' => false,
                'message' => 'Selected service does not exist.',
            ];
        }

        $slotStmt = $pdo->prepare('
            SELECT id, appointment_date, appointment_time
            FROM appointment_slots
            WHERE id = :slot_id
              AND is_available = TRUE
            FOR UPDATE
        ');
        $slotStmt->execute([
            ':slot_id' => $slotId,
        ]);

        $slot = $slotStmt->fetch(PDO::FETCH_ASSOC);

        if (!$slot) {
            $pdo->rollBack();

            return [
                'success' => false,
                'message' => 'Selected slot is no longer available.',
            ];
        }

        $clientStmt = $pdo->prepare('
            INSERT INTO clients (first_name, last_name, phone, email)
            VALUES (:first_name, :last_name, :phone, :email)
            RETURNING id
        ');
        $clientStmt->execute([
            ':first_name' => $firstName,
            ':last_name' => $lastName,
            ':phone' => $phone,
            ':email' => $email !== '' ? $email : null,
        ]);

        $clientId = (int) $clientStmt->fetchColumn();

        $appointmentStmt = $pdo->prepare('
            INSERT INTO appointments (client_id, service_id, slot_id, comment)
            VALUES (:client_id, :service_id, :slot_id, :comment)
            RETURNING id
        ');
        $appointmentStmt->execute([
            ':client_id' => $clientId,
            ':service_id' => $serviceId,
            ':slot_id' => $slotId,
            ':comment' => $comment !== '' ? $comment : null,
        ]);

        $appointmentId = (int) $appointmentStmt->fetchColumn();

        $updateSlotStmt = $pdo->prepare('
            UPDATE appointment_slots
            SET is_available = FALSE
            WHERE id = :slot_id
        ');
        $updateSlotStmt->execute([
            ':slot_id' => $slotId,
        ]);

        $pdo->commit();

        return [
            'success' => true,
            'message' => 'Appointment created successfully.',
            'appointment_id' => $appointmentId,
            'client_id' => $clientId,
            'slot' => [
                'id' => (int) $slot['id'],
                'date' => $slot['appointment_date'],
                'time' => substr($slot['appointment_time'], 0, 5),
            ],
        ];
    } catch (Throwable $e) {
        if ($pdo->inTransaction()) {
            $pdo->rollBack();
        }

        error_log(
            'Appointment creation error: ' . '[' . date('Y-m-d H:i:s') . ']' . PHP_EOL . $e->getMessage() . PHP_EOL . PHP_EOL,
            3,
            __DIR__ . '/DBerrors'
        );

        return [
            'success' => false,
            'message' => 'Failed to create appointment.',
        ];
    }
}
