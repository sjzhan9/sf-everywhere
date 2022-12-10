//inject class to all pages
var style = document.createElement("style");
style.type = "text/css";

var classes =
  "div,h1,h2,h3,h4,h5,h6,p,a,time,code,li,ul,ol,strong,span,button,strong,b,i,em,small,marked,sub,sup,body";

style.textContent = `
.sf-everywhere {
font-family: -apple-system，BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
letter-spacing: normal !important;
}
`;

setTimeout(function () {
  // Add the style tag to the <head> tag of the document
  document.head.appendChild(style);
}, 10);

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message == "turnOff") {
    turnOff();
  } else {
    turnOn();
  }
});

function turnOff() {
  let allElem = document.querySelectorAll(classes);
  for (elem of allElem) {
    elem.classList.remove("sf-everywhere");
    X;
  }
}

function turnOn() {
  let allElem = document.querySelectorAll(classes);
  for (elem of allElem) {
    elem.classList.add("sf-everywhere");
  }
}

// const init = function () {
//   const injectElement = document.createElement("div");
//   injectElement.className = "rustyZone-element";
//   injectElement.innerHTML = "Hello From the Rusty Zone Element";
//   document.body.appendChild(injectElement);
// };
// init();
