const carousel = document.querySelector(".sponsor-carousel");
const list = carousel.querySelector(".sponsor-list");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

if (!reducedMotion.matches) {
  list.querySelectorAll(".sponsor").forEach((sponsor) => {
    const copy = sponsor.cloneNode(true);
    copy.setAttribute("aria-hidden", "true");
    list.append(copy);
  });
  carousel.classList.add("is-animated");
}
