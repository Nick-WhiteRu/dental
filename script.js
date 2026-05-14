
/* ── I18N ────────────────────────────────────── */
const LANGS = {
  ru: {
    nav_services:'Услуги', nav_team:'Команда', nav_booking:'Запись', nav_contacts:'Контакты', nav_cta:'Записаться',
    hero_eyebrow:'Стоматологическая клиника',
    hero_desc:'Профессиональная забота о вашей улыбке. Современные технологии, безупречный результат и комфорт на каждом этапе лечения.',
    hero_cta:'Записаться на приём', hero_services:'Наши услуги',
    stat_years:'+ лет опыта', stat_patients:'+ Пациентов', stat_satisfied:'% Довольны',
    svc_tag:'Наши услуги',
    svc_title:'Полный спектр<br><em>стоматологических</em> услуг',
    svc_desc:'Мы используем только передовые технологии и качественные материалы для достижения наилучших результатов.',
    strip_title:'Почему пациенты выбирают <em>нас</em>',
    strip_desc:'Мы создаём атмосферу доверия и заботы. Каждый пациент для нас уникален, и мы подходим к каждому случаю с максимальной внимательностью.',
    feat1:'Лет клинического опыта', feat2:'Успешных случаев лечения', feat3:'Специалиста высшей категории', feat4:'Стерильность инструментов',
    team_tag:'Наша команда', team_title:'Врачи, которым <em>доверяют</em>',
    team_desc:'Опытные специалисты с многолетней практикой, постоянно совершенствующие свои навыки.',
    doc1_badge:'Главный врач', doc1_role:'Хирург-стоматолог · Имплантолог',
    doc1_bio:'Более 15 лет опыта в области хирургической стоматологии и имплантологии. Регулярно проходит обучение в ведущих клиниках Европы.',
    doc2_badge:'Ортодонт', doc2_role:'Ортодонт · Терапевт-стоматолог',
    doc2_bio:'Специалист по коррекции прикуса и эстетической реставрации зубов. Мастер художественной реставрации с безупречным вкусом.',
    modal_title:'Запись на приём', modal_sub:'Заполните поля ниже — мы свяжемся с вами для подтверждения',
    form_last:'Фамилия', form_first:'Имя', form_phone:'Номер телефона',
    form_doctor:'Выберите врача', form_service:'Услуга',
    form_date:'Выберите дату', form_time:'Выберите время',
    form_submit:'✓ Записаться на приём',
    succ_title:'Вы записаны!', succ_desc:'Спасибо! Мы свяжемся с вами в ближайшее время для подтверждения визита.',
    ft_desc:'Современная стоматологическая клиника в Кишинёве. Ваша улыбка — наша главная цель.',
    ft_nav:'Навигация', ft_hours:'Режим работы', ft_contacts:'Контакты',
    h_weekdays:'Пн – Пт', h_sat:'Суббота', h_sun:'Воскресенье', h_closed:'Выходной',
    ft_copy:'© 2025 Clinica profesorului Scerbatiuk. Все права защищены.',
    svc_diagnostics:'Диагностика',
    svc_therapy:'Терапевтическая стоматология',
    svc_periodontology:'Пародонтология',
    svc_surgery:'Хирургия',
    svc_orthopedics:'Ортопедия',
    svc_aesthetics:'Эстетика',
    svc_cat_desc_diagnostics:'Первичный осмотр, рентгенодиагностика и составление плана лечения.',
    svc_cat_desc_therapy:'Лечение кариеса, пульпита, периодонтита и молочных зубов.',
    svc_cat_desc_periodontology:'Профессиональная чистка, снятие зубного камня и лечение дёсен.',
    svc_cat_desc_surgery:'Удаление зубов, вскрытие абсцессов и хирургические вмешательства.',
    svc_cat_desc_orthopedics:'Коронки, протезы, мосты и восстановление зубного ряда.',
    svc_cat_desc_aesthetics:'Эстетическая коррекция формы, цвета и вида зубов.',
    svc_details_price:'Стоимость',
    svc_details_book:'Записаться на эту услугу',
    svc_details_close:'Закрыть',
    cal_months:['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
    cal_days:['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
    cal_sunday:'Воскресенье — выходной', cal_pick:'— Выберите время —', cal_first:'↑ Сначала выберите дату',
    form_alert_fields:'Пожалуйста, заполните все поля.', form_alert_date:'Пожалуйста, выберите дату.', form_alert_time:'Пожалуйста, выберите время.',
    doc_select_placeholder:'— Выберите врача —',
    svc_select_placeholder:'— Выберите услугу —',
    doc1_select:'В В П — Хирург-стоматолог · Имплантолог',
    doc2_select:'В В Г — Ортодонт · Терапевт-стоматолог',
    svc_options:['Консультация — 30 MDL','Виziография — 30–50 MDL','Анестезия — 30–50 MDL','Лечение кариеса — от 80 MDL','Лечение пульпита — от 50 MDL','Удаление зуба — от 100 MDL','Атипичное удаление — 150 MDL','Металлокерамическая коронка — 50–60 EUR','Съёмный протез — 400 MDL','Эстетическая коррекция — 300–600 MDL'],
  },
  ro: {
    nav_services:'Servicii', nav_team:'Echipă', nav_booking:'Programare', nav_contacts:'Contacte', nav_cta:'Programează-te',
    hero_eyebrow:'Clinică stomatologică',
    hero_desc:'Îngrijire profesională pentru zâmbetul tău. Tehnologii moderne, rezultate impecabile și confort la fiecare etapă a tratamentului.',
    hero_cta:'Programează-te', hero_services:'Serviciile noastre',
    stat_years:'+ ani experiență', stat_patients:'+ Pacienți', stat_satisfied:'% Mulțumiți',
    svc_tag:'Serviciile noastre',
    svc_title:'Spectru complet de<br><em>servicii stomatologice</em>',
    svc_desc:'Utilizăm doar tehnologii avansate și materiale de calitate pentru cele mai bune rezultate.',
    strip_title:'De ce pacienții ne aleg pe <em>noi</em>',
    strip_desc:'Creăm o atmosferă de încredere și grijă. Fiecare pacient este unic pentru noi și abordăm fiecare caz cu maximă atenție.',
    feat1:'Ani de experiență clinică', feat2:'Cazuri de tratament reușite', feat3:'Specialiști de categorie superioară', feat4:'Sterilitatea instrumentelor',
    team_tag:'Echipa noastră', team_title:'Medici în care ai <em>încredere</em>',
    team_desc:'Specialiști cu experiență îndelungată, care își îmbunătățesc constant abilitățile.',
    doc1_badge:'Medic principal', doc1_role:'Chirurg stomatolog · Implantolog',
    doc1_bio:'Peste 15 ani de experiență în chirurgie stomatologică și implantologie. Urmează regulat cursuri de formare în clinici europene de top.',
    doc2_badge:'Ortodont', doc2_role:'Ortodont · Stomatolog terapeut',
    doc2_bio:'Specialist în corecția mușcăturii și restaurare estetică dentară. Maestru al restaurării artistice cu gust impecabil.',
    modal_title:'Programare la medic', modal_sub:'Completați câmpurile de mai jos — vă vom contacta pentru confirmare',
    form_last:'Nume', form_first:'Prenume', form_phone:'Număr de telefon',
    form_doctor:'Selectați medicul', form_service:'Serviciu',
    form_date:'Selectați data', form_time:'Selectați ora',
    form_submit:'✓ Programează-te',
    succ_title:'Ești programat!', succ_desc:'Mulțumim! Vă vom contacta în cel mai scurt timp pentru a confirma vizita.',
    ft_desc:'Clinică stomatologică modernă în Chișinău. Zâmbetul tău — scopul nostru principal.',
    ft_nav:'Navigare', ft_hours:'Program de lucru', ft_contacts:'Contacte',
    h_weekdays:'Lun – Vin', h_sat:'Sâmbătă', h_sun:'Duminică', h_closed:'Zi liberă',
    ft_copy:'© 2025 Clinica profesorului Scerbatiuk. Toate drepturile rezervate.',
    svc_diagnostics:'Diagnostic',
    svc_therapy:'Stomatologie terapeutică',
    svc_periodontology:'Parodontologie',
    svc_surgery:'Chirurgie',
    svc_orthopedics:'Ortopedie',
    svc_aesthetics:'Estetică',
    svc_cat_desc_diagnostics:'Examinare inițială, radiologie și elaborarea planului de tratament.',
    svc_cat_desc_therapy:'Tratamentul cariei, pulpitei, periodontitei și dinților de lapte.',
    svc_cat_desc_periodontology:'Curățare profesională, detartraj și tratamentul gingiilor.',
    svc_cat_desc_surgery:'Extracții dentare, drenaj abces și intervenții chirurgicale.',
    svc_cat_desc_orthopedics:'Coroane, proteze, punți și restaurarea arcadei dentare.',
    svc_cat_desc_aesthetics:'Corecția estetică a formei, culorii și aspectului dinților.',
    svc_details_price:'Preț',
    svc_details_book:'Programare pentru acest serviciu',
    svc_details_close:'Închide',
    cal_months:['Ianuarie','Februarie','Martie','Aprilie','Mai','Iunie','Iulie','August','Septembrie','Octombrie','Noiembrie','Decembrie'],
    cal_days:['Du','Lu','Ma','Mi','Jo','Vi','Sâ'],
    cal_sunday:'Duminică — zi liberă', cal_pick:'— Selectați ora —', cal_first:'↑ Mai întâi selectați data',
    form_alert_fields:'Vă rugăm să completați toate câmpurile.', form_alert_date:'Vă rugăm să selectați o dată.', form_alert_time:'Vă rugăm să selectați o oră.',
    doc_select_placeholder:'— Selectați medicul —',
    svc_select_placeholder:'— Selectați serviciul —',
    doc1_select:'V V P — Chirurg stomatolog · Implantolog',
    doc2_select:'V V G — Ortodont · Stomatolog terapeut',
    svc_options:['Consultație — 30 MDL','Viziografie — 30–50 MDL','Anestezie — 30–50 MDL','Tratament carie — de la 80 MDL','Tratament pulpită — de la 50 MDL','Extracție dinte — de la 100 MDL','Extracție atipică — 150 MDL','Coroană metalo-ceramică — 50–60 EUR','Proteză mobilă — 400 MDL','Corecție estetică — 300–600 MDL'],
  },
  en: {
    nav_services:'Services', nav_team:'Team', nav_booking:'Book', nav_contacts:'Contacts', nav_cta:'Book Now',
    hero_eyebrow:'Dental Clinic',
    hero_desc:'Professional care for your smile. Modern technology, impeccable results and comfort at every stage of treatment.',
    hero_cta:'Book an Appointment', hero_services:'Our Services',
    stat_years:'+ years experience', stat_patients:'+ Patients', stat_satisfied:'% Satisfied',
    svc_tag:'Our Services',
    svc_title:'Full range of<br><em>dental services</em>',
    svc_desc:'We use only advanced technologies and quality materials to achieve the best results.',
    strip_title:'Why patients choose <em>us</em>',
    strip_desc:'We create an atmosphere of trust and care. Every patient is unique to us and we approach each case with maximum attention.',
    feat1:'Years of clinical experience', feat2:'Successful treatment cases', feat3:'Top-category specialists', feat4:'Instrument sterility',
    team_tag:'Our Team', team_title:'Doctors patients <em>trust</em>',
    team_desc:'Experienced specialists with many years of practice, constantly improving their skills.',
    doc1_badge:'Head Doctor', doc1_role:'Dental Surgeon · Implantologist',
    doc1_bio:'Over 15 years of experience in surgical dentistry and implantology. Regularly trains at leading European clinics.',
    doc2_badge:'Orthodontist', doc2_role:'Orthodontist · Therapeutic Dentist',
    doc2_bio:'Specialist in bite correction and aesthetic dental restoration. Master of artistic restoration with impeccable taste.',
    modal_title:'Book an Appointment', modal_sub:'Fill in the fields below — we will contact you for confirmation',
    form_last:'Last Name', form_first:'First Name', form_phone:'Phone Number',
    form_doctor:'Select Doctor', form_service:'Service',
    form_date:'Select Date', form_time:'Select Time',
    form_submit:'✓ Book Appointment',
    succ_title:"You're booked!", succ_desc:"Thank you! We'll contact you shortly to confirm your visit.",
    ft_desc:'Modern dental clinic in Chișinău. Your smile is our main goal.',
    ft_nav:'Navigation', ft_hours:'Working Hours', ft_contacts:'Contacts',
    h_weekdays:'Mon – Fri', h_sat:'Saturday', h_sun:'Sunday', h_closed:'Day off',
    ft_copy:'© 2025 Clinica profesorului Scerbatiuk. All rights reserved.',
    svc_diagnostics:'Diagnostics',
    svc_therapy:'Therapeutic Dentistry',
    svc_periodontology:'Periodontology',
    svc_surgery:'Surgery',
    svc_orthopedics:'Orthopedics',
    svc_aesthetics:'Aesthetics',
    svc_cat_desc_diagnostics:'Initial examination, X-ray diagnostics and treatment planning.',
    svc_cat_desc_therapy:'Treatment of cavities, pulpitis, periodontitis and milk teeth.',
    svc_cat_desc_periodontology:'Professional cleaning, tartar removal and gum treatment.',
    svc_cat_desc_surgery:'Tooth extractions, abscess drainage and surgical procedures.',
    svc_cat_desc_orthopedics:'Crowns, dentures, bridges and dental arch restoration.',
    svc_cat_desc_aesthetics:'Aesthetic correction of tooth shape, colour and appearance.',
    svc_details_price:'Price',
    svc_details_book:'Book this service',
    svc_details_close:'Close',
    cal_months:['January','February','March','April','May','June','July','August','September','October','November','December'],
    cal_days:['Su','Mo','Tu','We','Th','Fr','Sa'],
    cal_sunday:'Sunday — day off', cal_pick:'— Select time —', cal_first:'↑ First select a date',
    form_alert_fields:'Please fill in all fields.', form_alert_date:'Please select a date.', form_alert_time:'Please select a time.',
    doc_select_placeholder:'— Select Doctor —',
    svc_select_placeholder:'— Select Service —',
    doc1_select:'V V P — Dental Surgeon · Implantologist',
    doc2_select:'V V G — Orthodontist · Therapeutic Dentist',
    svc_options:['Consultation — 30 MDL','X-ray (Viziography) — 30–50 MDL','Anaesthesia — 30–50 MDL','Cavity treatment — from 80 MDL','Pulpitis treatment — from 50 MDL','Tooth extraction — from 100 MDL','Atypical extraction — 150 MDL','Metal-ceramic crown — 50–60 EUR','Removable denture — 400 MDL','Aesthetic correction — 300–600 MDL'],
  }
};

let currentLang = 'ru';

function setLang(lang) {
  currentLang = lang;
  const t = LANGS[lang];

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.textContent.toLowerCase() === lang);
  });

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  document.documentElement.lang = lang;

  const fDoctor = document.getElementById('fDoctor');
  if (fDoctor) {
    fDoctor.innerHTML = `<option value="">${t.doc_select_placeholder}</option>
      <option value="vvp">${t.doc1_select}</option>
      <option value="vvg">${t.doc2_select}</option>`;
  }
  const fService = document.getElementById('fService');
  if (fService) {
    fService.innerHTML = `<option value="">${t.svc_select_placeholder}</option>` +
      t.svc_options.map(o => `<option>${o}</option>`).join('');
  }
  const fTime = document.getElementById('fTime');
  if (fTime && fTime.disabled) {
    fTime.innerHTML = `<option value="">${t.cal_first}</option>`;
  }

  rebuildServices();
  renderCal();
}

