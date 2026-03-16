document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const btn = document.querySelector(".hamburger");
  const nav = document.querySelector("#globalNav");
  const links = nav ? nav.querySelectorAll("a") : [];

  if (!header || !btn || !nav) return;

  const closeMenu = () => {
    header.classList.remove("is-open");
    btn.setAttribute("aria-expanded", "false");
    btn.setAttribute("aria-label", "メニューを開く");
  };

  const openMenu = () => {
    header.classList.add("is-open");
    btn.setAttribute("aria-expanded", "true");
    btn.setAttribute("aria-label", "メニューを閉じる");
  };

  btn.addEventListener("click", () => {
    const isOpen = header.classList.contains("is-open");
    isOpen ? closeMenu() : openMenu();
  });

  links.forEach((a) => {
    a.addEventListener("click", () => {
      closeMenu();
    });
  });

  window.addEventListener("resize", () => {
    if (window.matchMedia("(min-width: 901px)").matches) {
      closeMenu();
    }
  });
});
