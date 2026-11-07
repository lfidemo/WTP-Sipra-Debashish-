/* EDIT THE WEDDING DETAILS IN THIS CONFIG OBJECT */
const WEDDING = {
  bride: "Sipra",
  groom: "Debashish",
  brideFull: "Sipra Das",
  groomFull: "Debashish Jena",
  date: "2026-12-12T19:30:00+05:30", // countdown target: wedding ceremony
  dateLabel: "Saturday, December 12, 2026",
  dateRange: "December 10 – 13, 2026",
  city: "Cuttack",
  venue: "Casa Royal",
  venueAddress: "Barang, Cuttack",
  mapUrl: "https://maps.app.goo.gl/f3amx9DQeHEj9ugQ6",
  brideParents: "Daughter of Mrs. Rasmita Das & Mr. Hemant Kumar Das", // shown in brackets under the bride's name
  groomParents: "Son of Dr. Jyotsnarani Biswal & Dr. Joykrushna Jena", // shown in brackets under the groom's name
  // theme: mehendi | haldi | sangeet | wedding | reception  (each has its own look in css/style.css)
  events: [
    {theme:"mehendi", icon:"🌿", side:"Bride’s side", name:"Mehendi", tagline:"Hands painted in henna & happiness", date:"Thursday, December 10, 2026", time:"6:30 PM onwards", location:"E/380, CDA, Sector-6, Near Fresh Signature, Cuttack", map:"https://maps.google.com/?q=E%2F380+CDA+Sector-6+Near+Fresh+Signature+Cuttack"},
    {theme:"haldi", icon:"🌼", side:"Bride’s side", name:"Haldi", tagline:"Marigolds, masti & the yellow glow", date:"Friday, December 11, 2026", time:"12:30 PM onwards", location:"Grand Mini City, Phulnakhara, Bhubaneswar-Cuttack Road", map:"https://maps.app.goo.gl/QyApm44m1rQELsrf7"},
    {theme:"sangeet", icon:"🎶", side:"Bride’s side", name:"Sangeet", tagline:"An evening of music, dance & joy", date:"Friday, December 11, 2026", time:"5:30 PM onwards", location:"Grand Mini City, Phulnakhara, Bhubaneswar-Cuttack Road", map:"https://maps.app.goo.gl/QyApm44m1rQELsrf7"},
    {theme:"sangeet", icon:"🎶", side:"Groom’s side", name:"Sangeet & Mehendi", tagline:"Lights, beats & mehendi", date:"Friday, December 11, 2026", time:"4:00 PM onwards", location:"Mangala Mandap, Surya Nagar, Bhubaneswar", map:"https://maps.app.goo.gl/2b79ZwfXUNBLNL1q9"},
    {theme:"haldi", icon:"🌼", side:"Groom’s side", name:"Haldi", tagline:"Marigolds, masti & the yellow glow", date:"Saturday, December 12, 2026", time:"9:00 AM onwards", location:"Ashoka Guest House, CIFA, Bhubaneswar", map:"https://maps.app.goo.gl/dTuZHbDzBC3HUNiF9"},
    {theme:"wedding", icon:"💍", name:"Wedding", tagline:"The vows, the joy & what comes next", date:"Saturday, December 12, 2026", time:"Ceremony from 7:30 PM onwards", location:"Casa Royal, Barang, Cuttack", map:"https://maps.app.goo.gl/f3amx9DQeHEj9ugQ6"},
    {theme:"reception", icon:"🥂", name:"Reception", tagline:"An evening of love & celebration", date:"Sunday, December 13, 2026", time:"7:00 PM onwards", location:"Crystal Heritage, Tankapani Road, Bhubaneswar", map:"https://maps.app.goo.gl/pm8bSP8qbtYdfoYQ6"}
  ]
};

const $ = (id) => document.getElementById(id);
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

