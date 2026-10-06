/* ==========================================================
   #LezaDeFiesta - Lógica, Navegación de Juegos y Cuadrilla
   ========================================================== */

// BASE DE PREGUNTAS Y RETOS
const DATABASE = {
  yoNunca: {
    light: [
      "Yo nunca me he quedado dormido en el autobús y he terminado en otro pueblo.",
      "Yo nunca he fingido estar malo para escaquearme de un plan con pereza.",
      "Yo nunca he mirado el móvil ajeno por encima del hombro disimulando.",
      "Yo nunca he dicho 'ya voy de camino' estando todavía en pijama.",
      "Yo nunca he roto una copa en una cena y he disimulado haciéndome el loco.",
      "Yo nunca he tropezado en mitad de la plaza y me he puesto a correr disimulando.",
      "Yo nunca he olvidado el cumpleaños de un amigo cercano de la cuadrilla.",
      "Yo nunca he usado colonia o ropa de otro sin pedirle permiso.",
      "Yo nunca he cantado en la ducha a grito pelado creyendo que sonaba bien.",
      "Yo nunca he fingido que me encantaba un vino que me parecía vinagre puro."
    ],
    fiesta: [
      "Yo nunca he perdido el móvil, las llaves o la cartera durante una noche de fiesta.",
      "Yo nunca he prometido 'no vuelvo a beber' y he caído esa misma semana.",
      "Yo nunca he acabado de madrugada en la bajera o casa de desconocidos.",
      "Yo nunca he mandado un audio de fiesta del que me he arrepentido la mañana siguiente.",
      "Yo nunca he hecho la bomba de humo yéndome sin despedirme de nadie.",
      "Yo nunca he cuidado toda la noche a un amigo que iba destruido.",
      "Yo nunca he perdido una chaqueta de fiesta que jamás volvió a aparecer.",
      "Yo nunca he mezclado tres bebidas diferentes en el mismo vaso.",
      "Yo nunca he subido un vídeo o historia a redes que luego borré con resaca moral.",
      "Yo nunca he acabado almorzando sin haber pasado por la cama."
    ],
    hot: [
      "Yo nunca he besado al ex o al crush de alguien conocido.",
      "Yo nunca he tenido un sueño subido de tono con alguien de esta mesa.",
      "Yo nunca he mandado o recibido una foto comprometedora.",
      "Yo nunca he tenido un lío secreto con alguien del trabajo o de clase.",
      "Yo nunca he practicado sexting a altas horas de la madrugada.",
      "Yo nunca he sido infiel ni he ayudado a que alguien lo fuera.",
      "Yo nunca me he liado con dos personas distintas en una misma noche de fiesta.",
      "Yo nunca he fingido que me llamaban para escapar de una cita terrible.",
      "Yo nunca me he liado con alguien solo por despecho.",
      "Yo nunca he probado nada con alguien de mi mismo sexo."
    ]
  },
  probable: {
    light: [
      "sea la persona con más horas pegada a la pantalla del móvil?",
      "se gaste el jornal del mes en caprichos inútiles a los dos días?",
      "llegue media hora tarde incluso si la fiesta es en su propia casa?",
      "se ría en un momento solemne o en pleno silencio incómodo?",
      "se crea cualquier bulo o noticia absurda que le manden?",
      "se quede encerrado en un baño por no saber abrir el cerrojo?",
      "cancele el plan a las nueve de la noche por pereza extrema de sofá?"
    ],
    fiesta: [
      "pierda el móvil en la primera hora de estar en el bar?",
      "proponga seguir de fiesta a las 7 de la mañana cuando todos están muertos?",
      "se haga compadre del camarero en menos de diez minutos?",
      "acabe durmiendo en un rincón o banco sin enterarse de la película?",
      "se gaste la mitad de la cartera invitando a rondas a gente que no conoce?",
      "se ponga sentimental en el baño diciendo cuánto quiere a la cuadrilla?",
      "se tropiece intentando hacer un paso de baile que vio en TikTok?"
    ],
    hot: [
      "acabe liándose con alguien en los primeros compases de la noche?",
      "le escriba a su ex a las cuatro de la madrugada con copas encima?",
      "tenga una cuenta secundaria para cotillear sin que nadie se entere?",
      "se líe con el hermano/a o primo/a de un amigo si tuviera la ocasión?",
      "tenga las historias de amor más telenoveleras y caóticas?",
      "se marche de la fiesta con alguien que acaba de conocer hace 10 minutos?"
    ]
  },
  roulettePenalties: [
    "Tiene 30 segundos para enseñar la última foto de su carrete o bebe 2 tragos.",
    "Elige a 2 personas de la mesa para que beban un trago largo con ella/él.",
    "Tiene que mandar un audio a cualquier contacto cantando una jota o beber 3 tragos.",
    "Se queda en silencio absoluto durante las 2 próximas tarjetas; si habla, bebe.",
    "Todos en la mesa le hacen una pregunta comprometida; si no responde con la verdad, paga con trago.",
    "Reparte 3 tragos entre los presentes como mejor le parezca.",
    "Imita a alguien de la mesa durante un minuto o bebe un trago."
  ],
  bombTopics: [
    "Tipos o marcas de vino y bebidas",
    "Pueblos de Rioja Alavesa o alrededores",
    "Excusas para no salir o recogerse temprano",
    "Tapas y raciones típicas de bar",
    "Canciones míticas de fiesta que todos se saben",
    "Cosas que puedes encontrar en las fiestas de un pueblo",
    "Motivos por los que alguien acabaría castigado o multado",
    "Comidas sagradas para quitar la resaca"
  ]
};

