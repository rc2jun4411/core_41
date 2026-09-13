/* C:\Users\rc2ju\OneDrive\Documents\core_41\core_41.3.8_html_reference_dialog-8\index.js */
const dialogElem = document.getElementById("dialog");
const showBtn = document.querySelector(".show");
const closeBtn = document.querySelector(".close");

showBtn.addEventListener("click", () => {
  dialogElem.showModal();
});

closeBtn.addEventListener("click", () => {
  dialogElem.close();
});