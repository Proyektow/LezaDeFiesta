/* ==========================================================
   #LezaDeFiesta - Lógica del Juego y Selector de Temas
   ========================================================== */

const DATABASE = {
  yoNunca: {
    light: [
      "Yo nunca me he quedado dormido en el transporte público y me he pasado de parada.",
      "Yo nunca he fingido estar enfermo para librarme de un plan que me daba pereza.",
      "Yo nunca he mirado el móvil ajeno por encima del hombro disimulando.",
      "Yo nunca he dicho 'ya salgo' cuando ni siquiera me había vestido.",
      "Yo nunca he roto algo en una fiesta o casa ajena y me he quedado callado.",
      "Yo nunca he tropezado en plena calle y me he puesto a correr fingiendo prisa.",
      "Yo nunca he olvidado el cumpleaños de un amigo cercano.",
      "Yo nunca he usado la ropa de otra persona sin pedirle permiso antes.",
      "Yo nunca he cantado con auriculares a todo volumen pensando que sonaba bien.",
      "Yo nunca he fingido hablar por teléfono para evitar saludar a alguien en la calle."
    ],
    fiesta: [
      "Yo nunca he perdido el móvil, las llaves o la cartera durante una noche de fiesta.",
      "Yo nunca he prometido 'no vuelvo a beber' y he bebido esa misma semana.",
      "Yo nunca he terminado de after en la casa o bajera de completos desconocidos.",
      "Yo nunca he mandado un audio de fiesta del que me he arrepentido al despertar.",
      "Yo nunca he hecho la bomba de humo (irme sin despedirme de nadie).",
      "Yo nunca he tenido que cuidar toda la noche a un amigo que iba destruido.",
      "Yo nunca he perdido una chaqueta de fiesta y nunca más ha aparecido.",
      "Yo nunca he mezclado tres o más bebidas alcohólicas diferentes en el mismo vaso.",
      "Yo nunca he borrado historias de redes sociales con auténtica resaca moral.",
      "Yo nunca he terminado desayunando churros o kebab sin haber dormido nada."
    ],
    hot: [
      "Yo nunca he besado al ex o al crush de un amigo o amiga.",
      "Yo nunca he tenido un sueño subido de tono con alguien de esta sala.",
      "Yo nunca he enviado o recibido una foto sugerente sin ropa.",
      "Yo nunca he tenido una aventura con un compañero de trabajo o de clase.",
      "Yo nunca he practicado sexting en plena madrugada de fiesta.",
      "Yo nunca he sido infiel ni he ayudado a que alguien lo fuera.",
      "Yo nunca me he liado con dos o más personas distintas en una misma noche.",
      "Yo nunca he tenido una cita tan mala que me inventé una emergencia para huir.",
      "Yo nunca me he liado con alguien única y exclusivamente por despecho.",
      "Yo nunca he probado nada con alguien de mi mismo sexo."
    ]
  },
  probable: {
    light: [
      "sea la persona con más horas de pantalla y adicción al móvil del grupo?",
      "se gaste todo el dinero nada más cobrar en caprichos inútiles?",
      "llegue media hora tarde incluso a su propia fiesta de cumpleaños?",
      "se ría en un momento donde reine el silencio absoluto e incómodo?",
      "caiga en una estafa fácil de internet por inocente?",
      "se quede encerrado en un baño por no saber hacia dónde gira el cerrojo?",
      "cancele los planes a última hora por pura pereza extrema?"
    ],
    fiesta: [
      "pierda el móvil en los primeros 30 minutos de entrar al local?",
      "proponga ir de after a las 6 de la mañana cuando todos están muertos?",
      "se haga íntimo amigo del camarero o del relaciones públicas en 5 minutos?",
      "acabe durmiendo en un banco de la calle sin enterarse de la película?",
      "desaparezca de la discoteca sin decir una sola palabra a nadie?",
      "se gaste medio sueldo invitando a rondas de chupitos a desconocidos?",
      "se tropiece intentando hacer un paso de baile motivado?"
    ],
    hot: [
      "acabe liándose con alguien en los primeros 20 minutos de salir?",
      "le envíe un mensaje a su ex a las cuatro de la madrugada con copas encima?",
      "tenga una cuenta secundaria secreta para cotillear perfiles ajenos?",
      "se líe con el hermano/a o primo/a de un amigo si tuviera ocasión?",
      "protagonice las historias de amor más caóticas y de película?",
      "se vaya de la fiesta con alguien que acaba de conocer hace 10 minutos?"
    ]
  },
  rouletteTasks: [
    "Tiene 30 segundos para enseñar la última foto de su galería o bebe 2 tragos.",
    "Elige a 2 personas de la mesa para que beban con ella/él.",
    "Tiene que mandar un audio a cualquier contacto diciendo que lo quiere mucho o beber 3 tragos.",
    "Intercambia un objeto o prenda con la persona de su derecha durante 2 rondas.",
    "Todos en la mesa le hacen una pregunta incómoda. Si no responde con la verdad, bebe un trago.",
    "Reparte 3 tragos entre los participantes como mejor prefiera.",
    "Se queda en silencio absoluto durante las próximas 3 tarjetas; si habla, bebe un trago."
  ],
  bombTopics: [
    "Marcas de bebidas o cócteles",
    "Excusas típicas para no salir de fiesta",
    "Ciudades del mundo que te gustaría visitar",
    "Cosas que encuentras en una noche de fiesta",
    "Canciones míticas de reguetón o pop festivo",
    "Insultos graciosos sin repetir",
    "Razones por las que te echarían de un local",
    "Comidas sagradas para pasar la resaca"
  ]
};

