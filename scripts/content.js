// widen content area
const content_div = document.querySelector('#content');

if (content_div) {
    content_div.style['max-width'] = "100vw";
}

// deal with file previews
const file_preview_elements = document.getElementsByClassName('file-preview');

for (var i = 0; i < file_preview_elements.length; i++) {
    var file_preview = file_preview_elements[i];
    file_preview.classList.add('show');
    file_preview.classList.remove('file-preview');
    var code = file_preview.querySelector('code');
    if (code) {
        code.style.background="none";
        code.style.border="none";
    }
}

// add line wrapping to user output text
const user_output_elements = document.getElementsByClassName('user-output');
for (var i = 0; i < user_output_elements.length; i++) {
    var user_output_element = user_output_elements[i];
    user_output_element.style['white-space'] = "pre-line";
}

hljs.highlightAll();