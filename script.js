function norm(s) {
  return (s || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}

const filters = {
  ambiente: new Set(),
  exposicao: new Set(),
};
const modalState = { lastFocused: null };

const els = {
  controls: document.querySelector(".controls"),
  searchInput: document.getElementById("searchInput"),
  searchClear: document.getElementById("searchClear"),
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

const floatingSearch = createFloatingSearch(els.controls, () => closeFilters());

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
buildChips(els.ambienteChips,  ambienteValues, filters.ambiente);
buildChips(els.exposicaoChips, exposValues,    filters.exposicao);

function badgeClass(amb) {
  const a = (amb || "").toLowerCase();
  return a === "interno" ? "badge-int" : a === "externo" ? "badge-ext" : "badge-both";
}
function badgeLabel(amb) {
  const a = (amb || "").toLowerCase();
  return a === "interno" ? "Casa" : a === "externo" ? "Jardim" : "Casa ou jardim";
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

  const photo = createElement("span", "plant-photo");
  photo.style.backgroundImage = `url("${plant.photo}")`;
  photo.setAttribute("aria-hidden", "true");

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

  card.append(photo, header, body);
  return card;
}

function render() {
  const q = norm(els.searchInput.value);
  els.searchClear.hidden = !q;
  let results = PLANTS;
  if (q) results = results.filter(p => norm(p.planta).includes(q));
  if (filters.ambiente.size) results = results.filter(p => filters.ambiente.has(p.ambiente));
  if (filters.exposicao.size)    results = results.filter(p => filters.exposicao.has(p.exposicao));
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
  modalState.lastFocused = document.activeElement;
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
  if (modalState.lastFocused) modalState.lastFocused.focus();
}

document.addEventListener("keydown", e => {
  if (!els.overlay.classList.contains("open")) return;
  if (e.key === "Escape") {
    closeModal();
    return;
  }
  if (e.key !== "Tab") return;

  const focusable = [...els.modal.querySelectorAll(
    'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
  )];
  const first = focusable[0];
  const last = focusable.at(-1);
  if (!first || !last) return;

  if (e.shiftKey && (document.activeElement === first || document.activeElement === els.modal)) {
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault();
    first.focus();
  }
});

function closeFilters() {
  els.filterPanel.classList.remove("open");
  els.filterPanel.hidden = true;
  els.filterToggle.classList.remove("active");
  els.filterToggle.setAttribute("aria-expanded", "false");
}

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
els.searchClear.addEventListener("click", () => {
  els.searchInput.value = "";
  els.searchInput.focus();
  render();
});
render();

// Back to top
window.addEventListener("scroll", () => {
  floatingSearch.update();
  if (window.scrollY > 300) {
    els.backToTop.classList.add("visible");
  } else {
    els.backToTop.classList.remove("visible");
  }
}, { passive: true });
window.addEventListener("resize", floatingSearch.measure);
els.backToTop.addEventListener("click", () => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
});

window.addEventListener("load", () => {
  floatingSearch.measure();
  recordUniqueVisitor();
});
window.addEventListener("pageshow", floatingSearch.measure);
