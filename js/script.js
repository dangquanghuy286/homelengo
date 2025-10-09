// ==================== Toggle MENU ===================
const toggleBtn = document.querySelector(".toggle-mobile");
const menu = document.querySelector(".header__mobile-menu");
const overlay = document.querySelector(".header__mobile-overlay");
const closeBtn = document.querySelector(".header__mobile-close-btn");

// Khi click vào nút mở menu
toggleBtn.addEventListener("click", () => {
  menu.classList.add("active");
  overlay.classList.add("active");
  closeBtn.classList.add("active");
});

// Khi click overlay hoặc nút đóng thì đóng menu
[overlay, closeBtn].forEach((el) => {
  el.addEventListener("click", () => {
    menu.classList.remove("active");
    overlay.classList.remove("active");
    closeBtn.classList.remove("active");
  });
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
// ==================Active Controls===========================
document.addEventListener("DOMContentLoaded", () => {
  // ===== Hero Tabs =====
  const heroTabs = document.querySelectorAll(".hero__tab");
  heroTabs.forEach((tab) => {
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

  // ===== Featured Tags =====
  const featureTags = document.querySelectorAll(".featured-properties__tag");
  featureTags.forEach((tag) => {
    tag.addEventListener("click", () => {
      featureTags.forEach((t) => t.classList.remove("active"));
      tag.classList.add("active");
    });
  });

  // ===== Featured Properties Tabs =====
  const propertyTabs = document.querySelectorAll(".featured-properties__tab");
  propertyTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      propertyTabs.forEach((t) => {
        t.classList.remove("featured-properties__tab--active");
        t.setAttribute("aria-selected", "false");
        t.setAttribute("tabindex", "-1");
      });

      tab.classList.add("featured-properties__tab--active");
      tab.setAttribute("aria-selected", "true");
      tab.setAttribute("tabindex", "0");
    });
  });
});

