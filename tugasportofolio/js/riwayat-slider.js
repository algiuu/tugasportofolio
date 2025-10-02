document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".riwayat-container");
  const items = document.querySelectorAll(".riwayat-item");
  const nextBtn = document.querySelector(".riwayat-next");
  const prevBtn = document.querySelector(".riwayat-prev");
  let current = 0;

  function showRiwayat(idx) {
    items.forEach((item, i) => {
      item.style.display = i === idx ? "block" : "none";
    });
  }
  showRiwayat(current);

  nextBtn.onclick = function () {
    current = (current + 1) % items.length;
    showRiwayat(current);
  };
  prevBtn.onclick = function () {
    current = (current - 1 + items.length) % items.length;
    showRiwayat(current);
  };
});