// ESTADO GLOBAL
let currentScreen = 'screenHome';
let activeCardGame = 'yoNunca'; // 'yoNunca' | 'probable'
let currentLevel = 'fiesta';     // 'light' | 'fiesta' | 'hot'

// Cuadrilla guardada con LocalStorage
let players = JSON.parse(localStorage.getItem('leza_players')) || ['Alex', 'Laura', 'Dani'];

// Barajas sin repetición
let decks = {};

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function getNextCardPhrase(game, level) {
  const key = `${game}_${level}`;
  if (!decks[key] || decks[key].length === 0) {
    decks[key] = shuffle(DATABASE[game][level]);
  }
  return decks[key].pop();
}

function triggerHaptic() {
  if ('vibrate' in navigator) navigator.vibrate(35);
}

// ELEMENTOS DOM
const splashScreen = document.getElementById('splash-screen');
const brandHomeBtn = document.getElementById('brandHomeBtn');
const playerBadgeCount = document.getElementById('playerBadgeCount');
const homePlayerCounter = document.getElementById('homePlayerCounter');

// Pantallas
const screenHome = document.getElementById('screenHome');
const screenCards = document.getElementById('screenCards');
const screenRoulette = document.getElementById('screenRoulette');
const screenBomb = document.getElementById('screenBomb');
const allScreens = [screenHome, screenCards, screenRoulette, screenBomb];

// Elementos de Tarjeta
const mainGameCard = document.getElementById('mainGameCard');
const cardCategoryBadge = document.getElementById('cardCategoryBadge');
const cardPrefixText = document.getElementById('cardPrefixText');
const cardMainText = document.getElementById('cardMainText');
const cardRuleNote = document.getElementById('cardRuleNote');
const btnNextCard = document.getElementById('btnNextCard');

// Ruleta
const chosenVictim = document.getElementById('chosenVictim');
const chosenTask = document.getElementById('chosenTask');
const btnSpin = document.getElementById('btnSpin');

// Bomba
const barrelEmoji = document.getElementById('barrelEmoji');
const bombSubject = document.getElementById('bombSubject');
const bombFootnote = document.getElementById('bombFootnote');
const btnTriggerBomb = document.getElementById('btnTriggerBomb');
let bombTimer = null;