/* ── SERVICES DATA (from Doc1.doc price list) ─────── */
const SERVICES_DATA = {
  ru:[
    /* ── ДИАГНОСТИКА ── */
    {
      icon:'images/icons_for_services_01.png', name:'Обследование видеокамерой', cat:'diagnostics',
      desc:'Визуальный осмотр полости рта с помощью интраоральной видеокамеры.',
      price:'Бесплатно',
      details:'Интраоральная видеокамера позволяет врачу увидеть состояние зубов и дёсен в мельчайших деталях на экране монитора. Пациент тоже видит изображение в реальном времени. Это помогает выявить скрытый кариес, трещины эмали, воспаление дёсен на ранних стадиях — без боли и дополнительных инструментов.',
    },
    {
      icon:'images/icons_for_services_02.gif', name:'Консультация врача', cat:'diagnostics',
      desc:'Первичный осмотр, составление индивидуального плана лечения.',
      price:'30 MDL',
      details:'На консультации врач проводит осмотр полости рта, собирает анамнез, оценивает состояние зубов и дёсен. По итогам составляется подробный план лечения с указанием всех необходимых процедур и ориентировочной стоимостью. Стоимость консультации включается в стоимость лечения.',
    },
    {
      icon:'images/icons_for_services_03.gif', name:'Визиография (рентген)', cat:'diagnostics',
      desc:'Прицельный рентгеновский снимок зуба для точной диагностики.',
      price:'30–50 MDL / снимок',
      details:'Виziография — это цифровой прицельный рентгеновский снимок одного или нескольких зубов. Позволяет обнаружить кариес на контактных поверхностях, оценить состояние корней и периапикальных тканей, проконтролировать качество пломбирования каналов. Доза облучения минимальна — в 10 раз ниже, чем при обычном рентгене.',
    },
 
    /* ── ТЕРАПЕВТИЧЕСКАЯ СТОМАТОЛОГИЯ ── */
    {
      icon:'images/icons_for_services_04.gif', name:'Анестезия', cat:'therapy',
      desc:'Местная анестезия перед лечением — безболезненное введение препарата.',
      price:'30–50 MDL',
      details:'Мы применяем анестетики последнего поколения: лидокаин/ксилин (30 MDL) и более эффективные ультракаин, убестизин, альфакаин (40–50 MDL). Инъекция делается очень тонкой иглой после нанесения аппликационной анестезии на слизистую, поэтому пациент практически не ощущает укол.',
    },
    {
      icon:'images/icons_for_services_05.gif', name:'Лечение кариеса', cat:'therapy',
      desc:'Современные пломбы химического и фотополимерного отверждения.',
      price:'80–350 MDL',
      details:'Кариес — разрушение твёрдых тканей зуба под действием бактерий. Лечение включает удаление поражённых тканей бором, обработку антисептиком и восстановление зуба пломбой. Мы используем:\n• Пломбы химического отверждения (Evocrol, Degufill, Charisma): 80–120 MDL\n• Фотополимерные пломбы (Herculite, Superlux, Filtek, Spectrum): 180–350 MDL\n• При клиновидном дефекте и пришеечном кариесе: 120–150 MDL\n• Изолирующая лечебная прокладка (ионосил, Life): +15 MDL',
    },
    {
      icon:'images/icons_for_services_06.gif', name:'Лечение пульпита', cat:'therapy',
      desc:'Эндодонтическое лечение при воспалении нерва зуба.',
      price:'50–500 MDL',
      details:'Пульпит — воспаление нерва (пульпы) зуба, сопровождающееся сильной болью. Лечение проводится в 1–2 посещения:\n• Наложение мышьяковистой или безмышьяковистой пасты с временной пломбой: 50 MDL\n• Пломбировка одного канала пастой: 50–70 MDL\n• Пломбировка одного канала пастой с гуттаперчевым штифтом: 60–80 MDL\n• Реставрация зуба с металлическими штифтами фотополимером: 350–500 MDL\n• Реставрация под коронку: 180–250 MDL\nПосле лечения пульпита устанавливается постоянная пломба (см. стоимость лечения кариеса).',
    },
    {
      icon:'images/icons_for_services_07.gif', name:'Лечение периодонтита', cat:'therapy',
      desc:'Лечение воспаления тканей вокруг корня зуба.',
      price:'30–500 MDL',
      details:'Периодонтит — хроническое или острое воспаление тканей у верхушки корня зуба. Без лечения приводит к потере зуба и распространению инфекции.\n• Вскрытие полости зуба и каналов (без анестезии): 70–100 MDL\n• Распломбировка ранее леченного канала: 30–50 MDL\n• Пломбировка канала пастой: 50–70 MDL\n• Пломбировка канала с гуттаперчевым штифтом: 60–80 MDL\n• Реставрация зуба штифтами: 180–500 MDL',
    },
    {
      icon:'👶', name:'Лечение молочных зубов', cat:'therapy',
      desc:'Бережное лечение кариеса и пульпита у детей.',
      price:'30–150 MDL',
      details:'Молочные зубы требуют такого же тщательного лечения, как постоянные — они удерживают место для постоянных зубов и влияют на развитие прикуса.\n• Кариес: цементные пломбы 30 MDL, химическое отверждение 40 MDL, фотополимер 100–150 MDL\n• Пульпит: мышьяковистая или безмышьяковистая паста 30 MDL\n• Запечатывание фиссур (герметизация) молочного зуба: 70 MDL\n• Запечатывание фиссур постоянного зуба (до 12 лет): 100–150 MDL',
    },
 
    /* ── ПАРОДОНТОЛОГИЯ ── */
    {
      icon:'images/icons_for_services_09.gif', name:'Снятие зубных отложений', cat:'periodontology',
      desc:'Полное удаление зубного камня ультразвуком и инструментами.',
      price:'70–120 MDL',
      details:'Зубной камень — затвердевший налёт на зубах и под дёснами, вызывающий воспаление дёсен (гингивит) и их опускание (пародонтит). Профессиональное снятие включает:\n• Ручное удаление инструментами + ультразвук: 70–120 MDL\n• Пескоструйный аппарат Air Flow (удаление мягких отложений и пигментации): 120–150 MDL\nРекомендуется проводить 1–2 раза в год.',
    },
    {
      icon:'images/icons_for_services_10.gif', name:'Выравнивание окклюзии', cat:'periodontology',
      desc:'Избирательное пришлифовывание зубов для равномерного распределения жевательной нагрузки.',
      price:'10 MDL / зуб',
      details:'Нарушение окклюзии (неправильный прикус или неравномерный контакт зубов) вызывает перегрузку отдельных зубов, что ускоряет их разрушение и вызывает боль в суставе. Избирательное пришлифовывание устраняет преждевременные контакты и перераспределяет жевательную нагрузку равномерно.',
    },
    {
      icon:'images/icons_for_services_11.gif', name:'Снятие чувствительности зуба', cat:'periodontology',
      desc:'Устранение гиперестезии — боли от холодного, горячего, сладкого.',
      price:'10 MDL / зуб',
      details:'Гиперестезия (повышенная чувствительность) возникает при обнажении дентина — из-за пришеечного кариеса, рецессии дёсен, эрозии эмали или после отбеливания. Врач наносит специальные реминерализирующие и десенситивные препараты, которые закупоривают дентинные канальцы и снижают чувствительность.',
    },
 
    /* ── ХИРУРГИЯ ── */
    {
      icon:'images/icons_for_services_12.gif', name:'Типичное удаление зуба', cat:'surgery',
      desc:'Стандартное удаление зуба под местной анестезией.',
      price:'100 MDL',
      details:'Типичное удаление проводится при кариесе, не поддающемся лечению, или по ортодонтическим показаниям. Зуб удаляется щипцами или элеваторами под местной анестезией. Процедура занимает 10–20 минут. После удаления при необходимости накладываются швы.',
    },
    {
      icon:'images/icons_for_services_13.gif', name:'Атипичное удаление зуба', cat:'surgery',
      desc:'Сложное удаление разрушенного или неправильно расположенного зуба.',
      price:'150 MDL',
      details:'Атипичное удаление требуется при сильно разрушенной коронке зуба, искривлённых корнях или неправильном положении зуба. Иногда используется распиловка корней или работа бором. Анестезия обязательна. Обычно накладываются швы.',
    },
    {
      icon:'images/icons_for_services_14.gif', name:'Удаление непрорезавшегося зуба', cat:'surgery',
      desc:'Хирургическое удаление ретинированного или дистопированного зуба.',
      price:'300–500 MDL',
      details:'Ретинированный зуб (чаще всего зуб мудрости) не прорезался и находится внутри кости или мягких тканей. Операция включает разрез десны, при необходимости — распиловку кости, разделение зуба на части, его извлечение и ушивание раны. Проводится под местной анестезией.',
    },
    {
      icon:'images/icons_for_services_15.gif', name:'Лечение воспалительных процессов (с удалением)', cat:'surgery',
      desc:'Лечение одонтогенных воспалений с удалением причинного зуба.',
      price:'100–150 MDL',
      details:'При периостите, абсцессе или флегмоне одонтогенного происхождения требуется удаление причинного зуба и дренирование очага воспаления. Лечение включает разрез и дренаж, при необходимости — назначение антибиотиков.',
    },
    {
      icon:'images/icons_for_services_07.gif', name:'Вскрытие абсцесса / дренирование', cat:'surgery',
      desc:'Лечение воспалительных процессов без удаления зуба.',
      price:'80–100 MDL',
      details:'При ограниченных гнойных процессах (абсцесс, периостит) проводится вскрытие гнойника и установка дренажа без удаления зуба. После стихания воспаления зуб можно пролечить эндодонтически. Анестезия обязательна.',
    },
    {
      icon:'images/icons_for_services_17.gif', name:'Лечение перикоронарита', cat:'surgery',
      desc:'Иссечение воспалённого капюшона над прорезывающимся зубом мудрости.',
      price:'80–100 MDL',
      details:'Перикоронарит — воспаление мягких тканей (капюшона) вокруг прорезывающегося зуба мудрости. Врач промывает карман антисептиком и при необходимости иссекает нависающий капюшон скальпелем. Операция проводится под местной анестезией.',
    },
    {
      icon:'images/icons_for_services_18.gif', name:'Резекция верхушки корня', cat:'surgery',
      desc:'Хирургическое удаление верхушки корня при кисте или хроническом очаге воспаления.',
      price:'200–300 MDL',
      details:'Резекция верхушки корня — органосохраняющая операция, позволяющая сохранить зуб при наличии кисты или хронического периодонтита, не поддающегося консервативному лечению. Врач делает разрез десны, трепанирует кость, удаляет верхушку корня вместе с патологическими тканями и ретроградно пломбирует канал.',
    },
 
    /* ── ОРТОПЕДИЯ ── */
    {
      icon:'images/icons_for_services_19.gif', name:'Металлокерамическая коронка', cat:'orthopedics',
      desc:'Прочная и эстетичная коронка из металлического каркаса с керамическим покрытием.',
      price:'50–60 EUR',
      details:'Металлокерамическая коронка — наиболее распространённый вид несъёмного протезирования. Металлический каркас обеспечивает прочность, керамическое покрытие — эстетику. Подходит для всех групп зубов. Срок службы — 10–15 лет. Предоплата при протезировании — 50%.',
    },
    {
      icon:'images/icons_for_services_20.gif', name:'Цельнолитная коронка с облицовкой', cat:'orthopedics',
      desc:'Литая металлическая коронка с пластмассовой облицовкой.',
      price:'20–30 EUR',
      details:'Цельнолитная коронка изготавливается методом литья из металлического сплава. Пластмассовая облицовка придаёт ей эстетичный вид со стороны губы/щеки. Менее эстетична по сравнению с металлокерамикой, но более доступна по цене. Рекомендуется для боковых зубов.',
    },
    {
      icon:'images/icons_for_services_21.gif', name:'Пластмассовая коронка', cat:'orthopedics',
      desc:'Временная или постоянная коронка из акриловой пластмассы.',
      price:'10 EUR',
      details:'Пластмассовая (акриловая) коронка используется как временная конструкция в период изготовления постоянной коронки или как постоянная при ограниченном бюджете. Менее прочная, со временем меняет цвет. Подходит для передних зубов временно.',
    },
    {
      icon:'images/icons_for_services_22.gif', name:'Бюгельный протез', cat:'orthopedics',
      desc:'Съёмный металлический каркасный протез при частичном отсутствии зубов.',
      price:'200–300 EUR',
      details:'Бюгельный протез — наиболее функциональный вид съёмного протезирования. Тонкий металлический каркас (кобальто-хромовый сплав) делает его лёгким и надёжным. Фиксируется на зубах кламмерами или аттачменами:\n• Простой бюгельный протез: 200 EUR\n• С аттачменами (без видимых кламмеров): 300 EUR',
    },
    {
      icon:'images/icons_for_services_25.gif', name:'Съёмный протез', cat:'orthopedics',
      desc:'Полный или частичный пластинчатый протез из акрила.',
      price:'400 MDL',
      details:'Съёмный акриловый протез — традиционный и доступный способ восстановить утраченные зубы. Полный протез замещает все зубы на челюсти, частичный — несколько отсутствующих зубов. Требует ежедневного ухода. Изготавливается в зуботехнической лаборатории по слепкам.',
    },
    {
      icon:'images/icons_for_services_35.gif', name:'Адгезивный мостовидный протез', cat:'orthopedics',
      desc:'Восстановление дефекта зубного ряда адгезивным мостом за одно посещение.',
      price:'500–600 MDL',
      details:'Адгезивный мостовидный протез (Maryland bridge) позволяет восстановить отсутствующий зуб без обтачивания соседних зубов — конструкция фиксируется на крыльях из металла или стеклокерамики. Устанавливается за одно посещение. Хорошее решение при нежелании или невозможности имплантации.',
    },
 
    /* ── ЭСТЕТИКА ── */
    {
      icon:'images/icons_for_services_22.gif', name:'Эстетическая коррекция формы и цвета', cat:'aesthetics',
      desc:'Фотополимерная реставрация для исправления формы, цвета и вида зубов.',
      price:'300–600 MDL',
      details:'Прямая эстетическая реставрация с помощью фотополимерных материалов (Filtek, Ecusit) позволяет изменить форму, цвет, размер и положение зубов без препарирования или с минимальным препарированием. Исправляются диастемы, сколы, потемневшие зубы, неравномерные края. Результат — за одно посещение.',
    },
    {
      icon:'images/icons_for_services_30.gif', name:'Восстановление скола металлокерамической коронки', cat:'aesthetics',
      desc:'Починка скола фарфора на металлокерамической коронке.',
      price:'10 EUR',
      details:'При сколе керамического покрытия коронки можно провести починку непосредственно во рту (фотополимером) или в лаборатории (лабораторно):\n• Починка фотополимером: 10 EUR\n• Лабораторная починка: 10 EUR\nПочинка значительно дешевле, чем изготовление новой коронки.',
    },
    {
      icon:'images/icons_for_services_30.gif', name:'Металлическая вкладка', cat:'aesthetics',
      desc:'Литая металлическая вкладка для восстановления разрушенного зуба.',
      price:'10 EUR',
      details:'Металлическая вкладка — непрямая реставрация, изготовленная в лаборатории. Применяется при значительном разрушении коронки зуба, когда пломба уже не держится. Точно повторяет форму полости, более долговечна, чем пломба.',
    },
    {
      icon:'images/icons_for_services_25.gif', name:'Снятие коронки', cat:'aesthetics',
      desc:'Аккуратное снятие старой или неподходящей коронки.',
      price:'0.5–1 EUR / шт.',
      details:'Снятие коронки требуется при необходимости её замены, повторного эндодонтического лечения зуба или при неточности прилегания. Врач аккуратно распиливает или снимает коронку специальными инструментами, стараясь сохранить её целостность для возможной повторной фиксации.',
    },
    {
      icon:'images/icons_for_services_33.gif', name:'Слепок', cat:'aesthetics',
      desc:'Получение точного слепка зубов для изготовления протезов и коронок.',
      price:'2–5 USD',
      details:'Слепок (оттиск) — точное отображение зубов и тканей полости рта для изготовления зубопротезных конструкций в лаборатории:\n• Однослойный слепок: 2 USD\n• Двухслойный (более точный, для металлокерамики): 5 USD\nДвухслойный слепок используется при изготовлении металлокерамических и безметалловых коронок для максимальной точности.',
    },
  ],
 
  ro:[
    /* ── DIAGNOSTIC ── */
    {
      icon:'images/icons_for_services_01.png', name:'Examinare cu camera video intraorală', cat:'diagnostics',
      desc:'Inspecție vizuală a cavității bucale cu camera video intraorală.',
      price:'Gratuit',
      details:'Camera video intraorală permite medicului să vadă starea dinților și gingiilor în detalii fine pe ecran. Pacientul vede imaginea în timp real. Ajută la detectarea cariei ascunse, fisurilor emailului și inflamației gingivale în stadii incipiente — fără durere.',
    },
    {
      icon:'images/icons_for_services_02.gif', name:'Consultație medic', cat:'diagnostics',
      desc:'Examinare inițială și elaborarea planului individual de tratament.',
      price:'30 MDL',
      details:'La consultație medicul examinează cavitatea bucală, colectează anamneza și evaluează starea dinților și gingiilor. Se elaborează un plan detaliat de tratament cu toate procedurile necesare și costul estimativ. Costul consultației este inclus în costul tratamentului.',
    },
    {
      icon:'images/icons_for_services_03.gif', name:'Viziografie (radiografie)', cat:'diagnostics',
      desc:'Radiografie digitală țintită pentru diagnosticare precisă.',
      price:'30–50 MDL / imagine',
      details:'Viziografia este o radiografie digitală țintită a unuia sau mai multor dinți. Permite detectarea cariei pe suprafețele de contact, evaluarea stării rădăcinilor și țesuturilor periapicale, controlul calității obturației canalelor. Doza de radiație este minimă — de 10 ori mai mică decât la radiografia convențională.',
    },
 
    /* ── STOMATOLOGIE TERAPEUTICĂ ── */
    {
      icon:'images/icons_for_services_04.gif', name:'Anestezie', cat:'therapy',
      desc:'Anestezie locală înainte de tratament — injectare nedureroasă.',
      price:'30–50 MDL',
      details:'Utilizăm anestezice de ultimă generație: lidocaină/xilină (30 MDL) și mai eficiente ultracaină, ubistezin, alfacaină (40–50 MDL). Injecția se face cu ac foarte subțire după aplicarea anesteziei topice pe mucoasă, astfel pacientul practic nu simte înțepătura.',
    },
    {
      icon:'images/icons_for_services_05.gif', name:'Tratarea cariei dentare', cat:'therapy',
      desc:'Plombe moderne chimice și fotopolimerizabile.',
      price:'80–350 MDL',
      details:'Caria — distrugerea țesuturilor dure ale dintelui sub acțiunea bacteriilor. Tratamentul include îndepărtarea țesuturilor afectate, tratament antiseptic și restaurarea dintelui cu plombă:\n• Plomba chimică (Evocrol, Degufill, Charisma): 80–120 MDL\n• Plomba fotopolimerizabilă (Herculite, Superlux, Filtek, Spectrum): 180–350 MDL\n• La defect cuneiform și carie cervicală: 120–150 MDL\n• Căptușeală curative izolatoare: +15 MDL',
    },
    {
      icon:'images/icons_for_services_06.gif', name:'Tratarea pulpitei', cat:'therapy',
      desc:'Tratament endodontic la inflamarea nervului dintelui.',
      price:'50–500 MDL',
      details:'Pulpita — inflamarea nervului (pulpei) dintelui, însoțită de dureri intense. Tratamentul se efectuează în 1–2 vizite:\n• Pastă arsenicală sau fără arseniu cu plombă temporară: 50 MDL\n• Obturarea unui canal cu pastă: 50–70 MDL\n• Obturarea unui canal cu pastă și con de gutapercă: 60–80 MDL\n• Restaurarea dintelui cu știfturi metalice cu fotopolimer: 350–500 MDL\n• Restaurare sub coroană: 180–250 MDL',
    },
    {
      icon:'images/icons_for_services_07.gif', name:'Tratarea periodontitei', cat:'therapy',
      desc:'Tratamentul inflamației țesuturilor din jurul rădăcinii dintelui.',
      price:'30–500 MDL',
      details:'Periodontita — inflamație cronică sau acută a țesuturilor la vârful rădăcinii dintelui. Fără tratament duce la pierderea dintelui:\n• Deschiderea camerei pulpare și canalelor: 70–100 MDL\n• Dezobturarea unui canal anterior tratat: 30–50 MDL\n• Obturarea unui canal cu pastă: 50–70 MDL\n• Obturarea unui canal cu gutapercă: 60–80 MDL\n• Restaurarea dintelui: 180–500 MDL',
    },
    {
      icon:'👶', name:'Tratarea dinților temporari', cat:'therapy',
      desc:'Tratament atent al cariei și pulpitei la copii.',
      price:'30–150 MDL',
      details:'Dinții de lapte necesită același tratament atent ca cei permanenți:\n• Carie: plombe de ciment 30 MDL, polimerizare chimică 40 MDL, fotopolimer 100–150 MDL\n• Pulpită: pastă arsenicală sau fără arseniu 30 MDL\n• Ermetizarea fisurilor dinte de lapte: 70 MDL\n• Ermetizarea fisurilor dinte permanent (până la 12 ani): 100–150 MDL',
    },
 
    /* ── PARODONTOLOGIE ── */
    {
      icon:'images/icons_for_services_09.gif', name:'Detartraj total', cat:'periodontology',
      desc:'Îndepărtarea completă a tartralui cu ultrasunete și instrumente.',
      price:'70–120 MDL',
      details:'Tartrul — depuneri mineralizate pe dinți și sub gingii care provoacă inflamații gingivale. Detartrajul profesional include:\n• Detartraj manual + ultrasunete: 70–120 MDL\n• Aparat piesă-aer (Air Flow): 120–150 MDL\nSe recomandă de 1–2 ori pe an.',
    },
    {
      icon:'images/icons_for_services_10.gif', name:'Echilibrarea ocluziei', cat:'periodontology',
      desc:'Șlefuire selectivă pentru distribuirea uniformă a forței masticatorii.',
      price:'10 MDL / dinte',
      details:'Tulburările de ocluzie provoacă suprasolicitarea unor dinți, accelerând distrugerea lor. Șlefuirea selectivă elimină contactele premature și redistribuie uniform forța masticatorie.',
    },
    {
      icon:'images/icons_for_services_11.gif', name:'Înlăturarea hipersensibilității dentare', cat:'periodontology',
      desc:'Eliminarea durerii la rece, cald, dulce.',
      price:'10 MDL / dinte',
      details:'Hiperestezia apare la expunerea dentinei — din cauza cariei cervicale, recesiei gingivale sau eroziunii emailului. Medicul aplică preparate remineralizante și desensitizante care sigilează canaliculele dentinare și reduc sensibilitatea.',
    },
 
    /* ── CHIRURGIE ── */
    {
      icon:'images/icons_for_services_12.gif', name:'Extracție tipică', cat:'surgery',
      desc:'Extracție standard sub anestezie locală.',
      price:'100 MDL',
      details:'Extracția tipică se efectuează când dintele nu poate fi tratat. Se folosesc clești sau elevatoare sub anestezie locală. Procedura durează 10–20 minute.',
    },
    {
      icon:'images/icons_for_services_13.gif', name:'Extracție atipică', cat:'surgery',
      desc:'Extracție complexă a unui dinte distrus sau malpoziționat.',
      price:'150 MDL',
      details:'Extracția atipică este necesară la coroane sever distruse sau rădăcini curbe. Uneori se folosește secționarea rădăcinilor sau freza. Anestezia este obligatorie. De obicei se aplică suturi.',
    },
    {
      icon:'images/icons_for_services_14.gif', name:'Extracția dintelui neproerupat', cat:'surgery',
      desc:'Extracție chirurgicală a dintelui retenționat sau distopit.',
      price:'300–500 MDL',
      details:'Dintele retenționat (de obicei măseaua de minte) nu a erupt și se află în os. Operația include incizia gingiei, rezecția osului dacă e necesar, extracția dintelui și suturarea plăgii. Se efectuează sub anestezie locală.',
    },
    {
      icon:'images/icons_for_services_15.gif', name:'Tratarea proceselor inflamatorii (cu extracție)', cat:'surgery',
      desc:'Tratamentul inflamațiilor odontogene cu extracția dintelui cauzal.',
      price:'100–150 MDL',
      details:'La periostită, abces sau flegmon odontogen se impune extracția dintelui cauzal și drenarea focarului. Tratamentul include incizie și drenaj, la necesitate — antibiotice.',
    },
    {
      icon:'images/icons_for_services_07.gif', name:'Deschiderea abcesului / drenare', cat:'surgery',
      desc:'Tratamentul proceselor inflamatorii fără extracția dintelui.',
      price:'80–100 MDL',
      details:'La procese purulente limitate se deschide abcesul și se instalează drenaj fără extracția dintelui. După diminuarea inflamației dintele poate fi tratat endodontic.',
    },
    {
      icon:'images/icons_for_services_17.gif', name:'Tratarea pericoronaritei', cat:'surgery',
      desc:'Excizia capișonului inflamat deasupra molarului de minte care erupe.',
      price:'80–100 MDL',
      details:'Pericoronarita — inflamația țesuturilor moi din jurul molarului de minte care erupe. Medicul spală punga cu antiseptic și la necesitate excizează capișonul cu bisturiul. Operația se efectuează sub anestezie locală.',
    },
    {
      icon:'images/icons_for_services_18.gif', name:'Rezecția apicală', cat:'surgery',
      desc:'Îndepărtarea chirurgicală a vârfului rădăcinii la chist sau inflamație cronică.',
      price:'200–300 MDL',
      details:'Rezecția apicală — operație organosalvatoare care permite păstrarea dintelui în prezența unui chist sau periodontită cronică. Medicul face incizie gingivală, trepanează osul, îndepărtează vârful rădăcinii cu țesuturile patologice și obturează canalul retrograd.',
    },
 
    /* ── ORTOPEDIE ── */
    {
      icon:'images/icons_for_services_19.gif', name:'Coroană metalo-ceramică', cat:'orthopedics',
      desc:'Coroană rezistentă și estetică pe schelet metalic cu acoperire ceramică.',
      price:'50–60 EUR',
      details:'Coroana metalo-ceramică — cel mai răspândit tip de proteză fixă. Scheletul metalic asigură rezistența, acoperirea ceramică — estetica. Se aplică pe toți dinții. Durată de viață: 10–15 ani. Avans la protezare — 50%.',
    },
    {
      icon:'images/icons_for_services_20.gif', name:'Coroană turnată cu fatetă', cat:'orthopedics',
      desc:'Coroană metalică turnată cu fatetă din plastic.',
      price:'20–30 EUR',
      details:'Coroana turnată se fabrică prin turnare din aliaj metalic. Fateta din plastic îi conferă aspect estetic dinspre buze/obraji. Mai puțin estetică decât metalo-ceramica, dar mai accesibilă ca preț. Recomandată pentru dinții laterali.',
    },
    {
      icon:'images/icons_for_services_21.gif', name:'Coroană acrilică', cat:'orthopedics',
      desc:'Coroană temporară sau permanentă din plastic acrilic.',
      price:'10 EUR',
      details:'Coroana acrilică se utilizează ca o construcție temporară în perioada confecționării coroanei permanente sau ca permanentă la buget limitat. Mai puțin rezistentă, cu timpul își schimbă culoarea.',
    },
    {
      icon:'images/icons_for_services_22.gif', name:'Proteză scheletară (bügel)', cat:'orthopedics',
      desc:'Proteză mobilă cu schelet metalic la absența parțială a dinților.',
      price:'200–300 EUR',
      details:'Proteza bügel — cel mai funcțional tip de proteză mobilă. Scheletul subțire din aliaj cobalt-crom o face ușoară și fiabilă:\n• Proteză simplă: 200 EUR\n• Cu atașamente (fără clame vizibile): 300 EUR',
    },
    {
      icon:'images/icons_for_services_25.gif', name:'Proteză mobilă', cat:'orthopedics',
      desc:'Proteză laminară totală sau parțială din acrilic.',
      price:'400 MDL',
      details:'Proteza acrilică mobilă — metoda tradițională și accesibilă de restaurare a dinților. Proteza totală înlocuiește toți dinții de pe maxilar, parțiala — câțiva dinți absenți. Necesită îngrijire zilnică.',
    },
    {
      icon:'images/icons_for_services_35.gif', name:'Proteză adezivă', cat:'orthopedics',
      desc:'Restaurarea defectului arcadei dentare cu proteză adezivă — într-o vizită.',
      price:'500–600 MDL',
      details:'Proteza adezivă (Maryland bridge) permite restaurarea dintelui absent fără șlefuirea dinților vecini — construcția se fixează pe aripi metalice sau din sticlă-ceramică. Se instalează într-o vizită.',
    },
 
    /* ── ESTETICĂ ── */
    {
      icon:'images/icons_for_services_22.gif', name:'Corecție estetică a formei și culorii', cat:'aesthetics',
      desc:'Restaurare fotopolimerizabilă pentru corectarea formei, culorii și aspectului.',
      price:'300–600 MDL',
      details:'Restaurarea estetică directă cu materiale fotopolimerizabile (Filtek, Ecusit) permite modificarea formei, culorii, dimensiunii și poziției dinților fără sau cu preparare minimă. Se corectează diastemele, fisurile, dinții înnegriți. Rezultat — într-o vizită.',
    },
    {
      icon:'images/icons_for_services_30.gif', name:'Restaurarea scolului de metalo-ceramică', cat:'aesthetics',
      desc:'Repararea scolului de porțelan pe coroana metalo-ceramică.',
      price:'10 EUR',
      details:'La scol al acoperirii ceramice se poate efectua repararea direct în cavitatea bucală (fotopolimer) sau în laborator:\n• Fotopolimer: 10 EUR\n• Laborator: 10 EUR\nRepararea este mult mai ieftină decât confecționarea unei noi coroane.',
    },
    {
      icon:'images/icons_for_services_30.gif', name:'Incrustație metalică', cat:'aesthetics',
      desc:'Incrustație metalică turnată pentru restaurarea dintelui distrus.',
      price:'10 EUR',
      details:'Incrustația metalică — restaurare indirectă fabricată în laborator. Se utilizează la distrugerea semnificativă a coroanei dintelui când plomba nu mai rezistă. Reproduce exact forma cavității, mai durabilă decât plomba.',
    },
    {
      icon:'images/icons_for_services_25.gif', name:'Îndepărtarea coroanei', cat:'aesthetics',
      desc:'Îndepărtarea atentă a coroanei vechi sau nepotrivite.',
      price:'0,5–1 EUR / buc.',
      details:'Îndepărtarea coroanei este necesară la înlocuire, retratament endodontic sau inadaptare marginală. Medicul secționează sau îndepărtează coroana cu instrumente speciale, încercând să o păstreze pentru refixare.',
    },
    {
      icon:'images/icons_for_services_33.gif', name:'Amprentă', cat:'aesthetics',
      desc:'Obținerea amprentei precise pentru confecționarea protezelor și coroanelor.',
      price:'2–5 USD',
      details:'Amprenta — reproducerea exactă a dinților pentru confecționarea construcțiilor protetice în laborator:\n• Amprentă monostrat: 2 USD\n• Amprentă dublă (mai precisă, pentru metalo-ceramică): 5 USD',
    },
  ],
 
  en:[
    /* ── DIAGNOSTICS ── */
    {
      icon:'images/icons_for_services_01.png', name:'Intraoral Video Examination', cat:'diagnostics',
      desc:'Visual inspection of the oral cavity with an intraoral video camera.',
      price:'Free',
      details:'The intraoral video camera allows the dentist to see the condition of teeth and gums in fine detail on a monitor. The patient can also see the image in real time. This helps detect hidden cavities, enamel cracks and gum inflammation at early stages — without pain.',
    },
    {
      icon:'images/icons_for_services_02.gif', name:'Doctor Consultation', cat:'diagnostics',
      desc:'Initial examination and individual treatment plan preparation.',
      price:'30 MDL',
      details:'At the consultation the dentist examines the oral cavity, takes a history and evaluates the condition of teeth and gums. A detailed treatment plan is drawn up listing all necessary procedures and estimated costs. The consultation fee is included in the treatment cost.',
    },
    {
      icon:'images/icons_for_services_03.gif', name:'Viziography (X-ray)', cat:'diagnostics',
      desc:'Targeted digital X-ray of a tooth for accurate diagnosis.',
      price:'30–50 MDL / image',
      details:'Viziography is a targeted digital X-ray of one or more teeth. It detects cavities on contact surfaces, evaluates root and periapical tissue condition, and monitors canal filling quality. Radiation dose is minimal — 10× lower than conventional X-ray.',
    },
 
    /* ── THERAPEUTIC DENTISTRY ── */
    {
      icon:'images/icons_for_services_04.gif', name:'Anaesthesia', cat:'therapy',
      desc:'Local anaesthesia before treatment — painless injection.',
      price:'30–50 MDL',
      details:'We use next-generation anaesthetics: lidocaine/xylocaine (30 MDL) and more effective ultracaine, ubestizin, alfacaine (40–50 MDL). The injection is given with a very fine needle after applying topical anaesthetic to the mucosa, so the patient barely feels the injection.',
    },
    {
      icon:'images/icons_for_services_05.gif', name:'Cavity Treatment', cat:'therapy',
      desc:'Modern chemical-cure and light-cure fillings.',
      price:'80–350 MDL',
      details:'Dental caries — destruction of tooth hard tissues by bacteria. Treatment includes removing decayed tissue, antiseptic treatment and restoring the tooth with a filling:\n• Chemical-cure fillings (Evocrol, Degufill, Charisma): 80–120 MDL\n• Light-cure fillings (Herculite, Superlux, Filtek, Spectrum): 180–350 MDL\n• Wedge-shaped defect and cervical caries: 120–150 MDL\n• Insulating therapeutic liner: +15 MDL',
    },
    {
      icon:'images/icons_for_services_06.gif', name:'Pulpitis Treatment', cat:'therapy',
      desc:'Endodontic treatment for tooth nerve inflammation.',
      price:'50–500 MDL',
      details:'Pulpitis — inflammation of the tooth nerve (pulp), accompanied by severe pain. Treatment is carried out in 1–2 visits:\n• Arsenic or arsenic-free paste with temporary filling: 50 MDL\n• Filling one canal with paste: 50–70 MDL\n• Filling one canal with paste and gutta-percha point: 60–80 MDL\n• Restoring tooth with metal pins with composite: 350–500 MDL\n• Restoration for crown: 180–250 MDL',
    },
    {
      icon:'images/icons_for_services_07.gif', name:'Periodontitis Treatment', cat:'therapy',
      desc:'Treatment of inflammation of tissues around the tooth root.',
      price:'30–500 MDL',
      details:'Periodontitis — chronic or acute inflammation of tissues at the root apex. Without treatment leads to tooth loss:\n• Opening the pulp chamber and canals: 70–100 MDL\n• Removing previous filling from one canal: 30–50 MDL\n• Filling one canal with paste: 50–70 MDL\n• Filling one canal with gutta-percha: 60–80 MDL\n• Tooth restoration with pins: 180–500 MDL',
    },
    {
      icon:'👶', name:'Baby Teeth Treatment', cat:'therapy',
      desc:'Gentle treatment of cavities and pulpitis in children.',
      price:'30–150 MDL',
      details:'Milk teeth require equally careful treatment as permanent teeth:\n• Caries: cement fillings 30 MDL, chemical cure 40 MDL, light-cure 100–150 MDL\n• Pulpitis: arsenic or arsenic-free paste 30 MDL\n• Fissure sealant on milk tooth: 70 MDL\n• Fissure sealant on permanent tooth (under 12): 100–150 MDL',
    },
 
    /* ── PERIODONTOLOGY ── */
    {
      icon:'images/icons_for_services_09.gif', name:'Full Tartar Removal', cat:'periodontology',
      desc:'Complete removal of tartar with ultrasound and instruments.',
      price:'70–120 MDL',
      details:'Dental calculus — hardened plaque on teeth and under gums causing gum inflammation. Professional cleaning includes:\n• Manual removal + ultrasound: 70–120 MDL\n• Air Flow device: 120–150 MDL\nRecommended 1–2 times per year.',
    },
    {
      icon:'images/icons_for_services_10.gif', name:'Occlusion Correction', cat:'periodontology',
      desc:'Selective grinding for even distribution of chewing load.',
      price:'10 MDL / tooth',
      details:'Occlusion disorders cause overloading of individual teeth, accelerating their destruction. Selective grinding eliminates premature contacts and redistributes the chewing load evenly.',
    },
    {
      icon:'images/icons_for_services_11.gif', name:'Tooth Sensitivity Reduction', cat:'periodontology',
      desc:'Elimination of hypersensitivity — pain from cold, hot, sweet.',
      price:'10 MDL / tooth',
      details:'Hypersensitivity occurs when dentine is exposed due to cervical caries, gum recession or enamel erosion. The dentist applies remineralising and desensitising agents that seal the dentinal tubules and reduce sensitivity.',
    },
 
    /* ── SURGERY ── */
    {
      icon:'images/icons_for_services_12.gif', name:'Standard Tooth Extraction', cat:'surgery',
      desc:'Standard tooth removal under local anaesthesia.',
      price:'100 MDL',
      details:'Standard extraction is performed when a tooth cannot be treated. Forceps or elevators are used under local anaesthesia. The procedure takes 10–20 minutes.',
    },
    {
      icon:'images/icons_for_services_13.gif', name:'Atypical Tooth Extraction', cat:'surgery',
      desc:'Complex removal of a severely broken or malpositioned tooth.',
      price:'150 MDL',
      details:'Atypical extraction is required for severely broken crowns or curved roots. Root sectioning or a drill may be used. Anaesthesia is mandatory. Stitches are usually applied.',
    },
    {
      icon:'images/icons_for_services_14.gif', name:'Impacted Tooth Removal', cat:'surgery',
      desc:'Surgical removal of an impacted or dystopic tooth.',
      price:'300–500 MDL',
      details:'An impacted tooth (usually a wisdom tooth) has not erupted and lies within the bone. The operation includes incising the gum, resecting bone if needed, extracting the tooth and suturing the wound. Performed under local anaesthesia.',
    },
    {
      icon:'images/icons_for_services_15.gif', name:'Treatment of Odontogenic Inflammation (with extraction)', cat:'surgery',
      desc:'Treatment of odontogenic inflammatory processes with extraction of the causative tooth.',
      price:'100–150 MDL',
      details:'In periostitis, abscess or phlegmon of odontogenic origin, removal of the causative tooth and drainage of the inflammatory focus is required. Treatment includes incision and drainage, and antibiotics if necessary.',
    },
    {
      icon:'images/icons_for_services_07.gif', name:'Abscess Opening / Drainage', cat:'surgery',
      desc:'Treatment of inflammatory processes without tooth extraction.',
      price:'80–100 MDL',
      details:'For localised purulent processes, the abscess is opened and a drain is placed without extracting the tooth. After the inflammation subsides, the tooth can be treated endodontically.',
    },
    {
      icon:'images/icons_for_services_17.gif', name:'Pericoronitis Treatment', cat:'surgery',
      desc:'Excision of the inflamed hood over an erupting wisdom tooth.',
      price:'80–100 MDL',
      details:'Pericoronitis — inflammation of the soft tissues (hood) around an erupting wisdom tooth. The dentist flushes the pocket with antiseptic and if necessary excises the overhanging hood with a scalpel. Performed under local anaesthesia.',
    },
    {
      icon:'images/icons_for_services_18.gif', name:'Root Apex Resection', cat:'surgery',
      desc:'Surgical removal of the root apex at a cyst or chronic inflammatory focus.',
      price:'200–300 MDL',
      details:'Root apex resection — a tooth-preserving operation that allows keeping the tooth with a cyst or chronic periodontitis. The dentist makes a gingival incision, trepanates the bone, removes the root apex with pathological tissues and retrogradely fills the canal.',
    },
 
    /* ── ORTHOPEDICS ── */
    {
      icon:'images/icons_for_services_19.gif', name:'Metal-Ceramic Crown', cat:'orthopedics',
      desc:'Strong and aesthetic crown with metal framework and ceramic coating.',
      price:'50–60 EUR',
      details:'Metal-ceramic crown — the most common type of fixed prosthesis. The metal framework provides strength, the ceramic coating provides aesthetics. Suitable for all teeth groups. Service life: 10–15 years. 50% advance payment required.',
    },
    {
      icon:'images/icons_for_services_20.gif', name:'Cast Crown with Plastic Veneer', cat:'orthopedics',
      desc:'Cast metal crown with plastic facing.',
      price:'20–30 EUR',
      details:'The cast crown is made by casting from a metal alloy. The plastic veneer gives it an aesthetic appearance on the lip/cheek side. Less aesthetic than metal-ceramic but more affordable. Recommended for posterior teeth.',
    },
    {
      icon:'images/icons_for_services_21.gif', name:'Acrylic Crown', cat:'orthopedics',
      desc:'Temporary or permanent crown made of acrylic plastic.',
      price:'10 EUR',
      details:'An acrylic crown is used as a temporary construction while a permanent crown is being made, or as a permanent one on a limited budget. Less durable, changes colour over time.',
    },
    {
      icon:'images/icons_for_services_22.gif', name:'Skeletal (Clasp) Denture', cat:'orthopedics',
      desc:'Removable metal framework denture for partial tooth loss.',
      price:'200–300 EUR',
      details:'The clasp denture is the most functional type of removable prosthesis. The thin cobalt-chromium alloy framework makes it light and reliable:\n• Simple clasp denture: 200 EUR\n• With attachments (no visible clasps): 300 EUR',
    },
    {
      icon:'images/icons_for_services_25.gif', name:'Removable Denture', cat:'orthopedics',
      desc:'Full or partial acrylic plate denture.',
      price:'400 MDL',
      details:'Acrylic removable denture — a traditional and affordable way to replace missing teeth. A complete denture replaces all teeth on a jaw, a partial denture replaces several missing teeth. Requires daily care.',
    },
    {
      icon:'images/icons_for_services_35.gif', name:'Adhesive Bridge Prosthesis', cat:'orthopedics',
      desc:'Restoring a dental arch defect with an adhesive bridge — in one visit.',
      price:'500–600 MDL',
      details:'An adhesive bridge (Maryland bridge) allows restoring a missing tooth without grinding adjacent teeth — the structure is fixed on metal or glass-ceramic wings. Installed in one visit.',
    },
 
    /* ── AESTHETICS ── */
    {
      icon:'images/icons_for_services_22.gif', name:'Aesthetic Shape and Colour Correction', cat:'aesthetics',
      desc:'Light-cure composite restoration to correct tooth shape, colour and appearance.',
      price:'300–600 MDL',
      details:'Direct aesthetic restoration with light-cure materials (Filtek, Ecusit) allows changing the shape, colour, size and position of teeth with minimal or no preparation. Diastemas, chips, discoloured teeth and uneven edges are corrected. Result — in one visit.',
    },
    {
      icon:'images/icons_for_services_30.gif', name:'Metal-Ceramic Crown Chip Repair', cat:'aesthetics',
      desc:'Repairing a porcelain chip on a metal-ceramic crown.',
      price:'10 EUR',
      details:'When ceramic coating chips, repair can be done directly in the mouth (composite) or in the laboratory:\n• Composite repair: 10 EUR\n• Laboratory repair: 10 EUR\nRepair is significantly cheaper than making a new crown.',
    },
    {
      icon:'images/icons_for_services_30.gif', name:'Metal Inlay', cat:'aesthetics',
      desc:'Cast metal inlay for restoring a broken-down tooth.',
      price:'10 EUR',
      details:'A metal inlay is an indirect restoration made in the laboratory. Used when significant crown destruction makes filling unreliable. It precisely replicates the cavity shape and is more durable than a filling.',
    },
    {
      icon:'images/icons_for_services_25.gif', name:'Crown Removal', cat:'aesthetics',
      desc:'Careful removal of an old or ill-fitting crown.',
      price:'0.5–1 EUR / pc.',
      details:'Crown removal is needed for replacement, retreatment or marginal discrepancy. The dentist carefully sections or removes the crown with special instruments, trying to preserve it for possible refixation.',
    },
    {
      icon:'images/icons_for_services_33.gif', name:'Impression', cat:'aesthetics',
      desc:'Taking a precise impression for making dentures and crowns.',
      price:'2–5 USD',
      details:'An impression is an exact reproduction of the teeth for making prosthetic constructions in the laboratory:\n• Single-layer impression: 2 USD\n• Double impression (more precise, for metal-ceramics): 5 USD',
    },
  ]
};
/* ── CATEGORIES CONFIG (no "all" tab) ───────────── */
const TAB_KEYS = ['diagnostics','therapy','periodontology','surgery','orthopedics','aesthetics'];
const TAB_ICONS = {
  diagnostics:'🔍',
  therapy:'🦷',
  periodontology:'👄',
  surgery:'✂️',
  orthopedics:'👑',
  aesthetics:'✨'
};
const TAB_I18N = {
  diagnostics:'svc_diagnostics',
  therapy:'svc_therapy',
  periodontology:'svc_periodontology',
  surgery:'svc_surgery',
  orthopedics:'svc_orthopedics',
  aesthetics:'svc_aesthetics'
};
const TAB_DESC_I18N = {
  diagnostics:'svc_cat_desc_diagnostics',
  therapy:'svc_cat_desc_therapy',
  periodontology:'svc_cat_desc_periodontology',
  surgery:'svc_cat_desc_surgery',
  orthopedics:'svc_cat_desc_orthopedics',
  aesthetics:'svc_cat_desc_aesthetics'
};

