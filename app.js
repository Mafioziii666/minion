// -------- ВОПРОСЫ ТЕСТА --------
const QUIZ = [
  { type: "closed", q: "Какой цвет у тебя в сердечке?", a: ["Голубой", "Розовый", "Чёрный", "Мятный"], correct: 1, comment: "Ну нормально, молодец" },
  { type: "closed", q: "Что ты возьмешь в кофейне?", a: ["Капучино", "Матчу", "Американо", "Какао"], correct: 1, comment: "Круассан в студию!" },
  { type: "closed", q: "Какая вера откликается больше всего?", a: ["Буддийская", "Христианская", "Мусульманская", "Иудаизм"], correct: 0, comment: "Дзен-уровень: достигнут" },
  { type: "closed", q: "Кто твой старший брат?", a: ["Максим", "Лёша", "Володя", "Никита"], correct: 0, comment: "Марине он еще вроде нравится" },
  { type: "open", q: "Сколько Милена готова играть в Бравл за раз?", keywords: ["час", "весь", "день", "ночь", "много"], comment: "НАМНОГО БОЛЬШЕ!!!" },
  { type: "closed", q: "Какое аниме ты любишь?", a: ["Наруто", "Доктор Стоун", "Черный клевер", "Клинок рассекающий демонов"], correct: 1, comment: "За это Какаши тебя и любит" },
  { type: "closed", q: "Под кого ты люто шаришь?", a: ["Мэдкид", "Лололошка", "Оксимирон", "Айдар исхаков"], correct: 0, comment: "Тру ева" },
  { type: "open", q: "Что делаешь в свободное время?", keywords: ["учится", "апает праймы", "гуляет", "спит"], comment: "Апнула кубки - красотка" },
  { type: "open", q: "Какой трек Милена переслушивает чаще всего?", keywords: [], comment: "Крути бычок" },
  { type: "closed", q: "Сколько серий в Наруто?", a: ["700", "710", "720", "730"], correct: 2, comment: "Это тебе не аниме на 10 серий, это серьёзно" },
  { type: "open", q: "В каком районе родилась знаешь?", keywords: ["салаватский", "ермекеевский", "уфимский"], comment: "Ну не Ермекеевский район конечно, но тоже ничего" },
  { type: "closed", q: "Сколько детей у тя в семье?", a: ["3", "4", "5", "6"], correct: 2, comment: "Большая семья — большая любовь" },
  { type: "open", q: "Какое слово описывает тебя лучше всего?", keywords: ["нежн", "мил", "эстет", "добра", "свет"], comment: "Психологически уничтожила" },
  { type: "open", q: "В каком городе сейчас живёшь?", keywords: ["уф"], comment: "Уфа, Зелёнка — слышали, знаем" },
  { type: "closed", q: "Если бы ты могла выбрать последний прием пищи, что бы это было?", a: ["Чернослив с кремобоном", "Чай с медовым тортом", "Миндальный торт с водой", "Кокосовый кекс"], correct: 1, comment: "Приятного аппетита!" },
  { type: "closed", q: "Сколько сказок передавалось в деревне Ишигами?", a: ["50", "100", "150", "200"], correct: 1, comment: "ХЗ КАК ЭТО К ТЕБЕ ОТНОСИТСЯ, НО ЛАДНО" },
  { type: "closed", q: "Какой шарик сейчас в Бравл Старс, быстро!", a: ["Спайк", "Гас", "Кольт", "Леон"], correct: 1, comment: "67. Просто 67." },
  { type: "closed", q: "Что из этого — прямо про тебя?", a: ["Белые кружева", "Джинсы и косуха", "Спортивки", "Строгий костюм"], correct: 0, comment: "Ермекеевская няшесть — она такая" },
  { type: "open", q: "Какой зверёк те в последнее время особенно нравится?", keywords: ["капибара", "олененок", "лев"], comment: "Ну ты щас моггаешь" },
  { type: "closed", q: "Что случилось с сестрой Цукасы?", a: ["Она защитила Цукасу, когда на того напал взрослый", "Она впала в кому по неизвестной причине", "Она сломалась в виде камня", "Она не была найдена"], correct: 1, comment: "Тру ева, милые туфельки — это святое" },
  { type: "open", q: "Какой у Милены любимый режим в Бравл?", keywords: ["шоу", "батл", "роял", "гем", "захват", "награда"], comment: "А че не броулбол?" },
  { type: "closed", q: "В каком колледже учишься?", a: ["БГПУ", "БГУ", "УГНТУ", "БГМУ"], correct: 0, comment: "НАШ СЛОНЯРА!" },
  { type: "closed", q: "Какая у тебя национальность (по крови)?", a: ["Русская", "Татарка", "Чувашка", "Башкирка"], correct: 2, comment: "А вроде таджичкой была" },
  { type: "open", q: "Что слушаешь, когда грустно?", keywords: ["окси", "ло", "груст", "тих", "спокойн"], comment: "Оксимирон бы посвятил тебе куплет" },
  { type: "open", q: "Какой аксессуар готова носить каждый день?", keywords: ["цепь с лезвием", "бантик", "кольцо"], comment: "Лезвием по бургеру" },
  { type: "closed", q: "Твоя любимая детская игрушка?", a: ["Кукла принцесса", "Игрушечная кухня", "Набор доктора", "Игрушечный бычок"], correct: 3, comment: "С папиной работы который)" },
  { type: "closed", q: "Кем ты хотела стать в детстве?", a: ["Учителем", "Ветеринаром", "Мамой"], correct: 0, comment: "А кто не хочет себе такого наставника" },
  { type: "closed", q: "Какая у тебя фобия, помнишь?", a: ["Темноты", "Высоты", "Насекомых", "Крови"], correct: 3, comment: "А кто любит месячные" },
  { type: "closed", q: "Сколько существует путей использования карбоната кальция (мела или извести), если верить Сенку?", a: ["1", "2", "3", "4"], correct: 3, comment: "Королю такое нравится" },
  { type: "open", q: "Что ты обычно делаешь за чашкой кофе?", keywords: ["читает", "играет", "смотрит видео"], comment: "За это Какаши тебя и любит" },
  { type: "closed", q: "За что шаришь?", a: ["NFS", "Бравл", "Клеш рояль", "ГТА"], correct: 1, comment: "Нуууу ладно" },
  { type: "open", q: "Что возьмёшь домой из вкусняшек?", keywords: ["круас", "кофе"], comment: "Приятного аппетита" },
  { type: "open", q: "Кто для ТЕБЯ главный герой ИЗ Наруто?", keywords: ["какаш", "наруто", "саске", "итач"], comment: "Сэнсэй бы поставил тебе пятёрку" },
  { type: "open", q: "Что для Милены «67»?", keywords: ["число", "мем", "игра", "ерунда"], comment: "67. Просто 67." },
  { type: "open", q: "Что для тебя идеальный вечер?", keywords: ["шумная тусовка", "кофейня и книга", "клуб", "спортзал"], comment: "Так держать, девочка моя" },
  { type: "open", q: "Что закажешь к кофе, если день был тяжёлый?", keywords: ["круас", "десерт", "сладк", "пирож"], comment: "67" },
  { type: "closed", q: "Как относишься к большим компаниям с подарками?", a: ["Обожаю", "Неловко", "Всё равно"], correct: 1, comment: "Мы знали. Поэтому всё вот так 😌" },
];

