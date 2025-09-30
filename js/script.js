// ====================Toggle MENU==================
document.querySelector(".toggle-mobile").addEventListener("click", function () {
  document.querySelector(".home-page__mobile-menu").classList.toggle("active");
  document.querySelector(".toggle-mobile").classList.toggle("active");
});
// ===================Dropdown=====================
document.addEventListener("DOMContentLoaded", () => {
  const dropdown = document.querySelector(".hero__dropdown");
  const selected = dropdown.querySelector(".hero__dropdown-selected");
  const menu = dropdown.querySelector(".hero__dropdown-menu");
  const items = dropdown.querySelectorAll(".hero__dropdown-item");
  const icon = dropdown.parentElement.querySelector(".icon-CaretDown");

  // Toggle dropdown
  selected.addEventListener("click", () => {
    menu.classList.toggle("show");
    if (menu.classList.contains("show")) {
      icon.classList.remove("icon-CaretDown");
      icon.classList.add("icon-CaretUp");
    } else {
      icon.classList.remove("icon-CaretUp");
      icon.classList.add("icon-CaretDown");
    }
  });

  // Handle item selection
  items.forEach((item) => {
    item.addEventListener("click", () => {
      selected.textContent = item.textContent;
      menu.classList.remove("show");
      icon.classList.remove("icon-CaretUp");
      icon.classList.add("icon-CaretDown");
      const value = item.getAttribute("data-value");
    });
  });

  // Đóng dropdown
  document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target)) {
      menu.classList.remove("show");
      icon.classList.remove("icon-CaretUp");
      icon.classList.add("icon-CaretDown");
    }
  });
});
// ==================Active===========================
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
// ==================TAB-Active===========================
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".featured-properties__tab");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      // Xóa active cũ
      tabs.forEach((t) => {
        t.classList.remove("featured-properties__tab--active");
        t.setAttribute("aria-selected", "false");
        t.setAttribute("tabindex", "-1");
      });

      // Thêm active cho tab được click
      tab.classList.add("featured-properties__tab--active");
      tab.setAttribute("aria-selected", "true");
      tab.setAttribute("tabindex", "0");
    });
  });
});

//==================== Explore =====================
document.addEventListener("DOMContentLoaded", () => {
  const exploreSwiper = new Swiper(".explore-cities__list", {
    slidesPerView: 6,
    spaceBetween: 8,
    slidesPerGroup: 2,
    loop: false,
    speed: 800,
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    //   pauseOnMouseEnter: true,
    // },
    pagination: {
      el: ".explore-cities__dots",
      type: "bullets",
      clickable: true,
      bulletClass: "explore-cities__dot",
      bulletActiveClass: "active",
    },

    breakpoints: {
      320: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 6,
      },
      480: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 6,
      },
      768: {
        slidesPerView: 4,
        slidesPerGroup: 2,
        spaceBetween: 8,
      },
      1024: {
        slidesPerView: 5,
        slidesPerGroup: 2,
        spaceBetween: 8,
      },
      1200: {
        slidesPerView: 6,
        slidesPerGroup: 1,
        spaceBetween: 8,
      },
      1440: {
        slidesPerView: 6,
        slidesPerGroup: 6,
        spaceBetween: 8,
      },
    },

    observer: true,
    observeParents: true,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
  });
});

//================= Testimonials ===================
document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".testimonials__list", {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: false,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    speed: 800,
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    //   pauseOnMouseEnter: true,
    // },

    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 20,
      },
      576: {
        slidesPerView: 1,
        slidesPerGroup: 5,
        spaceBetween: 20,
        centeredSlides: false,
      },
      768: {
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 25,
        centeredSlides: false,
      },
      1024: {
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 20,
        centeredSlides: false,
      },
      1200: {
        slidesPerView: 3,
        slidesPerGroup: 2,
        spaceBetween: 30,
        centeredSlides: false,
      },
      1440: {
        slidesPerView: 4,
        slidesPerGroup: 1,
        spaceBetween: 30,
        centeredSlides: false,
      },
    },
    watchOverflow: true,
    watchSlidesProgress: true,
  });
});
// ======================Back-to-Top======================
const backToTopBtn = document.querySelector(".back-to-top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add("back-to-top--show");
  } else {
    backToTopBtn.classList.remove("back-to-top--show");
  }
});

