const adverbs = [
  {
    term: "Always",
    pronunciation: "(ól-uêiz)",
    example: "Are you always this busy?",
    translation: "Você está sempre tão ocupado assim?"
  },
  {
    term: "Usually",
    pronunciation: "(iú-jua-li)",
    example: "Do you usually have breakfast at home?",
    translation: "Você geralmente toma café da manhã em casa?"
  },
  {
    term: "Normally",
    pronunciation: "(nór-ma-li)",
    example: "I normally finish work at 6",
    translation: "Eu normalmente termino o trabalho às 6"
  },
  {
    term: "Generally",
    pronunciation: "(djé-na-ra-li)",
    example: "We generally eat dinner together",
    translation: "Geralmente, nós jantamos juntos"
  },
  {
    term: "Often",
    pronunciation: "(ó-fen / óf-ten)",
    example: "Do you often use English at work?",
    translation: "Você usa inglês com frequência no trabalho?"
  },
  {
    term: "Frequently",
    pronunciation: "(frí-kuent-li)",
    example: "This bus is frequently late",
    translation: "Este ônibus se atrasa com frequência"
  },
  {
    term: "Sometimes",
    pronunciation: "(sâm-taimz)",
    example: "I sometimes forget where I put my keys",
    translation: "Às vezes eu esqueço onde coloco minhas chaves"
  },
  {
    term: "Occasionally",
    pronunciation: "(a-kêi-ja-na-li)",
    example: "We occasionally order food on weekends",
    translation: "Ocasionalmente, nós pedimos comida nos fins de semana"
  },
  {
    term: "Seldom",
    pronunciation: "(sél-dam)",
    example: "I seldom watch TV during the week",
    translation: "Eu raramente assisto TV durante a semana"
  },
  {
    term: "Hardly ever",
    pronunciation: "(hárd-li é-ver)",
    example: "She hardly ever uses cash",
    translation: "Ela quase nunca usa dinheiro"
  },
  {
    term: "Rarely",
    pronunciation: "(rér-li)",
    example: "I rarely go to bed late",
    translation: "Eu raramente vou dormir tarde"
  },
  {
    term: "Never",
    pronunciation: "(né-ver)",
    example: "We never share our passwords",
    translation: "Nós nunca compartilhamos nossas senhas"
  }
];

const expressions = [
  {
    term: "Every day",
    pronunciation: "(év-ri dêi)",
    alternate: "Almost every day",
    alternatePronunciation: "(ól-moust év-ri dêi)",
    example: "I check my messages every day",
    translation: "Eu verifico minhas mensagens todos os dias"
  },
  {
    term: "Every week",
    pronunciation: "(év-ri uík)",
    alternate: "Almost every week",
    alternatePronunciation: "(ól-moust év-ri uík)",
    example: "We have an English class every week",
    translation: "Nós temos uma aula de inglês toda semana"
  },
  {
    term: "Every month",
    pronunciation: "(év-ri mânf)",
    alternate: "Almost every month",
    alternatePronunciation: "(ól-moust év-ri mânf)",
    example: "She visits her family every month",
    translation: "Ela visita a família todos os meses"
  },
  {
    term: "Every year",
    pronunciation: "(év-ri iír)",
    alternate: "Almost every year",
    alternatePronunciation: "(ól-moust év-ri iír)",
    example: "Do you travel with your family every year?",
    translation: "Você viaja com a sua família todos os anos?"
  },
  {
    term: "All the time",
    pronunciation: "(ól dhâ táim)",
    example: "I use my phone all the time",
    translation: "Eu uso meu celular o tempo todo"
  },
  {
    term: "Every other day",
    pronunciation: "(év-ri â-dhâr dêi)",
    example: "He works from home every other day",
    translation: "Ele trabalha de casa um dia sim, um dia não"
  }
];

const quantities = [
  { id: "once", label: "Once", pronunciation: "uâns" },
  { id: "twice", label: "Twice", pronunciation: "tuáis" },
  { id: "three", label: "Three times", pronunciation: "thrí táimz" },
  { id: "four", label: "Four times", pronunciation: "fór táimz" },
  { id: "five", label: "Five times", pronunciation: "fáiv táimz" },
  { id: "ten", label: "Ten times", pronunciation: "tén táimz" }
];

