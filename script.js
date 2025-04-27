const gridEl = document.getElementById('grid');
const findBtn = document.getElementById('findBtn');
const resetBtn = document.getElementById('resetBtn');
const speedSlider = document.getElementById('speedSlider');
const speedVal = document.getElementById('speedVal');
const sizeSelect = document.getElementById('sizeSelect');

let ROWS = +sizeSelect.value;
let COLS = ROWS;
let speed = +speedSlider.value;
let cells = [];
let walls = [];
let start = { r: 0, c: 0 };
let end = { r: ROWS - 1, c: COLS - 1 };

sizeSelect.onchange = () => {
  ROWS = COLS = +sizeSelect.value;
  start = { r: 0, c: 0 };
  end = { r: ROWS - 1, c: COLS - 1 };
  buildGrid();
};

function buildGrid() {
  gridEl.style.gridTemplateColumns = `repeat(${COLS}, 24px)`;
  gridEl.style.gridTemplateRows = `repeat(${ROWS}, 24px)`;
  gridEl.innerHTML = '';
  cells = [];
  walls = [];
  for (let r = 0; r < ROWS; r++) {
    cells[r] = [];
    walls[r] = [];
    for (let c = 0; c < COLS; c++) {
      const div = document.createElement('div');
      div.classList.add('cell');
      if (r === start.r && c === start.c) div.classList.add('start');
      else if (r === end.r && c === end.c) div.classList.add('end');
      else {
        div.addEventListener('click', () => {
          walls[r][c] = !walls[r][c];
          div.classList.toggle('wall');
        });
      }
      gridEl.appendChild(div);
      cells[r][c] = div;
      walls[r][c] = false;
    }
  }
}

async function findPath() {
  // Reset
  for (let r = 0; r < ROWS; r++)
    for (let c = 0; c < COLS; c++)
      cells[r][c].classList.remove('visited', 'path');

  const queue = [{ ...start }];
  const prev = Array.from({ length: ROWS }, () => Array(COLS).fill(null));
  const visited = Array.from({ length: ROWS }, () => Array(COLS).fill(false));
  visited[start.r][start.c] = true;

  const dirs = [
    { dr: -1, dc: 0 },
    { dr: 1, dc: 0 },
    { dr: 0, dc: -1 },
    { dr: 0, dc: 1 }
  ];

  while (queue.length) {
    const { r, c } = queue.shift();
    if (r === end.r && c === end.c) break;
    for (let { dr, dc } of dirs) {
      const nr = r + dr, nc = c + dc;
      if (
        nr >= 0 && nr < ROWS &&
        nc >= 0 && nc < COLS &&
        !visited[nr][nc] &&
        !walls[nr][nc]
      ) {
        visited[nr][nc] = true;
        prev[nr][nc] = { r, c };
        queue.push({ r: nr, c: nc });
        cells[nr][nc].classList.add('visited');
        await sleep(speed);
      }
    }
  }

  if (!prev[end.r][end.c]) {
    alert('No path found!');
    return;
  }

  let curr = end;
  while (curr.r !== start.r || curr.c !== start.c) {
    cells[curr.r][curr.c].classList.add('path');
    curr = prev[curr.r][curr.c];
    await sleep(speed / 2);
  }
}

function sleep(ms) {
  return new Promise(res => setTimeout(res, ms));
}

findBtn.onclick = findPath;
resetBtn.onclick = buildGrid;
speedSlider.oninput = () => {
  speed = +speedSlider.value;
  speedVal.textContent = `${speed}ms`;
};

speedVal.textContent = `${speed}ms`;
buildGrid();
