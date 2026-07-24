const media = window.MEDIA || {};
const ASSET_VERSION = "20260724-3";

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
    quote: "Путь праведника труден, ибо препятствуют ему себялюбивые и тираны из злых...",
    summary:
      "Несколько историй из жизни Лос-Анджелеса, которые парадоксальным образом связываются в одну. Киллеры-философы, жена мафиози и боксер-беглец то и дело попадают в абсурдные ситуации, где одно неверное решение меняет всё.",
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
    quote: "Я не оставляю чаевые. Я не верю в них",
    summary:
      "Спланированное ограбление ювелирного магазина с самого начала идет не по плану. Выжившие преступники собираются на заброшенном складе, понимая, что среди них есть агент под прикрытием.",
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
    quote: "Что было более важным для человечества: изобретение колеса или песня \"Pump Up the Jam\"",
    summary:
      "Британский псевдодокументальный проект, где эксцентричная ведущая Филомена Канк путешествует по миру и берет интервью у реальных ведущих историков, антропологов и профессоров, задавая им абсурдные вопросы с абсолютно серьезным лицом.",
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
    quote: "Этот с#ка мне должен... Каждый чертов вздох в его теле",
    summary: "Мелинда — верная и любящая жена, которая годами поддерживала своего мужа-изобретателя, жертвуя ради него деньгами и доверием семьи. Однако, когда его многолетний труд наконец признают, Мелинда начинает подозревать, что муж ведет двойную игру.",
    sources: [source("Русская озвучка", "Русский", media.acrimonyRussian)]
  },
  {
    id: "final-analysis", title: "Окончательный анализ", originalTitle: "Final Analysis", year: "1992",
    type: "Фильм", runtime: "2 ч 4 мин", accent: "#876f92", art: "pulp",
    poster: "./films/Окончательный анализ/Обложка_окончательный_анализ.jpg",
    quote: "Вы когда-нибудь путали страсть с одержимостью?",
    summary: "Успешный психиатр берется помочь женщине, страдающей от навязчивых кошмаров. В процессе терапии он знакомится с ее загадочной сестрой, и эта встреча вовлекает его в опасный заговор, где профессиональная этика сталкивается с личным риском.",
    sources: [source("Русская озвучка", "Русский", media.finalAnalysisRussian)]
  },
  {
    id: "once-upon-a-time-in-hollywood", title: "Однажды в… Голливуде", originalTitle: "Once Upon a Time... in Hollywood", year: "2019",
    type: "Фильм", runtime: "2 ч 41 мин", accent: "#d68c3a", art: "cunk",
    poster: "./films/Однажды в… Голливуде/Обложка_однажды_в_голливуде.webp",
    quote: "В Голливуде все может измениться в одно мгновение",
    summary: "Лос-Анджелес, 1969 год. Популярный актер вестернов, чья карьера идет на спад, пытается удержаться в меняющейся киноиндустрии вместе со своим неизменным дублером. В это же время по соседству с ними поселяется молодая и успешная кинозвезда Шарон Тейт.",
    sources: [source("Русская озвучка", "Русский", media.onceHollywoodRussian)]
  },
  {
    id: "inglourious-basterds", title: "Бесславные ублюдки", originalTitle: "Inglourious Basterds", year: "2009",
    type: "Фильм", runtime: "2 ч 33 мин", accent: "#a43a2f", art: "dogs",
    poster: "./films/Бесславные ублюдки/Обложка_бесславные_ублюдки.jpg",
    quote: "Наш бизнес — убийство нацистов. И поверьте, дела идут в гору",
    summary: "Во время Второй мировой войны в оккупированной Франции начинает действовать банда американских солдат еврейского происхождения под руководством лейтенанта Альдо Рейна. Их партизанские методы шокируют высшее немецкое командование и нарушают их планы.",
    sources: [
      source("Русская озвучка", "Русский", media.inglouriousRussian),
      source("Оригинальная дорожка", "English", media.inglouriousEnglish, "en")
    ]
  },
  {
    id: "the-room-next-door", title: "Комната по соседству", originalTitle: "The Room Next Door", year: "2024",
    type: "Фильм", runtime: "1 ч 47 мин", accent: "#477c73", art: "cunk",
    poster: "./films/Комната по соседству/Обложка_комната_по_соседству.jpg",
    quote: "Смерть — это не конец, если рядом есть тот, кто помнит твою радость",
    summary: "Писательница Ингрид и военный корреспондент Марта были близкими подругами в молодости, но жизнь развела их. Спустя много лет они случайно встречаются вновь при весьма непростых обстоятельствах, которые заставляют их вспомнить прошлое.",
    sources: [source("Русская озвучка", "Русский", media.roomNextDoorRussian)]
  },
  {
    id: "dark-habits", title: "Нескромное обаяние порока", originalTitle: "Entre tinieblas", year: "1983",
    type: "Фильм", runtime: "1 ч 54 мин", accent: "#a95d73", art: "pulp",
    poster: "./films/Нескромное обаяние порока/Обложка_нескромное_обаяние_порока.jpg",
    quote: "Грех — это просто еще один способ почувствовать себя живым",
    summary: "пиздец ебаный..........",
    sources: [
      source("Русская озвучка · плеер 1", "Плеер 1", media.darkHabitsRussian1),
      source("Русская озвучка · плеер 2", "Плеер 2", media.darkHabitsRussian2)
    ]
  },
  {
    id: "the-drama", title: "Вот это драма!", originalTitle: "The Drama", year: "Скоро",
    type: "Трейлер", runtime: "Трейлер", accent: "#6f83a5", art: "cunk",
    poster: "./films/Вот это драма!/Обложка_вот_это_драма.jpg",
    quote: "Если мы устраиваем сцену, то только по первому классу",
    summary: "История о скрытом соперничестве и амбициях нескольких актрис за кулисами театральной сцены. Борьба за главные роли и личные тайны постепенно накаляют обстановку, превращая подготовку к спектаклю в психологическое противостояние.",
    sources: [source("Трейлер на английском", "English · трейлер", media.theDramaTrailer, "en")]
  },
  {
    id: "pretty-woman", title: "Красотка", originalTitle: "Pretty Woman", year: "1990",
    type: "Фильм", runtime: "1 ч 59 мин", accent: "#d56a76", art: "pulp",
    poster: "./films/Красотка/Обложка_красотка.jpeg",
    quote: "Я хочу все. И сказку тоже",
    summary: "Успешный финансовый магнат Эдвард Льюис решает нанять случайную уличную знакомую, чтобы она сопровождала его на важных деловых ужинах в течение недели. Это прагматичное соглашение неожиданно начинает менять привычную жизнь обоих.",
    sources: [
      source("Русская озвучка · плеер 1", "Плеер 1", media.prettyWomanRussian1),
      source("Русская озвучка · плеер 2", "Плеер 2", media.prettyWomanRussian2)
    ]
  },
  {
    id: "eat-pray-love", title: "Ешь, молись, люби", originalTitle: "Eat Pray Love", year: "2010",
    type: "Фильм", runtime: "2 ч 13 мин", accent: "#cb7b4d", art: "cunk",
    poster: "./films/Ешь, молись, люби/Обложка_ешь_молись_люби.jpeg",
    quote: "Учитесь выбирать свои мысли, как выбираете в гардеробе одежду каждый день",
    summary: "Элизабет Гилберт кажется женщиной, у которой есть всё: муж, дом и успешная карьера. Однако однажды она понимает, что живет чужой жизнью, и решает бросить всё, чтобы отправиться в кругосветное путешествие на поиски себя.",
    sources: [source("Русская озвучка", "Русский", media.eatPrayLoveRussian)]
  },
  {
    id: "rrrrr", title: "Миллион лет до нашей эры", originalTitle: "RRRrrrr!!!", year: "2004",
    type: "Фильм", runtime: "1 ч 38 мин", accent: "#aa6c36", art: "dogs",
    poster: "./films/Миллион лет до нашей эры/Обложка_миллион_лет_до_нашей_эры.jpeg",
    quote: "В мире, где нет слов, выживают только настоящие инстинкты",
    summary: "Приключенческая история из доисторической эпохи, где первобытный охотник Тумак изгоняется из своего жестокого племени Скал. В поисках нового дома он встречает более развитое и миролюбивое племя Раковин, где знакомится с прекрасной Лоаной.",
    sources: [source("Русская озвучка", "Русский", media.rrrrrRussian)]
  },
  {
    id: "below-her-mouth", title: "Ниже её губ", originalTitle: "Below Her Mouth", year: "2016",
    type: "Фильм", runtime: "1 ч 34 мин", accent: "#9c5262", art: "pulp",
    poster: "./films/Ниже её губ/Обложка_ниже_ее_губ.jpg",
    quote: "Я никогда никого так не чувствовала. Мне страшно, но я не хочу останавливаться",
    summary: "Даллас только что пережила тяжелое расставание, а Жасмин готовится к свадьбе со своим женихом. Случайная встреча этих двух совершенно разных женщин в ночном Торонто зажигает искру, которая заставляет их усомниться в правильности выбранного пути.",
    sources: [
      source("Оригинальная дорожка", "English", media.belowHerMouthEnglish, "en"),
      externalSource("Русская версия на внешнем сайте · требуется VPN", "Русский · ссылка", media.belowHerMouthRussianPage, "ru")
    ]
  },
  {
    id: "loving-annabelle", title: "Полюбить Аннабель", originalTitle: "Loving Annabelle", year: "2006",
    type: "Фильм", runtime: "1 ч 16 мин", accent: "#596d87", art: "cunk",
    poster: "./films/Полюбить Аннабель/Обложка_полюбить_аннабель.jpeg",
    quote: "Ты не можешь контролировать то, кого ты любишь. Любовь сама выбирает тебя",
    summary: "Бунтующая дочь сенатора Аннабель попадает в закрытую католическую школу-интернат, где сразу начинает нарушать строгие правила. Внимание девушки привлекает молодая учительница поэзии Симона, которая пытается направить сложного подростка в мирное русло.",
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
    quote: "Море забирает все лишнее и оставляет только то, что действительно имеет вес",
    summary: "Англия, 1840-е годы. Известная в прошлом, но ныне забытая исследовательница Мэри Эннинг живет уединенно на суровом южном побережье. Обеспеченный турист предлагает ей крупную сумму, чтобы Мэри на время взяла на попечение его молодую жену Шарлотту.",
    sources: [
      source("Русская озвучка", "Русский", media.ammoniteRussian),
      externalSource("Английская версия на внешнем сайте", "English · ссылка", media.ammoniteEnglishPage)
    ]
  },
  {
    id: "knives-out", title: "Достать ножи", originalTitle: "Knives Out", year: "2019",
    type: "Фильм", runtime: "2 ч 10 мин", accent: "#a48246", art: "pulp",
    poster: "./films/Достать ножи 1/Обложка_достать_ножи_1.jpg",
    quote: "У этого дела есть одна странность: оно выглядит как бублик, внутри которого дырка от другого бублика",
    summary: "Известный автор детективных романов Харлан Тромби празднует свое 85-летие в кругу семьи, а на следующее утро его находят мертвым в собственном кабинете. Разобраться в этом деле нанимают дотошного частного сыщика Бенуа Бланка.",
    sources: [
      source("Русская озвучка", "Русский", media.knivesOutRussian),
      externalSource("Английская версия на внешнем сайте · требуется VPN", "English · ссылка", media.knivesOutEnglishPage)
    ]
  },
  {
    id: "glass-onion", title: "Достать ножи: Стеклянная луковица", originalTitle: "Glass Onion: A Knives Out Mystery", year: "2022",
    type: "Фильм", runtime: "2 ч 19 мин", accent: "#d28e3f", art: "cunk",
    poster: "./films/Достать ножи 2/Обложка_достать_ножи_2.jpg",
    quote: "Когда игра становится реальностью, правила приходится переписывать на ходу",
    summary: "Эксцентричный миллиардер Майлз Брон собирает старых друзей на своем роскошном частном острове в Греции, чтобы устроить детективный квест. Но ситуация выходит из-под контроля, когда среди гостей оказывается знаменитый сыщик Бенуа Бланк.",
    sources: [
      source("Русская озвучка", "Русский", media.glassOnionRussian),
      externalSource("Английская версия на внешнем сайте · требуется VPN", "English · ссылка", media.glassOnionEnglishPage)
    ]
  },
  {
    id: "wake-up-dead-man", title: "Достать ножи: Воскрешение покойника", originalTitle: "Wake Up Dead Man: A Knives Out Mystery", year: "2025",
    type: "Фильм", runtime: "2 ч 24 мин", accent: "#705644", art: "dogs",
    poster: "./films/Достать ножи 3/Обложка_достать_ножи_3.jpeg",
    quote: "Нечные секреты настолько глубоки, что заставляют мертвецов открывать глаза",
    summary: "Детектив Бенуа Бланк берется за расследование нового запутанного преступления, которое сталкивает его с миром элиты и старыми семейными тайнами. Ему предстоит применить всю свою проницательность, чтобы отделить ложь от правды.",
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
    quote: "Я сделаю ему предложение, от которого он не сможет отказаться",
    summary: "История влиятельной мафиозной семьи Корлеоне в послевоенной Америке. Когда на главу клана, Дона Вито, совершается покушение, его младший сын Майкл — герой войны, не желавший иметь ничего общего с криминалом — оказывается перед сложным выбором.",
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
    quote: "Держи своих друзей близко, а врагов еще ближе",
    summary: "Масштабное эпическое повествование, которое одновременно рассказывает о ранних годах молодого Вито Корлеоне, строящего свою криминальную империю в Нью-Йорке начала века, и о его сыне Майкле, пытающемся удержать и расширить семейный бизнес в 1950-х годах.",
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
    quote: "Стоит мне только подумать, что я завязал, как они снова затягивают меня обратно!",
    summary: "Постаревший Дон Майкл Корлеоне стремится сделать бизнес семьи полностью законным и искупить прошлые грехи перед церковью и обществом. Однако старые связи и амбиции молодого поколения клана постоянно создают новые препятствия.",
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

function versionedAsset(path = "") {
  if (!path || /^https?:\/\//i.test(path)) return path;
  return `${path}${path.includes("?") ? "&" : "?"}v=${ASSET_VERSION}`;
}

function cardTemplate(item, index) {
  return `
    <a class="film-card ${item.art}" href="#/watch/${item.id}"
      data-search="${escapeHtml(normalizeSearch(`${item.title} ${item.originalTitle} ${item.year} ${item.type}`))}"
      style="--accent:${item.accent}; --delay:${index * 80}ms"
      aria-label="Смотреть ${escapeHtml(item.title)}">
      <div class="card-number">${String(index + 1).padStart(2, "0")}</div>
      <div class="poster-art" aria-hidden="true">
        <img src="${escapeHtml(versionedAsset(item.poster))}" alt="" loading="eager">
        <span class="poster-word">${escapeHtml(item.title)}</span>
      </div>
      <div class="card-main">
        <div class="eyebrow">${item.type} · ${item.year}</div>
        <h2>${escapeHtml(item.title)}</h2>
        <p class="original-title">${escapeHtml(item.originalTitle)}</p>
        <p class="hover-summary">${escapeHtml(item.summary)}</p>
        <p class="personal-note">«${escapeHtml(item.quote)}»</p>
      </div>
      <span class="card-arrow" aria-hidden="true"></span>
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
  document.body.classList.toggle("watching", Boolean(item));
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
    toggle.classList.add("playing");
    toggle.setAttribute("aria-label", "Остановить музыку");
    document.querySelector(".record").classList.add("playing");
  });
  player.addEventListener("pause", () => {
    icon.textContent = "▶";
    toggle.classList.remove("playing");
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
  cards.forEach((card) => {
    const matches = !query || card.dataset.search.includes(query);
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
