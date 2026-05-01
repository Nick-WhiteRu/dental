<?php
require_once __DIR__.'/DBLogic/dbConect.php';
?>

<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>ДентаЛюкс — Стоматологическая клиника</title>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@300;400;500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="styles/styles.css">
</head>
<body>
<nav id="navbar">
  <div class="logo">
    <img src="image/LogoDentalClinicBlue.png" alt="Clinica profesorului Scerbatiuc ">
    <p>Clinica profesorului Scerbatiuc</p>
  </div>
  <ul class="nav-links">
    <li><a href="#about">О нас</a></li>
    <li><a href="#services">Услуги</a></li>
    <li><a href="#doctors">Врачи</a></li>
    <li><a href="#contact">Контакты</a></li>
    <li><a href="#" class="btn-nav" onclick="openModal(event)">Записаться</a></li>
  </ul>
</nav>

<section id="home">
  <div class="hero-bg"></div>
  <div class="hero-ornament"></div>
  <div class="hero-content">
    <span class="hero-tag">Стоматологическая клиника премиум-класса</span>
    <h1>Ваша улыбка —<br>наше <em>искусство</em></h1>
    <p class="hero-text">Современная стоматология с индивидуальным подходом. Мы сочетаем передовые технологии и заботу о каждом пациенте, чтобы ваша улыбка сияла здоровьем.</p>
    <div class="hero-btns">
      <button class="btn-primary" onclick="openModal()">Записаться на приём</button>
      <a href="#services" class="btn-secondary">Наши услуги</a>
    </div>
    <div class="hero-stats">
      <div class="stat"><div class="stat-num">12+</div><div class="stat-label">Лет опыта</div></div>
      <div class="stat"><div class="stat-num">3 500</div><div class="stat-label">Пациентов</div></div>
      <div class="stat"><div class="stat-num">98%</div><div class="stat-label">Положительных отзывов</div></div>
    </div>
  </div>
  <div class="hero-right">
      <img src="image/LogoDentalClinicBronze.png" alt="Стоматолог">
    </div>

</section>

<section id="about">
  <div class="about-grid">
    <div class="about-visual fade-in">
      <div class="about-frame"><div class="about-frame-icon">🦷<p>тут должно быть фото клиники</p></div></div>
      <div class="about-badge"><strong>2001</strong><span>Год основания</span></div>
    </div>
    <div class="about-text fade-in">
      <span class="section-tag">О клинике</span>
      <h2>Доверие, которое <em>строится годами</em></h2>
      <p class="section-lead">ДентаЛюкс — это клиника, где каждый пациент чувствует себя желанным гостем. Мы создали пространство, где профессионализм встречается с теплотой.</p>
      <p style="margin-top:1rem;font-size:0.88rem;color:var(--text-light);line-height:1.8;">За более чем 12 лет работы мы помогли тысячам пациентов вернуть уверенность в улыбке. Клиника оснащена оборудованием европейского производства, а врачи регулярно проходят повышение квалификации за рубежом.</p>
      <div class="about-features">
        <div class="feature-item"><h4>Современное оборудование</h4><p>Цифровая рентгенография и 3D-томография</p></div>
        <div class="feature-item"><h4>Комфортная атмосфера</h4><p>Приятная среда без стресса и долгого ожидания</p></div>
        <div class="feature-item"><h4>Гарантия качества</h4><p>Официальная гарантия на все виды работ</p></div>
        <div class="feature-item"><h4>Индивидуальный подход</h4><p>Персональный план лечения для каждого</p></div>
      </div>
    </div>
  </div>
</section>

