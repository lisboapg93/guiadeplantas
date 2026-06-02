const PLANTS = [
  {planta:"Alecrim",exposicao:"Sol pleno (6-8h/dia)",rega:"1-2 vezes por semana, solo bem drenado",ambiente:"Externo",poda:"Regular para estimular o crescimento",adubo:"Solo arenoso e seco, adubo orgânico"},
  {planta:"Aloes Aristata",exposicao:"Meia-sombra ou sol pleno",rega:"Pouca água, regar a cada 15 dias",ambiente:"Interno ou externo",poda:"Remover folhas secas",adubo:"Substrato para cactos e suculentas"},
  {planta:"Amaryllis",exposicao:"Luz indireta ou sol pleno",rega:"Moderada, manter o solo úmido",ambiente:"Interno",poda:"Após a floração, cortar folhas secas",adubo:"Substrato leve com boa drenagem"},
  {planta:"Antúrios Mini Vermelhos",exposicao:"Luz indireta",rega:"Manter o solo úmido, sem encharcar",ambiente:"Interno",poda:"Remover folhas secas",adubo:"Solo rico em matéria orgânica"},
  {planta:"Antúrios Variados",exposicao:"Luz indireta",rega:"Moderada, manter o solo úmido",ambiente:"Interno",poda:"Remover folhas secas",adubo:"Solo orgânico e leve"},
  {planta:"Aphelandras",exposicao:"Meia-sombra",rega:"2-3 vezes por semana",ambiente:"Interno",poda:"Após a floração",adubo:"Solo bem drenado"},
  {planta:"Arrudas",exposicao:"Sol pleno",rega:"1-2 vezes por semana, solo seco entre regas",ambiente:"Externo",poda:"Regular para manter forma",adubo:""},
  {planta:"Asplênios Osaka Variados",exposicao:"Luz indireta, sombra parcial",rega:"2-3 vezes por semana, solo úmido",ambiente:"Interno",poda:"Remover folhas secas",adubo:"Solo rico em matéria orgânica, adubo mensal"},
  {planta:"Avencas Variadas",exposicao:"Luz indireta, sombra total",rega:"Mantém o solo constantemente úmido",ambiente:"Interno",poda:"Remover folhas secas para promover crescimento",adubo:"Substrato rico e com boa drenagem"},
  {planta:"Azaléias",exposicao:"Sol pleno ou meia-sombra",rega:"2-3 vezes por semana, solo úmido",ambiente:"Externo",poda:"Após a floração para manter a forma",adubo:"Solo ácido, bem drenado"},
  {planta:"Bambus da Sorte",exposicao:"Luz indireta ou sombra",rega:"Manter a base em água, trocando semanalmente",ambiente:"Interno",poda:"Cortar as hastes para controlar o tamanho",adubo:"Pode ser cultivado na água ou solo com adubo líquido mensal"},
  {planta:"Begônias Beleaf",exposicao:"Luz indireta",rega:"Moderada, manter solo úmido",ambiente:"Interno",poda:"Remover folhas secas",adubo:"Solo bem drenado e rico em nutrientes"},
  {planta:"Begônias Flores Variadas",exposicao:"Luz indireta ou meia-sombra",rega:"Manter o solo úmido, sem encharcar",ambiente:"Interno ou externo",poda:"Após a floração, remover flores murchas",adubo:"Solo rico e leve"},
  {planta:"Bonsais Diversos",exposicao:"Luz direta ou meia-sombra",rega:"Moderada, solo levemente úmido",ambiente:"Interno ou externo",poda:"Manter a forma desejada com podas frequentes",adubo:"Solo bem drenado, adubação orgânica mensal"},
  {planta:"Bonsais de Fruta",exposicao:"Sol pleno ou meia-sombra",rega:"Solo constantemente úmido",ambiente:"Externo",poda:"Regular, para controle de forma",adubo:"Solo fértil e adubação mensal"},
  {planta:"Bromélias Aechmea Fasciata",exposicao:"Meia-sombra ou sol pleno",rega:"Manter água no centro da planta, regar com moderação o solo",ambiente:"Interno ou externo",poda:"Remover folhas secas",adubo:"Substrato rico e leve"},
  {planta:"Bromélias Guzmanias",exposicao:"Meia-sombra",rega:"Manter água na base, sem encharcar o solo",ambiente:"Interno ou externo",poda:"Remover folhas secas e flores murchas",adubo:"Solo bem drenado"},
  {planta:"Bulbos Amaryllis",exposicao:"Sol pleno ou luz indireta",rega:"Moderada, solo ligeiramente úmido",ambiente:"Interno",poda:"Remover folhas secas após floração",adubo:"Solo bem drenado"},
  {planta:"Buxinhos",exposicao:"Sol pleno ou meia-sombra",rega:"Moderada, solo ligeiramente úmido",ambiente:"Externo",poda:"Podar regularmente para manter a forma",adubo:"Solo rico em matéria orgânica"},
  {planta:"Cactos",exposicao:"Sol pleno ou meia-sombra",rega:"Regar uma vez por mês",ambiente:"Interno ou externo",poda:"Não necessário",adubo:"Substrato para cactos"},
  {planta:"Cactos Raiz Própria",exposicao:"Sol pleno",rega:"Escassa, regar a cada 20 dias",ambiente:"Interno ou externo",poda:"Não necessário",adubo:"Substrato para cactos"},
  {planta:"Callas Coloridas",exposicao:"Luz indireta ou meia-sombra",rega:"Manter o solo úmido",ambiente:"Interno",poda:"Remover folhas secas após floração",adubo:"Solo rico em nutrientes"},
  {planta:"Celósias Coloridas",exposicao:"Sol pleno",rega:"Moderada, solo ligeiramente úmido",ambiente:"Externo ou interno",poda:"Remover flores murchas",adubo:"Solo bem drenado"},
  {planta:"Chifres de Veado",exposicao:"Luz indireta, meia-sombra",rega:"1-2 vezes por semana, solo levemente úmido",ambiente:"Interno",poda:"Remover folhas secas",adubo:"Substrato para epífitas, como fibra de coco ou musgo esfagno"},
  {planta:"Costelas de Adão",exposicao:"Luz indireta, meia-sombra",rega:"1 vez por semana, solo úmido",ambiente:"Interno",poda:"Remover folhas secas e galhos extras",adubo:"Solo fértil e bem drenado"},
  {planta:"Crotons",exposicao:"Sol pleno ou meia-sombra",rega:"Solo ligeiramente úmido",ambiente:"Interno ou externo",poda:"Regular para controlar o tamanho",adubo:"Solo bem drenado com adubo orgânico"},
  {planta:"Dianthus Dobrados",exposicao:"Sol pleno",rega:"Moderada, solo levemente úmido",ambiente:"Externo",poda:"Remover flores murchas para estimular nova floração",adubo:"Solo bem drenado, adubação quinzenal"},
  {planta:"Dinheiro em Penca Pendentes",exposicao:"Luz indireta ou meia-sombra",rega:"2 vezes por semana, solo ligeiramente seco entre regas",ambiente:"Interno ou externo",poda:"Podar para controlar o crescimento",adubo:"Solo bem drenado"},
  {planta:"Dipladênias",exposicao:"Sol pleno ou meia-sombra",rega:"Moderada, solo úmido",ambiente:"Externo",poda:"Após a floração, poda de formação",adubo:"Solo rico e bem drenado"},
  {planta:"Dracenas Variadas",exposicao:"Luz indireta ou meia-sombra",rega:"1 vez por semana, solo seco entre regas",ambiente:"Interno",poda:"Remover folhas secas",adubo:"Solo rico em matéria orgânica"},
  {planta:"Echeverias Variadas",exposicao:"Sol pleno ou meia-sombra",rega:"Pouca água, solo seco entre regas",ambiente:"Interno ou externo",poda:"Remover folhas mortas",adubo:"Solo arenoso e bem drenado"},
  {planta:"Ervas Aromáticas Variadas",exposicao:"Sol pleno",rega:"1-2 vezes por semana, solo úmido",ambiente:"Externo ou interno em locais bem iluminados",poda:"Podar regularmente para estimular o crescimento",adubo:"Solo leve e bem drenado"},
  {planta:"Ficus Elastica Burgundy",exposicao:"Luz indireta ou meia-sombra",rega:"1 vez por semana, solo úmido",ambiente:"Interno",poda:"Remover folhas secas",adubo:"Solo rico em matéria orgânica"},
  {planta:"Ficus Elastica Tineke",exposicao:"Luz indireta ou meia-sombra",rega:"Moderada, solo levemente úmido",ambiente:"Interno",poda:"Poda para manter a forma",adubo:"Solo bem drenado"},
  {planta:"Fitonia",exposicao:"Luz indireta ou meia-sombra",rega:"Solo sempre úmido, 2-3 vezes por semana",ambiente:"Interno",poda:"Remover folhas secas",adubo:"Solo rico e bem drenado"},
  {planta:"Flor de Maio",exposicao:"Luz indireta ou meia-sombra",rega:"Moderada, solo seco entre regas",ambiente:"Interno",poda:"Remover flores murchas",adubo:"Substrato para cactos e suculentas"},
  {planta:"Frutifera Figo",exposicao:"Sol pleno",rega:"Moderada, manter solo úmido",ambiente:"Externo",poda:"Poda anual após a colheita",adubo:"Solo bem drenado"},
  {planta:"Frutifera Uva",exposicao:"Sol pleno",rega:"Moderada, manter solo úmido",ambiente:"Externo",poda:"Poda anual após a colheita",adubo:"Solo rico em nutrientes"},
  {planta:"Frutífera Amora Gigante",exposicao:"Sol pleno",rega:"Diária, manter solo úmido",ambiente:"Externo",poda:"Podar para estimular o crescimento",adubo:"Solo rico em nutrientes"},
  {planta:"Frutífera Diversas",exposicao:"Sol pleno",rega:"Moderada, solo úmido",ambiente:"Externo",poda:"Podar para estimular o crescimento",adubo:"Solo rico em nutrientes"},
  {planta:"Frutífera Jabuticaba Sabará",exposicao:"Sol pleno ou meia-sombra",rega:"Manter solo úmido",ambiente:"Externo",poda:"Remover ramos secos",adubo:"Solo rico e úmido"},
  {planta:"Gerânio Pendente",exposicao:"Sol pleno",rega:"Moderada, solo seco entre regas",ambiente:"Externo",poda:"Remover flores murchas para estimular nova floração",adubo:"Solo bem drenado"},
  {planta:"Hederas Variadas",exposicao:"Meia-sombra",rega:"Moderada, solo ligeiramente úmido",ambiente:"Interno ou externo",poda:"Remover ramos secos",adubo:"Solo bem drenado"},
  {planta:"Hibiscos Dobrados",exposicao:"Sol pleno ou meia-sombra",rega:"2-3 vezes por semana, solo úmido",ambiente:"Externo",poda:"Podar após a floração",adubo:"Solo bem drenado"},
  {planta:"Hidroponia",exposicao:"Sol pleno ou meia-sombra, dependendo da planta",rega:"Água constantemente circulando",ambiente:"Interno ou externo",poda:"Remover folhas mortas",adubo:"Nutrientes hidropônicos"},
  {planta:"Hoyas Variadas",exposicao:"Luz indireta ou meia-sombra",rega:"Moderada, solo seco entre regas",ambiente:"Interno",poda:"Remover flores secas",adubo:"Solo bem drenado"},
  {planta:"Hypoestes Jardineiras",exposicao:"Luz indireta ou sombra parcial",rega:"Moderada, solo levemente úmido",ambiente:"Interno",poda:"Remover folhas secas",adubo:"Solo bem drenado"},
  {planta:"Jiboias",exposicao:"Luz indireta ou sombra parcial",rega:"Moderada, solo úmido",ambiente:"Interno",poda:"Remover folhas secas e ramos mortos",adubo:"Solo bem drenado"},
  {planta:"Kalanchoes Bicolores",exposicao:"Luz direta ou meia-sombra",rega:"Pouca, solo seco entre regas",ambiente:"Externo ou interno",poda:"Remover flores murchas",adubo:"Substrato para suculentas"},
  {planta:"Kalanchoes Dobrados",exposicao:"Sol pleno ou meia-sombra",rega:"Solo seco entre regas",ambiente:"Externo ou interno",poda:"Remover flores murchas",adubo:"Solo arenoso e bem drenado"},
  {planta:"Kalanchoes Mini",exposicao:"Sol pleno ou meia-sombra",rega:"Solo seco entre regas",ambiente:"Externo ou interno",poda:"Remover flores murchas",adubo:"Solo bem drenado"},
  {planta:"Lavândulas Angustifolias",exposicao:"Sol pleno",rega:"Moderada, solo seco entre regas",ambiente:"Externo",poda:"Poda regular após floração para estimular novo crescimento",adubo:"Solo bem drenado"},
  {planta:"Lágrimas de Cristo",exposicao:"Sol pleno ou meia-sombra",rega:"Solo úmido, mas não encharcado",ambiente:"Externo ou interno",poda:"Poda leve para controle de crescimento",adubo:"Solo bem drenado"},
  {planta:"Lírios Variados",exposicao:"Sol pleno ou meia-sombra",rega:"Solo úmido, sem encharcar",ambiente:"Externo ou interno",poda:"Remover flores murchas",adubo:"Solo rico em matéria orgânica"},
  {planta:"Lírios da Paz",exposicao:"Luz indireta",rega:"Moderada, solo ligeiramente úmido",ambiente:"Interno",poda:"Remover flores murchas e folhas secas",adubo:"Solo bem drenado"},
  {planta:"Marantas Variadas",exposicao:"Luz indireta ou sombra parcial",rega:"Solo sempre úmido, 2-3 vezes por semana",ambiente:"Interno",poda:"Remover folhas secas",adubo:"Solo bem drenado e rico"},
  {planta:"Ora Pro Nobis Dourada",exposicao:"Sol pleno",rega:"Moderada, solo ligeiramente úmido",ambiente:"Externo",poda:"Poda regular para estimular o crescimento",adubo:"Solo fértil e bem drenado"},
  {planta:"Orquídeas",exposicao:"Luz indireta, meia-sombra",rega:"Moderada, solo úmido",ambiente:"Interno",poda:"Remover flores secas após a floração",adubo:"Substrato para orquídeas"},
  {planta:"Palmeiras",exposicao:"Luz indireta, meia-sombra",rega:"Moderada, solo úmido",ambiente:"Interno",poda:"Remover folhas secas",adubo:"Solo rico em matéria orgânica"},
  {planta:"Patas de Elefante",exposicao:"Sol pleno ou meia-sombra",rega:"Escassa, solo seco entre regas",ambiente:"Interno ou externo",poda:"Remover folhas secas",adubo:"Solo arenoso"},
  {planta:"Peperômias",exposicao:"Luz indireta ou meia-sombra",rega:"Moderada, solo ligeiramente úmido",ambiente:"Interno",poda:"Remover folhas secas",adubo:"Solo bem drenado"},
  {planta:"Philodendrons",exposicao:"Luz indireta ou meia-sombra",rega:"Moderada, solo ligeiramente úmido",ambiente:"Interno",poda:"Remover folhas secas",adubo:"Solo bem drenado"},
  {planta:"Pimenta",exposicao:"Sol pleno",rega:"Moderada, solo ligeiramente úmido",ambiente:"Externo ou interno com luz solar direta",poda:"Podar após frutificação",adubo:"Solo fértil e bem drenado"},
  {planta:"Podocarpus",exposicao:"Sol pleno ou meia-sombra",rega:"Moderada, solo úmido",ambiente:"Externo ou interno",poda:"Regular para manter a forma",adubo:"Solo rico"},
  {planta:"Primaveras",exposicao:"Sol pleno",rega:"Moderada, solo úmido",ambiente:"Externo",poda:"Poda leve após floração",adubo:"Solo rico e bem drenado"},
  {planta:"Rendas Portuguesas",exposicao:"Meia-sombra ou luz indireta",rega:"Moderada, solo ligeiramente úmido",ambiente:"Interno",poda:"Remover folhas secas",adubo:"Solo bem drenado"},
  {planta:"Rosas do Deserto",exposicao:"Sol pleno",rega:"Solo seco entre regas",ambiente:"Externo",poda:"Remover flores murchas e galhos mortos",adubo:"Solo arenoso e bem drenado"},
  {planta:"Roseiras",exposicao:"Sol pleno",rega:"Moderada, solo ligeiramente úmido",ambiente:"Externo",poda:"Remover flores murchas",adubo:"Solo bem drenado"},
  {planta:"Samambaias",exposicao:"Luz indireta ou sombra parcial",rega:"Solo úmido, sem encharcar",ambiente:"Interno",poda:"Remover folhas secas",adubo:"Solo rico em matéria orgânica"},
  {planta:"Suculentas Variadas",exposicao:"Sol pleno ou meia-sombra",rega:"Pouca água, solo seco entre regas",ambiente:"Interno ou externo",poda:"Remover folhas secas",adubo:"Solo arenoso"},
  {planta:"Sunpatiens",exposicao:"Sol pleno ou meia-sombra",rega:"Moderada, solo úmido",ambiente:"Externo",poda:"Remover flores secas",adubo:"Solo bem drenado"},
  {planta:"Torenias",exposicao:"Meia-sombra ou luz indireta",rega:"Solo úmido, sem encharcar",ambiente:"Externo",poda:"Remover flores murchas",adubo:"Solo leve e rico"},
  {planta:"Tostões Variados",exposicao:"Luz indireta ou sombra parcial",rega:"Moderada, solo seco entre regas",ambiente:"Interno",poda:"Remover folhas secas",adubo:"Solo bem drenado"},
  {planta:"Trevos de Quatro Folhas",exposicao:"Luz indireta ou sombra parcial",rega:"Solo úmido, sem encharcar",ambiente:"Interno ou externo",poda:"Não é necessário",adubo:"Solo bem drenado"},
  {planta:"Tuias Strickita",exposicao:"Sol pleno",rega:"Moderada, solo úmido",ambiente:"Externo",poda:"Poda regular para manter o formato",adubo:"Solo bem drenado"},
  {planta:"Vincas",exposicao:"Sol pleno ou meia-sombra",rega:"Moderada, solo úmido",ambiente:"Externo",poda:"Remover flores murchas",adubo:"Solo bem drenado"},
  {planta:"Violetas",exposicao:"Luz indireta ou meia-sombra",rega:"Moderada, evitar molhar as folhas",ambiente:"Interno",poda:"Remover flores murchas",adubo:"Solo leve e rico"},
];

