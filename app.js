const media = window.MEDIA || {};

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
    quote: "Идеальное кино, чтобы снова полюбить разговоры ни о чём.",
    summary:
      "Две истории о гангстерах, роковых совпадениях и людях, которые очень стараются выбраться из неприятностей — обычно ещё глубже в них погружаясь.",
    sources: [
      {
        label: "Русская озвучка",
        shortLabel: "Русский",
        src: media.pulpFictionRussian
      },
      {
        label: "Оригинальная дорожка + русские субтитры",
        shortLabel: "English + субтитры",
        src: media.pulpFictionEnglish,
        subtitles: "./films/Криминальное чтиво/subtitles-ru.vtt"
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
    quote: "Когда идеальный план ломается ещё до начала титров.",
    summary:
      "Ограбление пошло не по плану. Выжившие собираются на складе и пытаются понять, кто из них предатель, пока недоверие становится опаснее полиции.",
    sources: [
      { label: "Часть 1", shortLabel: "Часть 1", src: media.reservoirDogsPart1 },
      { label: "Часть 2", shortLabel: "Часть 2", src: media.reservoirDogsPart2 }
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
    quote: "Вся история человечества — уверенно, красиво и совершенно неправильно.",
    summary:
      "Филомена Канк задаёт экспертам главные вопросы цивилизации и с невозмутимым лицом превращает документальный сериал в очень британскую комедию.",
    sources: Array.from({ length: 5 }, (_, index) => ({
      label: `Эпизод ${index + 1}`,
      shortLabel: `${index + 1}`,
      src: media[`cunkEpisode${index + 1}`]
    }))
  }
];

const app = document.querySelector("#app");
let activeVideo = null;

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
      <div class="card-number">0${index + 1}</div>
      <div class="poster-art" aria-hidden="true">
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
  document.title = "После титров — личная фильмотека";
  app.innerHTML = `
    <section class="hero">
      <p class="kicker">Сегодня в программе</p>
      <h1>Выбери историю<br><em>на этот вечер</em></h1>
      <p class="hero-copy">Фильмы, сериалы и несколько личных слов — наведи на карточку, чтобы узнать больше.</p>
      <div class="scroll-hint"><span></span>листай</div>
    </section>
    <section class="library" aria-label="Фильмотека">
      ${library.map(cardTemplate).join("")}
    </section>`;
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

function renderWatch(item, selectedIndex = 0) {
  const source = item.sources[selectedIndex] || item.sources[0];
  document.title = `${item.title} — После титров`;

  app.innerHTML = `
    <section class="watch-page ${item.art}" style="--accent:${item.accent}">
      <div class="watch-backdrop" aria-hidden="true">
        <span>${escapeHtml(item.originalTitle)}</span>
      </div>
      <a class="back-link" href="#/"><span>←</span> Вся фильмотека</a>
      <div class="watch-layout">
        <div class="watch-heading">
          <p class="eyebrow">${item.type} · ${item.year} · ${item.runtime}</p>
          <h1>${escapeHtml(item.title)}</h1>
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
            location.hostname.endsWith("github.io") && !isRemoteSource(source.src)
              ? `<p class="hosting-warning">Для просмотра на GitHub Pages замени локальные адреса видео на прямые HTTPS-ссылки в <code>media-config.js</code>.</p>`
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
  document.querySelectorAll("[data-source]").forEach((button) => {
    button.classList.toggle("active", Number(button.dataset.source) === index);
  });
  activeVideo = document.querySelector("#film-player");
}

function route() {
  if (activeVideo) activeVideo.pause();
  window.scrollTo(0, 0);
  const match = location.hash.match(/^#\/watch\/([^/]+)/);
  const item = match && library.find((film) => film.id === match[1]);
  item ? renderWatch(item) : renderHome();
}

function setupMusic() {
  const player = document.querySelector("#music-player");
  const toggle = document.querySelector("#music-toggle");
  const volume = document.querySelector("#music-volume");
  const icon = document.querySelector("#music-icon");
  const title = document.querySelector("#track-title");

  if (!media.soundtrack) return;
  player.src = media.soundtrack;
  player.volume = Number(volume.value);
  title.textContent = media.soundtrackTitle || "Музыка для просмотра";
  toggle.disabled = false;
  volume.disabled = false;

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
    toggle.disabled = true;
    volume.disabled = true;
    title.textContent = "Добавь media/music/theme.mp3";
  });
  volume.addEventListener("input", () => {
    player.volume = Number(volume.value);
  });
}

window.addEventListener("hashchange", route);
setupMusic();
route();
