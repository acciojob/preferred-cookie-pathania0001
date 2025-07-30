const fontSize = document.getElementById('fontsize');
const fontColor = document.getElementById('fontcolor');
const button = document.querySelector("[type=submit]");

// Read saved values from cookies
const savedSize = getCookie("fontsize");
const savedColor = getCookie("fontcolor");

// If values exist, set them in the inputs and apply styles
if (savedSize) {
  fontSize.value = savedSize;
  document.documentElement.style.setProperty('--fontsize', savedSize);
}

if (savedColor) {
  fontColor.value = savedColor;
  document.documentElement.style.setProperty('--fontcolor', savedColor);
}

button.onclick = (e) => {
  e.preventDefault(); // Prevent page reload

  const size = fontSize.value.trim();
  const color = fontColor.value.trim();

  if (size) {
    document.cookie = `fontsize=${size}; path=/`;
    document.documentElement.style.setProperty('--fontsize', size);
  }

  if (color) {
    document.cookie = `fontcolor=${color}; path=/`;
    document.documentElement.style.setProperty('--fontcolor', color);
  }
};

// Helper function to read cookie by name
function getCookie(name) {
  const cookies = document.cookie.split(';');
  for (let cookie of cookies) {
    const [key, value] = cookie.trim().split('=');
    if (key === name) return value;
  }
  return null;
}