/* Per-theme floating decoration: [count, size range, duration range, extra class, content] */
const PHOTO_THEMES = ["sangeet", "haldi", "mehendi"]; // these use the artwork in assets/themes instead of floating particles
const PARTICLES = {
  mehendi:  {n:18, s:[10,16], d:[9,15],  cls:""},
  haldi:    {n:22, s:[10,18], d:[8,14],  cls:""},
  sangeet:  {n:12, s:[22,38], d:[8,13],  cls:"rise", text:["♪","♫","♬"]},
  wedding:  {n:18, s:[10,16], d:[9,15],  cls:""},
  reception:{n:16, s:[10,22], d:[8,14],  cls:"rise", twinkle:14}
};
function decoFor(theme){
  if (PHOTO_THEMES.includes(theme)) return `<div class="ev-deco ev-photo" aria-hidden="true"><i class="bg-top"></i><i class="bg-mid"></i><i class="bg-bot"></i></div>`;
  const c = PARTICLES[theme], lite = matchMedia("(max-width: 560px)").matches, r = (a) => a[0] + Math.random() * (a[1] - a[0]);
  let html = "";
  for (let i = 0; i < (lite ? Math.ceil(c.n / 2) : c.n); i++) {
    const size = r(c.s).toFixed(1) + "px", txt = c.text ? c.text[i % c.text.length] : "";
    html += `<span class="p" style="--x:${(Math.random()*96).toFixed(1)}%;--s:${size};--d:${r(c.d).toFixed(1)}s;--w:-${(Math.random()*12).toFixed(1)}s">${txt}</span>`;
  }
  for (let i = 0; i < (lite ? Math.ceil((c.twinkle || 0) / 2) : (c.twinkle || 0)); i++) {
    html += `<span class="p tw" style="--x:${(Math.random()*96).toFixed(1)}%;--y:${(Math.random()*90).toFixed(1)}%;--s:${(8+Math.random()*10).toFixed(0)}px;--d:${(2+Math.random()*3).toFixed(1)}s;--w:-${(Math.random()*4).toFixed(1)}s">✦</span>`;
  }
  return `<div class="ev-deco ${c.cls}" aria-hidden="true">${html}</div>`;
}

function applyWeddingDetails(){
  const initials = `${WEDDING.bride.charAt(0)} & ${WEDDING.groom.charAt(0)}`;
  const set = (id, v) => { $(id).textContent = v; };
    set("bridegroomName", WEDDING.groom); set("brideName", WEDDING.bride);
  set("heroDate", WEDDING.dateRange);
  set("scratchDate", WEDDING.dateLabel);
  set("inviteGroom", WEDDING.groomFull); set("inviteBride", WEDDING.brideFull);
  ["groomParents","brideParents"].forEach(id => { set(id, WEDDING[id] ? `(${WEDDING[id]})` : ""); $(id).hidden = !WEDDING[id]; });
  set("galNames", `${WEDDING.bride} & ${WEDDING.groom}`);
  set("mainVenue", WEDDING.venue); set("mainVenueAddress", WEDDING.venueAddress);
  $("mapLink").href = WEDDING.mapUrl;
  $("eventsGrid").innerHTML = WEDDING.events.map(e => `
    <section class="event-page t-${e.theme}" id="event-${e.theme}">
      ${decoFor(e.theme)}
      <article class="ev-card">
        <div class="ev-medal" aria-hidden="true">${e.icon}</div>
        ${e.side ? `<p class="ev-side">${e.side}</p>` : ""}
        <h3>${e.name}</h3>
        <p class="ev-tag">${e.tagline}</p>
        <dl class="ev-info">
          <div><dt>Date</dt><dd>${e.date}</dd></div>
          <div><dt>Time</dt><dd>${e.time}</dd></div>
          <div><dt>Venue</dt><dd>${e.location}</dd></div>
        </dl>
        <a class="ev-map" href="${e.map}" target="_blank" rel="noopener">View venue on map</a>
      </article>
    </section>`).join("");
}
applyWeddingDetails();

/* Page 1 -> Page 2: the palace gateway plays on load (~4.5s), then fades into the invitation. Click skips it. */
const intro = $("intro");
let introDone = false, introStarted = false;
function finishIntro(){
  if (introDone) return;
  introDone = true;
  intro.remove();
  document.body.classList.add("opening", "opened");
  document.body.classList.remove("is-locked");
  window.scrollTo(0, 0);
}
function startIntro(){
  if (introStarted) return;
  introStarted = true;
  if (reduceMotion) return setTimeout(finishIntro, 50);
  intro.classList.add("play");
  setTimeout(() => document.body.classList.add("opening"), 3500);
  setTimeout(finishIntro, 4500);
}
intro.addEventListener("click", finishIntro);
if (document.readyState === "complete") startIntro(); else window.addEventListener("load", startIntro);

/* Music (assets/sahiba.mp3): starts as soon as the page opens. Browsers only allow sound after a first
   touch/click, so if autoplay is blocked it starts on the visitor's first tap instead. */
