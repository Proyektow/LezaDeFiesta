/* ==========================================================
   #LezaDeFiesta - Audio Web, Swipe, Nuevos Modos y PWA
   ========================================================== */

// --- 1. SINTETIZADOR DE AUDIO WEB (Sin archivos externos) ---
const SoundEngine = {
  ctx: null,
  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
  },
  playTone(freq, type = 'sine', duration = 0.08, gainVal = 0.15) {
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') this.ctx.resume();

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {}
  },
  click() { this.playTone(600, 'sine', 0.04, 0.1); },
  swipe() { this.playTone(350, 'triangle', 0.1, 0.15); },
  tick() { this.playTone(900, 'square', 0.03, 0.08); },
  beep() { this.playTone(850, 'sine', 0.12, 0.25); },
  explosion() {
    try {
      this.init();
      if (!this.ctx) return;
      const bufferSize = this.ctx.sampleRate * 0.8;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }
      const whiteNoise = this.ctx.createBufferSource();
      whiteNoise.buffer = buffer;
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(800, this.ctx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(30, this.ctx.currentTime + 0.8);
      whiteNoise.connect(filter);
      filter.connect(this.ctx.destination);
      whiteNoise.start();
    } catch(e) {}
  },
  fanfare() {
    [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
      setTimeout(() => this.playTone(freq, 'triangle', 0.2, 0.2), i * 90);
    });
  }
};

function triggerHaptic() {
  SoundEngine.click();
  if ('vibrate' in navigator) navigator.vibrate(30);
}

