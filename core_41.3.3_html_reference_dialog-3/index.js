/* C:\Users\rc2ju\\Documents\core_41\core_41.3.3_html_reference_dialog-3\index.js */
const dialog = document.getElementById('inner-dialog');
const openBtn = document.getElementById('open-btn');

openBtn.addEventListener('click', () => {
  // showModal() ではなく show() を使うことで Top Layer 化を防ぎます
  dialog.show();
});