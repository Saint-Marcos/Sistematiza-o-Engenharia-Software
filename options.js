// Carregar a URL salva
chrome.storage.sync.get(["userUrl"], function (result) {
  document.getElementById("userUrl").value = result.userUrl || "";
});

// Salvar a nova URL
document.getElementById("saveBtn").addEventListener("click", function () {
  let userUrl = document.getElementById("userUrl").value;
  chrome.storage.sync.set({ userUrl: userUrl }, function () {
    alert("URL salva com sucesso!");
  });
});
