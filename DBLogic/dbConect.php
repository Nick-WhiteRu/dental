<?php

$pdo = null;
$dbConnectionError = null;

function loadEnvFile(string $envPath): void
{
    if (!is_file($envPath) || !is_readable($envPath)) {
        return;
    }

    $lines = file($envPath, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);

    foreach ($lines as $line) {
        $line = trim($line);

        if ($line === '' || str_starts_with($line, '#')) {
            continue;
        }

        [$key, $value] = array_pad(explode('=', $line, 2), 2, '');
        $key = trim($key);
        $value = trim($value, " \t\n\r\0\x0B\"'");

        if ($key === '') {
            continue;
        }

        putenv("$key=$value");
        $_ENV[$key] = $value;
        $_SERVER[$key] = $value;
    }
}

loadEnvFile(__DIR__ . '/DBContainer/.env');

$host = 'localhost';
$port = getenv('POSTGRES_PORT');
$dbname = getenv('POSTGRES_DB');
$user = getenv('POSTGRES_USER');
$password = getenv('POSTGRES_PASSWORD');

$dsn = "pgsql:host=$host;port=$port;dbname=$dbname;";

try {
    $pdo = new PDO($dsn, $user, $password, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    ]);
} catch (PDOException $e) {
    $dbConnectionError = $e->getMessage();
    error_log('Database connection error: '."[" . date("Y-m-d H:i:s") . "]\n" . $dbConnectionError."\n\n", 3, __DIR__.'/DBerrors');
}
