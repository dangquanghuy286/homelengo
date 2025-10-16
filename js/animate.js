// =====================Preload=========================
window.addEventListener("load", function () {
  const preload = document.querySelector(".preload");
  // Đợi 1s trước khi bắt đầu mờ dần
  setTimeout(() => {
    preload.style.transition = "opacity 1s ease"; // mờ trong
    preload.style.opacity = "0";
    setTimeout(() => preload.remove(), 500); // xóa
  }, 1000);
});

// ==================== Hidden Text===================
window.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.querySelector(".cd-words-wrapper");
  if (!wrapper) return;

  const words = wrapper.querySelectorAll(".item-text");
  if (!words.length) return;

  let currentIndex = 0;
  const delay = 3000; // 3s đổi chữ một lần

  function showNextWord() {
    if (!words[currentIndex]) return;

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
// ==================== Clip Animation Simple===================
window.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.querySelector(".cd-words-wrapper");
  if (!wrapper) return;

  const words = wrapper.querySelectorAll(".item-text-1");
  if (!words.length) return;

  let currentIndex = 0;
  const delay = 3000;
  const minWidth = 2;

  wrapper.style.minWidth = "0"; // Cho phép thu hẹp
  wrapper.style.transition = "width 1s cubic-bezier(0.16, 1, 0.3, 1)";
  wrapper.style.overflow = "hidden";

  // Khởi tạo
  words.forEach((w, i) => {
    w.classList.toggle("is-visible", i === 0);
    w.classList.toggle("is-hidden", i !== 0);
  });

  if (words[0]) wrapper.style.width = words[0].offsetWidth + "px";

  function showNextWord() {
    const currentWord = words[currentIndex];
    const nextIndex = (currentIndex + 1) % words.length;
    const nextWord = words[nextIndex];

    // Thu hẹp wrapper
    wrapper.style.width = minWidth + "px";

    setTimeout(() => {
      currentWord.classList.remove("is-visible");
      currentWord.classList.add("is-hidden");
      nextWord.classList.remove("is-hidden");
      nextWord.classList.add("is-visible");

      // Mở rộng wrapper
      wrapper.style.width = nextWord.offsetWidth + "px";

      currentIndex = nextIndex;
    }, 600);
  }

  setInterval(showNextWord, delay);
});
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
