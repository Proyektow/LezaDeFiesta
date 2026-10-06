/* =========================================================
   #LezaDeFiesta - Lógica del Juego y Persistencia
   ========================================================= */

// BANCO DE DATOS
const DB = {
  yoNunca: {
    light: [
      "Yo nunca me he quedado dormido en el autobús o tren y me he pasado de parada.",
      "Yo nunca he fingido estar enfermo para librarme de un plan que me daba pereza.",
      "Yo nunca he mirado el móvil de otra persona a escondidas por encima del hombro.",
      "Yo nunca he dicho 'ya salgo' cuando ni siquiera me había cambiado de ropa.",
      "Yo nunca he roto algo en una casa ajena y me he quedado callado.",
      "Yo nunca he tropezado en la calle y me he puesto a correr disimulando.",
      "Yo nunca he olvidado el cumpleaños de un amigo muy cercano.",
      "Yo nunca he usado la ropa de otra persona sin pedir permiso.",
      "Yo nunca he cantado con cascos a todo volumen pensando que cantaba bien.",
      "Yo nunca he fingido hablar por teléfono para evitar saludar a alguien."
    ],
    fiesta: [
      "Yo nunca he perdido el móvil, las llaves o la cartera durante una noche de fiesta.",
      "Yo nunca he dicho 'no vuelvo a beber' y he bebido esa misma semana.",
      "Yo nunca he terminado de after en el piso de un completo desconocido.",
      "Yo nunca he mandado un audio de fiesta del que me he arrepentido al despertar.",
      "Yo nunca he hecho la bomba de humo (irme sin despedirme de nadie).",
      "Yo nunca he cuidado toda la noche a un amigo que iba destruido.",
      "Yo nunca he perdido una chaqueta de fiesta y nunca más ha aparecido.",
      "Yo nunca he mezclado tres o más bebidas alcohólicas distintas en un solo vaso.",
      "Yo nunca he borrado historias de Instagram o TikTok con resaca moral.",
      "Yo nunca he desayunado kebab o churros sin haber dormido nada."
    ],
    hot: [
      "Yo nunca he besado al ex o al crush de un amigo/a.",
      "Yo nunca he tenido un sueño subido de tono con alguien de esta sala.",
      "Yo nunca he enviado o recibido una foto sugerente sin ropa.",
      "Yo nunca he tenido un lío con alguien del trabajo o de clase.",
      "Yo nunca he practicado sexting en plena madrugada de fiesta.",
      "Yo nunca he sido infiel ni ayudado a que alguien lo fuera.",
      "Yo nunca me he liado con dos personas distintas en la misma noche.",
      "Yo nunca he tenido una cita tan mala que me inventé una emergencia para fugarme.",
      "Yo nunca me he liado con alguien por puro despecho.",
      "Yo nunca he probado nada con alguien de mi mismo sexo."
    ]
  },
  probable: {
    light: [
      "sea la persona con más horas de pantalla al día del grupo?",
      "se gaste todo el dinero recién cobrado en caprichos absurdos?",
      "llegue media hora tarde incluso a su propia boda?",
      "se ría en un momento de silencio sepulcral e incómodo?",
      "caiga en una estafa ridícula por internet?",
      "se quede encerrado en un baño por no saber hacia dónde gira el cerrojo?",
      "cancele los planes un domingo por pura pereza extrema?"
    ],
    fiesta: [
      "pierda el móvil en la primera hora tras entrar al local?",
      "proponga ir de after a las 6 de la mañana cuando todos están muertos?",
      "se haga mejor amigo del camarero o del portero en 5 minutos?",
      "acabe durmiendo en un banco de la calle sin enterarse de nada?",
      "desaparezca de la discoteca sin decir una sola palabra a nadie?",
      "se gaste la mitad de la cuenta invitando a rondas a desconocidos?",
      "se tropiece por intentar hacer un paso de baile prohibido?"
    ],
    hot: [
      "acabe liándose con alguien en los primeros 20 minutos de salir?",
      "le envíe un mensaje a su ex a las cuatro de la mañana?",
      "tenga una cuenta secreta para cotillear perfiles ajenos?",
      "se líe con el hermano/a o primo/a de un amigo?",
      "tenga las historias de amor más turbias e inexplicables?",
      "se vaya de la fiesta con alguien que acaba de conocer hace 10 minutos?"
    ]
  },
  rouletteTasks: [
    "Tiene 30 segundos para enseñar la última foto de su galería o bebe 2 tragos.",
    "Elige a 2 personas de la sala para que beban con ella/él.",
    "Tiene que mandar un audio a cualquier contacto diciendo que lo quiere mucho o beber 3 tragos.",
    "Intercambia un objeto o prenda con la persona de su derecha durante 2 rondas.",
    "Todos en la mesa le hacen una pregunta incómoda. Si no responde con la verdad, bebe un trago largo.",
    "Reparte 3 tragos entre los participantes como prefiera.",
    "Se queda en silencio absoluto durante las próximas 3 tarjetas; si habla, bebe un trago."
  ],
  bombTopics: [
    "Marcas de alcohol o cócteles",
    "Excusas típicas para no salir de fiesta",
    "Ciudades de España",
    "Cosas que encuentras en un cuarto de baño",
    "Canciones míticas de reguetón o pop de fiesta",
    "Insultos graciosos sin repetir",
    "Razones por las que te echarían de una discoteca",
    "Comidas de resaca"
  ]
};