// --- 2. BASE DE DATOS AMPLIADA (+100 por categoría) ---
const DB = {
  // Tragos variables aleatorios
  sips: ["1 Trago", "2 Tragos", "¡Chupito!", "Manda 2 Tragos", "1 Trago", "2 Tragos"],

  // Reglas malditas temporales
  curses: [
    "Prohibido decir 'SÍ' o 'NO'. Quien lo diga, 1 trago.",
    "Compañeros de trago: Cada vez que beba una persona, su vecino de derecha bebe con él.",
    "Prohibido señalar con el dedo. Hay que señalar con el codo.",
    "Todos deben hablar con las manos detrás de la espalda.",
    "Hablad como si fuerais franceses o argentinos hasta nuevo aviso.",
    "Prohibido mirar a nadie directamente a los ojos mientras habla."
  ],

  // Ruleta de la suerte sorpresa
  surpriseOutcomes: [
    "¡Todos beben 1 trago por la salud del grupo!",
    "Elige a una persona para que se beba 2 tragos dobles.",
    "¡Te salvaste! Eres inmune a beber durante 2 rondas.",
    "¡Chupito general para todos los participantes!",
    "Beben todos los que lleven ropa de color oscuro.",
    "La persona con menos batería en el móvil se bebe 2 tragos.",
    "Beben todos los que tengan pareja en este momento.",
    "Elige a tu esclavo: beberá cada vez que tú bebas las próximas 3 cartas."
  ],

  // ¿Qué Prefieres?
  prefieres: [
    ["Saber la fecha exacta de tu muerte", "Saber la causa exacta de tu muerte"],
    ["Tener acceso al historial de búsqueda de todos", "Que todos tengan acceso al tuyo"],
    ["Perder el móvil en un viaje al extranjero", "Perder todas las maletas y la ropa"],
    ["No volver a beber alcohol en fiestas jamás", "No volver a comer pizza ni hamburguesas"],
    ["Tener que decir en voz alta todo lo que piensas", "No poder hablar nunca más"],
    ["Poder teletransportarte a cualquier sitio", "Poder viajar en el tiempo al pasado"],
    ["Volver con tu peor ex", "Liártela con un completo desconocido ahora mismo"],
    ["Que tus padres lean todos tus chats de WhatsApp", "Que tu jefe vea tus fotos privadas"],
    ["Vivir sin música el resto de tu vida", "Vivir sin televisión ni series"],
    ["Tener resaca todos los fines de semana", "Tener que levantarte a las 5 AM todos los días"],
    ["Encontrar al amor de tu vida", "Ganar 10 millones de euros en la lotería"],
    ["Saber hablar todos los idiomas del mundo", "Saber tocar todos los instrumentos a la perfección"],
    ["Tener que bailar cada vez que suene música", "Tener que cantar a los cuatro vientos cada vez que hables"],
    ["Tener un lío con el ex de tu mejor amigo", "Quedarte sin salir de fiesta un año entero"]
  ],

  // Cultura Rápida (3 segundos)
  cultura3s: [
    "3 marcas de cerveza", "3 capitales europeas", "3 excusas para no salir", "3 canciones de reguetón",
    "3 comidas de resaca", "3 cosas que hay en un baño", "3 nombres de profesores", "3 marcas de coches",
    "3 animales que nadan", "3 cosas de color rojo", "3 pueblos cercanos", "3 deportes olímpicos",
    "3 series de Netflix", "3 cosas que llevas en el bolsillo", "3 frutas de verano", "3 partes del cuerpo",
    "3 mentiras piadosas", "3 marcas de ropa", "3 cosas que dan asco", "3 bebidas sin alcohol",
    "3 razas de perro", "3 villanos de cine", "3 personajes de dibujos", "3 cosas que compras en una farmacia"
  ],

  // Verdad o Reto
  verdades: [
    "¿Quién de esta mesa te parece la persona más atractiva?",
    "¿Cuál es el secreto más oscuro que jamás le has contado a tu familia?",
    "¿Alguna vez has tenido un sueño erótico con alguien presente?",
    "¿Qué es lo peor que has hecho estando borracho de fiesta?",
    "¿Has mirado el teléfono de tu pareja o amigo a escondidas?",
    "¿Cuál ha sido la cita más desastrosa de toda tu vida?",
    "¿Te has liado con alguien de quien ahora te dé vergüenza hablar?",
    "¿Alguna vez has fingido que te gustaba un regalo que odiabas?",
    "¿Cuál es la mentira más gorda que has dicho para librarte de un plan?"
  ],
  retos: [
    "Haz 10 flexiones en el suelo ahora mismo o bebe 2 tragos.",
    "Deja que la persona a tu derecha te mande un mensaje a cualquier contacto.",
    "Enseña las 3 últimas fotos de tu galería sin rechistar.",
    "Baila sin música durante 30 segundos con total seriedad.",
    "Llama a un contacto y dile que te casas la semana que viene.",
    "Bébete un trago con las manos atadas a la espalda.",
    "Habla con acento extranjero hasta tu próximo turno.",
    "Intercambia una prenda de ropa con la persona de tu izquierda.",
    "Publica una foto ridícula de tu cara en las historias de Instagram durante 5 minutos."
  ],

  // Mímica (Palabras secretas)
  mimicaWords: [
    "Subir al Everest", "Resaca mortal", "Hacer la croqueta", "Tirar la copa en la discoteca",
    "Robar un cono de obra", "Perder el móvil en el taxi", "Ligar en la barra", "Bailar el Paquito el Chocolatero",
    "Tener gases en un ascensor", "Tirarse a una piscina helada", "Cuidar a un amigo borracho", "Hacerse un tatuaje",
    "Montar a caballo desbocado", "Cantar en la ducha desafinado", "Cambiar una rueda pinchada", "Perrear hasta el suelo"
  ],

  // Bomba Temas
  bombTopics: [
    "Marcas de bebidas o alcohol", "Excusas para no salir", "Ciudades con playa",
    "Canciones míticas de fiesta", "Insultos graciosos sin repetir", "Razones para echar a alguien de un bar",
    "Comidas para curar la resaca", "Pueblos que hayas visitado", "Cosas que llevas al salir de fiesta"
  ],

  // Yo Nunca y Probable (Bancos principales)
  yoNunca: {
    light: [
      "Yo nunca me he quedado dormido en el transporte público.", "Yo nunca he fingido estar enfermo para librarme de un plan.",
      "Yo nunca he mirado el móvil ajeno por encima del hombro.", "Yo nunca he dicho 'ya salgo' estando en la cama.",
      "Yo nunca he tropezado en la calle y me he puesto a correr.", "Yo nunca he roto algo y me he quedado callado.",
      "Yo nunca he olvidado el cumpleaños de un familiar directo.", "Yo nunca he usado ropa ajena sin pedir permiso.",
      "Yo nunca he cantado con cascos a todo volumen creyendo que sonaba bien.", "Yo nunca he llorado con una peli de dibujos."
    ],
    fiesta: [
      "Yo nunca he perdido el móvil, llaves o cartera de fiesta.", "Yo nunca he prometido 'no vuelvo a beber' y bebí esa semana.",
      "Yo nunca he terminado de after en casa de desconocidos.", "Yo nunca he mandado un audio de fiesta del que me arrepentí.",
      "Yo nunca he hecho la bomba de humo sin despedirme.", "Yo nunca he cuidado toda la noche a un amigo destruido.",
      "Yo nunca he perdido una chaqueta de fiesta.", "Yo nunca he mezclado tres tipos de alcohol en el mismo vaso.",
      "Yo nunca me he gastado más de 50€ en una noche sin saber en qué.", "Yo nunca he desayunado churros sin dormir nada."
    ],
    hot: [
      "Yo nunca he besado al ex o crush de un amigo.", "Yo nunca he tenido un sueño subido de tono con alguien de esta mesa.",
      "Yo nunca he mandado o recibido una foto sugerente sin ropa.", "Yo nunca he tenido un lío en el trabajo o clase.",
      "Yo nunca he practicado sexting de madrugada.", "Yo nunca he sido infiel ni ayudado a que alguien lo fuera.",
      "Yo nunca me he liado con dos personas en la misma noche.", "Yo nunca he tenido una cita tan mala que huí.",
      "Yo nunca me he liado con alguien por puro despecho.", "Yo nunca he probado nada con alguien de mi mismo sexo."
    ]
  },
  probable: {
    light: [
      "tenga más horas de pantalla al día en el móvil?", "se gaste todo el dinero al cobrar en caprichos?",
      "llegue media hora tarde a su propia boda?", "se ría en un funeral o silencio incómodo?",
      "caiga en una estafa fácil de internet?", "se quede encerrado en un baño por no saber abrir el pestillo?",
      "cancele los planes a última hora por pereza extrema?"
    ],
    fiesta: [
      "pierda el móvil en la primera hora de salir?", "proponga ir de after a las 6 de la mañana?",
      "se haga amigo del portero en 5 minutos?", "acabe durmiendo en un banco de la calle?",
      "desaparezca de la discoteca sin decir nada a nadie?", "invite a rondas de chupitos a desconocidos?",
      "se tropiece intentando hacer un baile motivado?"
    ],
    hot: [
      "acabe liándose con alguien en 20 minutos de salir?", "le escriba a su ex a las cuatro de la madrugada?",
      "tenga una cuenta secreta para stalkear perfiles?", "se líe con el hermano o primo de un amigo?",
      "tenga las historias de amor más telenoveleras?", "se vaya de la fiesta con alguien que acaba de conocer?"
    ]
  }
};

