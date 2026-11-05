const VISITOR_STORAGE_KEY = "guiadeplantas-visitor-counted-v1";
const VISITOR_COUNT_URL = "https://guiadeplantas.goatcounter.com/counter/TOTAL.json";

function showVisitorCount() {
  const counter = document.getElementById("visitorCount");
  fetch(VISITOR_COUNT_URL)
    .then(response => response.ok ? response.json() : Promise.reject())
    .then(({ count }) => {
      if (!count || !counter) return;
      counter.textContent = count;
      counter.setAttribute("aria-label", `${count} visitantes únicos`);
      counter.hidden = false;
    })
    .catch(() => {});
}

function recordUniqueVisitor() {
  try {
    const isFirstVisit = !localStorage.getItem(VISITOR_STORAGE_KEY);
    if (isFirstVisit && window.goatcounter?.count) {
      window.goatcounter.count({ path: location.pathname || "/", title: document.title });
      localStorage.setItem(VISITOR_STORAGE_KEY, "1");
    }
  } catch {
    // Sem armazenamento local, não registramos a visita para evitar duplicações.
  }

  showVisitorCount();
}
