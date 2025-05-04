chrome.storage.sync.get(["name", "email", "phone"], (data) => {
    document.querySelectorAll("input").forEach((input) => {
      const placeholder = input.placeholder.toLowerCase();
      const nameAttr = input.name?.toLowerCase() || "";
  
      if (placeholder.includes("name") || nameAttr.includes("name")) {
        input.value = data.name || "";
      } else if (placeholder.includes("email") || nameAttr.includes("email")) {
        input.value = data.email || "";
      } else if (placeholder.includes("phone") || nameAttr.includes("phone") || nameAttr.includes("mobile")) {
        input.value = data.phone || "";
      }
    });
  });
  