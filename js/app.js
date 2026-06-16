/* --- Mobile Navigation Engine --- */
const mobileTrigger = document.getElementById("mobile-menu-trigger");
const navPanel = document.getElementById("navigation-panel");

mobileTrigger.addEventListener("click", () => {
  mobileTrigger.classList.toggle("open");
  navPanel.classList.toggle("show");
});

// Close mobile panel automatically if layout shifts up to desktop scaling
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    mobileTrigger.classList.remove("open");
    navPanel.classList.remove("show");
  }
});
