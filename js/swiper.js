// =================== Categories====================
document.addEventListener("DOMContentLoaded", () => {
  const swiperEl = document.querySelector(".tf-sw-categories");

  if (swiperEl) {
    const preview = swiperEl.dataset.preview;
    const tablet = swiperEl.dataset.tablet;
    const mobile = swiperEl.dataset.mobile;
    const mobileSm = swiperEl.dataset.mobileSm;

    const spacing = swiperEl.dataset.space;
    const spacingMd = swiperEl.dataset.spaceMd;
    const spacingLg = swiperEl.dataset.spaceLg;

    new Swiper(".tf-sw-categories", {
      slidesPerView: parseInt(mobile),
      spaceBetween: parseInt(spacing),
      navigation: {
        clickable: true,
        nextEl: ".nav-prev-category",
        prevEl: ".nav-next-category",
      },
      pagination: {
        el: ".sw-pagination-category",
        clickable: true,
      },
      breakpoints: {
        575: {
          slidesPerView: parseInt(mobileSm),
          spaceBetween: parseInt(spacing),
        },
        768: {
          slidesPerView: parseInt(tablet),
          spaceBetween: parseInt(spacingMd),
        },
        1200: {
          slidesPerView: parseInt(preview),
          spaceBetween: parseInt(spacingLg),
        },
      },
    });
  }
});

//==================== Explore =====================
document.addEventListener("DOMContentLoaded", () => {
  const exploreSwiper = new Swiper(".explore-cities__list", {
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