// ESTADO GLOBAL
let currentScreen = 'screenHome';
let activeCardGame = 'yoNunca'; // 'yoNunca' | 'probable'
let currentLevel = 'fiesta';     // 'light' | 'fiesta' | 'hot'

// Cargar participantes y tema de color
let players = JSON.parse(localStorage.getItem('leza_players')) || ['Alex', 'Laura', 'Dani'];
let savedTheme = localStorage.getItem('leza_theme') || 'purple';

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
const bombEmoji = document.getElementById('bombEmoji');
const bombSubject = document.getElementById('bombSubject');
const bombFootnote = document.getElementById('bombFootnote');
const btnTriggerBomb = document.getElementById('btnTriggerBomb');
let bombTimer = null;

// Modales y formularios
const playersModal = document.getElementById('playersModal');
const btnOpenModal = document.getElementById('btnOpenModal');
const btnCloseModal = document.getElementById('btnCloseModal');
const formHomePlayer = document.getElementById('formHomePlayer');
const inputHomePlayer = document.getElementById('inputHomePlayer');
const homeChipsContainer = document.getElementById('homeChipsContainer');
const formModalPlayer = document.getElementById('formModalPlayer');
const inputModalPlayer = document.getElementById('inputModalPlayer');
const modalChipsList = document.getElementById('modalChipsList');

// GESTOR DE TEMAS DE COLOR
function applyTheme(themeName) {
  document.body.setAttribute('data-theme', themeName);
  localStorage.setItem('leza_theme', themeName);

  document.querySelectorAll('.theme-dot').forEach(dot => {
    dot.classList.toggle('active', dot.dataset.color === themeName);
  });
}

document.querySelectorAll('.theme-dot').forEach(dot => {
  dot.addEventListener('click', () => {
    triggerHaptic();
    applyTheme(dot.dataset.color);
  });
});

