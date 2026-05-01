window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 30);
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), index * 120);
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12
});

document.querySelectorAll('.fade-in').forEach((element) => observer.observe(element));

function openModal(event) {
  if (event) {
    event.preventDefault();
  }

  document.getElementById('modalOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
  document.getElementById('formContent').style.display = 'block';
  document.getElementById('formSuccess').style.display = 'none';

  const formError = document.getElementById('formError');
  if (formError) {
    formError.style.display = 'none';
    formError.textContent = '';
  }
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

function handleOverlayClick(event) {
  if (event.target === document.getElementById('modalOverlay')) {
    closeModal();
  }
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeModal();
  }
});

const appointmentForm = document.getElementById('appointmentForm');
const formContent = document.getElementById('formContent');
const formSuccess = document.getElementById('formSuccess');
const formError = document.getElementById('formError');
const dateInput = document.getElementById('apptDate');
const timeSelect = document.getElementById('appointmentTime');
const availableDatesByMonth = new Map();

function setTimeOptions(times) {
  if (!timeSelect) {
    return;
  }

  timeSelect.innerHTML = '';

  const placeholderOption = document.createElement('option');
  placeholderOption.value = '';
  placeholderOption.textContent = times.length > 0
    ? 'Выберите время'
    : 'На эту дату нет свободного времени';
  timeSelect.appendChild(placeholderOption);

  times.forEach((slot) => {
    const option = document.createElement('option');
    option.value = slot.slot_id;
    option.textContent = slot.time;
    timeSelect.appendChild(option);
  });
}

async function loadAvailableTimes(date) {
  setTimeOptions([]);

  if (!date) {
    return;
  }

  try {
    const response = await fetch(`DBLogic/GetAvailableTimes.php?date=${encodeURIComponent(date)}`);
    const result = await response.json();

    if (!response.ok || !result.success) {
      setTimeOptions([]);
      return;
    }

    setTimeOptions(Array.isArray(result.times) ? result.times : []);
  } catch (error) {
    console.error('Failed to load available times:', error);
    setTimeOptions([]);
  }
}

function getCalendarMonthKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  return `${year}-${month}`;
}

async function fetchAvailableDatesByMonth(month) {
  if (availableDatesByMonth.has(month)) {
    return availableDatesByMonth.get(month);
  }

  try {
    const response = await fetch(`DBLogic/GetAvailableDates.php?month=${encodeURIComponent(month)}`);
    const result = await response.json();

    if (!response.ok || !result.success || !Array.isArray(result.availableDates)) {
      availableDatesByMonth.set(month, []);
      return [];
    }

    availableDatesByMonth.set(month, result.availableDates);
    return result.availableDates;
  } catch (error) {
    console.error('Failed to load available dates:', error);
    availableDatesByMonth.set(month, []);
    return [];
  }
}

let bookingPicker = null;

async function refreshCalendarMonth(date) {
  if (!bookingPicker) {
    return;
  }

  const availableDates = await fetchAvailableDatesByMonth(getCalendarMonthKey(date));
  bookingPicker.set('enable', availableDates);

  const selectedDate = bookingPicker.input.value;
  if (selectedDate && !availableDates.includes(selectedDate)) {
    bookingPicker.clear();
    setTimeOptions([]);
  }
}

if (dateInput) {
  bookingPicker = flatpickr(dateInput, {
    dateFormat: 'Y-m-d',
    minDate: 'today',
    disableMobile: true,
    locale: {
      firstDayOfWeek: 1
    },
    onChange(selectedDates, dateStr) {
      loadAvailableTimes(dateStr);
    }
  });

  bookingPicker.config.onReady.push((selectedDates, dateStr, instance) => {
    refreshCalendarMonth(new Date(instance.currentYear, instance.currentMonth, 1));
  });

  bookingPicker.config.onMonthChange.push((selectedDates, dateStr, instance) => {
    refreshCalendarMonth(new Date(instance.currentYear, instance.currentMonth, 1));
  });

  bookingPicker.config.onYearChange.push((selectedDates, dateStr, instance) => {
    refreshCalendarMonth(new Date(instance.currentYear, instance.currentMonth, 1));
  });

  refreshCalendarMonth(new Date(bookingPicker.currentYear, bookingPicker.currentMonth, 1));
}

setTimeOptions([]);

if (appointmentForm) {
  appointmentForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (formError) {
      formError.style.display = 'none';
      formError.textContent = '';
    }

    const submitButton = appointmentForm.querySelector('button[type="submit"]');
    const formData = new FormData(appointmentForm);

    if (submitButton) {
      submitButton.disabled = true;
    }

    try {
      const response = await fetch(appointmentForm.action, {
        method: 'POST',
        body: formData
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        if (formError) {
          formError.textContent = result.message || 'Не удалось отправить заявку.';
          formError.style.display = 'block';
        }
        return;
      }

      if (formContent) {
        formContent.style.display = 'none';
      }

      if (formSuccess) {
        formSuccess.style.display = 'block';
      }

      appointmentForm.reset();
      setTimeOptions([]);

      if (bookingPicker) {
        bookingPicker.clear();
        refreshCalendarMonth(new Date(bookingPicker.currentYear, bookingPicker.currentMonth, 1));
      }
    } catch (error) {
      console.error('Failed to submit appointment form:', error);
      if (formError) {
        formError.textContent = 'Ошибка сети. Попробуйте ещё раз.';
        formError.style.display = 'block';
      }
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
      }
    }
  });
}
