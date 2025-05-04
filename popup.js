// Load saved values when popup opens
window.addEventListener("DOMContentLoaded", () => {
  chrome.storage.sync.get(["name", "email", "phone"], (data) => {
    console.log("Loaded from storage:", data);
    if (data.name) document.getElementById("name").value = data.name;
    if (data.email) document.getElementById("email").value = data.email;
    if (data.phone) document.getElementById("phone").value = data.phone;
  });
});

// Save values to Chrome storage
document.getElementById("saveBtn").addEventListener("click", () => {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();

  chrome.storage.sync.set({ name, email, phone }, () => {
    console.log("Saved to storage:", { name, email, phone });
    alert("Details saved successfully!");
  });
});

// Send message to content script to trigger fill
document.getElementById("fillBtn").addEventListener("click", () => {
  console.log("Clicked Fill Now button");
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    console.log("Sending fillForm message to tab:", tabs[0].id);
    chrome.tabs.sendMessage(tabs[0].id, { action: "fillForm" });
  });
});