// Scroll lên đầu
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
// ====================DROPDOWN===================
const advancedBtn = document.querySelector(".hero__advanced-button");
const advancedDropdown = document.getElementById("advancedDropdown");

advancedBtn.addEventListener("click", () => {
  const isOpen = advancedDropdown.classList.toggle("active");
  advancedBtn.setAttribute("aria-expanded", isOpen);
});

//ẨN khi click ngoài
document.addEventListener("click", (e) => {
  if (!advancedDropdown.contains(e.target) && !advancedBtn.contains(e.target)) {
    advancedDropdown.classList.remove("active");
    advancedBtn.setAttribute("aria-expanded", false);
  }
});
// ===================Range=============================
const priceMin = document.getElementById("priceMin");
const priceMax = document.getElementById("priceMax");
const priceText = document.getElementById("priceRangeText");

const sizeMin = document.getElementById("sizeMin");
const sizeMax = document.getElementById("sizeMax");
const sizeText = document.getElementById("sizeRangeText");

function updateRange(
  minInput,
  maxInput,
  textElement,
  progressElement,
  isPrice = true
) {
  return function () {
    let min = Math.min(+minInput.value, +maxInput.value);
    let max = Math.max(+minInput.value, +maxInput.value);

    if (+minInput.value > +maxInput.value) {
      maxInput.value = minInput.value;
    } else if (+maxInput.value < +minInput.value) {
      minInput.value = maxInput.value;
    }

    // Progress bar
    const rangeMin = +minInput.min;
    const rangeMax = +minInput.max;
    const percentMin = ((min - rangeMin) / (rangeMax - rangeMin)) * 100;
    const percentMax = ((max - rangeMin) / (rangeMax - rangeMin)) * 100;

    progressElement.style.left = percentMin + "%";
    progressElement.style.width = percentMax - percentMin + "%";

    textElement.textContent = `from ${
      isPrice ? "$" + min.toLocaleString() : min
    } ${isPrice ? "to $" + max.toLocaleString() : "to " + max} ${
      isPrice ? "" : "SqFt"
    }`;
  };
}

const priceProgress = document.getElementById("priceProgress");
const sizeProgress = document.getElementById("sizeProgress");

priceMax.addEventListener("mousedown", () => (priceMax.style.zIndex = "10"));
priceMin.addEventListener("mousedown", () => (priceMax.style.zIndex = "1"));
sizeMax.addEventListener("mousedown", () => (sizeMax.style.zIndex = "10"));
sizeMin.addEventListener("mousedown", () => (sizeMax.style.zIndex = "1"));

priceMin.addEventListener(
  "input",
  updateRange(priceMin, priceMax, priceText, priceProgress, true)
);
priceMax.addEventListener(
  "input",
  updateRange(priceMin, priceMax, priceText, priceProgress, true)
);
sizeMin.addEventListener(
  "input",
  updateRange(sizeMin, sizeMax, sizeText, sizeProgress, false)
);
sizeMax.addEventListener(
  "input",
  updateRange(sizeMin, sizeMax, sizeText, sizeProgress, false)
);

updateRange(priceMin, priceMax, priceText, priceProgress, true)();
updateRange(sizeMin, sizeMax, sizeText, sizeProgress, false)();
// =====================SUBMENU=================================//
document
  .querySelectorAll(".home-page__mobile-nav-link--dropdown")
  .forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault(); // ngăn link mặc định nếu có
      const parent = e.currentTarget.parentElement; //Lấy cha trực tiếp
      const subMenu = parent.querySelector(".home-page__mobile-sub-menu");

      if (subMenu) {
        // Đóng tất cả sub-menu khác
        document
          .querySelectorAll(".home-page__mobile-sub-menu.active")
          .forEach((menu) => {
            if (menu !== subMenu) {
              menu.classList.remove("active");
            }
          });

        // Mở/đóng sub-menu hiện tại
        subMenu.classList.toggle("active");
      }
    });
  });