// Modales y formularios de jugadores
const playersModal = document.getElementById('playersModal');
const btnOpenModal = document.getElementById('btnOpenModal');
const btnCloseModal = document.getElementById('btnCloseModal');
const formHomePlayer = document.getElementById('formHomePlayer');
const inputHomePlayer = document.getElementById('inputHomePlayer');
const homeChipsContainer = document.getElementById('homeChipsContainer');
const formModalPlayer = document.getElementById('formModalPlayer');
const inputModalPlayer = document.getElementById('inputModalPlayer');
const modalChipsList = document.getElementById('modalChipsList');

// NAVEGACIÓN ENTRE PANTALLAS
function switchScreen(targetScreenId) {
  triggerHaptic();
  allScreens.forEach(s => s.classList.remove('active'));
  document.getElementById(targetScreenId).classList.add('active');
  currentScreen = targetScreenId;

  // Actualizar barra inferior
  document.querySelectorAll('.stone-item').forEach(item => {
    item.classList.remove('active');
    if (item.dataset.target === targetScreenId) {
      if (targetScreenId === 'screenCards' && item.dataset.mode !== activeCardGame) {
        return;
      }
      item.classList.add('active');
    }
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// LANZAR MODOS DESDE EL LOBBY PRINCIPAL
document.querySelectorAll('.mode-card').forEach(card => {
  card.addEventListener('click', () => {
    const launchType = card.dataset.launch;

    if (launchType === 'yoNunca') {
      activeCardGame = 'yoNunca';
      updateCardGame();
      switchScreen('screenCards');
    } else if (launchType === 'probable') {
      activeCardGame = 'probable';
      updateCardGame();
      switchScreen('screenCards');
    } else if (launchType === 'roulette') {
      if (players.length === 0) {
        alert("Añade primero a alguien de la cuadrilla para que la ruleta pueda señalar.");
        inputHomePlayer.focus();
        return;
      }
      spinRoulette();
      switchScreen('screenRoulette');
    } else if (launchType === 'bomb') {
      switchScreen('screenBomb');
    }
  });
});

// LOGICA JUEGO DE CARTAS
function updateCardGame() {
  triggerHaptic();
  const phrase = getNextCardPhrase(activeCardGame, currentLevel);
  const levelLabels = { light: 'COSECHERO', fiesta: 'CRIANZA', hot: 'RESERVA 🔥' };

  if (activeCardGame === 'yoNunca') {
    cardCategoryBadge.innerText = `YO NUNCA • ${levelLabels[currentLevel]}`;
    cardPrefixText.innerText = '';
    cardMainText.innerText = phrase;
    cardRuleNote.innerText = 'Quien lo haya hecho, bebe un trago.';
  } else {
    cardCategoryBadge.innerText = `¿QUIÉN ES MÁS PROBABLE? • ${levelLabels[currentLevel]}`;
    cardPrefixText.innerText = '¿Quién es más probable que...';
    cardMainText.innerText = phrase;
    cardRuleNote.innerText = 'A la de tres, todos señalad a la vez.';
  }
}

// SELECTOR DE NIVELES (Cosechero / Crianza / Reserva)
document.querySelectorAll('.btn-vintage-level').forEach(btn => {
  btn.addEventListener('click', () => {
    triggerHaptic();
    document.querySelectorAll('.btn-vintage-level').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentLevel = btn.dataset.level;
    updateCardGame();
  });
});

// RULETA DE SAN MARTÍN
function spinRoulette() {
  triggerHaptic();
  if (players.length === 0) {
    chosenVictim.innerText = "¡NADIE!";
    chosenTask.innerText = "Añadid amigos a la cuadrilla para jugar este modo.";
    return;
  }
  const randomPerson = players[Math.floor(Math.random() * players.length)];
  const randomTask = DATABASE.roulettePenalties[Math.floor(Math.random() * DATABASE.roulettePenalties.length)];

  chosenVictim.innerText = randomPerson;
  chosenTask.innerText = randomTask;
}

// LA BARRICA EXPLOSIVA
function startBomb() {
  triggerHaptic();
  if (bombTimer) clearTimeout(bombTimer);

  barrelEmoji.innerText = '🪵';
  barrelEmoji.classList.add('shaking');
  const topic = DATABASE.bombTopics[Math.floor(Math.random() * DATABASE.bombTopics.length)];
  bombSubject.innerText = topic;
  bombFootnote.innerText = '¡Pasad el móvil rápido diciendo una palabra válida!';
  btnTriggerBomb.disabled = true;
  btnTriggerBomb.style.opacity = '0.5';

  const explosionDelay = Math.floor(Math.random() * 14000) + 10000;

  bombTimer = setTimeout(() => {
    barrelEmoji.classList.remove('shaking');
    barrelEmoji.innerText = '💥';
    bombSubject.innerText = "¡REVENTÓ LA BARRICA!";
    bombFootnote.innerText = "¡Quien tenga el móvil en la mano se bebe un trago entero!";
    btnTriggerBomb.disabled = false;
    btnTriggerBomb.style.opacity = '1';
    btnTriggerBomb.innerText = 'Prender Otra Mecha';
    if ('vibrate' in navigator) navigator.vibrate([200, 100, 200, 100, 400]);
  }, explosionDelay);
}

// EVENTOS DE BOTONES
btnNextCard.addEventListener('click', updateCardGame);
mainGameCard.addEventListener('click', updateCardGame);
btnSpin.addEventListener('click', spinRoulette);
btnTriggerBomb.addEventListener('click', startBomb);
brandHomeBtn.addEventListener('click', () => switchScreen('screenHome'));

// NAVEGACIÓN BARRA INFERIOR
document.querySelectorAll('.stone-item').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.target;
    if (btn.dataset.mode) {
      activeCardGame = btn.dataset.mode;
      updateCardGame();
    }
    switchScreen(target);
  });
});

