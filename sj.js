//make bookmarklet at: http://bookmarklet.hackingthebrowser.com/


//make everything system font
// Create a style element, e.g.: <style type='text/css'></style>
var style = document.createElement('style');
style.type = 'text/css';

// Use an ES2015 (new-style JavaScript) multi-line string to define styles:
style.textContent = `
  /* add your own styles here: */
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
	letter-spacing: normal !important;
  }
  .sysFontClassOverride {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
	letter-spacing: normal !important;
  }
`;

// Add the style tag to the <head> tag of the document
document.head.appendChild(style);

//change style of body
document.querySelector("body").style.fontFamily = "-apple-system,BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\""

//attach override class to all tags specified
let allElem = document.querySelectorAll("div,h1,h2,h3,h4,h5,h6,p,a,time,code,li,ul,ol,strong,span,button");
for (elem of allElem){
  elem.classList.add("sysFontClassOverride");
}

//make everything comic sans
// Create a style element, e.g.: <style type='text/css'></style>
var style = document.createElement('style');
style.type = 'text/css';

// Use an ES2015 (new-style JavaScript) multi-line string to define styles:
style.textContent = `
  /* add your own styles here: */
  body {
    font-family: font-family: "Comic Sans MS", "Comic Sans", cursive !important;
	letter-spacing: normal !important;
  }
  .sysFontClassOverride {
    font-family: "Comic Sans MS", "Comic Sans", cursive !important;
	letter-spacing: normal !important;
  }
`;

// Add the style tag to the <head> tag of the document
document.head.appendChild(style);

let allElem = document.querySelectorAll("div,h1,h2,h3,h4,h5,h6,p,a,time,code,li,ul,ol,strong,span,button");
for (elem of allElem){
  elem.classList.add("sysFontClassOverride");
}














//make everything comic sans

// Create a style element, e.g.: <style type='text/css'></style>
var style = document.createElement('style');
style.type = 'text/css';

// Use an ES2015 (new-style JavaScript) multi-line string to define styles:
style.textContent = `
  /* add your own styles here: */
  body {
    font-family: "Comic Sans MS", "Comic Sans", cursive !important;
	letter-spacing: normal !important;
  }
`;

// Add the style tag to the <head> tag of the document
document.head.appendChild(style);









//new class for all elements

var style = document.createElement('style');
style.type = 'text/css';

// Use an ES2015 (new-style JavaScript) multi-line string to define styles:
style.textContent = `
  /* add your own styles here: */

  .sysFontClassOverride {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
	letter-spacing: normal !important;
  }
`;

// Add the style tag to the <head> tag of the document
document.head.appendChild(style);

let allElem = document.querySelectorAll("div,h1,h2,h3,h4,h5,h6,p,a");
for (elem of allElem){
  elem.classList.add("sysFontClassOverride");
}




