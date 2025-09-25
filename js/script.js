// Toggle MENU
document.querySelector(".toggle-mobile").addEventListener("click", function () {
  document.querySelector(".home-page__mobile-menu").classList.toggle("active");
  document.querySelector(".toggle-mobile").classList.toggle("active");
});

// JS: chỉ cho 1 nút active
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".hero__tab");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      document
        .querySelector(".hero__tab-active")
        ?.classList.remove("hero__tab-active");
      document
        .querySelector(".hero__tab[aria-selected='true']")
        ?.setAttribute("aria-selected", "false");

      tab.classList.add("hero__tab-active");
      tab.setAttribute("aria-selected", "true");
    });
  });
});
