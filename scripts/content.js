const file_preview =document.querySelector('.file-preview');
const content_div = document.querySelector('#content');

if (file_preview) {
    file_preview.classList.add('show');
    file_preview.classList.remove('file-preview');
    if (content_div) {
        content_div.classList.remove('container');
    }
    code = file_preview.querySelector('code');
    if (code) {
        code.style.background="none";
        code.style.border="none";
    }
    hljs.highlightAll();
}