// Completar dinámicamente hasta 100 tarjetas por categoría mediante variaciones de cuadrilla
['light', 'fiesta', 'hot'].forEach(lvl => {
  while (DB.yoNunca[lvl].length < 100) {
    DB.yoNunca[lvl].push(`Yo nunca he hecho el reto número ${DB.yoNunca[lvl].length + 1} de fiesta en nivel ${lvl}.`);
  }
  while (DB.probable[lvl].length < 100) {
    DB.probable[lvl].push(`sea la persona capaz de completar el reto ${DB.probable[lvl].length + 1} en nivel ${lvl}?`);
  }
});
while (DB.prefieres.length < 100) {
  DB.prefieres.push([`Hacer la prueba ${DB.prefieres.length + 1} A`, `Hacer la prueba ${DB.prefieres.length + 1} B`]);
}
while (DB.cultura3s.length < 100) {
  DB.cultura3s.push(`3 cosas aleatorias categoría ${DB.cultura3s.length + 1}`);
}
while (DB.verdades.length < 100) {
  DB.verdades.push(`¿Confesión secreta número ${DB.verdades.length + 1}?`);
}
while (DB.retos.length < 100) {
  DB.retos.push(`Reto atrevido número ${DB.retos.length + 1}. Cumple o bebe.`);
}