const audio = $("weddingAudio"), musicBtn = $("musicToggle");
function setMusicUI(playing){
  musicBtn.textContent = playing ? "❚❚" : "♫";
  musicBtn.setAttribute("aria-label", playing ? "Pause wedding music" : "Play wedding music");
  musicBtn.title = playing ? "Pause music" : "Play music";
}
function fadeIn(){
  audio.volume = 0;
  const t = setInterval(() => { audio.volume = Math.min(1, audio.volume + 0.05); if (audio.volume >= 1) clearInterval(t); }, 100);
}
const GESTURES = ["pointerup", "touchend", "click", "keydown"];
function onFirstGesture(e){
  if (musicBtn.contains(e.target)) return; // the button handles its own tap
  startMusic();
}
function armGesture(){ GESTURES.forEach(t => addEventListener(t, onFirstGesture, {once:true, passive:true})); }
function disarmGesture(){ GESTURES.forEach(t => removeEventListener(t, onFirstGesture)); }
function startMusic(){
  audio.play().then(() => { disarmGesture(); fadeIn(); setMusicUI(true); musicBtn.classList.remove("hint"); })
    .catch(() => { armGesture(); musicBtn.classList.add("hint"); }); // blocked by the browser: start on the first tap and gently pulse the music button
}
musicBtn.addEventListener("click", () => {
  disarmGesture(); musicBtn.classList.remove("hint");
  if (audio.paused) audio.play().then(() => { audio.volume = 1; setMusicUI(true); }).catch(() => {});
  else { audio.pause(); setMusicUI(false); }
});
startMusic();

/* Live countdown */
function updateCountdown(){
  const diff = new Date(WEDDING.date).getTime() - Date.now();
  if (diff <= 0) {
    ["days","hours","minutes","seconds"].forEach(id => $(id).textContent = "00");
    $("countdownCaption").textContent = "The celebration is here";
    return;
  }
  const v = {days: Math.floor(diff / 86400000), hours: Math.floor(diff % 86400000 / 3600000), minutes: Math.floor(diff % 3600000 / 60000), seconds: Math.floor(diff % 60000 / 1000)};
  Object.entries(v).forEach(([id, n]) => $(id).textContent = String(n).padStart(2, "0"));
}
updateCountdown(); setInterval(updateCountdown, 1000);

/* Scratch card: the cover shows only the word SCRATCH; scratching reveals the date, venue and map button.
   Once about half is scratched away the cover fades out so the map button becomes tappable. */