const periods = [
  { id: "day", label: "Day", phrase: "a day", pronunciation: "a dêi" },
  { id: "week", label: "Week", phrase: "a week", pronunciation: "a uík" },
  { id: "month", label: "Month", phrase: "a month", pronunciation: "a mânf" },
  { id: "year", label: "Year", phrase: "a year", pronunciation: "a iír" }
];

const combinationExamples = {
  "once-day": ["I check my email once a day", "Eu verifico meu e-mail uma vez por dia"],
  "once-week": ["We have an English class once a week", "Nós temos uma aula de inglês uma vez por semana"],
  "once-month": ["I visit my family once a month", "Eu visito minha família uma vez por mês"],
  "once-year": ["We travel together once a year", "Nós viajamos juntos uma vez por ano"],
  "twice-day": ["I brush my teeth twice a day", "Eu escovo os dentes duas vezes por dia"],
  "twice-week": ["She goes to the gym twice a week", "Ela vai à academia duas vezes por semana"],
  "twice-month": ["We eat at that restaurant twice a month", "Nós comemos naquele restaurante duas vezes por mês"],
  "twice-year": ["I go to the dentist twice a year", "Eu vou ao dentista duas vezes por ano"],
  "three-day": ["He takes the bus three times a day", "Ele pega o ônibus três vezes por dia"],
  "three-week": ["I cook dinner three times a week", "Eu preparo o jantar três vezes por semana"],
  "three-month": ["We have team meetings three times a month", "Nós temos reuniões de equipe três vezes por mês"],
  "three-year": ["They visit us three times a year", "Eles nos visitam três vezes por ano"],
  "four-day": ["I check my messages four times a day", "Eu verifico minhas mensagens quatro vezes por dia"],
  "four-week": ["She studies English four times a week", "Ela estuda inglês quatro vezes por semana"],
  "four-month": ["We go out four times a month", "Nós saímos quatro vezes por mês"],
  "four-year": ["They travel for work four times a year", "Eles viajam a trabalho quatro vezes por ano"],
  "five-day": ["The baby eats five times a day", "O bebê come cinco vezes por dia"],
  "five-week": ["He works from home five times a week", "Ele trabalha de casa cinco vezes por semana"],
  "five-month": ["I call my grandmother five times a month", "Eu ligo para a minha avó cinco vezes por mês"],
  "five-year": ["We visit that city five times a year", "Nós visitamos aquela cidade cinco vezes por ano"],
  "ten-day": ["I check my phone ten times a day", "Eu verifico meu celular dez vezes por dia"],
  "ten-week": ["I take the bus ten times a week", "Eu pego o ônibus dez vezes por semana"],
  "ten-month": ["We order food ten times a month", "Nós pedimos comida dez vezes por mês"],
  "ten-year": ["They fly to São Paulo ten times a year", "Eles viajam de avião para São Paulo dez vezes por ano"]
};

const adverbsList = document.querySelector("#adverbs-list");
const expressionsList = document.querySelector("#expressions-list");
const quantityOptions = document.querySelector("#quantity-options");
const periodOptions = document.querySelector("#period-options");
const combinationPhrase = document.querySelector("#combination-phrase");
const combinationPronunciation = document.querySelector("#combination-pronunciation");
const combinationExample = document.querySelector("#combination-example");
const combinationTranslation = document.querySelector("#combination-translation");
const combinationAudio = document.querySelector("#combination-audio");
const combinationExampleAudio = document.querySelector("#combination-example-audio");
const combinationTranslationButton = document.querySelector("#combination-translation-button");
const audioStatus = document.querySelector("#audio-status");

let selectedQuantity = quantities[0];
let selectedPeriod = periods[1];
let activeSpeechButton = null;
let statusTimer = null;

function createAudioButton(label, icon, speech, kind) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `audio-button ${kind === "word" ? "word-audio" : "example-audio"}`;
  button.dataset.speak = speech;
  button.dataset.speechKind = kind;
  button.setAttribute("aria-label", `Ouvir ${label.toLowerCase()}: ${speech}`);

  const iconSpan = document.createElement("span");
  iconSpan.setAttribute("aria-hidden", "true");
  iconSpan.textContent = icon;
  button.append(iconSpan, ` ${label}`);
  return button;
}

