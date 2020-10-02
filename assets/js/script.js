const $canvas = document.querySelector('.artboard');
const ctx = $canvas.getContext('2d');

// draw a snowman head
function drawHead() {
  const cx = $canvas.width / 2;
  const cy = $canvas.height / 4;
  const r = $canvas.height / 8;
  const sa = 0;
  const ea = 2 * Math.PI;

  ctx.beginPath();
  ctx.arc(cx, cy, r, sa, ea);
  ctx.lineWidth = 5;
  ctx.stroke();
  ctx.fillStyle = 'white';
  ctx.fill();
}
// draw a snowman left eye
function drawLeftEye() {
  const cx = $canvas.width / 2 - 20;
  const cy = $canvas.height / 4 - 10;
  const r = 10;
  const sa = 0;
  const ea = 2 * Math.PI;

  ctx.beginPath();
  ctx.arc(cx, cy, r, sa, ea);
  ctx.fillStyle = 'black';
  ctx.fill();
}
// draw a snowman right eye
function drawRightEye() {
  const cx = $canvas.width / 2 + 20;
  const cy = $canvas.height / 4 - 10;
  const r = 10;
  const sa = 0;
  const ea = 2 * Math.PI;

  ctx.beginPath();
  ctx.arc(cx, cy, r, sa, ea);
  ctx.fillStyle = 'black';
  ctx.fill();
}
// draw a snowman nose
function drawNose() {
  const cx = $canvas.width / 2;
  const cy = $canvas.height / 4 + 15;
  const r = 10;
  const sa = 0;
  const ea = 2 * Math.PI;

  ctx.beginPath();
  ctx.arc(cx, cy, r, sa, ea);
  ctx.fillStyle = 'orange';
  ctx.fill();
}
// draw a snoman body
function drawBody() {
  const cx = $canvas.width / 2;
  const cy = $canvas.height / 4 + $canvas.height / 8 + $canvas.height / 6 + 5;
  const r = $canvas.height / 6;
  const sa = 0;
  const ea = 2 * Math.PI;

  ctx.beginPath();
  ctx.arc(cx, cy, r, sa, ea);
  ctx.lineWidth = 5;
  ctx.stroke();
  ctx.fillStyle = 'white';
  ctx.fill();
}
// draw snowman buttons
function drawButtons() {
  for (let i = 0; i < 3; i++) {
    const cx = $canvas.width / 2;
    const cy =
      $canvas.height / 4 + $canvas.height / 8 + $canvas.height / 10 + i * 40;
    const r = 10;
    const sa = 0;
    const ea = 2 * Math.PI;

    ctx.beginPath();
    ctx.arc(cx, cy, r, sa, ea);
    ctx.fillStyle = 'black';
    ctx.fill();
  }
}
// draw in order of back to front
drawHead();
drawLeftEye();
drawRightEye();
drawNose();
drawBody();
drawButtons();
