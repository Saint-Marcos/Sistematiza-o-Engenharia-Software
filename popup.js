document.getElementById("executeAction").addEventListener("click", function () {
  chrome.runtime.sendMessage({ action: "execute-action" });
});
