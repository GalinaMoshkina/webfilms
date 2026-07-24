const media = window.MEDIA || {};

const source = (label, shortLabel, embed, language = "ru") => ({
  label,
  shortLabel,
  embed,
  language
});

const externalSource = (label, shortLabel, external, language = "en") => ({
  label,
  shortLabel,
  external,
  language
});

const library = [
  {
    id: "pulp-fiction",
    title: "Криминальное чтиво",
    originalTitle: "Pulp Fiction",
    year: "1994",
    type: "Фильм",
    runtime: "2 ч 34 мин",
    accent: "#e4a934",
    art: "pulp",
    poster: "./films/Криминальное чтиво/Обложка_криминальное_чтиво.jpg",
    music: [{ title: "Misirlou", artist: "Dick Dale & His Del-Tones", src: "./films/Криминальное чтиво/Dick Dale & His Del Tones - Misirlou.mp3" }],
    quote: "Идеальное кино, чтобы снова полюбить разговоры ни о чём.",
    summary:
      "Две истории о гангстерах, роковых совпадениях и людях, которые очень стараются выбраться из неприятностей — обычно ещё глубже в них погружаясь.",
    sources: [
      {
        label: "Русская озвучка",
        shortLabel: "Русский",
        embed: media.pulpFictionRussian,
        language: "ru"
      },
      {
        label: "Оригинальная дорожка · VK",
        shortLabel: "English",
        embed: media.pulpFictionEnglishEmbed,
        language: "en"
      }
    ]
  },
  {
    id: "reservoir-dogs",
    title: "Бешеные псы",
    originalTitle: "Reservoir Dogs",
    year: "1992",
    type: "Фильм",
    runtime: "1 ч 35 мин",
    accent: "#bf302b",
    art: "dogs",
    poster: "./films/Бешеные псы/Обложка_бешеные_псы.jpeg",
    quote: "Когда идеальный план ломается ещё до начала титров.",
    summary:
      "Ограбление пошло не по плану. Выжившие собираются на складе и пытаются понять, кто из них предатель, пока недоверие становится опаснее полиции.",
    sources: [
      { label: "Часть 1", shortLabel: "Часть 1", embed: media.reservoirDogsPart1 },
      { label: "Часть 2", shortLabel: "Часть 2", embed: media.reservoirDogsPart2 }
    ]
  },
  {
    id: "cunk-on-earth",
    title: "Канк на Земле",
    originalTitle: "Cunk on Earth",
    year: "2022",
    type: "Сериал",
    runtime: "5 эпизодов",
    accent: "#4a89a1",
    art: "cunk",
    poster: "./films/Канк на Земле/Обложка_канк_на_земле.webp",
    music: [{ title: "Pump Up the Jam", artist: "Technotronic", src: "./films/Канк на Земле/Technotronic - Pump up the Jam.mp3" }],
    quote: "Вся история человечества — уверенно, красиво и совершенно неправильно.",
    summary:
      "Филомена Канк задаёт экспертам главные вопросы цивилизации и с невозмутимым лицом превращает документальный сериал в очень британскую комедию.",
    sources: Array.from({ length: 5 }, (_, index) => ({
      label: `Эпизод ${index + 1}`,
      shortLabel: `${index + 1}`,
      embed: media[`cunkEpisode${index + 1}`]
    }))
  },
  {
    id: "acrimony", title: "Раздражительность", originalTitle: "Acrimony", year: "2018",
    type: "Фильм", runtime: "2 ч", accent: "#843d47", art: "dogs",
    poster: "./films/Раздражительность/Обложка_раздражительность.jpg",
    quote: "Когда преданность превращается в ярость.",
    summary: "История женщины, которая годами поддерживала мужа, а после распада брака начинает сомневаться, не отдала ли она ему слишком многое.",
    sources: [source("Русская озвучка", "Русский", media.acrimonyRussian)]
  },
  {
    id: "final-analysis", title: "Окончательный анализ", originalTitle: "Final Analysis", year: "1992",
    type: "Фильм", runtime: "2 ч 4 мин", accent: "#876f92", art: "pulp",
    poster: "./films/Окончательный анализ/Обложка_окончательный_анализ.jpg",
    quote: "Желание, обман и диагноз, которому нельзя доверять.",
    summary: "Психиатр оказывается втянут в опасную связь с сестрой своей пациентки — и вскоре уже не понимает, кто здесь жертва, а кто ведёт игру.",
    sources: [source("Русская озвучка", "Русский", media.finalAnalysisRussian)]
  },
  {
    id: "once-upon-a-time-in-hollywood", title: "Однажды в… Голливуде", originalTitle: "Once Upon a Time... in Hollywood", year: "2019",
    type: "Фильм", runtime: "2 ч 41 мин", accent: "#d68c3a", art: "cunk",
    poster: "./films/Однажды в… Голливуде/Обложка_однажды_в_голливуде.webp",
    quote: "Голливуд, каким он был — или каким его хочется помнить.",
    summary: "Угасающая звезда телевестернов и его дублёр ищут своё место в стремительно меняющемся Голливуде 1969 года.",
    sources: [source("Русская озвучка", "Русский", media.onceHollywoodRussian)]
  },
  {
    id: "inglourious-basterds", title: "Бесславные ублюдки", originalTitle: "Inglourious Basterds", year: "2009",
    type: "Фильм", runtime: "2 ч 33 мин", accent: "#a43a2f", art: "dogs",
    poster: "./films/Бесславные ублюдки/Обложка_бесславные_ублюдки.jpg",
    quote: "История переписывается в кинотеатре.",
    summary: "Отряд американских солдат и хозяйка парижского кинотеатра независимо друг от друга готовят расплату нацистскому руководству.",
    sources: [
      source("Русская озвучка", "Русский", media.inglouriousRussian),
      source("Оригинальная дорожка", "English", media.inglouriousEnglish, "en")
    ]
  },
  {
    id: "the-room-next-door", title: "Комната по соседству", originalTitle: "The Room Next Door", year: "2024",
    type: "Фильм", runtime: "1 ч 47 мин", accent: "#477c73", art: "cunk",
    poster: "./films/Комната по соседству/Обложка_комната_по_соседству.jpg",
    quote: "Иногда дружба — это просто остаться рядом.",
    summary: "Две давние подруги встречаются вновь и проводят вместе время, которое заставляет их по-новому взглянуть на жизнь, смерть и близость.",
    sources: [source("Русская озвучка", "Русский", media.roomNextDoorRussian)]
  },
  {
    id: "dark-habits", title: "Нескромное обаяние порока", originalTitle: "Entre tinieblas", year: "1983",
    type: "Фильм", runtime: "1 ч 54 мин", accent: "#a95d73", art: "pulp",
    poster: "./films/Нескромное обаяние порока/Обложка_нескромное_обаяние_порока.jpg",
    quote: "Святость, порок и Альмодовар в одном монастыре.",
    summary: "Певица кабаре скрывается в необычном монастыре, где сестры куда больше интересуются человеческими слабостями, чем строгими правилами.",
    sources: [
      source("Русская озвучка · плеер 1", "Плеер 1", media.darkHabitsRussian1),
      source("Русская озвучка · плеер 2", "Плеер 2", media.darkHabitsRussian2)
    ]
  },
  {
    id: "the-drama", title: "Вот это драма!", originalTitle: "The Drama", year: "Скоро",
    type: "Трейлер", runtime: "Трейлер", accent: "#6f83a5", art: "cunk",
    poster: "./films/Вот это драма!/Обложка_вот_это_драма.jpg",
    quote: "Пока только первый взгляд — полный фильм ещё впереди.",
    summary: "Страница будущего фильма: сейчас здесь доступен англоязычный трейлер, а полноценный плеер появится после релиза.",
    sources: [source("Трейлер на английском", "English · трейлер", media.theDramaTrailer, "en")]
  },
  {
    id: "pretty-woman", title: "Красотка", originalTitle: "Pretty Woman", year: "1990",
    type: "Фильм", runtime: "1 ч 59 мин", accent: "#d56a76", art: "pulp",
    poster: "./films/Красотка/Обложка_красотка.jpeg",
    quote: "Сказка о любви на бульваре Голливуда.",
    summary: "Случайная встреча бизнесмена и девушки по имени Вивиан превращает деловое соглашение в историю, которой никто из них не ожидал.",
    sources: [
      source("Русская озвучка · плеер 1", "Плеер 1", media.prettyWomanRussian1),
      source("Русская озвучка · плеер 2", "Плеер 2", media.prettyWomanRussian2)
    ]
  },
  {
    id: "eat-pray-love", title: "Ешь, молись, люби", originalTitle: "Eat Pray Love", year: "2010",
    type: "Фильм", runtime: "2 ч 13 мин", accent: "#cb7b4d", art: "cunk",
    poster: "./films/Ешь, молись, люби/Обложка_ешь_молись_люби.jpeg",
    quote: "Иногда, чтобы найти себя, нужно уехать очень далеко.",
    summary: "После развода Лиз отправляется через Италию, Индию и Бали, заново учась получать удовольствие, искать равновесие и любить.",
    sources: [source("Русская озвучка", "Русский", media.eatPrayLoveRussian)]
  },
  {
    id: "rrrrr", title: "Миллион лет до нашей эры", originalTitle: "RRRrrrr!!!", year: "2004",
    type: "Фильм", runtime: "1 ч 38 мин", accent: "#aa6c36", art: "dogs",
    poster: "./films/Миллион лет до нашей эры/Обложка_миллион_лет_до_нашей_эры.jpeg",
    quote: "Первое убийство в истории человечества. Возможно.",
    summary: "Два доисторических племени спорят о секрете шампуня, пока первое в истории преступление требует первого в истории расследования.",
    sources: [source("Русская озвучка", "Русский", media.rrrrrRussian)]
  },
  {
    id: "below-her-mouth", title: "Ниже её губ", originalTitle: "Below Her Mouth", year: "2016",
    type: "Фильм", runtime: "1 ч 34 мин", accent: "#9c5262", art: "pulp",
    poster: "./films/Ниже её губ/Обложка_ниже_ее_губ.jpg",
    quote: "Одна встреча меняет всё, что казалось решённым.",
    summary: "Неожиданное знакомство заставляет Жасмин пересмотреть привычную жизнь и чувства, которые она прежде не позволяла себе признать.",
    sources: [
      source("Оригинальная дорожка", "English", media.belowHerMouthEnglish, "en"),
      externalSource("Русская версия на внешнем сайте · требуется VPN", "Русский · ссылка", media.belowHerMouthRussianPage, "ru")
    ]
  },
  {
    id: "loving-annabelle", title: "Полюбить Аннабель", originalTitle: "Loving Annabelle", year: "2006",
    type: "Фильм", runtime: "1 ч 16 мин", accent: "#596d87", art: "cunk",
    poster: "./films/Полюбить Аннабель/Обложка_полюбить_аннабель.jpeg",
    quote: "Чувства, которым нельзя найти безопасное место.",
    summary: "Новая ученица католической школы сближается с преподавательницей литературы, ставя обеих перед трудным и опасным выбором.",
    sources: [
      source("Русская озвучка · 240p", "VK · 240p", media.lovingAnnabelleRussian1),
      source("Русская озвучка · 360p", "VK · 360p", media.lovingAnnabelleRussian2),
      source("Русская озвучка · 720p", "OK · 720p", media.lovingAnnabelleRussianOk)
    ]
  },
  {
    id: "ammonite", title: "Аммонит", originalTitle: "Ammonite", year: "2020",
    type: "Фильм", runtime: "1 ч 58 мин", accent: "#587883", art: "cunk",
    poster: "./films/Аммонит/Обложка_аммонит.jpeg",
    quote: "На холодном берегу две жизни начинают оттаивать.",
    summary: "Палеонтолог Мэри Эннинг берёт под опеку молодую женщину, и их сдержанное знакомство постепенно становится глубокой близостью.",
    sources: [
      source("Русская озвучка", "Русский", media.ammoniteRussian),
      externalSource("Английская версия на внешнем сайте", "English · ссылка", media.ammoniteEnglishPage)
    ]
  },
  {
    id: "knives-out", title: "Достать ножи", originalTitle: "Knives Out", year: "2019",
    type: "Фильм", runtime: "2 ч 10 мин", accent: "#a48246", art: "pulp",
    poster: "./films/Достать ножи 1/Обложка_достать_ножи_1.jpg",
    quote: "У каждого в этой семье есть мотив.",
    summary: "Детектив Бенуа Блан расследует смерть знаменитого писателя, окружённого большой семьёй, где каждый говорит не всю правду.",
    sources: [
      source("Русская озвучка", "Русский", media.knivesOutRussian),
      externalSource("Английская версия на внешнем сайте · требуется VPN", "English · ссылка", media.knivesOutEnglishPage)
    ]
  },
  {
    id: "glass-onion", title: "Достать ножи: Стеклянная луковица", originalTitle: "Glass Onion: A Knives Out Mystery", year: "2022",
    type: "Фильм", runtime: "2 ч 19 мин", accent: "#d28e3f", art: "cunk",
    poster: "./films/Достать ножи 2/Обложка_достать_ножи_2.jpg",
    quote: "Самая прозрачная загадка может оказаться самой запутанной.",
    summary: "Бенуа Блан отправляется на частный остров миллиардера, где игра в убийство быстро становится настоящим расследованием.",
    sources: [
      source("Русская озвучка", "Русский", media.glassOnionRussian),
      externalSource("Английская версия на внешнем сайте · требуется VPN", "English · ссылка", media.glassOnionEnglishPage)
    ]
  },
  {
    id: "wake-up-dead-man", title: "Достать ножи: Воскрешение покойника", originalTitle: "Wake Up Dead Man: A Knives Out Mystery", year: "2025",
    type: "Фильм", runtime: "2 ч 24 мин", accent: "#705644", art: "dogs",
    poster: "./films/Достать ножи 3/Обложка_достать_ножи_3.jpeg",
    quote: "У Бенуа Блана новое невозможное дело.",
    summary: "Третья загадка Бенуа Блана приводит детектива к новому кругу подозреваемых и убийству, которое не желает складываться в простую картину.",
    sources: [
      source("Русская озвучка", "Русский", media.wakeUpDeadManRussian),
      externalSource("Английская версия на внешнем сайте · требуется VPN", "English · ссылка", media.wakeUpDeadManEnglishPage)
    ]
  },
  {
    id: "the-godfather", title: "Крёстный отец", originalTitle: "The Godfather", year: "1972",
    type: "Фильм", runtime: "2 ч 55 мин", accent: "#8a5c3d", art: "dogs",
    poster: "./films/Крестный отец 1/Обложка_крестный_отец_1.jpeg",
    music: [{ title: "The Godfather Theme Song", artist: "Nino Rota", src: "./films/Крестный отец 1/The Godfather Theme Song.mp3" }],
    quote: "Семья, власть и предложение, от которого нельзя отказаться.",
    summary: "Майкл Корлеоне пытается держаться в стороне от семейного дела, но обстоятельства постепенно ведут его к центру криминальной империи.",
    sources: [
      source("Русская озвучка", "Русский", media.godfather1Russian),
      source("Оригинальная дорожка · Rutube", "English", media.godfather1English, "en")
    ]
  },
  {
    id: "the-godfather-part-ii", title: "Крёстный отец 2", originalTitle: "The Godfather Part II", year: "1974",
    type: "Фильм", runtime: "3 ч 22 мин", accent: "#725345", art: "dogs",
    poster: "./films/Крестный отец 2/Обложка_крестный_отец_2.jpg",
    music: [{ title: "The Godfather Theme Song", artist: "Nino Rota", src: "./films/Крестный отец 2/The Godfather Theme Song.mp3" }],
    quote: "Империя растёт, а семья становится всё меньше.",
    summary: "История молодого Вито Корлеоне переплетается с правлением Майкла, который расширяет власть ценой всё большей изоляции.",
    sources: [
      source("Русская озвучка", "Русский", media.godfather2Russian),
      source("Оригинальная дорожка · Rutube", "English", media.godfather2English, "en")
    ]
  },
  {
    id: "the-godfather-part-iii", title: "Крёстный отец 3", originalTitle: "The Godfather Part III", year: "1990",
    type: "Фильм", runtime: "2 ч 42 мин", accent: "#65443b", art: "dogs",
    poster: "./films/Крестный отец 3/Обложка_крестный_отец_3.jpeg",
    music: [{ title: "The Godfather Theme Song", artist: "Nino Rota", src: "./films/Крестный отец 3/The Godfather Theme Song.mp3" }],
    quote: "Прошлое не отпускает даже тех, кто готов заплатить.",
    summary: "Постаревший Майкл Корлеоне ищет законный путь для семьи и искупление, но старые связи снова затягивают его в насилие.",
    sources: [
      source("Русская озвучка · плеер 1", "Русский · 1", media.godfather3Russian1),
      source("Русская озвучка · плеер 2", "Русский · 2", media.godfather3Russian2),
      source("Оригинальная дорожка · Rutube", "English", media.godfather3English, "en")
    ]
  }
];