// -------- ВОСПОМИНАНИЯ --------
const MEMORIES = [
  { emoji: "🍰", photo: "img/др год назад.jpg", title: "Ровно год назад", caption: "Интересно что тогда ты удивлялась что тебе уже 18, а сейчас смотри, стареешь на глазах" },
  { emoji: "🕯️", photo: "img/фото61.jpg", title: "Родилась от поцелуя", caption: "И нашли тебя вообще в капусте" },
  { emoji: "☕", photo: "img/фото48.jpg", title: "Тихо, прячемся", caption: "Ну это самое, как его там - репетиция" },
  { emoji: "🎀", photo: "img/фото2.jpg", title: "Хищник", caption: "Ты купила тот самый напиток который я уже не помню понравился тебе, нет" },
  { emoji: "💌", photo: "img/фото54.jpg", title: "Эники беники", caption: "Судакамо" },
  { emoji: "📖", photo: "img/фото47.jpg", title: "Не ну киленка", caption: "После твоих рук блестели даже стены в общаге, отвечаю" },
  { emoji: "🦌", photo: "img/фото3.jpg", title: "В тебя влюбились 3 сестры", caption: "Ещё и все скорпионы" },
  { emoji: "🎲", photo: "img/фото31.jpg", title: "Любовный треугольник", caption: "Хотя куда Камиль лезет, против Шамана то" },
  { emoji: "📚", photo: "img/фото4.jpg", title: "Чтение в Дуо", caption: "Ты уже больше года читаешь книги :0" },
  { emoji: "🕯️", photo: "img/фото46.jpg", title: "2 корпус", caption: "Да, было дело, ходили куда-то" },
  { emoji: "☕", photo: "img/фото5.jpg", title: "В дневник че-то пишет", caption: "Было время, даже дневник вела вон" },
  { emoji: "6️⃣7️⃣", photo: "img/фото28.jpg", title: "67", caption: "6767676767 67676767676767 67676767676767676767 6767676767676767 676767676767" },
  { emoji: "📖", photo: "img/фото7.jpg", title: "Пары", caption: "Хорошо что в колледже есть друзья, иначе зачем туда вообще ходить" },
  { emoji: "📸", photo: "img/фото53.jpg", title: "Фото, которое всех порвало", caption: "Оно до сих пор в моей памяти" },
  { emoji: "🍰", photo: "img/фото8.jpg", title: "Няшечка вкусняшечка", caption: "Просто милашка которая еще не знает что ее ждет" },
  { emoji: "🌸", photo: "img/фото17.jpg", title: "Защита от солнца", caption: "Борьба за выживание, ибо вампирам под солнем находиться нельзя" },
  { emoji: "📚", photo: "img/фото29.jpg", title: "Все начинается со взгляда", caption: "Посмотри на своего врага как на камеру" },
  { emoji: "🕊️", photo: "img/фото18.jpg", title: "Спокойствие", caption: "Ты не бойся ночи, ведь я рядом" },
  { emoji: "🥛", photo: "img/фото11.jpg", title: "Группаши", caption: "Хорошо что хоть кто-то с группы с тобой общается" },
  { emoji: "🌙", photo: "img/фото39.jpg", title: "Спорт - это жизнь", caption: "В здоровом теле - здоровый дух" },
  { emoji: "🕯️", photo: "img/фото59.jpg", title: "Вон тортик", caption: "Загадывай желание и дуй!" },
  { emoji: "👟", photo: "img/фото13.jpg", title: "Любимая физра", caption: "КМС по сидению на скамейке" },
  { emoji: "🦌", photo: "img/фото14.jpg", title: "Олень в заложниках", caption: "Хорошо что ты смогла избежать страшной учести" },
  { emoji: "🤍", photo: "img/фото15.jpg", title: "Кружево", caption: "Белое, нежное, твоё. Ты в этом выглядишь как из сказки" },
  { emoji: "🕊️", photo: "img/фото16.jpg", title: "Загадочная девочка на траве", caption: "Самая модельная модель в поле" },
  { emoji: "🦌", photo: "img/фото37.jpg", title: "Студенческие годы", caption: "Самое яркое время жиес" },
  { emoji: "🤍", photo: "img/фото60.jpg", title: "Ближе брата и сестры", caption: "10-ый корпус" },
  { emoji: "🎓", photo: "img/фото44.jpg", title: "Кафе Кутак", caption: "О да, как хорошо что нас не взяли" },
  { emoji: "🍥", photo: "img/фото19.jpg", title: "Спи моя радость усни", caption: "В небе погасли огни" },
  { emoji: "🦌", photo: "img/фото20.jpg", title: "Утипутипупутупупу", caption: "Ну да, розовый цвет с тобой точно с детства" },
  { emoji: "🕯️", photo: "img/фото10.jpg", title: "Уютная кофейня For Friends", caption: "А ведь Лиля сейчас в Казани, и тоже с Камилем" },
  { emoji: "📖", photo: "img/фото22.jpg", title: "Чик позочка", caption: "Вот даже не знаю, почему это не обложка журнала" },
  { emoji: "📖", photo: "img/фото56.jpg", title: "Первый раз - в первый класс", caption: "Учат в школе, участ в школе, учат в школе" },
  { emoji: "🍿", photo: "img/фото23.jpg", title: "Засыпай, на руках у меня засыпай", caption: "Даже не знаю какой сон нужно видеть для такой позы" },
  { emoji: "🎀", photo: "img/фото24.jpg", title: "Муж и жена одна чепуха", caption: "Не ну тут конечно аура момент" },
  { emoji: "🎲", photo: "img/фото30.jpg", title: "Ну я хуй знает", caption: "Противоположности притягиваются" },
  { emoji: "🌧️", photo: "img/фото25.jpg", title: "Здравствуй осень в лагерях", caption: "Прикол да, как будто только вчера гуляли, а уже бац, конец октября" },
  { emoji: "🥛", photo: "img/фото26.jpg", title: "Даг фейс", caption: "Хз на чем тут строится композиция, на ароматизаторе или на вас" },
  { emoji: "🥐", photo: "img/фото6.jpg", title: "Ледяная фигура", caption: "В этот день мы проверку комнат прогуливали" },
  { emoji: "☕", photo: "img/фото42.jpg", title: "Боги фотошопа", caption: "Зачем мы учились иллюстратору, если мы все умеем" },
  { emoji: "🎀", photo: "img/фото12.jpg", title: "Доброе утро", caption: "Ну вроде бы выспалась" },
  { emoji: "🤍", photo: "img/фото52.jpg", title: "Семья", caption: "Она всегда рядом, когда нужно" },
  { emoji: "🥐", photo: "img/фото58.jpg", title: "И тут все встали по стойке смирно", caption: "Приехал кто-то важный" },
  { emoji: "🕯️", photo: "img/фото32.jpg", title: "Босс в здании", caption: "Пора наводить тишину" },
  { emoji: "🍰", photo: "img/фото33.jpg", title: "Ёжик", caption: "Ты настолько благородна и чиста, что животные сами тянуться к тебе, Камиль тоже" },
  { emoji: "🌸", photo: "img/фото34.jpg", title: "Цветочкиииии", caption: "Ну как можно вообще так чильно сиять" },
  { emoji: "🌧️", photo: "img/фото9.jpg", title: "Дождливый вечер", caption: "Самауырлы ритайым, на котором лучшие друзья сосались" },
  { emoji: "🎤", photo: "img/фото36.jpg", title: "Гроссмейстер", caption: "Ну да, когда-то мы моггали Оскара" },
  { emoji: "🎂", photo: "img/фото27.jpg", title: "Ну Ермекеевский райооон", caption: "Ну легендарная локация" },
  { emoji: "🕊️", photo: "img/фото38.jpg", title: "Вот это были времена", caption: "10 корпус и Атнашев" },
  { emoji: "🕯️", photo: "img/фото21.jpg", title: "Какаши", caption: "Ты сказала: «Он мой». Он не спорил." },
  { emoji: "🎲", photo: "img/фото57.jpg", title: "С мокрой жопой", caption: "Щас бы купаться в речке, а не это все" },
  { emoji: "🎲", photo: "img/фото45.jpg", title: "АМЗ Салаватского", caption: "Самая трушная Салаватская сидит" },
  { emoji: "🕯️", photo: "img/фото40.jpg", title: "Ку-ку", caption: "Кто это тут у нас" },
  { emoji: "🕉️", photo: "img/фото41.jpg", title: "Вайб", caption: "Одногрупники с каждой парой все аппетитнее" },
  { emoji: "🤍", photo: "img/фото35.jpg", title: "Спокойной ночи малыши", caption: "Хотя какие малыши, нам же уже 19" },
  { emoji: "☕", photo: "img/фото43.jpg", title: "ХИХИХХИХИХИХИХИ", caption: "ХХИХИХИХИХИХХИХИХИИ" },
  { emoji: "🍕", photo: "img/фото49.jpg", title: "Вчерашняя пицца самая вкусная", caption: "Особенно если есть ее в твоей компании" },
  { emoji: "🦌", photo: "img/фото50.jpg", title: "Очередное милашество", caption: "Ничего как будто бы и не делали, но было идеально" },
  { emoji: "🕯️", photo: "img/фото51.jpg", title: "Охх уж эта форма", caption: "Интересный опыт, дай бог когда нибудь ещё раз сходим" },
  { emoji: "🌧️", photo: "img/фото55.jpg", title: "Ку-ку", caption: "Кто это тут у нас" },
];

