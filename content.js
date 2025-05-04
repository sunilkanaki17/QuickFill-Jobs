// content.js

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "fillForm") {
    // Log the data received
    console.log("Received fillForm message from popup");
    
    // Retrieve the saved data from storage
    chrome.storage.sync.get(["name", "email", "phone"], (data) => {
      console.log("Retrieved data for filling:", data);

      // Fill the form fields with the retrieved data
      fillForm(data);
    });
  }
});

function fillForm(data) {
  // Try to auto-fill the form fields (name, email, phone)
  const inputs = document.querySelectorAll('input');
  inputs.forEach(input => {
    const placeholder = input.placeholder?.toLowerCase() || '';
    const nameAttr = input.name?.toLowerCase() || '';

    // Fill the fields based on placeholder or name attribute
    if (placeholder.includes('name') || nameAttr.includes('name')) {
      input.value = data.name || '';
    } else if (placeholder.includes('email') || nameAttr.includes('email')) {
      input.value = data.email || '';
    } else if (placeholder.includes('phone') || nameAttr.includes('phone') || nameAttr.includes('mobile')) {
      input.value = data.phone || '';
    }
  });
}
