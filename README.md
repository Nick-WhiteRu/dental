# Dental Appointment Booking

Simple dental clinic appointment booking system built with PHP, PostgreSQL, JavaScript, and Flatpickr.

## Features

- View available booking dates
- View available time slots for a selected date
- Create a new appointment
- Prevent double booking
- Submit the form without page reload
- Show success message in modal window

## Stack

- PHP
- PostgreSQL
- JavaScript
- Flatpickr
- Docker

## Project Structure

- `index.php` - main page with booking modal
- `scripts/appointment-form.js` - frontend booking logic
- `DBLogic/dbConect.php` - PostgreSQL connection
- `DBLogic/AppointmentManager.php` - booking logic
- `DBLogic/BookAppointment.php` - create appointment endpoint
- `DBLogic/GetAvailableDates.php` - available dates endpoint
- `DBLogic/GetAvailableTimes.php` - available times endpoint
- `DBLogic/generate_slots.php` - slot generation script

## Setup

1. Start PostgreSQL:
```bash
docker compose -f DBLogic/DBContainer/docker-compose.yml up -d
```

2. Configure `.env`:
```env
POSTGRES_DB=dentist_db
POSTGRES_USER=postgres
POSTGRES_PASSWORD=your_password
POSTGRES_PORT=5432
```

3. Create database tables.

4. Fill the `services` table.

5. Generate appointment slots:
```bash
php DBLogic/generate_slots.php
```

6. Run PHP server:
```bash
php -S localhost:8000
```

## Notes

- Services are currently hardcoded on the frontend.
- Appointment slots are generated in advance and stored in the database.
- The calendar only allows selecting dates with available slots.