// -------- КЛИКЕР --------
const CLICKER = {
  target: 100,
  emoji: "🎀",
  text: "Нажимай на бантик — собери 100 штук!",
  winMessage: "Раунд!!!!",
};

// -------- ГАС --------
const GAS_QUOTES = {
  intro: "О, опять она. Ну ладно, посмотрим, что вы там намудрили.",
  quiz: ["67. Просто 67.", "Ну ты щас моггаешь.", "Хоть кто-то в этом мире что-то да знает.", "Базар Джексон", "Слюна Генерала Гавса тоже так думает", "Делаешь", "Это было легко", "Психологически уничтожила меня"],
  memories: ["О, старые добрые.", "Ну да, кажись ты стареешь", "Тут даже я прослезился. Шучу.", "Ура, ты ближе к сформированным лобным долям", "Листай дальше, там самое интересное."],
  catchGas: ["Лови меня!", "67!", "Ну ты моггаешь!", "Не поймаешь!", "Я быстрее!", "Бемби, догоняй!"],
  catchGasMiss: ["Ха-ха!", "Мимо!", "Не, ну ты старайся!", "Промах, красотка!"],
  brawlQuiz: ["Быстрее, время идёт!", "67.", "Это было легко.", "Легенда, не иначе."],
  thanks: ["Ого, сколько людей тебя любят.", "Ну это было мило.", "Вот это команда собралась."],
  quotes: ["Ты это говорила!", "Ну это база.", "67.", "Твои слова, не отвертишься."],
  clicker: ["Жми-жми, я подожду.", "Ну ты старайся хотяб"],
  final: "Ну всё, я сваливаюсь. Свидание сами организуйте.",
};

// -------- ПРИГЛАШЕНИЕ --------
const INVITE = {
  title: "Приглашение 💌",
  place: "Гоголя 60/1",
  date: "30 октября 2026",
  time: "18:00",
  dresscode: "Одеться по удобству, со стилем, а главное тепло, пожалуйста :3",
  sign: "Камиль Шарипов заберет вас из дома, и его главное условие - будьте голодными)",
};

// -------- ПОЙМАЙ ГАСА --------
const CATCH_GAS = {
  target: 10,
  duration: 20,
  winMessage: "Гас признал тебя достойной! 🎀",
  loseMessage: "Гас убежал... Но он даст тебе ещё шанс 😏",
};