let activeTab = 'diagnostics';

/* ── ICON HELPER ─────────────────────────────────────
   Если icon — путь к файлу (содержит . или /),
   рендерит <img>. Иначе — эмодзи текстом.
──────────────────────────────────────────────────── */
function renderIcon(icon) {
  if (icon && (icon.includes('/') || icon.includes('\\') || /\.\w{2,4}$/.test(icon))) {
    return `<img src="${icon}" class="svc-icon-img" alt="">`;
  }
  return icon;
}

function countByTab(key, services){
  return services.filter(s => s.cat === key).length;
}

function rebuildServices(){
  const t = LANGS[currentLang];
  const services = SERVICES_DATA[currentLang];

  // rebuild tabs
  const tabsEl = document.getElementById('svcTabs');
  tabsEl.innerHTML = '';
  TAB_KEYS.forEach(key => {
    const btn = document.createElement('button');
    btn.className = 'svc-tab' + (key === activeTab ? ' active' : '');
    btn.dataset.tab = key;
    const cnt = countByTab(key, services);
    btn.innerHTML = `<span class="tab-icon">${TAB_ICONS[key]}</span>${t[TAB_I18N[key]]}<span class="tab-count">${cnt}</span>`;
    btn.onclick = () => filterServices(key);
    tabsEl.appendChild(btn);
  });

  // rebuild cards
  const grid = document.getElementById('svcGrid');
  grid.innerHTML = '';

  // Show category description banner
  const catDesc = document.createElement('div');
  catDesc.className = 'svc-cat-banner';
  catDesc.innerHTML = `<span class="svc-cat-icon">${TAB_ICONS[activeTab]}</span>
    <div>
      <strong>${t[TAB_I18N[activeTab]]}</strong>
      <span>${t[TAB_DESC_I18N[activeTab]]}</span>
    </div>`;
  grid.appendChild(catDesc);

  // Render cards for active tab
  services.forEach((s, i) => {
    if (s.cat !== activeTab) return;
    const d = `d${(i % 4) + 1}`;
    const card = document.createElement('div');
    card.className = `svc-card rv ${d}`;
    card.dataset.cat = s.cat;
    card.innerHTML = `
      <div class="svc-icon">${renderIcon(s.icon)}</div>
      <h3>${s.name}</h3>
      <p>${s.desc}</p>
      <div class="svc-foot">
        <div class="svc-price">${s.price}</div>
        <div class="svc-arr">→</div>
      </div>`;
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => openServiceDetail(s));
    grid.appendChild(card);
  });

  // re-observe new cards
  document.querySelectorAll('.svc-card').forEach(el => rvObs.observe(el));
}