const app = document.querySelector("#app");
let activeVideo = null;
let musicController = null;

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function cardTemplate(item, index) {
  return `
    <a class="film-card ${item.art}" href="#/watch/${item.id}"
      style="--accent:${item.accent}; --delay:${index * 80}ms"
      aria-label="Смотреть ${escapeHtml(item.title)}">
      <div class="card-number">${String(index + 1).padStart(2, "0")}</div>
      <div class="poster-art" aria-hidden="true">
        ${item.poster ? `<img src="${escapeHtml(item.poster)}" alt="">` : ""}
        <span class="poster-word">${escapeHtml(item.title)}</span>
      </div>
      <div class="card-main">
        <div class="eyebrow">${item.type} · ${item.year}</div>
        <h2>${escapeHtml(item.title)}</h2>
        <p class="original-title">${escapeHtml(item.originalTitle)}</p>
        <p class="hover-summary">${escapeHtml(item.summary)}</p>
        <p class="personal-note">«${escapeHtml(item.quote)}»</p>
      </div>
      <span class="card-arrow" aria-hidden="true">↗</span>
    </a>`;
}

function renderHome() {
  document.title = "Выбери историю";
  app.innerHTML = `
    <section class="hero">
      <h1>Выбери историю<br><em>на этот вечер</em></h1>
    </section>
    <section class="library" aria-label="Фильмотека">
      ${library.map(cardTemplate).join("")}
      <p class="no-results" id="no-results" hidden>Ничего не нашлось. Попробуй другое название.</p>
    </section>`;
  applySearch(document.querySelector("#film-search").value);
}

