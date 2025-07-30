const fontSizeInput = document.getElementById("fontsize");
const fontColorInput = document.getElementById("fontcolor");
const submitButton = document.querySelector("input[type='submit']");

// Helper to set a cookie
function setCookie(name, value) {
  document.cookie = `${name}=${value}; path=/`;
}

// Helper to get a cookie by name
function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (const cookie of cookies) {
    const [key, val] = cookie.split("=");
    if (key === name) return val;
  }
  return null;
}

// Apply styles from cookies
function applyPreferences() {
  const fontSize = getCookie("fontsize");
  const fontColor = getCookie("fontcolor");

  if (fontSize) {
    document.body.style.fontSize = `${fontSize}px`;
    fontSizeInput.value = fontSize;
  }

  if (fontColor) {
    document.body.style.color = fontColor;
    fontColorInput.value = fontColor;
  }
}

// Handle form submission
submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  const fontSize = fontSizeInput.value;
  const fontColor = fontColorInput.value;

  setCookie("fontsize", fontSize);
  setCookie("fontcolor", fontColor);

  applyPreferences(); // Immediately apply to current page
});

// Apply preferences on page load
applyPreferences();
