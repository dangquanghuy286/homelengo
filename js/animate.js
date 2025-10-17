// =====================Preload=========================
window.addEventListener("load", function () {
  const preload = document.querySelector(".preload");

  setTimeout(() => {
    preload.style.transition = "opacity 0.5s ease";
    preload.style.opacity = "0";
    setTimeout(() => preload.remove(), 500);
  }, 500);
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

// ===================Count====================
document.addEventListener("DOMContentLoaded", () => {
  if (document.body.classList.contains("counter-scroll")) {
    window.addEventListener("scroll", () => {
      const counters = document.querySelectorAll(".tf-counter");
      if (!counters.length) return;

      counters.forEach((counter) => {
        // Nếu đã chạy rồi thì bỏ qua
        if (counter.dataset.triggered === "true") return;

        const rect = counter.getBoundingClientRect();
        // Kiểm tra xem  nhìn thấy không
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          // Khi phần tử vào vùng nhìn thấy, bắt đầu đếm
          counter.querySelectorAll(".number").forEach((el) => {
            const to = parseFloat(el.dataset.to) || 0;
            const speed = parseInt(el.dataset.speed) || 2000;
            const dec = parseInt(el.dataset.dec) || 0;

            const startTime = performance.now();

            const animate = (now) => {
              // Hàm đếm
              const progress = Math.min((now - startTime) / speed, 1);
              const current = to * progress; // Tính giá trị hiện tại
              el.textContent = current.toFixed(dec); // Cập nhật nội dung hiển thị

              if (progress < 1) requestAnimationFrame(animate);
              else el.textContent = to.toFixed(dec); // Hiển thị giá trị cuối
            };

            requestAnimationFrame(animate); // Bắt đầu
          });

          // Đánh dấu  đã chạy
          counter.dataset.triggered = "true";
        }
      });
    });
  }

  if (typeof WOW === "function") new WOW().init();
});