<section id="services">
  <div class="services-header">
    <div><span class="section-tag">Что мы предлагаем</span><h2>Наши <em>услуги</em></h2></div>
    <button class="btn-secondary" onclick="openModal()">Записаться</button>
  </div>
  <div class="services-grid">
    <div class="service-card fade-in"><span class="service-icon">🔬</span><h3>Диагностика</h3><p>Полная цифровая диагностика полости рта, 3D-томография, фотопротокол и составление индивидуального плана лечения.</p><span class="service-price">от 500 мдл</span></div>
    <div class="service-card fade-in"><span class="service-icon">✨</span><h3>Отбеливание</h3><p>Профессиональное отбеливание зубов системой Zoom 4. Результат — улыбка на 8–10 тонов светлее за один визит.</p><span class="service-price">от 8 000 мдл</span></div>
    <div class="service-card fade-in"><span class="service-icon">🦷</span><h3>Терапия</h3><p>Лечение кариеса, пульпита, периодонтита. Восстановление зубов светоотверждаемыми композитными материалами.</p><span class="service-price">от 2 500 мдл</span></div>
    <div class="service-card fade-in"><span class="service-icon">🏗️</span><h3>Имплантация</h3><p>Установка имплантов швейцарского производства с пожизненной гарантией. Восстановление одного или нескольких зубов.</p><span class="service-price">от 35 000 мдл</span></div>
    <div class="service-card fade-in"><span class="service-icon">😁</span><h3>Ортодонтия</h3><p>Элайнеры Invisalign и металлические брекеты. Исправление прикуса у детей и взрослых с применением новейших методик.</p><span class="service-price">от 45 000 мдл</span></div>
    <div class="service-card fade-in"><span class="service-icon">💎</span><h3>Виниры</h3><p>Ультратонкие керамические виниры для идеальной улыбки. Коррекция формы, цвета и положения зубов без боли.</p><span class="service-price">от 18 000 мдл</span></div>
  </div>
</section>

<section id="doctors">
  <span class="section-tag">Наша команда</span>
  <h2>Врачи, которым <em>доверяют</em></h2>
  <div class="doctors-grid">
    <div class="doctor-card fade-in">
      <div class="doctor-photo"><div class="doctor-photo-icon">👨‍⚕️</div></div>
      <div class="doctor-info">
        <h3>Владимир Владимирович</h3>
        <span class="doctor-spec">Главный врач · Имплантолог</span>
        <p>Кандидат медицинских наук, специалист по имплантологии и сложному протезированию. Регулярно проходит обучение в Германии и Израиле.</p>
        <span class="doctor-exp">Опыт 18 лет</span>
      </div>
    </div>
    <div class="doctor-card fade-in">
      <div class="doctor-photo"><div class="doctor-photo-icon">👩‍⚕️</div></div>
      <div class="doctor-info">
        <h3>Владимир Владимирович</h3>
        <span class="doctor-spec">Ортодонт</span>
        <p>Специалист по исправлению прикуса у детей и взрослых. Сертифицированный провайдер системы Invisalign Go и Invisalign Full.</p>
        <span class="doctor-exp">Опыт 12 лет</span>
      </div>
    </div>
    <div class="doctor-card fade-in">
      <div class="doctor-photo"><div class="doctor-photo-icon">👨‍⚕️</div></div>
      <div class="doctor-info">
        <h3>Владимир Владимирович</h3>
        <span class="doctor-spec">Терапевт · Эстетическая реставрация</span>
        <p>Мастер по художественной реставрации зубов. Работает с наиболее сложными случаями изменения цвета и формы зубов.</p>
        <span class="doctor-exp">Опыт 10 лет</span>
      </div>
    </div>
  </div>
</section>

<section id="contact">
  <div class="contact-grid">
    <div>
      <span class="section-tag">Свяжитесь с нами</span>
      <h2>Контактная <em>информация</em></h2>
      <div class="contact-item" style="margin-top:2rem"><span class="contact-label">Адрес</span><div class="contact-value">Strada Mitropolit Petru Movilă 23/1, of.1, Chișinău<br></div></div>
      <div class="contact-item"><span class="contact-label">Телефон</span><div class="contact-value">022 235 117<br></div></div>
      <div class="contact-item"><span class="contact-label">Электронная почта</span><div class="contact-value">info@profesor.com</div></div>
      <div class="contact-item"><span class="contact-label">Режим работы</span><div class="contact-value">Пн–Пт: 8:00 – 18:00<br>Сб: 9:00 – 13:00 · Вс: выходной</div></div>
      <div class="social-links">
        <a class="social-link" href="#" title="VK">ВК</a>
        <a class="social-link" href="#" title="Telegram">ТГ</a>
        <a class="social-link" href="#" title="Instagram">IG</a>
      </div>
    </div>
    <div>
      <div class="contact-map">
        <div style="font-size:3rem">📍</div>
        <p style="color:#EDE3D3;font-size:0.95rem;">Strada Mitropolit Petru Movilă 23/1, of.1, Chișinău</p>
        
        <button class="btn-secondary" style="margin-top:0.5rem;color:var(--brown-light);border-color:rgba(196,168,130,0.3);">Открыть на карте</button>
      </div>
      <div style="margin-top:2rem">
        <button class="btn-primary" onclick="openModal()" style="width:100%;font-size:0.85rem;padding:1rem;">Записаться на консультацию</button>
      </div>
    </div>
  </div>
