/* C:\Users\rc2ju\Documents\VScode_edit\core_41\core_41.3.3.1_html_reference_dialog-3\index.js */
/* 最初の <div> 内 */
const dialog = document.getElementById('inner-dialog');
const openBtn = document.getElementById('open-btn');

openBtn.addEventListener('click', () => {
  dialog.show();
});

/* 次の <div> 内 */
const dialog1 = document.getElementById('inner-dialog1');
const openBtn1 = document.getElementById('open-btn1');

openBtn1.addEventListener('click', () => {
  dialog1.show();
});