/* ── FILTER LOGIC ────────────────────────────── */
function filterServices(key){
  activeTab = key;
  rebuildServices();
}

/* ── SERVICE DETAIL MODAL ───────────────────── */
function openServiceDetail(s){
  const t = LANGS[currentLang];
  const modal = document.getElementById('serviceDetailModal');
  document.getElementById('sdIcon').innerHTML = renderIcon(s.icon);
  document.getElementById('sdName').textContent = s.name;
  document.getElementById('sdDesc').textContent = s.desc;
  document.getElementById('sdPrice').textContent = s.price;
  document.getElementById('sdPriceLabel').textContent = t.svc_details_price;
  // Convert newlines to <br> for details
  document.getElementById('sdDetails').innerHTML = s.details.replace(/\n/g, '<br>');
  document.getElementById('sdBookBtn').textContent = t.svc_details_book;
  document.getElementById('sdCloseBtn').textContent = t.svc_details_close;
  modal.classList.add('open');
  document.body.classList.add('modal-open');
}

function closeServiceDetail(){
  document.getElementById('serviceDetailModal').classList.remove('open');
  document.body.classList.remove('modal-open');
}

/* ── NAV SCROLL ────────────────────────────────── */
const nav = document.getElementById('nav');
addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 60));

/* ── MOBILE MENU ───────────────────────────────── */
function toggleMenu(){ document.getElementById('mobileMenu').classList.toggle('open'); }

