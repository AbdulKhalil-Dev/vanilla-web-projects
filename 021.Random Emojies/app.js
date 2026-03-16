// const btn = document.getElementById("emoji");

const btn = document.querySelector("#emoji");
const emojis = [
  "🤣",
  "☺️",
  "😆",
  "😘",
  "😔",
  "😯",
  "😫",
  "🙃",
  "😦",
  "🤪",
  "😵",
  "😇",
  "🤢",
  "🙂‍↔️",
  "🫣",
  "🫨",
  "🥳",
  "😷",
  "😰",
  "😩",
  "😤",
  "😔",
  "😛",
  "😯",
  "🙄",
  "🫡",
  "🤗",
  "🤩",
  "😎",
  "😋",
  "🥰",
  "😍",
  "😀",
  "😒",
];

btn.addEventListener("mouseover", () => {
  btn.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
});
// console.log(emojis.length);
