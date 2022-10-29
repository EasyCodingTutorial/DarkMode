let Toggle = document.getElementById("Toggle");
let Dark = localStorage.getItem("DarkMode");
let Body = document.body;

// To Enable Dark Mode
const Enable = () => {
  Toggle.classList.replace("fa-sun", "fa-moon");
  Body.classList.add("Dark");
  localStorage.setItem("DarkMode", "enabled");
};
// To Disable Dark Mode
const Disable = () => {
  Toggle.classList.replace("fa-moon", "fa-sun");
  Body.classList.remove("Dark");
  localStorage.setItem("DarkMode", "disabled");
};

if (Dark === "enabled") {
  Enable();
}
Toggle.onclick = (e) => {
  Dark = localStorage.getItem("DarkMode");
  if (Dark === "disabled") {
    Enable();
  } else {
    Disable();
  }
};
