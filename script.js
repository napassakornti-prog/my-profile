// ===== State =====
let isDark = false;

// ===== Element References =====
const toggleButton = document.querySelector("#theme-toggle");
const footer = document.querySelector("#card-footer");
const input = document.querySelector(".card__input");

// ===== Event: สลับธีม =====
toggleButton.addEventListener("click", () => {
  isDark = !isDark;

  document.body.classList.toggle("dark", isDark);

  toggleButton.textContent = isDark
    ? "☀️ โหมดกลางวัน"
    : "🌙 โหมดกลางคืน";
});

// ===== Footer: ปีอัตโนมัติ =====
const currentYear = new Date().getFullYear();
footer.textContent = `© ${currentYear} — Deploy ด้วย GitHub Pages 🚀`;

// ===== Event: รับข้อความจากช่อง Input =====
input.addEventListener("input", () => {
  console.log(`ผู้ใช้พิมพ์: ${input.value}`);
});