// GESTIÓN DE PARTICIPANTES (LOCALSTORAGE)
function syncPlayers() {
  localStorage.setItem('leza_players', JSON.stringify(players));
  playerBadgeCount.innerText = players.length;
  homePlayerCounter.innerText = `${players.length} personas`;

  homeChipsContainer.innerHTML = '';
  modalChipsList.innerHTML = '';

  if (players.length === 0) {
    const emptyMsg = '<p style="color:#ab9b94;font-size:0.75rem;padding:6px 0;">No hay nadie apuntado aún.</p>';
    homeChipsContainer.innerHTML = emptyMsg;
    modalChipsList.innerHTML = emptyMsg;
    return;
  }

  players.forEach((name, idx) => {
    // Chip para Home
    const chipHome = document.createElement('span');
    chipHome.className = 'player-chip';
    chipHome.innerHTML = `<span>${name}</span><button onclick="removePlayer(${idx})">✕</button>`;
    homeChipsContainer.appendChild(chipHome);

    // Chip para Modal
    const chipModal = document.createElement('span');
    chipModal.className = 'player-chip';
    chipModal.innerHTML = `<span>${name}</span><button onclick="removePlayer(${idx})">✕</button>`;
    modalChipsList.appendChild(chipModal);
  });
}

window.removePlayer = function(index) {
  triggerHaptic();
  players.splice(index, 1);
  syncPlayers();
};

function addPlayerFromInput(inputElement) {
  const val = inputElement.value.trim();
  if (val) {
    players.push(val);
    inputElement.value = '';
    syncPlayers();
    triggerHaptic();
  }
}

formHomePlayer.addEventListener('submit', (e) => {
  e.preventDefault();
  addPlayerFromInput(inputHomePlayer);
});

formModalPlayer.addEventListener('submit', (e) => {
  e.preventDefault();
  addPlayerFromInput(inputModalPlayer);
});

btnOpenModal.addEventListener('click', () => {
  triggerHaptic();
  playersModal.style.display = 'flex';
});

btnCloseModal.addEventListener('click', () => {
  playersModal.style.display = 'none';
});

// INICIALIZACIÓN
window.addEventListener('DOMContentLoaded', () => {
  syncPlayers();
  updateCardGame();

  setTimeout(() => {
    splashScreen.style.opacity = '0';
    setTimeout(() => {
      splashScreen.style.visibility = 'hidden';
    }, 500);
  }, 1600);
});