const EMOJI_MAP = {
  default:"🌿", cactus:"🌵", suculenta:"🪴", orquídea:"🌸", orquidea:"🌸",
  rosa:"🌹", roseira:"🌹", lavanda:"💜", bambu:"🎋", bromélia:"🌺",
  bromelia:"🌺", palmeira:"🌴", bonsai:"🌳", frutífera:"🍓", frutifera:"🍓",
  figo:"🍈", uva:"🍇", amora:"🫐", jabuticaba:"🍇", pimenta:"🌶️",
  ervas:"🌿", alecrim:"🌿", lavând:"💜", lírio:"🌷", lilio:"🌷",
  violeta:"💜", antúrio:"🌺", antúrios:"🌺", begônia:"🌸", azaléia:"🌸",
  hibisco:"🌺", girassol:"🌻", primavera:"🌸", samambaia:"🌿", avenca:"🌿",
  fitônia:"🍃", fitonia:"🍃", jiboia:"🌿", philodendron:"🌿",
  costela:"🌿", dracena:"🌿",
};

function getEmoji(name) {
  const n = name.toLowerCase();
  for (const [k, v] of Object.entries(EMOJI_MAP)) { if (n.includes(k)) return v; }
  return EMOJI_MAP.default;
}

function norm(s) {
  return (s || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}

const activeAmbiente = new Set();
const activeExpos    = new Set();

const els = {
  searchInput: document.getElementById("searchInput"),
  filterToggle: document.getElementById("filterToggle"),
  filterPanel: document.getElementById("filterPanel"),
  ambienteChips: document.getElementById("ambienteChips"),
  exposicaoChips: document.getElementById("exposicaoChips"),
  resultsCount: document.getElementById("resultsCount"),
  plantGrid: document.getElementById("plantGrid"),
  emptyState: document.getElementById("emptyState"),
  overlay: document.getElementById("overlay"),
  modal: document.getElementById("modal"),
  modalClose: document.getElementById("modalClose"),
  modalIcon: document.getElementById("modalIcon"),
  modalName: document.getElementById("modalName"),
  modalDetails: document.getElementById("modalDetails"),
  backToTop: document.getElementById("backToTop"),
};

let lastFocusedElement = null;

const ambienteValues = [...new Set(PLANTS.map(p => p.ambiente).filter(Boolean))].sort();
const exposValues    = [...new Set(PLANTS.map(p => p.exposicao).filter(Boolean))].sort();

function createElement(tag, className, text) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text !== undefined) el.textContent = text;
  return el;
}

