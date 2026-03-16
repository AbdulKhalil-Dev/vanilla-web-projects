const copyText = document.querySelector('textarea[name="copyTxt"]');
const finalText = document.querySelector('textarea[name="finalTxt"]');
const moveBtn = document.querySelector(".moveBtn");
const copyBtn = document.querySelector(".copyBtn");
const output = document.querySelector(".output");

copyBtn.addEventListener("click", () => {
  let temp = copyText.value;
  copyToClipBoard(temp);
});

moveBtn.addEventListener("click", () => {
  let temp = copyText.value;
  finalText.value = temp;
});

copyText.addEventListener("click", function () {
  this.select()
});
finalText.addEventListener("click", function () {
  this.select()
});

function copyToClipBoard(str) {
  const outputContainer = document.querySelector(".output-container");
  const textarea = document.createElement("textarea");
  textarea.value = str;
  outputContainer.appendChild(textarea);
  textarea.select();
  navigator.clipboard.writeText(str);
  output.innerHTML = `<h3>Content Copied</h3>`;
  output.classList.add("added");
  setTimeout(() => {
    output.classList.remove("added");
    output.textContent = "";
  }, 2000);
}