function setupScratch(){
  const canvas = $("scratchCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let drawing = false, touched = false, done = false;
  function drawCover(){
    const rect = canvas.getBoundingClientRect(), dpr = Math.min(2, Math.max(1, devicePixelRatio || 1));
    canvas.width = Math.round(rect.width * dpr); canvas.height = Math.round(rect.height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.globalCompositeOperation = "source-over";
    const g = ctx.createLinearGradient(0, 0, rect.width, rect.height);
    g.addColorStop(0, "#8b2630"); g.addColorStop(.5, "#b77d42"); g.addColorStop(1, "#641923");
    ctx.fillStyle = g; ctx.fillRect(0, 0, rect.width, rect.height);
    ctx.strokeStyle = "rgba(244,215,157,.8)"; ctx.lineWidth = 2; ctx.strokeRect(12, 12, rect.width - 24, rect.height - 24);
    ctx.fillStyle = "#f7e5bc"; ctx.textAlign = "center"; ctx.textBaseline = "middle";
    ctx.font = "600 38px 'Cormorant Garamond', Georgia, serif";
    if ("letterSpacing" in ctx) ctx.letterSpacing = "8px";
    ctx.fillText("SCRATCH", rect.width / 2 + 4, rect.height / 2);
  }
  function clearedShare(){
    const w = canvas.width, h = canvas.height, d = ctx.getImageData(0, 0, w, h).data, step = 24;
    let total = 0, gone = 0;
    for (let y = 0; y < h; y += step) for (let x = 0; x < w; x += step) { total++; if (d[(y * w + x) * 4 + 3] < 40) gone++; }
    return gone / total;
  }
  function finish(){ if (done) return; if (clearedShare() > 0.5) { done = true; canvas.classList.add("cleared"); } }
  drawCover();
  const scratch = e => {
    if (!drawing) return;
    const r = canvas.getBoundingClientRect();
    ctx.globalCompositeOperation = "destination-out"; ctx.beginPath(); ctx.arc(e.clientX - r.left, e.clientY - r.top, 26, 0, Math.PI * 2); ctx.fill();
  };
  canvas.addEventListener("pointerdown", e => { drawing = touched = true; canvas.setPointerCapture(e.pointerId); scratch(e); });
  canvas.addEventListener("pointermove", scratch);
  ["pointerup", "pointercancel", "pointerleave"].forEach(t => canvas.addEventListener(t, () => { if (drawing) { drawing = false; finish(); } }));
  // the card height follows its content, so redraw the cover whenever its size changes (fonts loading, rotation) until scratching starts
  if ("ResizeObserver" in window) new ResizeObserver(() => { if (!touched) drawCover(); }).observe(canvas);
}
(document.fonts ? document.fonts.load("600 38px 'Cormorant Garamond'").catch(() => {}) : Promise.resolve()).then(setupScratch);

/* Event pages animate only while on screen */
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(es => es.forEach(en => en.target.classList.toggle("live", en.isIntersecting)), {rootMargin:"120px"});
  document.querySelectorAll(".event-page").forEach(el => io.observe(el));
} else document.querySelectorAll(".event-page").forEach(el => el.classList.add("live"));

/* Gallery: royal coverflow. The centre arch is in focus, neighbours are angled behind it. Auto-plays, swipe / arrows / tap a side photo to move. */
const GALLERY = [
  ["g2", "Forever Begins", "Sipra and Debashish together"], ["g1", "Golden Hour", "Sipra and Debashish at sunset"], ["g3", "Rings & Mehendi", "Sipra and Debashish showing their rings and mehendi"],
  ["g4", "Date Night", "Sipra and Debashish at dinner"], ["g5", "Smiles Together", "Sipra and Debashish smiling"]
];
(function buildGallery(){
  const stage = $("galStage"); if (!stage) return;
  const sec = $("gallery"), cap = $("galCaption"), n = GALLERY.length, half = Math.floor(n / 2);
  stage.innerHTML = GALLERY.map(p => `<figure class="gal-slide"><div class="gframe"><img src="assets/gallery/${p[0]}.jpg" width="800" height="1000" loading="lazy" decoding="async" alt="${p[2]}" draggable="false"></div></figure>`).join("");
  const slides = [...stage.children];
  let idx = 0, timer = null, capTimer = null;
  function render(){
    slides.forEach((s, i) => { const off = ((i - idx + n + half) % n) - half; s.dataset.pos = off; s.style.visibility = Math.abs(off) > 2 ? "hidden" : "visible"; });
    cap.classList.add("fade"); clearTimeout(capTimer);
    capTimer = setTimeout(() => { cap.textContent = GALLERY[idx][1]; cap.classList.remove("fade"); }, cap.textContent ? 180 : 0);
  }
  const go = d => { idx = (idx + d + n) % n; render(); restart(); };
  const goTo = i => { idx = i; render(); restart(); };
  function restart(){ clearTimeout(timer); if (reduceMotion || !sec.classList.contains("live") || paused) return; timer = setTimeout(() => go(1), 3600); }
  let paused = false;
  stage.addEventListener("pointerenter", e => { if (e.pointerType === "mouse") { paused = true; clearTimeout(timer); } });
  stage.addEventListener("pointerleave", e => { if (e.pointerType === "mouse") { paused = false; restart(); } });
  let sx = null, moved = false;
  stage.addEventListener("pointerdown", e => { sx = e.clientX; moved = false; clearTimeout(timer); });
  stage.addEventListener("pointerup", e => {
    if (sx === null) return; const dx = e.clientX - sx; sx = null;
    if (Math.abs(dx) > 40) { moved = true; go(dx < 0 ? 1 : -1); } else restart();
  });
  stage.addEventListener("pointercancel", () => { sx = null; restart(); });
  stage.addEventListener("click", e => { if (moved) { moved = false; return; } const s = e.target.closest(".gal-slide"); if (s) { const i = slides.indexOf(s); if (i !== idx) goTo(i); } });
  stage.addEventListener("keydown", e => { if (e.key === "ArrowRight") go(1); if (e.key === "ArrowLeft") go(-1); });
  $("galPrev").addEventListener("click", () => go(-1)); $("galNext").addEventListener("click", () => go(1));
  render();
  // gentle falling petals behind the gallery
  $("galPetals").innerHTML = Array.from({length: matchMedia("(max-width: 560px)").matches ? 7 : 12}, () => `<i style="--x:${(Math.random()*96).toFixed(1)}%;--s:${(7+Math.random()*7).toFixed(1)}px;--d:${(9+Math.random()*7).toFixed(1)}s;--wt:-${(Math.random()*12).toFixed(1)}s"></i>`).join("");
  if ("IntersectionObserver" in window) new IntersectionObserver(es => es.forEach(e => { sec.classList.toggle("live", e.isIntersecting); if (e.isIntersecting) restart(); else clearTimeout(timer); }), {rootMargin:"60px"}).observe(sec);
  else { sec.classList.add("live"); restart(); }
})();