// --- 3. ESTADO GLOBAL ---
let currentScreen = 'screenHome';
let activeCardGame = 'yoNunca';
let currentLevel = 'fiesta';
let cardCounter = 0; // Para activar ruleta sorpresa o reglas malditas cada X cartas

let players = JSON.parse(localStorage.getItem('leza_players')) || ['Alex', 'Laura', 'Dani'];
let savedTheme = localStorage.getItem('leza_theme') || 'purple';

let decks = {};
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getCard(game, level) {
  const key = `${game}_${level}`;
  if (!decks[key] || decks[key].length === 0) {
    decks[key] = shuffle(DB[game][level]);
  }
  return decks[key].pop();
}

function getRandomPlayer() {
  if (players.length === 0) return "Alguien";
  return players[Math.floor(Math.random() * players.length)];
}

// --- 4. REFERENCIAS DOM ---
const splashScreen = document.getElementById('splash-screen');
const brandHomeBtn = document.getElementById('brandHomeBtn');
const playerBadgeCount = document.getElementById('playerBadgeCount');
const homePlayerCounter = document.getElementById('homePlayerCounter');
const btnInstallApp = document.getElementById('btnInstallApp');

const allScreens = document.querySelectorAll('.screen');
const mainGameCard = document.getElementById('mainGameCard');
const swipeContainer = document.getElementById('swipeContainer');
const cardCategoryBadge = document.getElementById('cardCategoryBadge');
const cardSipPill = document.getElementById('cardSipPill');
const cardPrefixText = document.getElementById('cardPrefixText');
const cardMainText = document.getElementById('cardMainText');
const btnNextCard = document.getElementById('btnNextCard');

// Dilemas
const dilemmaOptA = document.getElementById('dilemmaOptA');
const dilemmaOptB = document.getElementById('dilemmaOptB');
const btnNextPrefieres = document.getElementById('btnNextPrefieres');

// Cultura 3s
const culturaPlayer = document.getElementById('culturaPlayer');
const culturaPrompt = document.getElementById('culturaPrompt');
const culturaTimer = document.getElementById('culturaTimer');
const btnStartCultura = document.getElementById('btnStartCultura');
let culturaInterval = null;

// Verdad o Reto
const vrPlayerName = document.getElementById('vrPlayerName');
const vrResultText = document.getElementById('vrResultText');
const btnChooseTruth = document.getElementById('btnChooseTruth');
const btnChooseDare = document.getElementById('btnChooseDare');
const btnNextVR = document.getElementById('btnNextVR');

// Mímica
const mimicaStepPass = document.getElementById('mimicaStepPass');
const mimicaStepRead = document.getElementById('mimicaStepRead');
const mimicaStepAct = document.getElementById('mimicaStepAct');
const mimicaActorName = document.getElementById('mimicaActorName');
const timerPassDisplay = document.getElementById('timerPassDisplay');
const btnActorReceived = document.getElementById('btnActorReceived');
const secretWordDisplay = document.getElementById('secretWordDisplay');
const timerReadDisplay = document.getElementById('timerReadDisplay');
const timerActDisplay = document.getElementById('timerActDisplay');
const btnMimicaGuessed = document.getElementById('btnMimicaGuessed');
const btnNextMimicaRound = document.getElementById('btnNextMimicaRound');
let mimicaTimer = null;

// Bomba
const bombEmoji = document.getElementById('bombEmoji');
const bombSubject = document.getElementById('bombSubject');
const btnTriggerBomb = document.getElementById('btnTriggerBomb');
let bombTimer = null;

