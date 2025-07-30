//your JS code here. If required.
const fontSize = document.getElementById('fontsize');
const fontColor = document.getElementById('fontcolor');
const strSize = getCookie("fontSize") || null;
const strColor = getCookie("fontColor") || null;
if(strColor)
	fontColor.value = strColor;
if(strSize)
	fontSize.value = strSize;
console.log(strColor,strSize)
const button = document.querySelector("[type=submit]")
 button.onclick=()=>{
	   const size = fontSize.value.trim();
  const color = fontColor.value.trim();

	  if (size) {
    document.cookie = `fontSize=${size}; path=/`;
  }
  if (color) {
    document.cookie = `fontColor=${color}; path=/`;
  }
 }
function getCookie(name) {
  const cookies = document.cookie.split(';');
  for (let cookie of cookies) {
    const [key, value] = cookie.trim().split('=');
    if (key === name) return value;
  }
  return null;
}