function isRemoteSource(src = "") {
  return /^https?:\/\//i.test(src);
}

function sourceButtons(item, selectedIndex) {
  return item.sources
    .map(
      (source, index) => `
        <button class="source-button ${index === selectedIndex ? "active" : ""}"
          type="button" data-source="${index}">
          ${escapeHtml(source.shortLabel)}
        </button>`
    )
    .join("");
}

function videoTemplate(source) {
  if (source?.external) {
    return `
      <div class="player-message external-player">
        <strong>Этот плеер нельзя встроить</strong>
        <span>Источник откроется на отдельной странице.</span>
        <a href="${escapeHtml(source.external)}" target="_blank" rel="noopener noreferrer">Открыть источник ↗</a>
      </div>`;
  }

  if (source?.embed) {
    return `
      <iframe
        src="${escapeHtml(source.embed)}"
        title="${escapeHtml(source.label)}"
        allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock"
        allowfullscreen
        loading="eager"
        referrerpolicy="strict-origin-when-cross-origin">
      </iframe>`;
  }

  if (!source?.src) {
    return `<div class="player-message"><strong>Видео ещё не подключено</strong><span>Укажи его адрес в media-config.js</span></div>`;
  }

  const subtitle = source.subtitles
    ? `<track src="${escapeHtml(source.subtitles)}" kind="subtitles" srclang="ru" label="Русские" default>`
    : "";

  return `
    <video id="film-player" controls preload="metadata" playsinline crossorigin="anonymous">
      <source src="${escapeHtml(source.src)}" type="video/mp4">
      ${subtitle}
      Ваш браузер не поддерживает HTML5-видео.
    </video>`;
}