// ESTADO GLOBAL
let currentView = 'yoNunca'; // 'yoNunca' | 'probable' | 'roulette' | 'bomb'
let currentLevel = 'fiesta'; // 'light' | 'fiesta' | 'hot'

// Cargar jugadores desde LocalStorage o predeterminados
let players = JSON.parse(localStorage.getItem('party_players')) || ['Alex', 'Laura', 'Dani'];

// Historial y Mazos barajados anti-repetición
let activeDecks = {};

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function getNextCard(type, level) {
  const key = `${type}_${level}`;
  if (!activeDecks[key] || activeDecks[key].length === 0) {
    activeDecks[key] = shuffle(DB[type][level]);
  }
  return activeDecks[key].pop();
}

// Vibración háptica en móviles
function triggerHaptic() {
  if ('vibrate' in navigator) {
    navigator.vibrate(40);
  }
}

// ELEMENTOS DOM
const splashScreen = document.getElementById('splash-screen');
const playerBadgeCount = document.getElementById('playerBadgeCount');
const intensityBar = document.getElementById('intensityBar');

// Vistas
const viewCards = document.getElementById('viewCards');
const viewRoulette = document.getElementById('viewRoulette');
const viewBomb = document.getElementById('viewBomb');

// Componentes de Cartas
const mainCard = document.getElementById('mainCard');
const cardBadge = document.getElementById('cardBadge');
const cardPrefix = document.getElementById('cardPrefix');
const cardText = document.getElementById('cardText');
const cardFooter = document.getElementById('cardFooter');
const btnNextCard = document.getElementById('btnNextCard');

// Ruleta
const chosenPlayerName = document.getElementById('chosenPlayerName');
const rouletteTask = document.getElementById('rouletteTask');
const btnSpinRoulette = document.getElementById('btnSpinRoulette');

// Bomba
const bombVisual = document.getElementById('bombVisual');
const bombTopic = document.getElementById('bombTopic');
const bombStatus = document.getElementById('bombStatus');
const btnStartBomb = document.getElementById('btnStartBomb');
let bombTimer = null;

// Modal Jugadores
const playerModal = document.getElementById('playerModal');
const btnOpenModal = document.getElementById('btnOpenModal');
const btnCloseModal = document.getElementById('btnCloseModal');
const formAddPlayer = document.getElementById('formAddPlayer');
const inputPlayerName = document.getElementById('inputPlayerName');
const playersContainer = document.getElementById('playersContainer');

// RENDERIZADO DE CARTAS
function updateCardContent() {
  triggerHaptic();
  const phrase = getNextCard(currentView, currentLevel);
  const themeColors = {
    light: '#06b6d4',
    fiesta: '#a855f7',
    hot: '#ec4899'
  };

  mainCard.style.borderColor = themeColors[currentLevel];
  cardBadge.style.color = themeColors[currentLevel];

  if (currentView === 'yoNunca') {
    cardBadge.innerText = `🍺 YO NUNCA • ${currentLevel.toUpperCase()}`;
    cardPrefix.innerText = '';
    cardText.innerText = phrase;
    cardFooter.innerText = '🍻 Bebe quien lo haya hecho';
  } else {
    cardBadge.innerText = `🎯 PROBABLE • ${currentLevel.toUpperCase()}`;
    cardPrefix.innerText = '¿Quién es más probable que...';
    cardText.innerText = phrase;
    cardFooter.innerText = '👉 A la de 3, todos señalad a la vez';
  }
}

// RULETA / RETO EXPRÉS
function spinRoulette() {
  triggerHaptic();
  if (players.length === 0) {
    chosenPlayerName.innerText = "¡NADIE!";
    rouletteTask.innerText = "Añade jugadores pulsando el botón superior.";
    return;
  }
  const randomPlayer = players[Math.floor(Math.random() * players.length)];
  const randomTask = DB.rouletteTasks[Math.floor(Math.random() * DB.rouletteTasks.length)];

  chosenPlayerName.innerText = `👉 ${randomPlayer}`;
  rouletteTask.innerText = randomTask;
}