function emphasizeTerm(sentence, term) {
  const container = document.createElement("p");
  const sentenceLower = sentence.toLocaleLowerCase("en-US");
  const termLower = term.toLocaleLowerCase("en-US");
  const position = sentenceLower.indexOf(termLower);

  if (position === -1) {
    container.textContent = sentence;
    return container;
  }

  container.append(document.createTextNode(sentence.slice(0, position)));
  const strong = document.createElement("strong");
  strong.textContent = sentence.slice(position, position + term.length);
  container.append(strong, document.createTextNode(sentence.slice(position + term.length)));
  return container;
}

function createVocabularyRow(item, index, type) {
  const row = document.createElement("article");
  row.className = "vocab-row";

  const number = document.createElement("div");
  number.className = "row-number";
  number.textContent = String(index + 1).padStart(2, "0");

  const termBlock = document.createElement("div");
  termBlock.className = "term-block";
  const term = document.createElement("h3");
  term.className = "term";
  term.textContent = item.term;
  termBlock.append(term);

  if (item.alternate) {
    const alternate = document.createElement("span");
    alternate.className = "alternate-term";
    alternate.textContent = item.alternate;
    termBlock.append(alternate);
  }

  const pronunciation = document.createElement("div");
  pronunciation.className = "pronunciation-block";
  pronunciation.textContent = item.pronunciation;
  if (item.alternatePronunciation) {
    const alternatePronunciation = document.createElement("span");
    alternatePronunciation.className = "alternate-pronunciation";
    alternatePronunciation.textContent = item.alternatePronunciation;
    pronunciation.append(alternatePronunciation);
  }

  const audioActions = document.createElement("div");
  audioActions.className = "audio-actions";
  audioActions.append(
    createAudioButton(type === "adverb" ? "Palavra" : "Expressão", "🔊", item.term, "word"),
    createAudioButton("Exemplo", "🎧", item.example, "example")
  );

  if (item.alternate) {
    const alternateAudio = createAudioButton("Variação", "🔉", item.alternate, "word");
    alternateAudio.classList.add("alternate-audio");
    audioActions.append(alternateAudio);
  }

  const sentence = document.createElement("div");
  sentence.className = "sentence-block";
  sentence.append(emphasizeTerm(item.example, item.term));

  const translationArea = document.createElement("div");
  translationArea.className = "translation-area";
  const translationButton = document.createElement("button");
  translationButton.type = "button";
  translationButton.className = "translation-button";
  translationButton.textContent = "Mostrar tradução";
  translationButton.setAttribute("aria-expanded", "false");
  const translation = document.createElement("p");
  translation.className = "translation-text";
  translation.textContent = item.translation;
  translation.hidden = true;
  translationArea.append(translationButton, translation);

  row.append(number, termBlock, pronunciation, audioActions, sentence, translationArea);
  return row;
}

function renderVocabulary() {
  const adverbFragment = document.createDocumentFragment();
  adverbs.forEach((item, index) => adverbFragment.append(createVocabularyRow(item, index, "adverb")));
  adverbsList.append(adverbFragment);

  const expressionFragment = document.createDocumentFragment();
  expressions.forEach((item, index) => expressionFragment.append(createVocabularyRow(item, index, "expression")));
  expressionsList.append(expressionFragment);
}

function renderChoiceButtons() {
  quantities.forEach((quantity) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "choice-button";
    button.dataset.quantity = quantity.id;
    button.textContent = quantity.label;
    button.setAttribute("aria-pressed", String(quantity.id === selectedQuantity.id));
    if (quantity.id === selectedQuantity.id) button.classList.add("is-selected");
    quantityOptions.append(button);
  });

  periods.forEach((period) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "choice-button";
    button.dataset.period = period.id;
    button.textContent = period.label;
    button.setAttribute("aria-pressed", String(period.id === selectedPeriod.id));
    if (period.id === selectedPeriod.id) button.classList.add("is-selected");
    periodOptions.append(button);
  });
}

function updateSelectionState(container, selectedId, attribute) {
  container.querySelectorAll(".choice-button").forEach((button) => {
    const isSelected = button.dataset[attribute] === selectedId;
    button.classList.toggle("is-selected", isSelected);
    button.setAttribute("aria-pressed", String(isSelected));
  });
}

