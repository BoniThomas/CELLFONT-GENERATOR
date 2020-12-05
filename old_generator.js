const canvas = document.getElementById("c");
const ctx = canvas.getContext("2d");

let currentLetter = "A";

function random(min, max) {
  return min + Math.random() * (max - min);
}

let columnWidths = [127.9968, 127.9968, 127.9968, 127.9968, 127.9968];
let rowHeights = [31.5069, 31.5069, 31.5069, 31.5069, 31.5069];

function drawLetter(letter) {
  const rows = font[letter].split("\n").slice(1);
  // console.log(rows);

  ctx.fillStyle = "red";
  let y = 0;
  for (let rowIndex = 0; rowIndex < 5; rowIndex++) {
    const row = rows[rowIndex];
    const rowHeight = rowHeights[rowIndex];
    let x = 0;
    for (let columnIndex = 0; columnIndex < 5; columnIndex++) {
      const cell = row[columnIndex];
      const columnWidth = columnWidths[columnIndex];
      if (cell === "#") {
        // console.log(x * columnWidth, y * rowHeight);
        ctx.fillRect(x, y, columnWidth, rowHeight);
      }
      x += columnWidth;
    }

    y += rowHeight;
  }
}

function drawGridLines() {
  ctx.fillStyle = "gray";

  // Teken de gridlijnen van de rijen
  let y = 0;
  for (let rowIndex = 0; rowIndex < 5; rowIndex++) {
    const rowHeight = rowHeights[rowIndex];
    ctx.fillRect(0, y, canvas.width, 1);
    y += rowHeight;
  }
  ctx.fillRect(0, y, canvas.width, 1);

  // Teken de gridlijnen van de kolommen
  let x = 0;
  for (let columnIndex = 0; columnIndex < 5; columnIndex++) {
    const columnWidth = columnWidths[columnIndex];
    ctx.fillRect(x, 0, 1, canvas.height);
    x += columnWidth;
  }
  ctx.fillRect(x, 0, 1, canvas.height);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawGridLines();
  drawLetter(currentLetter);
}

function chooseLetter(letter) {
  console.log("choose letter", letter);
  currentLetter = letter;
  draw();
}

function randomizeGrid() {
  columnWidths = [
    random(5, 100),
    random(5, 100),
    random(5, 100),
    random(5, 100),
    random(5, 100),
  ];
  rowHeights = [
    random(5, 100),
    random(5, 100),
    random(5, 100),
    random(5, 100),
    random(5, 100),
  ];
  draw();
}

draw();