// -------- БРАВЛ-ВИКТОРИНА --------
const BRAWL_QUIZ = {
  timePerQuestion: 10,
  questions: [
    { q: "Какой Персонаж дается в начале?", a: ["Поко", "Шелли", "Кольт", "Леон"], correct: 1 },
    { q: "Сколько кубков у тебя на аккаунте?", a: ["10000+", "20000+", "30000+", "40000+"], correct: 2 },
    { q: "В каком году вышла игра?", a: ["2016", "2017", "2018", "2019"], correct: 2 },
    { q: "Какой режим твой самый нелюбимый?", a: ["Броулбол", "Ограбление", "Захват кристалов", "Награда за поимку"], correct: 0 },
    { q: "Сколько бойцов в игре примерно?", a: ["50", "70", "90", "100"], correct: 3 },
  ],
  ranks: [
    { min: 0, name: "Бронза 🥉" },
    { min: 2, name: "Серебро 🥈" },
    { min: 4, name: "Золото 🥇" },
    { min: 5, name: "Легенда 👑" },
  ],
  winMessage: "Ты — Легенда. 67.",
};

// -------- БЛАГОДАРНОСТИ --------
const THANKS = {
  title: "Спасибо всем, кто помог 🎀",
  intro: "Этот сайт собран руками людей, которые тебя любят, ценят и гордятся тобой:",
  people: [
    { name: "Камиль", role: "В целом внес большой вклад, в тихоря спрашивал у тебя вопросы, тайно сообщал о мелочах, ну и конечно же 'доставил' этот сайт к тебе", emoji: "💻" },
    { name: "Твоя мама", role: "Прислала кучу твоих детских фоток, даже тех которых ни у кого не было", emoji: "🌸" },
    { name: "Лёша", role: "Помог с фото и оперативно договаривался с вашей мамой", emoji: "👑" },
    { name: "Максим", role: "Тоже что-то там пытался, но у него вообще фотографий не было", emoji: "📸" },
    { name: "Ниля :3", role: "Ну и я просто собрала все вместе", emoji: "😂" },
    { name: "Дипсик", role: "Легенда, которая помогла весь материал преподнести в данном виде", emoji: "🎲" },
  ],
  outro: "Все для тебя, любимка",
};

// -------- ЦИТАТЫ МИЛЕНЫ --------
const QUOTES_GAME = {
  quotes: [
    {
      text: "Раньше думала, что моя сильная сторона — ______, сейчас уже че-то сомневаюсь. Но хочу, чтоб это была коммуникация.",
      answers: ["оптимизм", "ум", "логика", "скромность", "харизма"],
      correct: [0, 1],
    },
    {
      text: "Мне с какой-то стати часто говорят, что я оч шарю в ______, хотя я сама так не считаю.",
      answers: ["людях", "аниме", "мемах", "математике", "моде"],
      correct: [2],
    },
    {
      text: "Конкретно сейчас меня хвалят за то, что я ______ со всеми.",
      answers: ["сдержанная", "спокойная", "молчу", "общаюсь", "дружу"],
      correct: [3],
    },
    {
      text: "Все оч удивляются, что я с многими поддерживаю ______ и у многих я была единственной, с кем они общались летом.",
      answers: ["контакт", "дистанцию", "интригу", "молчание", "дружбу"],
      correct: [0],
    },
  ],
  winMessage: "Ты знаешь себя лучше всех 🎀",
};

/* =========================================================
   СОСТОЯНИЕ
   ========================================================= */
const STORAGE_KEY = "milena_progress_v1";

const defaultState = {
  screen: "intro",
  quizIndex: 0,
  quizAnswers: [],
  catchGasDone: false,
  memoriesOpened: [],
  brawlQuizDone: false,
  thanksDone: false,
  quotesDone: false,
  clickerDone: false,
  finished: false,
};

let state = loadState();

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return { ...defaultState, ...JSON.parse(raw) };
  } catch (e) {}
  return { ...defaultState };
}
function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {}
}

/* =========================================================
   ПРОГРЕСС
   ========================================================= */
function totalSteps() {
  return QUIZ.length
    + 1 /*catchGas*/
    + MEMORIES.length
    + 1 /*brawlQuiz*/
    + 1 /*thanks*/
    + 1 /*quotes*/
    + 1 /*clicker*/
    + 1 /*final*/;
}
function doneSteps() {
  return state.quizAnswers.length
    + (state.catchGasDone ? 1 : 0)
    + state.memoriesOpened.length
    + (state.brawlQuizDone ? 1 : 0)
    + (state.thanksDone ? 1 : 0)
    + (state.quotesDone ? 1 : 0)
    + (state.clickerDone ? 1 : 0)
    + (state.finished ? 1 : 0);
}
function updateProgress() {
  const total = totalSteps();
  const pct = total > 0 ? Math.round((doneSteps() / total) * 100) : 0;
  const fill = document.getElementById("progressFill");
  const text = document.getElementById("progressText");
  if (fill) fill.style.width = pct + "%";
  if (text) text.textContent = pct + "%";
}

/* =========================================================
   ГАС
   ========================================================= */
let gasTimer = null;
function gasSay(text) {
  const bubble = document.getElementById("gasBubble");
  if (!bubble || !text) return;
  bubble.textContent = text;
  bubble.classList.add("show");
  clearTimeout(gasTimer);
  gasTimer = setTimeout(() => bubble.classList.remove("show"), 4500);
}
function gasRandom(category) {
  const arr = GAS_QUOTES[category];
  if (Array.isArray(arr)) gasSay(arr[Math.floor(Math.random() * arr.length)]);
  else if (typeof arr === "string") gasSay(arr);
}

/* =========================================================
   РОУТЕР
   ========================================================= */
const app = document.getElementById("app");

function go(screen) {
  state.screen = screen;
  saveState();
  render();
}

function render() {
  if (!app) return;
  app.innerHTML = "";
  updateProgress();

  switch (state.screen) {
    case "intro":      renderIntro(); break;
    case "quiz":       renderQuiz(); break;
    case "catchGas":   renderCatchGas(); break;
    case "memories":   renderMemories(); break;
    case "brawlQuiz":  renderBrawlQuiz(); break;
    case "thanks":     renderThanks(); break;
    case "quotes":     renderQuotesGame(); break;
    case "clicker":    renderClicker(); break;
    case "final":      renderFinal(); break;
    default:           renderIntro(); break;
  }
}

/* =========================================================
   ЭКРАН: ИНТРО
   ========================================================= */
function renderIntro() {
  app.innerHTML = `
    <section class="screen active">
      <img src="img/бант.png" alt="бантик" class="intro-emoji-img" />
      <h1 class="intro-title">С днём рождения, Милена!</h1>
      <p class="intro-text">
        Сегодня твой самый прекрасный день — и это только его начало.
        Дальше тебя ждёт сборная солянка из испытаний, воспоминаний и всякой дичи инде, как же без этого лол)
      </p>
      <p class="intro-text">
        Не бойся: прогресс сохраняется, так что не обязательно проходить всё сразу.
        Хотя мы бы на твоём месте зависли тут на весь день :D
      </p>
      <button class="btn" onclick="go('quiz')">Начать путешествие &gt;&gt;&gt;</button>
    </section>
  `;
  gasSay(GAS_QUOTES.intro);
}