function localizedTitle(item, source) {
  return source?.language === "en" ? item.originalTitle : item.title;
}

function renderWatch(item, selectedIndex = 0) {
  const source = item.sources[selectedIndex] || item.sources[0];
  const currentTitle = localizedTitle(item, source);
  document.title = currentTitle;

  app.innerHTML = `
    <section class="watch-page ${item.art}" style="--accent:${item.accent}">
      <div class="watch-backdrop" aria-hidden="true">
        <span>${escapeHtml(item.originalTitle)}</span>
      </div>
      <a class="back-link" href="#/"><span>←</span> Вся фильмотека</a>
      <div class="watch-layout">
        <div class="watch-heading">
          <p class="eyebrow">${item.type} · ${item.year} · ${item.runtime}</p>
          <h1 id="watch-title">${escapeHtml(currentTitle)}</h1>
          <p>${escapeHtml(item.summary)}</p>
        </div>
        <div class="player-shell">
          <div class="player-topline">
            <span>Сейчас смотрим</span>
            <strong id="source-title">${escapeHtml(source.label)}</strong>
          </div>
          <div class="video-frame" id="video-frame">${videoTemplate(source)}</div>
          <div class="source-switcher" aria-label="Выбор версии">
            <span>${item.id === "cunk-on-earth" ? "Эпизод" : "Версия"}</span>
            <div>${sourceButtons(item, selectedIndex)}</div>
          </div>
          ${
            location.hostname.endsWith("github.io") && source.src && !isRemoteSource(source.src)
              ? `<p class="hosting-warning">Этот локальный видеофайл недоступен на GitHub Pages. Для публикации нужен прямой HTTPS-адрес.</p>`
              : source.iframeNotice
                ? `<p class="hosting-warning">${escapeHtml(source.iframeNotice)}</p>`
              : ""
          }
        </div>
        <blockquote>«${escapeHtml(item.quote)}»</blockquote>
      </div>
    </section>`;

  activeVideo = document.querySelector("#film-player");
  document.querySelectorAll("[data-source]").forEach((button) => {
    button.addEventListener("click", () => switchSource(item, Number(button.dataset.source)));
  });
}

