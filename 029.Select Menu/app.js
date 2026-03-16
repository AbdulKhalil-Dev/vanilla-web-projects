let selectField = document.getElementById("selectField");
let selectText = document.getElementById("selectText");
let list = document.getElementById("list");
let arrowIcon = document.getElementById("arrowIcon");
let option = document.getElementsByClassName("option");

selectField.addEventListener('click', () => {
  list.classList.toggle("hide");
  arrowIcon.classList.toggle("rotate");
})

for (option of option) {
  option.onclick = function () {
    selectText.innerHTML = this.textContent;
    list.classList.toggle("hide");
    arrowIcon.classList.toggle("rotate");
  }
}