/* =========================================================
   ЭКРАН: ТЕСТ
   ========================================================= */
function renderQuiz() {
  if (state.quizIndex >= QUIZ.length) {
    gasSay("Всё, тест пройден. Дальше немного из жизни, посмотрим как ты до 19-ти дожила вообще.");
    return go("catchGas");
  }
  const q = QUIZ[state.quizIndex];
  const total = QUIZ.length;

  let html = `
    <section class="screen active">
      <div class="q-counter">Вопрос ${state.quizIndex + 1} из ${total}</div>
      <h2 class="q-title">Насколько хорошо ты себя знаешь?</h2>
      <p class="q-text">${q.q}</p>
  `;

  if (q.type === "closed") {
    html += `<div class="answers">`;
    q.a.forEach((ans, i) => {
      html += `<button class="answer" data-i="${i}">${ans}</button>`;
    });
    html += `</div>`;
  } else {
    html += `
      <input type="text" class="open-input" id="openAnswer" placeholder="Твой ответ..." />
      <button class="btn" id="submitOpen" style="margin-top:12px">Ответить</button>
    `;
  }

  html += `<div id="commentBox"></div></section>`;
  app.innerHTML = html;

  if (q.type === "closed") {
    app.querySelectorAll(".answer").forEach(btn => {
      btn.addEventListener("click", () => {
        const i = +btn.dataset.i;
        const correct = i === q.correct;
        btn.classList.add(correct ? "correct" : "wrong");
        app.querySelectorAll(".answer").forEach(b => b.disabled = true);
        showComment(q.comment);
        state.quizAnswers[state.quizIndex] = { i, correct };
        saveState();
        updateProgress();
        setTimeout(nextQuestion, 1600);
      });
    });
  } else {
    const input = document.getElementById("openAnswer");
    const submit = document.getElementById("submitOpen");
    const doSubmit = () => {
      const val = input.value.trim().toLowerCase();
      const ok = q.keywords.some(k => val.includes(k));
      input.disabled = true;
      submit.disabled = true;
      showComment((ok ? "✅ " : "💭 ") + q.comment);
      state.quizAnswers[state.quizIndex] = { val, ok };
      saveState();
      updateProgress();
      setTimeout(nextQuestion, 1800);
    };
    submit.addEventListener("click", doSubmit);
    input.addEventListener("keydown", e => { if (e.key === "Enter") doSubmit(); });
  }

  gasRandom("quiz");
}

function showComment(text) {
  if (!text) return;
  const box = document.getElementById("commentBox");
  if (box) box.innerHTML = `<div class="comment">${text}</div>`;
}

function nextQuestion() {
  state.quizIndex++;
  saveState();
  render();
}

/* =========================================================
   ЭКРАН: ПОЙМАЙ ГАСА
   ========================================================= */
function renderCatchGas() {
  if (state.catchGasDone) {
    return go("memories");
  }

  app.innerHTML = `
    <section class="screen active">
      <h2 class="q-title">Поймай Гаса!</h2>
      <p class="q-text">Кликни по Гасу ${CATCH_GAS.target} раз за ${CATCH_GAS.duration} секунд.</p>
      <div class="catch-area" id="catchArea">
        <div class="catch-hud">
          <span>Поймано: <b id="catchCount">0</b> / ${CATCH_GAS.target}</span>
          <span>⏱ <b id="catchTimer">${CATCH_GAS.duration}</b> сек</span>
        </div>
        <div class="catch-gas" id="catchGas" style="left:50%;top:50%;">
          <img src="img/шар.png" alt="Гас" draggable="false" />
        </div>
        <div class="catch-msg" id="catchMsg"></div>
      </div>
    </section>
  `;

  const area = document.getElementById("catchArea");
  const gas = document.getElementById("catchGas");
  const countEl = document.getElementById("catchCount");
  const timerEl = document.getElementById("catchTimer");
  const msgEl = document.getElementById("catchMsg");

  let caught = 0;
  let timeLeft = CATCH_GAS.duration;
  let finished = false;

  const moveInterval = setInterval(() => {
    if (finished) return;
    const rect = area.getBoundingClientRect();
    const gasRect = gas.getBoundingClientRect();
    const maxX = Math.max(0, rect.width - gasRect.width);
    const maxY = Math.max(0, rect.height - gasRect.height);
    const x = gasRect.width / 2 + Math.random() * maxX;
    const y = gasRect.height / 2 + Math.random() * maxY;
    gas.style.left = x + "px";
    gas.style.top = y + "px";
  }, 700);

  const timerInterval = setInterval(() => {
    if (finished) return;
    timeLeft--;
    timerEl.textContent = timeLeft;
    if (timeLeft <= 0) {
      finish(false);
    }
  }, 1000);

  gas.addEventListener("click", (e) => {
    e.stopPropagation();
    if (finished) return;
    caught++;
    countEl.textContent = caught;
    gasSay(GAS_QUOTES.catchGas[Math.floor(Math.random() * GAS_QUOTES.catchGas.length)]);
    gas.classList.remove("caught");
    void gas.offsetWidth;
    gas.classList.add("caught");
    if (caught >= CATCH_GAS.target) {
      finish(true);
    }
  });

  area.addEventListener("click", (e) => {
    if (finished) return;
    if (e.target.closest && e.target.closest(".catch-gas")) return;
    msgEl.textContent = GAS_QUOTES.catchGasMiss[Math.floor(Math.random() * GAS_QUOTES.catchGasMiss.length)];
    msgEl.classList.add("show");
    setTimeout(() => msgEl.classList.remove("show"), 800);
  });

  function finish(win) {
    finished = true;
    clearInterval(moveInterval);
    clearInterval(timerInterval);
    gas.style.display = "none";

    if (win) {
      msgEl.innerHTML = `<div class="comment">${CATCH_GAS.winMessage}</div>`;
      if (!state.catchGasDone) {
        state.catchGasDone = true;
        saveState();
        updateProgress();
      }
      setTimeout(() => go("memories"), 1800);
    } else {
      msgEl.innerHTML = `<div class="comment">${CATCH_GAS.loseMessage}</div>
        <button class="btn" id="retryCatch" style="margin-top:12px">Ещё раз</button>`;
      const retry = document.getElementById("retryCatch");
      if (retry) retry.addEventListener("click", () => renderCatchGas());
    }
  }

  gasRandom("catchGas");
}

/* =========================================================
   ЭКРАН: ВОСПОМИНАНИЯ
   ========================================================= */
