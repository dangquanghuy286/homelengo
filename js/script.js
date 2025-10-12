// =====================Preload=========================
window.addEventListener("load", function () {
  const preload = document.querySelector(".preload");
  // Đợi 1s trước khi bắt đầu mờ dần
  setTimeout(() => {
    preload.style.transition = "opacity 1s ease"; // mờ trong
    preload.style.opacity = "0";
    setTimeout(() => preload.remove(), 1000); // xóa
  }, 1000);
});
// ==================== Hidden Text===================
window.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.querySelector(".cd-words-wrapper");
  if (!wrapper) return;

  const words = wrapper.querySelectorAll(".item-text");
  let currentIndex = 0;
  const delay = 3000; // 3s đổi chữ một lần

  function showNextWord() {
    // Ẩn chữ hiện tại
    words[currentIndex].classList.remove("is-visible");
    words[currentIndex].classList.add("is-hidden");

    // Tính chữ kế tiếp
    currentIndex = (currentIndex + 1) % words.length;

    // Hiện chữ kế tiếp
    words[currentIndex].classList.remove("is-hidden");
    words[currentIndex].classList.add("is-visible");
  }

  // Chạy liên tục
  setInterval(showNextWord, delay);
});

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
// ===================Text========================

// ===================Dropdown=====================
document.addEventListener("DOMContentLoaded", () => {
  const dropdown = document.querySelector(".hero__dropdown");
  if (!dropdown) return;
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

if (priceMin && priceMax && priceText && priceProgress) {
  priceMax.addEventListener("mousedown", () => (priceMax.style.zIndex = "10"));
  priceMin.addEventListener("mousedown", () => (priceMax.style.zIndex = "1"));

  priceMin.addEventListener(
    "input",
    updateRange(priceMin, priceMax, priceText, priceProgress, true)
  );
  priceMax.addEventListener(
    "input",
    updateRange(priceMin, priceMax, priceText, priceProgress, true)
  );

  updateRange(priceMin, priceMax, priceText, priceProgress, true)();
}

if (sizeMin && sizeMax && sizeText && sizeProgress) {
  sizeMax.addEventListener("mousedown", () => (sizeMax.style.zIndex = "10"));
  sizeMin.addEventListener("mousedown", () => (sizeMax.style.zIndex = "1"));

  sizeMin.addEventListener(
    "input",
    updateRange(sizeMin, sizeMax, sizeText, sizeProgress, false)
  );
  sizeMax.addEventListener(
    "input",
    updateRange(sizeMin, sizeMax, sizeText, sizeProgress, false)
  );

  updateRange(sizeMin, sizeMax, sizeText, sizeProgress, false)();
}

// =====================SUBMENU=================================//
document
  .querySelectorAll(".header__mobile-nav-link--dropdown")
  .forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const parent = e.currentTarget.parentElement;
      const subMenu = parent.querySelector(".header__mobile-sub-menu");
      const icon = parent.querySelector(".header__mobile-nav-icon");

      if (subMenu) {
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
  for (let i = 1; i <= 10; i++) {
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

// ===================BreadCrumb=============
document.addEventListener("DOMContentLoaded", () => {
  const breadcrumbContainer = document.getElementById("breadcrumb");

  const path = window.location.pathname;
  const parts = path.split("/").filter(Boolean);

  // Hàm viết hoa chữ cái đầu mỗi từ
  const capitalizeWords = (str) => {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  let breadcrumbHTML = `
    <a class="breadcrumb-item" href="index.html">Home</a>
  `;

  parts.forEach((part, index) => {
    const isLast = index === parts.length - 1;
    const name = capitalizeWords(part.replace(".html", "").replace(/-/g, " "));

    if (!isLast) {
      breadcrumbHTML += `
        <div class="breadcrumb-item dot"><span>/</span></div>
        <a class="breadcrumb-item" href="${part}">${name}</a>
      `;
    } else {
      breadcrumbHTML += `
        <div class="breadcrumb-item dot"><span>/</span></div>
        <div class="breadcrumb-item current">${name}</div>
      `;
    }
  });

  breadcrumbContainer.innerHTML = breadcrumbHTML;
});