//==================== Explore =====================
document.addEventListener("DOMContentLoaded", () => {
  const exploreSwiper = new Swiper(".explore-cities__list", {
    on: {
      slideChange: function () {
        new WOW().init(); // Gọi lại WOW khi chuyển slide
      },
    },
    slidesPerView: 6,
    spaceBetween: 8,
    slidesPerGroup: 2,
    loop: false,
    speed: 1000,
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
        slidesPerGroup: 4,
        spaceBetween: 6,
      },

      768: {
        slidesPerView: 3,
        slidesPerGroup: 7,
        spaceBetween: 6,
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
    slidesPerView: "auto",
    spaceBetween: 30,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    speed: 1000,
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    //   pauseOnMouseEnter: true,
    // },

    breakpoints: {
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 1,
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
document.addEventListener("DOMContentLoaded", () => {
  const advancedBtn = document.querySelector(".hero__advanced-button");
  const advancedDropdown = document.getElementById("advancedDropdown");

  if (advancedBtn && advancedDropdown) {
    advancedBtn.addEventListener("click", (e) => {
      e.stopPropagation(); // chặn lan ra ngoài
      const isOpen = advancedDropdown.classList.toggle("active");
      advancedBtn.setAttribute("aria-expanded", isOpen);
    });

    // Ẩn khi click ngoài
    document.addEventListener("click", (e) => {
      if (
        !advancedDropdown.contains(e.target) &&
        !advancedBtn.contains(e.target)
      ) {
        advancedDropdown.classList.remove("active");
        advancedBtn.setAttribute("aria-expanded", false);
      }
    });
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
  .querySelectorAll(".header__mobile-nav-link--dropdown") // Bỏ space thừa ở cuối selector cho sạch
  .forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const parent = e.currentTarget.parentElement; // .header__mobile-nav-item
      const subMenu = parent.querySelector(".header__mobile-sub-menu");
      const icon = parent.querySelector(".header__mobile-nav-icon");

      if (subMenu) {
        // Đóng tất cả sub-menu khác (toggle trên parent)
        document
          .querySelectorAll(".header__mobile-nav-item.active")
          .forEach((otherItem) => {
            if (otherItem !== parent) {
              otherItem.classList.remove("active");

              const otherIcon = otherItem.querySelector(
                ".header__mobile-nav-icon"
              );
              if (otherIcon) {
                otherIcon.classList.remove("icon-CaretUp");
                otherIcon.classList.add("icon-CaretDown");
              }
            }
          });

        // Toggle trên parent thay vì subMenu
        const isActive = parent.classList.toggle("active");

        if (icon) {
          if (isActive) {
            icon.classList.remove("icon-CaretDown");
            icon.classList.add("icon-CaretUp");
          } else {
            icon.classList.remove("icon-CaretUp");
            icon.classList.add("icon-CaretDown");
          }
        }
      }
    });
  });
// // ===========GSAP=======================
// document.addEventListener("DOMContentLoaded", () => {
//   // ================= Hero animations =================
//   gsap.from("#hero-heading", {
//     y: 20,
//     opacity: 0,
//     duration: 1,
//     stagger: 0.05,
//     ease: "power3.out",
//   });

//   gsap.from(".hero__subtitle", {
//     y: 15,
//     opacity: 0,
//     duration: 1,
//     delay: 0.2,
//     ease: "power3.out",
//   });

//   // ================= Featured Properties =================
//   for (let i = 1; i <= 8; i++) {
//     gsap.from(`#featured-properties-title-section-${i}`, {
//       scrollTrigger: {
//         trigger: `#featured-properties-title-section-${i}`,
//         start: "top 85%",
//         toggleActions: "play none none reverse",
//       },
//       y: 15,
//       opacity: 0,
//       duration: 1,
//       ease: "power3.out",
//     });

//     gsap.from(`#featured-subtitle-${i}`, {
//       scrollTrigger: {
//         trigger: `#featured-properties-title-section-${i}`,
//         start: "top 85%",
//         toggleActions: "play none none reverse",
//       },
//       y: 10,
//       opacity: 0,
//       duration: 1,
//       ease: "power3.out",
//       delay: 0.2,
//     });
//   }

//   gsap.utils.toArray(".featured-properties__description").forEach((desc) => {
//     gsap.from(desc, {
//       scrollTrigger: {
//         trigger: desc,
//         start: "top 85%",
//         toggleActions: "play none none reverse",
//       },
//       y: 10,
//       opacity: 0,
//       duration: 1,
//       ease: "power3.out",
//     });
//   });

//   gsap.from(".featured-properties__tab", {
//     scrollTrigger: {
//       trigger: ".featured-properties__tab-menu",
//       start: "top 85%",
//       toggleActions: "play none none reverse",
//     },
//     opacity: 0,
//     y: 10,
//     duration: 1,
//     stagger: 0.15,
//     ease: "power3.out",
//   });

//   gsap.utils.toArray(".featured-properties").forEach((section) => {
//     gsap.from(section.querySelectorAll(".featured-properties__item"), {
//       scrollTrigger: {
//         trigger: section.querySelector(".featured-properties__list"),
//         start: "top 85%",
//         toggleActions: "play none none reverse",
//       },
//       y: 15,
//       opacity: 0,
//       duration: 1,
//       ease: "power3.out",
//       stagger: 0.2,
//     });
//   });

//   // ================= Explore Cities =================
//   gsap.from(".explore-cities__item", {
//     scrollTrigger: {
//       trigger: ".explore-cities__list",
//       start: "top 80%",
//       toggleActions: "play none none reverse",
//     },
//     opacity: 0,
//     y: 15,
//     scale: 0.97,
//     duration: 1,
//     stagger: 0.2,
//     ease: "power3.out",
//   });

//   // ================= Benefits =================
//   gsap.from(".benefits__subtitle", {
//     scrollTrigger: {
//       trigger: "#featured-properties-title-section-4",
//       start: "top 80%",
//       toggleActions: "play none none reverse",
//     },
//     y: 10,
//     opacity: 0,
//     duration: 1,
//     ease: "power3.out",
//   });

//   gsap.from(".benefits__intro", {
//     scrollTrigger: {
//       trigger: ".benefits__intro",
//       start: "top 85%",
//       toggleActions: "play none none reverse",
//     },
//     y: 10,
//     opacity: 0,
//     duration: 1,
//     ease: "power3.out",
//   });

//   gsap.from(".benefits__item", {
//     scrollTrigger: {
//       trigger: ".benefits__list",
//       start: "top 85%",
//       toggleActions: "play none none reverse",
//     },
//     y: 15,
//     opacity: 0,
//     duration: 1,
//     ease: "power3.out",
//     stagger: 0.2,
//   });

//   // ================= Testimonials =================
//   gsap.from(".testimonials__item", {
//     scrollTrigger: {
//       trigger: ".testimonials",
//       start: "top 85%",
//       toggleActions: "play none none reverse",
//     },
//     opacity: 0,
//     y: 25,
//     duration: 1,
//     stagger: 0.2,
//     ease: "power3.out",
//   });

//   // ================= Latest =================
//   gsap.from(".latest-news__item", {
//     scrollTrigger: {
//       trigger: ".latest-news__list",
//       start: "top 80%",
//       toggleActions: "play none none reverse",
//     },
//     y: 15,
//     opacity: 0,
//     duration: 1,
//     ease: "power3.out",
//     stagger: 0.2,
//   });

// =================== WOW.js ==================
document.addEventListener("DOMContentLoaded", () => {
  for (let i = 1; i <= 9; i++) {
    document
      .getElementById(`featured-properties-title-section-${i}`)
      ?.classList.add("wow", "animate__animated", "animate__fadeInUp");
    document
      .getElementById(`featured-subtitle-${i}`)
      ?.classList.add("wow", "animate__animated", "animate__fadeInUp");

    document
      .getElementById(`featured-subtitle-${i}`)
      ?.setAttribute("data-wow-delay", "0.2s");
  }

  new WOW().init();
});