function updateCombination() {
  const phrase = `${selectedQuantity.label} ${selectedPeriod.phrase.toLowerCase()}`;
  const key = `${selectedQuantity.id}-${selectedPeriod.id}`;
  const [example, translation] = combinationExamples[key];

  combinationPhrase.textContent = phrase;
  combinationPronunciation.textContent = `(${selectedQuantity.pronunciation} ${selectedPeriod.pronunciation})`;
  combinationExample.textContent = example;
  combinationTranslation.textContent = translation;
  combinationTranslation.hidden = true;
  combinationTranslationButton.textContent = "Mostrar tradução";
  combinationTranslationButton.setAttribute("aria-expanded", "false");
  combinationAudio.dataset.speak = phrase;
  combinationAudio.dataset.speechKind = "word";
  combinationExampleAudio.dataset.speak = example;
  combinationExampleAudio.dataset.speechKind = "example";
}

function getPreferredVoice() {
  const voices = window.speechSynthesis.getVoices();
  const priorities = [
    "Microsoft Aria Online (Natural) - English (United States)",
    "Microsoft Jenny Online (Natural) - English (United States)",
    "Google US English",
    "Samantha"
  ];

  for (const preferredName of priorities) {
    const voice = voices.find((candidate) => candidate.name === preferredName);
    if (voice) return voice;
  }

  return voices.find((voice) => voice.lang.toLowerCase() === "en-us")
    || voices.find((voice) => voice.lang.toLowerCase().startsWith("en"))
    || null;
}

function showStatus(message) {
  window.clearTimeout(statusTimer);
  audioStatus.textContent = message;
  audioStatus.classList.add("is-visible");
  statusTimer = window.setTimeout(() => audioStatus.classList.remove("is-visible"), 3200);
}

function clearActiveSpeechButton() {
  if (activeSpeechButton) activeSpeechButton.classList.remove("is-playing");
  activeSpeechButton = null;
}

function speak(text, kind, button) {
  if (!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) {
    showStatus("Áudio indisponível neste navegador")
    return;
  }

  window.speechSynthesis.cancel();
  clearActiveSpeechButton();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = kind === "word" ? .78 : .88;
  utterance.pitch = 1;
  const voice = getPreferredVoice();
  if (voice) utterance.voice = voice;

  activeSpeechButton = button;
  button.classList.add("is-playing");
  utterance.onend = clearActiveSpeechButton;
  utterance.onerror = () => {
    clearActiveSpeechButton();
    showStatus("Não foi possível reproduzir o áudio")
  };

  window.speechSynthesis.speak(utterance);
}

document.addEventListener("click", (event) => {
  const audioButton = event.target.closest("[data-speak]");
  if (audioButton) {
    speak(audioButton.dataset.speak, audioButton.dataset.speechKind || "word", audioButton);
    return;
  }

  const translationButton = event.target.closest(".translation-button");
  if (translationButton && translationButton !== combinationTranslationButton) {
    const translation = translationButton.parentElement.querySelector(".translation-text");
    const willOpen = translation.hidden;
    translation.hidden = !willOpen;
    translationButton.textContent = willOpen ? "Ocultar tradução" : "Mostrar tradução";
    translationButton.setAttribute("aria-expanded", String(willOpen));
  }
});

quantityOptions.addEventListener("click", (event) => {
  const button = event.target.closest("[data-quantity]");
  if (!button) return;
  selectedQuantity = quantities.find((quantity) => quantity.id === button.dataset.quantity);
  updateSelectionState(quantityOptions, selectedQuantity.id, "quantity");
  updateCombination();
});

periodOptions.addEventListener("click", (event) => {
  const button = event.target.closest("[data-period]");
  if (!button) return;
  selectedPeriod = periods.find((period) => period.id === button.dataset.period);
  updateSelectionState(periodOptions, selectedPeriod.id, "period");
  updateCombination();
});

combinationTranslationButton.addEventListener("click", () => {
  const willOpen = combinationTranslation.hidden;
  combinationTranslation.hidden = !willOpen;
  combinationTranslationButton.textContent = willOpen ? "Ocultar tradução" : "Mostrar tradução";
  combinationTranslationButton.setAttribute("aria-expanded", String(willOpen));
});

window.addEventListener("beforeunload", () => {
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
});

renderVocabulary();
renderChoiceButtons();
updateCombination();

if ("speechSynthesis" in window) {
  window.speechSynthesis.getVoices();
}
