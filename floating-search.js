// Fixa a barra de controles no topo durante a rolagem.
// onStick é chamado quando a barra passa a ficar fixa.
function createFloatingSearch(controls, onStick) {
  let controlsTop = 0;

  function update() {
    const isStuck = window.scrollY > controlsTop - 10;
    controls.classList.toggle("is-stuck", isStuck);
    if (isStuck) onStick();
  }

  function measure() {
    const wasStuck = controls.classList.contains("is-stuck");
    controls.classList.remove("is-stuck");
    controlsTop = controls.getBoundingClientRect().top + window.scrollY;
    controls.classList.toggle("is-stuck", wasStuck);
    update();
  }

  return { update, measure };
}
