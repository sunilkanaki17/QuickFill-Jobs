document.getElementById("save").addEventListener("click", () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
  
    chrome.storage.sync.set({ name, email, phone }, () => {
      alert("Info saved!");
    });
  });
  