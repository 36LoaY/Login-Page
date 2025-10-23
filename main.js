let label1 = document.querySelector('label[for="mail"]');
let label2 = document.querySelector('label[for="pass"]');
let regLabel1 = document.querySelector('.register label[for="mail"]');
let regLabel2 = document.querySelector('.register label[for="pass"]');
let regLabel3 = document.querySelector('label[for="name"]');
let mailField = document.querySelector('input[type="text"]');
let passField = document.querySelector('input[type="password"]');
let regMailField = document.querySelector('.register input[name="mail"]');
let regPassField = document.querySelector('.register input[type="password"]');
let regNameField = document.querySelector('input[name="name"]');
let loginBtn = document.querySelector("nav ul li:last-child");
let closeBtn = document.querySelector(".close");
let regBtn = document.querySelector(".register p > a")

mailField.addEventListener("focus", () => {
  label1.style.marginTop = "-8px";
});

mailField.addEventListener("blur", (e) => {
  if (e.target.value === "") label1.style.marginTop = "10px";
});

regMailField.addEventListener("focus", () => {
  regLabel1.style.marginTop = "-8px";
});

regMailField.addEventListener("blur", (e) => {
  if (e.target.value === "") regLabel1.style.marginTop = "10px";
});

passField.addEventListener("focus", () => {
  label2.style.marginTop = "-8px";
});

passField.addEventListener("blur", (e) => {
  if (e.target.value === "") label2.style.marginTop = "10px";
});

regPassField.addEventListener("focus", () => {
  regLabel2.style.marginTop = "-8px";
});

regPassField.addEventListener("blur", (e) => {
  if (e.target.value === "") regLabel2.style.marginTop = "10px";
});

regNameField.addEventListener("focus", () => {
  regLabel3.style.marginTop = "-8px";
});

regNameField.addEventListener("blur", (e) => {
  if (e.target.value === "") regLabel3.style.marginTop = "10px";
});

loginBtn.addEventListener("click", (_) => {
  document.querySelector(".login").style.display = "grid";
});

closeBtn.addEventListener("click", (_) => {
    document.querySelector(".login").style.display = "none"
});

document.querySelector(".register .close").addEventListener("click", (_) => {
    document.querySelector(".register").style.display = "none"
});


document.querySelector(".login p > a").addEventListener("click",_ => {
    document.querySelector(".register").style.display = "grid"
    document.querySelector(".login").style.display = "none"
})

regBtn.addEventListener("click",_ => {
    document.querySelector(".register").style.display = "none"
    document.querySelector(".login").style.display = "grid"
})