function switchSource(item, index) {
  const oldVideo = document.querySelector("#film-player");
  if (oldVideo) oldVideo.pause();

  const source = item.sources[index];
  document.querySelector("#video-frame").innerHTML = videoTemplate(source);
  document.querySelector("#source-title").textContent = source.label;
  const currentTitle = localizedTitle(item, source);
  document.querySelector("#watch-title").textContent = currentTitle;
  document.title = currentTitle;
  document.querySelectorAll("[data-source]").forEach((button) => {
    button.classList.toggle("active", Number(button.dataset.source) === index);
  });
  activeVideo = document.querySelector("#film-player");

  const oldNotice = document.querySelector(".hosting-warning");
  if (oldNotice) oldNotice.remove();
  const notice =
    location.hostname.endsWith("github.io") && source.src && !isRemoteSource(source.src)
      ? "Этот локальный видеофайл недоступен на GitHub Pages. Для публикации нужен прямой HTTPS-адрес."
      : source.iframeNotice;
  if (notice) {
    const message = document.createElement("p");
    message.className = "hosting-warning";
    message.textContent = notice;
    document.querySelector(".player-shell").append(message);
  }
}

function route() {
  if (activeVideo) activeVideo.pause();
  window.scrollTo(0, 0);
  const match = location.hash.match(/^#\/watch\/([^/]+)/);
  const item = match && library.find((film) => film.id === match[1]);
  document.querySelector("#search-box").classList.toggle("hidden", Boolean(item));
  item ? renderWatch(item) : renderHome();
  musicController?.setPlaylist(
    item?.music?.length ? item.music : media.generalMusic || [],
    item?.music?.length ? item.title : "Общая подборка"
  );
}

function setupMusic() {
  const player = document.querySelector("#music-player");
  const toggle = document.querySelector("#music-toggle");
  const volume = document.querySelector("#music-volume");
  const icon = document.querySelector("#music-icon");
  const title = document.querySelector("#track-title");
  const artist = document.querySelector("#track-artist");
  const context = document.querySelector("#track-context");
  const previous = document.querySelector("#music-prev");
  const next = document.querySelector("#music-next");
  let playlist = [];
  let currentIndex = 0;
  let playlistKey = "";

  player.volume = Number(volume.value);

  function showTrack() {
    const track = playlist[currentIndex];
    if (!track) {
      player.removeAttribute("src");
      player.load();
      title.textContent = "Музыка скоро появится";
      artist.textContent = "";
      toggle.disabled = true;
      previous.disabled = true;
      next.disabled = true;
      volume.disabled = true;
      return;
    }
    player.src = track.src;
    title.textContent = track.title;
    artist.textContent = track.artist || "";
    toggle.disabled = false;
    volume.disabled = false;
    previous.disabled = playlist.length < 2;
    next.disabled = playlist.length < 2;
  }

  function moveTrack(direction, autoplay = true) {
    if (!playlist.length) return;
    currentIndex = (currentIndex + direction + playlist.length) % playlist.length;
    showTrack();
    if (autoplay) player.play().catch(() => {});
  }

  function setPlaylist(tracks, label) {
    const nextKey = tracks.map((track) => track.src).join("|");
    context.textContent = label || "Сейчас играет";
    if (nextKey === playlistKey) return;

    const wasPlaying = !player.paused;
    playlist = tracks;
    playlistKey = nextKey;
    currentIndex = 0;
    showTrack();
    if (wasPlaying && playlist.length) player.play().catch(() => {});
  }

  toggle.addEventListener("click", async () => {
    if (player.paused) {
      try {
        await player.play();
      } catch {
        title.textContent = "Не удалось открыть аудиофайл";
      }
    } else {
      player.pause();
    }
  });
  player.addEventListener("play", () => {
    icon.textContent = "❚❚";
    toggle.setAttribute("aria-label", "Остановить музыку");
    document.querySelector(".record").classList.add("playing");
  });
  player.addEventListener("pause", () => {
    icon.textContent = "▶";
    toggle.setAttribute("aria-label", "Включить музыку");
    document.querySelector(".record").classList.remove("playing");
  });
  player.addEventListener("error", () => {
    title.textContent = "Не удалось открыть композицию";
  });
  player.addEventListener("ended", () => moveTrack(1));
  previous.addEventListener("click", () => moveTrack(-1));
  next.addEventListener("click", () => moveTrack(1));
  volume.addEventListener("input", () => {
    player.volume = Number(volume.value);
  });

  return { setPlaylist };
}

function normalizeSearch(value) {
  return value.toLocaleLowerCase("ru").replaceAll("ё", "е").trim();
}

function applySearch(value) {
  const query = normalizeSearch(value);
  const cards = document.querySelectorAll(".film-card");
  if (!cards.length) return;

  let visible = 0;
  cards.forEach((card, index) => {
    const item = library[index];
    const haystack = normalizeSearch(`${item.title} ${item.originalTitle} ${item.year} ${item.type}`);
    const matches = !query || haystack.includes(query);
    card.hidden = !matches;
    if (matches) visible += 1;
  });
  document.querySelector("#no-results").hidden = visible > 0;
}

function setupSearch() {
  const input = document.querySelector("#film-search");
  input.addEventListener("input", () => applySearch(input.value));
  input.addEventListener("search", () => applySearch(input.value));
}

window.addEventListener("hashchange", route);
setupSearch();
musicController = setupMusic();
route();