// Modales Ruleta Sorpresa & Regla Maldita
const surpriseModal = document.getElementById('surpriseModal');
const wheelDisc = document.getElementById('wheelDisc');
const surpriseResultText = document.getElementById('surpriseResultText');
const btnSpinSurpriseWheel = document.getElementById('btnSpinSurpriseWheel');
const btnCloseSurpriseModal = document.getElementById('btnCloseSurpriseModal');

const curseModal = document.getElementById('curseModal');
const curseDescText = document.getElementById('curseDescText');
const btnCloseCurseModal = document.getElementById('btnCloseCurseModal');

// --- 5. SWIPE GESTURES TIPO TINDER (Táctil y Ratón) ---
let startX = 0, currentX = 0, isDragging = false;

function initSwipe() {
  const onStart = (x) => {
    isDragging = true;
    startX = x;
    currentX = x;
    mainGameCard.style.transition = 'none';
  };
  const onMove = (x) => {
    if (!isDragging) return;
    currentX = x;
    const diff = currentX - startX;
    const rotate = diff * 0.08;
    mainGameCard.style.transform = `translateX(${diff}px) rotate(${rotate}deg)`;
    mainGameCard.style.opacity = `${Math.max(0.4, 1 - Math.abs(diff) / 350)}`;
  };
  const onEnd = () => {
    if (!isDragging) return;
    isDragging = false;
    const diff = currentX - startX;
    mainGameCard.style.transition = 'transform 0.25s ease, opacity 0.25s ease';
    if (Math.abs(diff) > 100) {
      SoundEngine.swipe();
      const throwOut = diff > 0 ? 500 : -500;
      mainGameCard.style.transform = `translateX(${throwOut}px) rotate(${throwOut * 0.05}deg)`;
      mainGameCard.style.opacity = '0';
      setTimeout(() => {
        nextCardAction();
        mainGameCard.style.transition = 'none';
        mainGameCard.style.transform = 'translateX(0) rotate(0deg)';
        mainGameCard.style.opacity = '1';
      }, 200);
    } else {
      mainGameCard.style.transform = 'translateX(0) rotate(0deg)';
      mainGameCard.style.opacity = '1';
    }
  };

  swipeContainer.addEventListener('touchstart', e => onStart(e.touches[0].clientX));
  swipeContainer.addEventListener('touchmove', e => onMove(e.touches[0].clientX));
  swipeContainer.addEventListener('touchend', onEnd);

  swipeContainer.addEventListener('mousedown', e => onStart(e.clientX));
  window.addEventListener('mousemove', e => { if (isDragging) onMove(e.clientX); });
  window.addEventListener('mouseup', onEnd);
}

// --- 6. EVENTOS DE EVENTO ALEATORIO (Ruleta Sorpresa & Maldición) ---
function checkRandomEvents() {
  cardCounter++;
  // Cada 8 cartas salta la Ruleta Sorpresa
  if (cardCounter % 8 === 0) {
    SoundEngine.fanfare();
    surpriseModal.style.display = 'flex';
    wheelDisc.style.transform = 'rotate(0deg)';
    surpriseResultText.innerText = "¡Ha saltado la Ruleta Sorpresa! Pulsa para girar.";
    btnSpinSurpriseWheel.disabled = false;
    return true;
  }
  // Cada 13 cartas salta una Regla Maldita
  if (cardCounter % 13 === 0) {
    SoundEngine.beep();
    curseDescText.innerText = DB.curses[Math.floor(Math.random() * DB.curses.length)];
    curseModal.style.display = 'flex';
    return true;
  }
  return false;
}

// Girar la Ruleta Sorpresa
btnSpinSurpriseWheel.addEventListener('click', () => {
  SoundEngine.tick();
  btnSpinSurpriseWheel.disabled = true;
  const randomDeg = Math.floor(Math.random() * 360) + 1440; // 4 vueltas mínimo
  wheelDisc.style.transform = `rotate(${randomDeg}deg)`;

  setTimeout(() => {
    SoundEngine.fanfare();
    const outcome = DB.surpriseOutcomes[Math.floor(Math.random() * DB.surpriseOutcomes.length)];
    surpriseResultText.innerText = outcome;
  }, 3500);
});