// MINIJUEGO LA BOMBA
function startBombGame() {
  triggerHaptic();
  if (bombTimer) clearTimeout(bombTimer);

  bombVisual.innerText = '💣';
  bombVisual.classList.add('ticking');
  const topic = DB.bombTopics[Math.floor(Math.random() * DB.bombTopics.length)];
  bombTopic.innerText = topic;
  bombStatus.innerText = '¡Corred! Pasad el móvil diciendo uno por turno.';
  btnStartBomb.disabled = true;
  btnStartBomb.style.opacity = '0.5';

  // Tiempo sorpresa entre 10 y 25 segundos
  const duration = Math.floor(Math.random() * 15000) + 10000;

  bombTimer = setTimeout(() => {
    bombVisual.classList.remove('ticking');
    bombVisual.innerText = '💥';
    bombTopic.innerText = "¡BOOOOM!";
    bombStatus.innerText = "¡El que tenga el móvil en la mano se bebe un trago entero!";
    btnStartBomb.disabled = false;
    btnStartBomb.style.opacity = '1';
    btnStartBomb.innerText = 'Reiniciar Bomba';
    if ('vibrate' in navigator) navigator.vibrate([200, 100, 200, 100, 400]);
  }, duration);
}

// NAVEGACIÓN INFERIOR
document.querySelectorAll('.nav-item').forEach(button => {
  button.addEventListener('click', () => {
    triggerHaptic();
    document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
    button.classList.add('active');

    currentView = button.dataset.view;

    // Cambiar visibilidad de secciones
    viewCards.classList.remove('active');
    viewRoulette.classList.remove('active');
    viewBomb.classList.remove('active');

    if (currentView === 'yoNunca' || currentView === 'probable') {
      viewCards.classList.add('active');
      intensityBar.style.display = 'flex';
      updateCardContent();
    } else if (currentView === 'roulette') {
      viewRoulette.classList.add('active');
      intensityBar.style.display = 'none';
    } else if (currentView === 'bomb') {
      viewBomb.classList.add('active');
      intensityBar.style.display = 'none';
    }
  });
});

// SELECTORES DE INTENSIDAD
document.querySelectorAll('.btn-level').forEach(btn => {
  btn.addEventListener('click', () => {
    triggerHaptic();
    document.querySelectorAll('.btn-level').forEach(b => {
      b.className = 'btn-level';
    });
    currentLevel = btn.dataset.level;
    btn.classList.add(`active-${currentLevel}`);
    updateCardContent();
  });
});

// EVENTOS DE BOTONES
btnNextCard.addEventListener('click', updateCardContent);
mainCard.addEventListener('click', updateCardContent);
btnSpinRoulette.addEventListener('click', spinRoulette);
btnStartBomb.addEventListener('click', startBombGame);

// GESTIÓN DE PARTICIPANTES (LOCALSTORAGE)
function saveAndRenderPlayers() {
  localStorage.setItem('party_players', JSON.stringify(players));
  playerBadgeCount.innerText = players.length;
  playersContainer.innerHTML = '';

  if (players.length === 0) {
    playersContainer.innerHTML = '<p style="text-align:center;color:#64748b;font-size:0.85rem;padding:12px;">Sin participantes añadidos.</p>';
    return;
  }

  players.forEach((name, index) => {
    const row = document.createElement('div');
    row.className = 'player-item-row';
    row.innerHTML = `
      <span>${name}</span>
      <button class="btn-remove-player" onclick="removePlayer(${index})">✕</button>
    `;
    playersContainer.appendChild(row);
  });
}

window.removePlayer = function(index) {
  triggerHaptic();
  players.splice(index, 1);
  saveAndRenderPlayers();
};

formAddPlayer.addEventListener('submit', (e) => {
  e.preventDefault();
  const val = inputPlayerName.value.trim();
  if (val) {
    players.push(val);
    inputPlayerName.value = '';
    saveAndRenderPlayers();
    triggerHaptic();
  }
});

btnOpenModal.addEventListener('click', () => {
  triggerHaptic();
  playerModal.style.display = 'flex';
});

btnCloseModal.addEventListener('click', () => {
  playerModal.style.display = 'none';
});

// INICIALIZACIÓN
window.addEventListener('DOMContentLoaded', () => {
  saveAndRenderPlayers();
  updateCardContent();

  setTimeout(() => {
    splashScreen.style.opacity = '0';
    setTimeout(() => {
      splashScreen.style.visibility = 'hidden';
    }, 500);
  }, 1700);
});