function renderMemories() {
  const allOpened = state.memoriesOpened.length === MEMORIES.length;

  let html = `
    <section class="screen active">
      <h2 class="q-title">Коллекция воспоминаний</h2>
      <p class="q-text">Нажми на карточку — там кусочек твоей истории.</p>
      <div class="memories-grid">
  `;
  MEMORIES.forEach((m, i) => {
    const opened = state.memoriesOpened.includes(i);
    html += `<div class="memory-card ${opened ? "opened" : ""}" data-i="${i}">${m.emoji}</div>`;
  });
  html += `</div>`;

  html += `<button class="btn" id="memoriesNext" ${allOpened ? "" : "disabled style='opacity:0.5'"}>
    ${allOpened ? "Дальше →" : `Открыто ${state.memoriesOpened.length} из ${MEMORIES.length}`}
  </button></section>`;

  app.innerHTML = html;

  app.querySelectorAll(".memory-card").forEach(card => {
    card.addEventListener("click", () => {
      const i = +card.dataset.i;
      if (!state.memoriesOpened.includes(i)) {
        state.memoriesOpened.push(i);
        saveState();
        updateProgress();
      }
      openMemoryModal(i);
      card.classList.add("opened");

      const all = state.memoriesOpened.length === MEMORIES.length;
      const nextBtn = document.getElementById("memoriesNext");
      if (nextBtn) {
        if (all) {
          nextBtn.disabled = false;
          nextBtn.style.opacity = "1";
          nextBtn.textContent = "Дальше →";
        } else {
          nextBtn.textContent = `Открыто ${state.memoriesOpened.length} из ${MEMORIES.length}`;
        }
      }
    });
  });

  const nextBtn = document.getElementById("memoriesNext");
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      if (state.memoriesOpened.length === MEMORIES.length) go("brawlQuiz");
    });
  }

  gasRandom("memories");
}

function openMemoryModal(i) {
  const m = MEMORIES[i];
  const backdrop = document.createElement("div");
  backdrop.className = "modal-backdrop";
  backdrop.innerHTML = `
    <div class="modal">
      <div class="modal-photo">${m.photo ? `<img src="${m.photo}" alt="">` : m.emoji}</div>
      <h3 class="modal-title">${m.title}</h3>
      <p class="modal-caption">${m.caption}</p>
      <button class="btn" style="margin-top:16px">Закрыть</button>
    </div>
  `;
  document.body.appendChild(backdrop);
  backdrop.addEventListener("click", e => {
    if (e.target === backdrop || (e.target.tagName === "BUTTON")) backdrop.remove();
  });
}

/* =========================================================
   ЭКРАН: БРАВЛ-ВИКТОРИНА
   ========================================================= */
function renderBrawlQuiz() {
  if (state.brawlQuizDone) {
    return go("thanks");
  }

  const questions = BRAWL_QUIZ.questions;
  let index = 0;
  let score = 0;
  let timeLeft = BRAWL_QUIZ.timePerQuestion;
  let timerInterval = null;
  let answered = false;

  function renderQuestion() {
    if (index >= questions.length) {
      return renderResult();
    }
    answered = false;
    timeLeft = BRAWL_QUIZ.timePerQuestion;

    const q = questions[index];
    let answersHtml = "";
    q.a.forEach((ans, i) => {
      answersHtml += `<button class="answer" data-i="${i}">${ans}</button>`;
    });

    app.innerHTML = `
      <section class="screen active">
        <div class="q-counter">Вопрос ${index + 1} из ${questions.length} · ⏱ <b id="brawlTimer">${timeLeft}</b></div>
        <h2 class="q-title">Бравл-викторина</h2>
        <p class="q-text">${q.q}</p>
        <div class="answers" id="brawlAnswers">${answersHtml}</div>
        <div id="brawlComment"></div>
      </section>
    `;

    const timerEl = document.getElementById("brawlTimer");
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
      if (answered) return;
      timeLeft--;
      if (timerEl) timerEl.textContent = timeLeft;
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        answer(-1);
      }
    }, 1000);

    app.querySelectorAll("#brawlAnswers .answer").forEach(btn => {
      btn.addEventListener("click", () => {
        if (answered) return;
        answer(+btn.dataset.i);
      });
    });

    gasRandom("brawlQuiz");
  }

  function answer(i) {
    if (answered) return;
    answered = true;
    clearInterval(timerInterval);

    const q = questions[index];
    const correct = i === q.correct;
    if (correct) score++;

    app.querySelectorAll("#brawlAnswers .answer").forEach(b => {
      b.disabled = true;
      if (+b.dataset.i === q.correct) b.classList.add("correct");
      if (+b.dataset.i === i && !correct) b.classList.add("wrong");
    });

    const box = document.getElementById("brawlComment");
    if (box) {
      box.innerHTML = `<div class="comment">${correct ? "✅ Верно!" : (i === -1 ? "⏰ Время вышло!" : "❌ Мимо")}</div>`;
    }

    setTimeout(() => {
      index++;
      renderQuestion();
    }, 1200);
  }

  function renderResult() {
    let rank = BRAWL_QUIZ.ranks[0].name;
    for (const r of BRAWL_QUIZ.ranks) {
      if (score >= r.min) rank = r.name;
    }

    app.innerHTML = `
      <section class="screen active">
        <h2 class="q-title">Результат</h2>
        <p class="q-text">Правильно: <b>${score}</b> из ${questions.length}</p>
        <p class="q-text">Твой ранг: <b>${rank}</b></p>
        <div class="comment">${BRAWL_QUIZ.winMessage}</div>
        <button class="btn" id="brawlNext" style="margin-top:16px">Дальше →</button>
      </section>
    `;

    if (!state.brawlQuizDone) {
      state.brawlQuizDone = true;
      saveState();
      updateProgress();
    }

    const next = document.getElementById("brawlNext");
    if (next) next.addEventListener("click", () => go("thanks"));
  }

  renderQuestion();
}

/* =========================================================
   ЭКРАН: БЛАГОДАРНОСТИ
   ========================================================= */
function renderThanks() {
  let listHtml = "";
  THANKS.people.forEach(p => {
    listHtml += `
      <div class="thanks-card">
        <div class="thanks-emoji">${p.emoji}</div>
        <div class="thanks-name">${p.name}</div>
        <div class="thanks-role">${p.role}</div>
      </div>
    `;
  });

  app.innerHTML = `
    <section class="screen active">
      <h2 class="q-title">${THANKS.title}</h2>
      <p class="q-text">${THANKS.intro}</p>
      <div class="thanks-grid">${listHtml}</div>
      <p class="q-text" style="margin-top:20px; text-align:center; font-style:italic;">${THANKS.outro}</p>
      <button class="btn" id="thanksNext" style="margin-top:16px">Дальше →</button>
    </section>
  `;

  if (!state.thanksDone) {
    state.thanksDone = true;
    saveState();
    updateProgress();
  }

  const next = document.getElementById("thanksNext");
  if (next) next.addEventListener("click", () => go("quotes"));

  gasRandom("thanks");
}