/* ── SCROLL REVEAL ──────────────────────────────── */
const rvObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('in'); });
}, { threshold: .12 });
document.querySelectorAll('.rv').forEach(el => rvObs.observe(el));
rebuildServices();

/* ── COUNTERS ───────────────────────────────────── */
const cntObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if(!e.isIntersecting) return;
    const el = e.target, tgt = +el.dataset.target;
    let cur = 0; const step = tgt / 55;
    const t = setInterval(() => {
      cur += step;
      if(cur >= tgt){ el.textContent = tgt; clearInterval(t); }
      else el.textContent = Math.floor(cur);
    }, 22);
    cntObs.unobserve(el);
  });
}, { threshold: .5 });
document.querySelectorAll('[data-target]').forEach(c => cntObs.observe(c));

/* ── BOOKING MODAL ──────────────────────────────── */
function openModal(){
  const m = document.getElementById('appointmentModal');
  m.classList.add('open');
  document.body.classList.add('modal-open');
  document.getElementById('formBody').style.display = '';
  document.getElementById('fSuccess').classList.remove('show');
  renderCal();
}
function closeModal(){
  document.getElementById('appointmentModal').classList.remove('open');
  document.body.classList.remove('modal-open');
}
function handleOverlayClick(e){
  if(e.target === document.getElementById('appointmentModal')) closeModal();
  if(e.target === document.getElementById('serviceDetailModal')) closeServiceDetail();
}
document.addEventListener('keydown', e => {
  if(e.key === 'Escape'){ closeModal(); closeServiceDetail(); }
});