function buildChips(container, values, activeSet) {
  values.forEach(v => {
    const c = createElement("button", "chip", v);
    c.type = "button";
    c.setAttribute("aria-pressed", "false");
    c.addEventListener("click", () => {
      const selected = activeSet.has(v);
      if (selected) activeSet.delete(v);
      else activeSet.add(v);
      c.classList.toggle("selected", !selected);
      c.setAttribute("aria-pressed", String(!selected));
      render();
    });
    container.appendChild(c);
  });
}
buildChips(els.ambienteChips,  ambienteValues, activeAmbiente);
buildChips(els.exposicaoChips, exposValues,    activeExpos);

function badgeClass(amb) {
  const a = (amb || "").toLowerCase();
  return a === "interno" ? "badge-int" : a === "externo" ? "badge-ext" : "badge-both";
}
function badgeLabel(amb) {
  const a = (amb || "").toLowerCase();
  return a === "interno" ? "🏠 Interno" : a === "externo" ? "☀️ Externo" : "🌐 Ambos";
}

function createInfoRow(icon, label, value) {
  const row = createElement("span", "info-row");
  row.append(
    createElement("span", "info-icon", icon),
    createElement("span", "info-label", label),
    createElement("span", "info-val", value || "-")
  );
  return row;
}

function createPlantCard(plant, index) {
  const card = createElement("button", "plant-card");
  card.type = "button";
  card.style.animationDelay = `${Math.min(index, 20) * 30}ms`;
  card.setAttribute("aria-label", `Ver cuidados de ${plant.planta}`);
  card.addEventListener("click", () => openModal(plant));

  const header = createElement("span", "card-header");
  header.append(
    createElement("span", "card-name", plant.planta),
    createElement("span", `badge ${badgeClass(plant.ambiente)}`, badgeLabel(plant.ambiente))
  );

  const body = createElement("span", "card-body");
  body.append(
    createInfoRow("☀️", "Sol", plant.exposicao),
    createInfoRow("💧", "Rega", plant.rega),
    createInfoRow("✂️", "Poda", plant.poda)
  );

  card.append(header, body);
  return card;
}

