import UI_ELEMENTS from "./view.js";

const ctx = UI_ELEMENTS.CANVAS.getContext('2d');

const pi = Math.PI;
const radius = 90;

const x = UI_ELEMENTS.CANVAS.width / 2;
const y = UI_ELEMENTS.CANVAS.height / 2;

let from = 0;
let to = 0;
let deg = 0;

let animationFrame;

function drawCircleTemplate() {
  ctx.beginPath();

  ctx.arc(x, y, radius, 0, 2 * pi);

  ctx.strokeStyle = '#EAF0F6';
  ctx.lineWidth = 12;

  ctx.stroke();
}

function animateCircle(option) {
  if (deg === 360) {
    deg = 0;
  } else {
    deg += 6;
  }

  UI_ELEMENTS.CANVAS.style.transform = `rotate(${ deg }deg)`;

  if (option) {
    animationFrame = requestAnimationFrame(animateCircle);
  } else {
    cancelAnimationFrame(animationFrame);
  }
}

function hideCircle(option) {
  if (option) {
    UI_ELEMENTS.CANVAS.classList.add('hide');
  } else {
    UI_ELEMENTS.CANVAS.classList.remove('hide');
  }
}

function drawCircle() {
  ctx.clearRect(0, 0, UI_ELEMENTS.CANVAS.width, UI_ELEMENTS.CANVAS.height);

  drawCircleTemplate();

  if (from < to) {
    from += 1;
  } else if (from > to){
    from -= 1;
  }

  ctx.beginPath();

  ctx.arc(x, y, radius, -pi / 2, (-pi / 2) + (2 * pi * (from / 100)));

  ctx.strokeStyle = '#005CFF';
  ctx.lineWidth = 12;

  ctx.stroke();

  if (from < to) {
    requestAnimationFrame(drawCircle);
  } else {
    requestAnimationFrame(drawCircle);
  }
}

function draw(percent) {
  to = Math.round(+percent);
  
  drawCircle();
}

export {
    draw,
    drawCircleTemplate,
    animateCircle,
    hideCircle,
}