/* ── CALENDAR ───────────────────────────────────── */
let today = new Date(); today.setHours(0,0,0,0);
let vY = today.getFullYear(), vM = today.getMonth();
let selDate = null, selTime = null;

function renderCal(){
  const MONTHS = LANGS[currentLang].cal_months;
  const DAYS   = LANGS[currentLang].cal_days;
  document.getElementById('calMonth').textContent = `${MONTHS[vM]} ${vY}`;
  const g = document.getElementById('calGrid');
  let html = DAYS.map(d => `<div class="cal-dh">${d}</div>`).join('');
  const first = new Date(vY, vM, 1).getDay();
  const days  = new Date(vY, vM+1, 0).getDate();
  for(let i = 0; i < first; i++) html += `<div class="cal-day empty"></div>`;
  for(let d = 1; d <= days; d++){
    const dt  = new Date(vY, vM, d);
    const dow = dt.getDay();
    const past = dt < today;
    const sun  = dow === 0;
    const dis  = past || sun;
    const isTd  = dt.getTime() === today.getTime();
    const isSel = selDate && dt.getTime() === selDate.getTime();
    let cls = 'cal-day' + (dis ? ' disabled' : '') + (isTd ? ' today' : '') + (isSel ? ' sel' : '');
    html += `<div class="${cls}"${!dis ? ` onclick="pickDate(${vY},${vM},${d},${dow})"` : ''}>${d}</div>`;
  }
  g.innerHTML = html;
}

