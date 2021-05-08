var req = new XMLHttpRequest();

req.open("GET", "style.css");

req.onload = function () {
  chrome.devtools.panels.applyStyleSheet(req.responseText);
};

req.send();