/* =========================================================
   ЭКРАН: ЦИТАТЫ МИЛЕНЫ
   ========================================================= */
function renderQuotesGame() {
  if (state.quotesDone) {
    return go("clicker");
  }

  let current = 0;
  let correctCount = 0;
  const totalQ = QUOTES_GAME.quotes.length;

  function renderQuote() {
    if (current >= totalQ) {
      return renderResult();
    }

    const q = QUOTES_GAME.quotes[current];
    // заменить все ______ на пустые инпуты/кнопки — проще: показываем текст с [пропуском]
    // и варианты ниже. Игрок выбирает вариант — заполняется первый пропуск.
    // Для простоты: варианты — это ответы, правильные — correct[0] и т.д.
    const blankCount = (q.text.match(/______/g) || []).length;

    // Для упрощения: один клик = попытка угадать одно слово (первый пропуск).
    // Сделаем так: показываем текст с одним пропуском, варианты — ответы.
    // (если в цитате два пропуска — оставим только первый, для простоты)
    const textWithOneBlank = q.text.replace(/______/g, (m, idx) => idx === 0 ? '<span class="quote-blank">______</span>' : m);

    let answersHtml = "";
    q.answers.forEach((ans, i) => {
      answersHtml += `<button class="answer" data-i="${i}">${ans}</button>`;
    });

    app.innerHTML = `
      <section class="screen active">
        <div class="q-counter">Цитата ${current + 1} из ${totalQ}</div>
        <h2 class="q-title">Цитаты Милены</h2>
        <p class="q-text">Заполни пропуск — это её слова.</p>
        <div class="quote-card">
          <p class="quote-text">${textWithOneBlank}</p>
        </div>
        <div class="answers" id="quoteAnswers">${answersHtml}</div>
        <div id="quoteComment"></div>
      </section>
    `;

    app.querySelectorAll("#quoteAnswers .answer").forEach(btn => {
      btn.addEventListener("click", () => {
        const i = +btn.dataset.i;
        const correct = q.correct.includes(i);
        if (correct) correctCount++;

        app.querySelectorAll("#quoteAnswers .answer").forEach(b => {
          b.disabled = true;
          if (q.correct.includes(+b.dataset.i)) b.classList.add("correct");
          if (+b.dataset.i === i && !correct) b.classList.add("wrong");
        });

        const box = document.getElementById("quoteComment");
        if (box) {
          box.innerHTML = `<div class="comment">${correct ? "✅ Так и было!" : "💭 Ну почти!"}</div>`;
        }

        setTimeout(() => {
          current++;
          renderQuote();
        }, 1400);
      });
    });

    gasRandom("quotes");
  }

  function renderResult() {
    app.innerHTML = `
      <section class="screen active">
        <h2 class="q-title">Цитаты пройдены!</h2>
        <p class="q-text">Правильно: <b>${correctCount}</b> из ${totalQ}</p>
        <div class="comment">${QUOTES_GAME.winMessage}</div>
        <button class="btn" id="quotesNext" style="margin-top:16px">Дальше →</button>
      </section>
    `;

    if (!state.quotesDone) {
      state.quotesDone = true;
      saveState();
      updateProgress();
    }

    const next = document.getElementById("quotesNext");
    if (next) next.addEventListener("click", () => go("clicker"));
  }

  renderQuote();
}

/* =========================================================
   ЭКРАН: КЛИКЕР
   ========================================================= */
function renderClicker() {
  let count = 0;
  const EMOJIS = ["🎀", "💗", "🦌", "⭐", "🌸", "☕", "🎈", "🤍"];
  const HINTS = [
    "Ещё чуток!", "Ты можешь!", "67!", "Ну ты щас моггаешь",
    "Сексом пахнет", "Психологическое давление", "Газззз",
  ];

  app.innerHTML = `
    <section class="screen active">
      <h2 class="q-title">Кликер</h2>
      <p class="q-text">${CLICKER.text}</p>
      <div class="clicker-area" id="clickerArea">
        <svg class="clicker-ring" viewBox="0 0 200 200">
          <circle class="ring-bg" cx="100" cy="100" r="90"></circle>
          <circle class="ring-fill" id="ringFill" cx="100" cy="100" r="90"></circle>
        </svg>
        <button class="clicker-btn" id="clickBtn">${CLICKER.emoji}</button>
        <p class="clicker-count" id="clickCount">0 / ${CLICKER.target}</p>
        <p class="clicker-hint" id="clickerHint"></p>
      </div>
    </section>
  `;

  const btn = document.getElementById("clickBtn");
  const label = document.getElementById("clickCount");
  const hint = document.getElementById("clickerHint");
  const area = document.getElementById("clickerArea");
  const ring = document.getElementById("ringFill");
  const RING_LEN = 565;
  let finished = false;

  btn.addEventListener("click", (e) => {
    if (finished) return;

    const isGolden = Math.random() < 1 / 15;
    const add = isGolden ? 5 : 1;
    count += add;

    spawnRipple(e.clientX, e.clientY);
    const particleCount = isGolden ? 14 : 8;
    for (let i = 0; i < particleCount; i++) {
      spawnParticle(e.clientX, e.clientY, EMOJIS[Math.floor(Math.random() * EMOJIS.length)]);
    }
    spawnPlusOne(e.clientX, e.clientY, isGolden ? `+${add} ✨` : `+${add}`);

    btn.classList.remove("pop");
    void btn.offsetWidth;
    btn.classList.add("pop");
    setTimeout(() => btn.classList.remove("pop"), 120);

    label.textContent = `${count} / ${CLICKER.target}`;
    label.classList.remove("bump");
    void label.offsetWidth;
    label.classList.add("bump");

    const progress = Math.min(count / CLICKER.target, 1);
    if (ring) ring.style.strokeDashoffset = RING_LEN * (1 - progress);

    if (count % 7 === 0 || isGolden) {
      hint.textContent = isGolden ? "ЕБАШЬ!!!" : HINTS[Math.floor(Math.random() * HINTS.length)];
      setTimeout(() => { hint.textContent = ""; }, 1500);
    }

    if (isGolden) {
      btn.classList.add("golden");
      setTimeout(() => btn.classList.remove("golden"), 400);
    }

    if (count >= CLICKER.target) {
      finished = true;
      btn.disabled = true;
      label.textContent = CLICKER.winMessage;
      area.classList.add("win");
      confettiBurst();

      if (!state.clickerDone) {
        state.clickerDone = true;
        saveState();
        updateProgress();
      }
      setTimeout(() => go("final"), 2500);
    }
  });

  gasRandom("clicker");
}

