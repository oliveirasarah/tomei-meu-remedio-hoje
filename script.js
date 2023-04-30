let date = new Date();
let hours = String(date.getHours());
let minutes = String(date.getMinutes());

const toggleBtn = document.querySelector("#toggle");

let savePillStatus = localStorage.getItem("pillStatus");

function yesYouDid() {
  toggleBtn.textContent = "Sim";
  localStorage.setItem("pillStatus", "taken");
  toggleBtn.disabled = true;
}

function noYouDidnt() {
  toggleBtn.textContent = "Não";
  localStorage.removeItem("pillStatus");
  toggleBtn.disabled = false;
}

function changeButtonClass() {
  toggleBtn.classList.toggle("no");
  toggleBtn.classList.toggle("yes");

  if (toggleBtn.classList.contains("yes")) {
    yesYouDid();
  }
}

toggleBtn.addEventListener("click", changeButtonClass);

if (savePillStatus !== null) {
  changeButtonClass();
}

if (hours == 0 && minutes == 0) {
  noYouDidnt();

  if (toggleBtn.classList.contains("yes")) {
    toggleBtn.classList.toggle("no");
    toggleBtn.classList.toggle("yes");
  }
}
