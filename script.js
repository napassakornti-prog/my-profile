// ===== State =====
let isDark = false;

// ===== Element References =====
const toggleButton = document.querySelector("#theme-toggle");
const footer = document.querySelector("#card-footer");
const nameInput = document.querySelector("#name-input");
const cardName = document.querySelector("#card-name");

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

// ===== เปลี่ยนชื่อด้านบนตามที่พิมพ์ =====
nameInput.addEventListener("input", () => {

  if (nameInput.value.trim() === "") {
    cardName.textContent = "Naphatsakorn Timinkul";
  } else {
    cardName.textContent = nameInput.value;
  }

});