/* ===== Хелперы кликера ===== */
function spawnParticle(x, y, emoji) {
  const el = document.createElement("div");
  el.className = "particle";
  el.textContent = emoji;
  el.style.left = x + "px";
  el.style.top = y + "px";
  const angle = Math.random() * Math.PI * 2;
  const dist = 60 + Math.random() * 100;
  el.style.setProperty("--dx", Math.cos(angle) * dist + "px");
  el.style.setProperty("--dy", Math.sin(angle) * dist + "px");
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 950);
}

function spawnPlusOne(x, y, text) {
  const el = document.createElement("div");
  el.className = "plus-one";
  el.textContent = text;
  el.style.left = x + "px";
  el.style.top = (y - 20) + "px";
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 950);
}

function spawnRipple(x, y) {
  const el = document.createElement("div");
  el.className = "ripple";
  const size = 120;
  el.style.width = size + "px";
  el.style.height = size + "px";
  el.style.left = x + "px";
  el.style.top = y + "px";
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 650);
}

function confettiBurst() {
  const colors = ["#f7b6d2", "#ffd0e0", "#ffe4ec", "#ffffff", "#ff9ec4", "#ffd166"];
  const count = 80;
  for (let i = 0; i < count; i++) {
    const el = document.createElement("div");
    el.className = "confetti";
    el.style.background = colors[Math.floor(Math.random() * colors.length)];
    el.style.left = Math.random() * 100 + "vw";
    el.style.top = "-20px";
    el.style.animationDelay = (Math.random() * 0.6) + "s";
    el.style.animationDuration = (1.8 + Math.random() * 1.2) + "s";
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 3200);
  }
}

/* =========================================================
   ЭКРАН: ФИНАЛ — КОНВЕРТ
   ========================================================= */
function renderFinal() {
  app.innerHTML = `
    <section class="screen active">
      <h2 class="q-title">И последнее…</h2>
      <p class="q-text">Ты дошла до конца. Нажми на конверт 💌</p>
      <div class="envelope-wrap">
        <div class="envelope" id="envelope">
          <div class="envelope-seal">💗</div>
        </div>
        <div id="inviteBox"></div>
      </div>
    </section>
  `;

  const env = document.getElementById("envelope");
  if (!env) return;

  env.addEventListener("click", function() {
    if (this.classList.contains("open")) return;
    this.classList.add("open");
    setTimeout(() => {
      const box = document.getElementById("inviteBox");
      if (box) {
        box.innerHTML = `
          <div class="invite-card">
            <h3 class="invite-title">${INVITE.title}</h3>
            <div class="invite-row"><span class="invite-label">Место</span><span>${INVITE.place}</span></div>
            <div class="invite-row"><span class="invite-label">Дата</span><span>${INVITE.date}</span></div>
            <div class="invite-row"><span class="invite-label">Время</span><span>${INVITE.time}</span></div>
            <div class="invite-row"><span class="invite-label">Дресс-код</span><span>${INVITE.dresscode}</span></div>
            <p class="invite-sign">${INVITE.sign}</p>
          </div>
        `;
      }
      if (!state.finished) {
        state.finished = true;
        saveState();
        updateProgress();
      }
    }, 600);
    gasSay(GAS_QUOTES.final);
  });
}

/* =========================================================
   ПЕРЕТАСКИВАНИЕ ГАСА
   ========================================================= */
function initGasDrag() {
  const gas = document.getElementById("gas");
  if (!gas) return;

  const POS_KEY = "milena_gas_pos";

  try {
    const saved = JSON.parse(localStorage.getItem(POS_KEY) || "null");
    if (saved) {
      gas.style.left = saved.x + "px";
      gas.style.top = saved.y + "px";
      gas.style.right = "auto";
    }
  } catch (e) {}

  let isDragging = false;
  let offsetX = 0;
  let offsetY = 0;

  function startDrag(x, y) {
    isDragging = true;
    gas.classList.add("dragging");
    const rect = gas.getBoundingClientRect();
    offsetX = x - rect.left;
    offsetY = y - rect.top;
  }

  function moveDrag(x, y) {
    if (!isDragging) return;
    let newX = x - offsetX;
    let newY = y - offsetY;

    const rect = gas.getBoundingClientRect();
    const maxX = window.innerWidth - rect.width;
    const maxY = window.innerHeight - rect.height;
    newX = Math.max(0, Math.min(newX, maxX));
    newY = Math.max(0, Math.min(newY, maxY));

    gas.style.left = newX + "px";
    gas.style.top = newY + "px";
    gas.style.right = "auto";
    gas.style.bottom = "auto";
  }

  function endDrag() {
    if (!isDragging) return;
    isDragging = false;
    gas.classList.remove("dragging");
    const rect = gas.getBoundingClientRect();
    try {
      localStorage.setItem(POS_KEY, JSON.stringify({ x: rect.left, y: rect.top }));
    } catch (e) {}
  }

  gas.addEventListener("mousedown", (e) => {
    if (e.button !== 0) return;
    startDrag(e.clientX, e.clientY);
    e.preventDefault();
  });
  window.addEventListener("mousemove", (e) => moveDrag(e.clientX, e.clientY));
  window.addEventListener("mouseup", endDrag);

  gas.addEventListener("touchstart", (e) => {
    const t = e.touches[0];
    startDrag(t.clientX, t.clientY);
    e.preventDefault();
  }, { passive: false });

  window.addEventListener("touchmove", (e) => {
    if (!isDragging) return;
    const t = e.touches[0];
    moveDrag(t.clientX, t.clientY);
    e.preventDefault();
  }, { passive: false });

  window.addEventListener("touchend", endDrag);
}

/* =========================================================
   СБРОС
   ========================================================= */
function initReset() {
  const btn = document.getElementById("resetBtn");
  if (!btn) return;
  btn.addEventListener("click", () => {
    if (confirm("Сбросить весь прогресс?")) {
      localStorage.removeItem(STORAGE_KEY);
      state = { ...defaultState };
      saveState();
      render();
    }
  });
}

/* =========================================================
   СТАРТ
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  initGasDrag();
  initReset();
  render();
});