// NAVEGACIÓN ENTRE PANTALLAS
function switchScreen(targetScreenId) {
  triggerHaptic();
  allScreens.forEach(s => s.classList.remove('active'));
  document.getElementById(targetScreenId).classList.add('active');
  currentScreen = targetScreenId;

  document.querySelectorAll('.nav-button').forEach(item => {
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

// LANZADOR DESDE EL INICIO
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
        alert("Añade primero a alguien para que la ruleta pueda elegir una víctima.");
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
  const levelLabels = { light: 'LIGHT', fiesta: 'FIESTA', hot: 'HOT 🔥' };

  if (activeCardGame === 'yoNunca') {
    cardCategoryBadge.innerText = `YO NUNCA • ${levelLabels[currentLevel]}`;
    cardPrefixText.innerText = '';
    cardMainText.innerText = phrase;
    cardRuleNote.innerText = 'Quien lo haya hecho, bebe un trago.';
  } else {
    cardCategoryBadge.innerText = `PROBABLE • ${levelLabels[currentLevel]}`;
    cardPrefixText.innerText = '¿Quién es más probable que...';
    cardMainText.innerText = phrase;
    cardRuleNote.innerText = 'A la de tres, todos señalan al mismo tiempo.';
  }
}

// SELECTOR DE NIVELES (Light / Fiesta / Hot)
document.querySelectorAll('.btn-level').forEach(btn => {
  btn.addEventListener('click', () => {
    triggerHaptic();
    document.querySelectorAll('.btn-level').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentLevel = btn.dataset.level;
    updateCardGame();
  });
});

// RULETA
function spinRoulette() {
  triggerHaptic();
  if (players.length === 0) {
    chosenVictim.innerText = "¡NADIE!";
    chosenTask.innerText = "Añade jugadores para activar la ruleta.";
    return;
  }
  const randomPerson = players[Math.floor(Math.random() * players.length)];
  const randomTask = DATABASE.rouletteTasks[Math.floor(Math.random() * DATABASE.rouletteTasks.length)];

  chosenVictim.innerText = randomPerson;
  chosenTask.innerText = randomTask;
}

// LA BOMBA
function startBomb() {
  triggerHaptic();
  if (bombTimer) clearTimeout(bombTimer);

  bombEmoji.innerText = '💣';
  bombEmoji.classList.add('shaking');
  const topic = DATABASE.bombTopics[Math.floor(Math.random() * DATABASE.bombTopics.length)];
  bombSubject.innerText = topic;
  bombFootnote.innerText = '¡Pasad el móvil rápido diciendo una palabra válida!';
  btnTriggerBomb.disabled = true;
  btnTriggerBomb.style.opacity = '0.5';

  const explosionDelay = Math.floor(Math.random() * 14000) + 10000;

  bombTimer = setTimeout(() => {
    bombEmoji.classList.remove('shaking');
    bombEmoji.innerText = '💥';
    bombSubject.innerText = "¡BOOOOOM!";
    bombFootnote.innerText = "¡El que tenga el móvil en la mano se bebe un trago entero!";
    btnTriggerBomb.disabled = false;
    btnTriggerBomb.style.opacity = '1';
    btnTriggerBomb.innerText = 'Activar Otra Bomba';
    if ('vibrate' in navigator) navigator.vibrate([200, 100, 200, 100, 400]);
  }, explosionDelay);
}

// BOTONES DE ACCIÓN
btnNextCard.addEventListener('click', updateCardGame);
mainGameCard.addEventListener('click', updateCardGame);
btnSpin.addEventListener('click', spinRoulette);
btnTriggerBomb.addEventListener('click', startBomb);
brandHomeBtn.addEventListener('click', () => switchScreen('screenHome'));

// NAVEGACIÓN INFERIOR
document.querySelectorAll('.nav-button').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.target;
    if (btn.dataset.mode) {
      activeCardGame = btn.dataset.mode;
      updateCardGame();
    }
    switchScreen(target);
  });
});

// PARTICIPANTES
function syncPlayers() {
  localStorage.setItem('leza_players', JSON.stringify(players));
  playerBadgeCount.innerText = players.length;
  homePlayerCounter.innerText = `${players.length} personas`;

  homeChipsContainer.innerHTML = '';
  modalChipsList.innerHTML = '';

  if (players.length === 0) {
    const emptyMsg = '<p style="color:#8e97af;font-size:0.75rem;padding:6px 0;">No hay nadie añadido aún.</p>';
    homeChipsContainer.innerHTML = emptyMsg;
    modalChipsList.innerHTML = emptyMsg;
    return;
  }

  players.forEach((name, idx) => {
    const chipHome = document.createElement('span');
    chipHome.className = 'player-chip';
    chipHome.innerHTML = `<span>${name}</span><button onclick="removePlayer(${idx})">✕</button>`;
    homeChipsContainer.appendChild(chipHome);

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
  applyTheme(savedTheme);
  syncPlayers();
  updateCardGame();

  setTimeout(() => {
    splashScreen.style.opacity = '0';
    setTimeout(() => {
      splashScreen.style.visibility = 'hidden';
    }, 500);
  }, 1500);
});