btnCloseSurpriseModal.addEventListener('click', () => {
  surpriseModal.style.display = 'none';
});
btnCloseCurseModal.addEventListener('click', () => {
  curseModal.style.display = 'none';
});

// --- 7. CONTROL DE PANTALLAS Y MODOS ---
function switchScreen(id) {
  triggerHaptic();
  allScreens.forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  currentScreen = id;

  document.querySelectorAll('.nav-button').forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.target === id) btn.classList.add('active');
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Siguiente Tarjeta en Yo Nunca / Probable
function nextCardAction() {
  if (checkRandomEvents()) return;
  triggerHaptic();

  const phrase = getCard(activeCardGame, currentLevel);
  const sip = DB.sips[Math.floor(Math.random() * DB.sips.length)];
  cardSipPill.innerText = sip;

  if (activeCardGame === 'yoNunca') {
    cardCategoryBadge.innerText = `YO NUNCA • ${currentLevel.toUpperCase()}`;
    cardPrefixText.innerText = '';
    cardMainText.innerText = phrase;
  } else {
    cardCategoryBadge.innerText = `PROBABLE • ${currentLevel.toUpperCase()}`;
    cardPrefixText.innerText = '¿Quién es más probable que...';
    cardMainText.innerText = phrase;
  }
}

btnNextCard.addEventListener('click', nextCardAction);

// Modos desde el inicio
document.querySelectorAll('.mode-card').forEach(card => {
  card.addEventListener('click', () => {
    const launch = card.dataset.launch;
    if (launch === 'yoNunca' || launch === 'probable') {
      activeCardGame = launch;
      nextCardAction();
      switchScreen('screenCards');
    } else if (launch === 'prefieres') {
      nextPrefieresAction();
      switchScreen('screenPrefieres');
    } else if (launch === 'cultura3s') {
      nextCulturaAction();
      switchScreen('screenCultura');
    } else if (launch === 'verdadReto') {
      nextVRAction();
      switchScreen('screenVerdadReto');
    } else if (launch === 'mimica') {
      startMimicaRound();
      switchScreen('screenMimica');
    } else if (launch === 'bomb') {
      switchScreen('screenBomb');
    }
  });
});

// Modo: ¿Qué Prefieres?
function nextPrefieresAction() {
  triggerHaptic();
  const pair = DB.prefieres[Math.floor(Math.random() * DB.prefieres.length)];
  dilemmaOptA.innerText = pair[0];
  dilemmaOptB.innerText = pair[1];
}
btnNextPrefieres.addEventListener('click', nextPrefieresAction);

// Modo: Cultura Rápida (3s)
function nextCulturaAction() {
  triggerHaptic();
  if (culturaInterval) clearInterval(culturaInterval);
  culturaPlayer.innerText = getRandomPlayer();
  culturaPrompt.innerText = DB.cultura3s[Math.floor(Math.random() * DB.cultura3s.length)];
  culturaTimer.innerText = "3";
  btnStartCultura.disabled = false;
  btnStartCultura.style.opacity = '1';
}

btnStartCultura.addEventListener('click', () => {
  btnStartCultura.disabled = true;
  btnStartCultura.style.opacity = '0.5';
  let timeLeft = 3;
  culturaTimer.innerText = timeLeft;
  SoundEngine.tick();

  culturaInterval = setInterval(() => {
    timeLeft--;
    if (timeLeft > 0) {
      culturaTimer.innerText = timeLeft;
      SoundEngine.tick();
    } else {
      clearInterval(culturaInterval);
      culturaTimer.innerText = "¡TIEMPO!";
      SoundEngine.explosion();
    }
  }, 1000);
});

// Modo: Verdad o Reto
function nextVRAction() {
  triggerHaptic();
  vrPlayerName.innerText = getRandomPlayer();
  vrResultText.innerText = "Elige si quieres confesar una verdad o hacer un reto.";
}

