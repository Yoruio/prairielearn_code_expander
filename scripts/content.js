const file_preview =document.querySelector('.file-preview');
const content_div = document.querySelector('#content');

if (file_preview) {
    file_preview.classList.add('show');
    file_preview.classList.remove('file-preview');
    content_div.classList.remove('container');
}