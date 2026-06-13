const track = document.getElementById("btnTrack");
const buttons = Array.from(track.children);
const visible = 3;
let index = 0;

function slideRight() {
  const gap = 16;
  const btnWidth = buttons[0].offsetWidth + gap;
  const maxIndex = buttons.length - visible;

  if (index < maxIndex) {
    index++;
  } else {
    index = 0;
  }

  track.style.transition = "transform 0.3s ease-in-out";
  track.style.transform = `translateX(-${index * btnWidth}px)`;

  updateActiveButton();
}

function slideLeft() {
  const gap = 16;
  const btnWidth = buttons[0].offsetWidth + gap;
  const maxIndex = buttons.length - visible;

  if (index > 0) {
    index--;
  } else {
    index = maxIndex;
  }

  track.style.transition = "transform 0.3s ease-in-out";
  track.style.transform = `translateX(-${index * btnWidth}px)`;

  updateActiveButton();
}

function updateActiveButton() {
  buttons.forEach(btn => btn.classList.remove("active"));
  buttons[index].classList.add("active");
}

updateActiveButton();
