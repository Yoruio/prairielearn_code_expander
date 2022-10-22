# prairielearn_code_expander
Expands prairielearn code preview element, and maximizes content view

This is a simple Chrome extension that makes it easier to view submitted code files on prairielearn.

## Features
### Overall modifications
 - Expands width of the content div to fully encompass view width
 
### File preview modifications:
   - Preview window takes up the entire height of the file
   - Automatically shows previews on on page load
   - Syntax highlighting on code file uploads using highlight.js
 - User input changes

Default file preview:

![image](https://user-images.githubusercontent.com/38411921/197309745-8400cc74-c797-4195-9775-45a25ef814f8.png)

File preview with extension:

![image](https://user-images.githubusercontent.com/38411921/197309996-5ca400b1-9821-4509-b7ba-44470d461a08.png)

### User output modifications
 - text wrapping for text that exceeds width of content div

default user output:

![image](https://user-images.githubusercontent.com/38411921/197318803-137d1f5f-0f86-4d29-8ce2-616f602271cb.png)


Code user output with extension:

![image](https://user-images.githubusercontent.com/38411921/197318767-fb6218bc-5ff5-43db-94e0-94ba64e96361.png)

# Installation:
After cloning the repository, follow the Google Developer instructions to load an unpacked extension, here:
https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#load-unpacked
