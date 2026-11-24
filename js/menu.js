const root = document.documentElement;
const toggle = document.querySelector(".menu-toggle");
const menu = document.getElementById("site-nav");
const wideScreen = window.matchMedia("(min-width: 48em)");
const behindMenu = document.querySelectorAll("main, .site-footer");

root.classList.add("js");

function setOpen(open) {
  toggle.setAttribute("aria-expanded", open);
  root.classList.toggle("menu-open", open);
  behindMenu.forEach((element) => {
    element.inert = open;
  });
}

function isOpen() {
  return toggle.getAttribute("aria-expanded") === "true";
}

toggle.addEventListener("click", () => {
  setOpen(!isOpen());
  if (isOpen()) {
    menu.querySelector("a").focus();
  }
});

menu.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    setOpen(false);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && isOpen()) {
    setOpen(false);
    toggle.focus();
  }
});

wideScreen.addEventListener("change", () => setOpen(false));