</section>

<footer>
  <p>© 2026 Clinica profesorului scerbatiuc . Все права защищены. Лицензия на медицинскую деятельность .......</p>
</footer>

<div class="modal-overlay" id="modalOverlay" onclick="handleOverlayClick(event)">
  <div class="modal">
    <div class="modal-header">
      <h3>Запись на приём</h3>
      <p>Мы свяжемся с вами в течение 15 минут</p>
      <button class="modal-close" onclick="closeModal()">×</button>
    </div>
    <div class="modal-body">
      <div id="formContent">
        <div class="form-row">
          <div class="form-group"><label>Имя *</label><input type="text" id="fname" placeholder="Вова"></div>
          <div class="form-group"><label>Фамилия</label><input type="text" placeholder="Никита"></div>
        </div>
        <div class="form-group"><label>Телефон *</label><input type="tel" id="fphone" placeholder="+373 (___) ___-__-__"></div>
        <div class="form-group"><label>Электронная почта</label><input type="email" placeholder="nikita.boss2007@gmail.com"></div>
        <div class="form-group">
          <label>Услуга</label>
          <select>
            <option value="">— Выберите услугу —</option>
            <option>Диагностика</option>
            <option>Отбеливание</option>
            <option>Терапия (лечение кариеса)</option>
            <option>Имплантация</option>
            <option>Ортодонтия</option>
            <option>Виниры</option>
            <option>Другое</option>
          </select>
        </div>
        <div class="form-row">
          <div class="form-group"><label>Удобная дата</label><input type="date" id="apptDate"></div>
          <div class="form-group">
            <label>Удобное время</label>
            <select>
              <option>09:00</option><option>10:00</option><option>11:00</option><option>12:00</option>
              <option>13:00</option><option>14:00</option><option>15:00</option><option>16:00</option>
              <option>17:00</option><option>18:00</option><option>19:00</option>
            </select>
          </div>
        </div>
        <div class="form-group"><label>Комментарий</label><textarea placeholder="Опишите проблему или пожелания..."></textarea></div>
        <button class="form-submit" onclick="submitForm()">Отправить заявку →</button>
      </div>
      <div class="form-success" id="formSuccess">
        <div class="success-icon">✅</div>
        <h4>Заявка отправлена!</h4>
        <p>Мы свяжемся с вами в течение 15 минут<br>для подтверждения записи. Спасибо, что выбрали ДентаЛюкс!</p>
        <button class="btn-primary" style="margin-top:1.5rem" onclick="closeModal()">Закрыть</button>
      </div>
    </div>
  </div>
</div>

<script>
  window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 30);
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 120);
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  function openModal(e) {
    if (e) e.preventDefault();
    document.getElementById('modalOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
    document.getElementById('formContent').style.display = 'block';
    document.getElementById('formSuccess').style.display = 'none';
  }
  function closeModal() {
    document.getElementById('modalOverlay').classList.remove('active');
    document.body.style.overflow = '';
  }
  function handleOverlayClick(e) {
    if (e.target === document.getElementById('modalOverlay')) closeModal();
  }
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  function submitForm() {
    const name = document.getElementById('fname').value.trim();
    const phone = document.getElementById('fphone').value.trim();
    if (!name) { document.getElementById('fname').style.borderColor='var(--brown)'; document.getElementById('fname').focus(); return; }
    if (!phone) { document.getElementById('fphone').style.borderColor='var(--brown)'; document.getElementById('fphone').focus(); return; }
    document.getElementById('formContent').style.display = 'none';
    document.getElementById('formSuccess').style.display = 'block';
  }

  const d = document.getElementById('apptDate');
  if (d) { d.min = new Date().toISOString().split('T')[0]; d.value = d.min; }
</script>
</body>
</html>