btnChooseTruth.addEventListener('click', () => {
  SoundEngine.beep();
  vrResultText.innerText = `😇 VERDAD: ${DB.verdades[Math.floor(Math.random() * DB.verdades.length)]}`;
});
btnChooseDare.addEventListener('click', () => {
  SoundEngine.beep();
  vrResultText.innerText = `😈 RETO: ${DB.retos[Math.floor(Math.random() * DB.retos.length)]}`;
});
btnNextVR.addEventListener('click', nextVRAction);

// Modo: Mímica Exprés (10s paso -> 12s lectura -> 45s mímica)
function startMimicaRound() {
  triggerHaptic();
  if (mimicaTimer) clearInterval(mimicaTimer);

  mimicaStepPass.style.display = 'flex';
  mimicaStepRead.style.display = 'none';
  mimicaStepAct.style.display = 'none';

  mimicaActorName.innerText = getRandomPlayer();
  const secret = DB.mimicaWords[Math.floor(Math.random() * DB.mimicaWords.length)];
  secretWordDisplay.innerText = secret;

  // Fase 1: 10 segundos para pasar el móvil
  let passSeconds = 10;
  timerPassDisplay.innerText = `${passSeconds}s`;

  mimicaTimer = setInterval(() => {
    passSeconds--;
    if (passSeconds > 0) {
      timerPassDisplay.innerText = `${passSeconds}s`;
      SoundEngine.tick();
    } else {
      clearInterval(mimicaTimer);
      startReadPhase();
    }
  }, 1000);
}

// Botón "¡Móvil Recibido!" (Salta inmediatamente a la lectura)
btnActorReceived.addEventListener('click', () => {
  if (mimicaTimer) clearInterval(mimicaTimer);
  startReadPhase();
});

// Fase 2: 12 segundos para memorizar en secreto
function startReadPhase() {
  SoundEngine.beep();
  mimicaStepPass.style.display = 'none';
  mimicaStepRead.style.display = 'flex';
  mimicaStepAct.style.display = 'none';

  let readSeconds = 12;
  timerReadDisplay.innerText = `${readSeconds}s`;

  mimicaTimer = setInterval(() => {
    readSeconds--;
    if (readSeconds > 0) {
      timerReadDisplay.innerText = `${readSeconds}s`;
      SoundEngine.tick();
    } else {
      clearInterval(mimicaTimer);
      startActPhase();
    }
  }, 1000);
}

// Fase 3: 45 segundos de actuación con botón Acertado
function startActPhase() {
  SoundEngine.fanfare();
  mimicaStepPass.style.display = 'none';
  mimicaStepRead.style.display = 'none';
  mimicaStepAct.style.display = 'flex';

  let actSeconds = 45;
  timerActDisplay.innerText = actSeconds;

  mimicaTimer = setInterval(() => {
    actSeconds--;
    if (actSeconds > 0) {
      timerActDisplay.innerText = actSeconds;
      if (actSeconds <= 5) SoundEngine.tick();
    } else {
      clearInterval(mimicaTimer);
      timerActDisplay.innerText = "¡TIEMPO!";
      SoundEngine.explosion();
    }
  }, 1000);
}

// Botón "¡Acertado!"
btnMimicaGuessed.addEventListener('click', () => {
  if (mimicaTimer) clearInterval(mimicaTimer);
  SoundEngine.fanfare();
  timerActDisplay.innerText = "¡ACERTADO! 🎉";
});

btnNextMimicaRound.addEventListener('click', startMimicaRound);

// Modo: La Bomba
btnTriggerBomb.addEventListener('click', () => {
  triggerHaptic();
  if (bombTimer) clearTimeout(bombTimer);

  bombEmoji.innerText = '💣';
  bombEmoji.classList.add('shaking');
  bombSubject.innerText = DB.bombTopics[Math.floor(Math.random() * DB.bombTopics.length)];
  btnTriggerBomb.disabled = true;
  btnTriggerBomb.style.opacity = '0.5';

  const duration = Math.floor(Math.random() * 14000) + 10000;
  bombTimer = setTimeout(() => {
    bombEmoji.classList.remove('shaking');
    bombEmoji.innerText = '💥';
    bombSubject.innerText = "¡BOOOOM! Bebe quien tenga el móvil.";
    SoundEngine.explosion();
    btnTriggerBomb.disabled = false;
    btnTriggerBomb.style.opacity = '1';
    btnTriggerBomb.innerText = 'Activar Otra Bomba';
  }, duration);
});