function pickDate(y, m, d, dow){
  selDate = new Date(y, m, d); selTime = null;
  renderCal(); renderTimeSelect(dow);
}

function renderTimeSelect(dow){
  const sel = document.getElementById('fTime');
  sel.innerHTML = '';
  if(dow === 0){
    sel.innerHTML = `<option value="">${LANGS[currentLang].cal_sunday}</option>`;
    sel.disabled = true; return;
  }
  const endH = dow === 6 ? 12 : 16;
  const placeholder = document.createElement('option');
  placeholder.value = ''; placeholder.textContent = '— Выберите время —';
  sel.appendChild(placeholder);
  for(let h = 8; h < endH; h++){
    ['00','30'].forEach(min => {
      const tStr = `${String(h).padStart(2,'0')}:${min}`;
      const opt = document.createElement('option');
      opt.value = tStr; opt.textContent = tStr;
      sel.appendChild(opt);
    });
  }
  sel.disabled = false; sel.value = '';
  sel.onchange = () => { selTime = sel.value || null; };
}

document.getElementById('calPrev').onclick = () => { vM--; if(vM < 0){ vM = 11; vY--; } renderCal(); };
document.getElementById('calNext').onclick = () => { vM++; if(vM > 11){ vM = 0; vY++; } renderCal(); };
renderCal();

/* ── FORM SUBMIT ────────────────────────────────── */
function submitForm(){
  const last   = document.getElementById('fLast').value.trim();
  const first  = document.getElementById('fFirst').value.trim();
  const phone  = document.getElementById('fPhone').value.trim();
  const doctor = document.getElementById('fDoctor').value;
  const svc    = document.getElementById('fService').value;
  if(!last || !first || !phone || !doctor || !svc){ alert(LANGS[currentLang].form_alert_fields); return; }
  if(!selDate){ alert(LANGS[currentLang].form_alert_date); return; }
  if(!selTime){ alert(LANGS[currentLang].form_alert_time); return; }
  document.getElementById('formBody').style.display = 'none';
  document.getElementById('fSuccess').classList.add('show');
}