function render() {
  const q = norm(els.searchInput.value);
  let results = PLANTS;
  if (q) results = results.filter(p => norm(p.planta).includes(q));
  if (activeAmbiente.size) results = results.filter(p => activeAmbiente.has(p.ambiente));
  if (activeExpos.size)    results = results.filter(p => activeExpos.has(p.exposicao));
  els.resultsCount.textContent =
    results.length ? `${results.length} planta${results.length > 1 ? "s" : ""}` : "";

  els.plantGrid.replaceChildren(...results.map(createPlantCard));
  els.emptyState.classList.toggle("is-hidden", results.length > 0);
}

function createDetailTile(icon, title, value, extraClass = "") {
  const tile = createElement("div", `detail-tile ${extraClass}`.trim());
  const head = createElement("div", "detail-tile-head");
  head.append(createElement("span", "", icon), document.createTextNode(` ${title}`));
  tile.append(head, createElement("div", "detail-tile-val", value || "-"));
  return tile;
}

function openModal(plant) {
  lastFocusedElement = document.activeElement;
  els.modalIcon.textContent = getEmoji(plant.planta);
  els.modalName.textContent = plant.planta;
  els.modalDetails.replaceChildren(
    createDetailTile("☀️", "Exposição ao Sol", plant.exposicao),
    createDetailTile("💧", "Rega", plant.rega, "t-rega"),
    createDetailTile("🏡", "Ambiente", plant.ambiente, "t-amb"),
    createDetailTile("✂️", "Poda", plant.poda, "t-poda"),
    createDetailTile("🌱", "Adubo / Substrato", plant.adubo || "Não informado", "t-adubo detail-tile-wide")
  );
  els.overlay.classList.add("open");
  document.body.style.overflow = "hidden";
  els.modal.focus();
}

function closeModal() {
  els.overlay.classList.remove("open");
  document.body.style.overflow = "";
  if (lastFocusedElement) lastFocusedElement.focus();
}

document.addEventListener("keydown", e => {
  if (e.key === "Escape" && els.overlay.classList.contains("open")) closeModal();
});

function toggleFilters() {
  const isOpen = els.filterPanel.classList.toggle("open");
  els.filterPanel.hidden = !isOpen;
  els.filterToggle.classList.toggle("active", isOpen);
  els.filterToggle.setAttribute("aria-expanded", String(isOpen));
}

els.filterToggle.addEventListener("click", toggleFilters);
els.overlay.addEventListener("click", e => {
  if (e.target === els.overlay) closeModal();
});
els.modalClose.addEventListener("click", closeModal);
els.searchInput.addEventListener("input", render);
render();

// Back to top
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    els.backToTop.classList.add("visible");
  } else {
    els.backToTop.classList.remove("visible");
  }
});
els.backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