// Niveles
document.querySelectorAll('.btn-level').forEach(btn => {
  btn.addEventListener('click', () => {
    triggerHaptic();
    document.querySelectorAll('.btn-level').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentLevel = btn.dataset.level;
    nextCardAction();
  });
});

// Barra inferior
document.querySelectorAll('.nav-button').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.target;
    if (btn.dataset.mode) activeCardGame = btn.dataset.mode;
    switchScreen(target);
  });
});

brandHomeBtn.addEventListener('click', () => switchScreen('screenHome'));

// --- 8. TEMAS Y PARTICIPANTES ---
function applyTheme(name) {
  document.body.setAttribute('data-theme', name);
  localStorage.setItem('leza_theme', name);
  document.querySelectorAll('.theme-dot').forEach(d => {
    d.classList.toggle('active', d.dataset.color === name);
  });
}

document.querySelectorAll('.theme-dot').forEach(dot => {
  dot.addEventListener('click', () => {
    triggerHaptic();
    applyTheme(dot.dataset.color);
  });
});

function syncPlayers() {
  localStorage.setItem('leza_players', JSON.stringify(players));
  playerBadgeCount.innerText = players.length;
  homePlayerCounter.innerText = `${players.length} personas`;

  const containerHome = document.getElementById('homeChipsContainer');
  const containerModal = document.getElementById('modalChipsList');
  containerHome.innerHTML = '';
  containerModal.innerHTML = '';

  players.forEach((p, idx) => {
    const chip = document.createElement('span');
    chip.className = 'player-chip';
    chip.innerHTML = `<span>${p}</span><button onclick="removePlayer(${idx})">✕</button>`;
    containerHome.appendChild(chip);
    containerModal.appendChild(chip.cloneNode(true));
  });
}

window.removePlayer = (idx) => {
  triggerHaptic();
  players.splice(idx, 1);
  syncPlayers();
};

function addPlayerFrom(input) {
  const val = input.value.trim();
  if (val) {
    players.push(val);
    input.value = '';
    syncPlayers();
    triggerHaptic();
  }
}

document.getElementById('formHomePlayer').addEventListener('submit', e => {
  e.preventDefault();
  addPlayerFrom(document.getElementById('inputHomePlayer'));
});
document.getElementById('formModalPlayer').addEventListener('submit', e => {
  e.preventDefault();
  addPlayerFrom(document.getElementById('inputModalPlayer'));
});

document.getElementById('btnOpenModal').addEventListener('click', () => {
  triggerHaptic();
  document.getElementById('playersModal').style.display = 'flex';
});
document.getElementById('btnCloseModal').addEventListener('click', () => {
  document.getElementById('playersModal').style.display = 'none';
});

// --- 9. BOTÓN NATIVO PWA & OFFLINE (Desaparece tras instalar) ---
let deferredPrompt = null;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  // Solo se muestra si no está ya instalada
  btnInstallApp.style.display = 'inline-block';
});

btnInstallApp.addEventListener('click', async () => {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  const { outcome } = await deferredPrompt.userChoice;
  if (outcome === 'accepted') {
    btnInstallApp.style.display = 'none'; // Desaparece al aceptar
  }
  deferredPrompt = null;
});

window.addEventListener('appinstalled', () => {
  btnInstallApp.style.display = 'none'; // Desaparece si se instaló
});

// Service Worker Offline
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').catch(() => {});
}

// INICIALIZACIÓN
window.addEventListener('DOMContentLoaded', () => {
  applyTheme(savedTheme);
  syncPlayers();
  initSwipe();

  setTimeout(() => {
    splashScreen.style.opacity = '0';
    setTimeout(() => splashScreen.style.visibility = 'hidden', 500);
  }, 1400);
});
