//PAUSE,INTERFACE MENU,SCORE
let snake = [
  {
    x: 70,
    y: 20
  },
  {
    x: 70,
    y: 30
  },
  {
    x: 80,
    y: 30
  }
];
let GAMEID = [0, 0];
let food = [];
const MAX_Y = 450;
const MAX_X = 600;
const STEP = 10;
let score,
  last_score = -1;
let PAUSE = false;
let _snake_direction = "top";

document.querySelector(".banner").style.display = "none";

function add_snake_to_game_pad() {
  snake.forEach(e => {
    const div = document.createElement("div");
    e.link = div;
    div.className = "block";
    div.style.top = `${e.y}px`;
    div.style.left = `${e.x}px`;
    root.appendChild(div);
  });
  snake[0].link.className = "block snake_head";
}

function helpGenerateRandomPos(max) {
  return 10 * Math.round((Math.random() * (max - STEP)) / 10);
}

function helpSwitchEndToHead(x, y) {
  let foodItem = null;
  food = food.filter(e => {
    if (e.x === x && e.y === y) {
      foodItem = e;
      return false;
    } else return true;
  });
  if (foodItem) {
    foodItem.link.className = "block";
    snake.unshift(foodItem);
    last_score = score;
  } else {
    for (let i = 0; i < snake.length; i++) {
      if (x === snake[i].x && y === snake[i].y) {
        snake.splice(i, snake.length - i).forEach(e => e.link.remove());
        break;
      }
    }
    snake[snake.length - 1].x = x;
    snake[snake.length - 1].y = y;
    snake.unshift(snake.pop());
    snake[0].link.style.top = `${snake[0].y}px`;
    snake[0].link.style.left = `${snake[0].x}px`;
  }
  score = snake.length - 3;
  document.querySelector(".score").innerHTML = last_score + 1;
  snake[0].link.className = "block snake_head";
  snake[1].link.className = "block";
}

function game_start() {
  (score = 0), (last_score = -1), (food = []);
  snake = [
    {
      x: 70,
      y: 20
    },
    {
      x: 70,
      y: 30
    },
    {
      x: 80,
      y: 30
    }
  ];
  add_snake_to_game_pad();
  GAMEID[0] = setInterval(() => {
    const x = snake[0].x;
    const y = snake[0].y;
    if (last_score >= score) {
      gamer_die();
    }
    if (!PAUSE) {
      switch (KEY_CODE) {
        case 87: // w
          if (_snake_direction == "bottom") return;
          helpSwitchEndToHead(x, y - STEP >= 0 ? y - STEP : MAX_Y - STEP);
          _snake_direction = "top";
          break;
        case 65: // a
          if (_snake_direction == "right") return;
          helpSwitchEndToHead(x - STEP >= 0 ? x - STEP : MAX_X - STEP, y);
          _snake_direction = "left";
          break;
        case 68: // d
          if (_snake_direction == "left") return;
          helpSwitchEndToHead(x + STEP >= MAX_X ? 0 : x + STEP, y);
          _snake_direction = "right";
          break;
        case 83: // s
          if (_snake_direction == "top") return;
          helpSwitchEndToHead(x, y + STEP >= MAX_Y ? 0 : y + STEP);
          _snake_direction = "bottom";
          break;
      }
    }
    document.querySelector(
      ".control-panel .direction"
    ).innerHTML = _snake_direction;
  }, 500);
  GAMEID[1] = setInterval(() => {
    if (food.length < 6) {
      const div = document.createElement("div");
      div.className = "food";
      const randX = helpGenerateRandomPos(MAX_X);
      const randY = helpGenerateRandomPos(MAX_Y);
      food.push({
        x: randX,
        y: randY,
        link: div
      });
      div.style.top = `${food[food.length - 1].y}px`;
      div.style.left = `${food[food.length - 1].x}px`;
      root.appendChild(div);
    }
  }, 1000);
}
game_start();
let KEY_CODE = 87;
window.onkeydown = event => {
  if ([32, 37, 38, 39, 40, 65, 87, 68, 83].includes(event.keyCode)) {
    if (KEY_CODE === 87 && event.keyCode === 83) return;
    if (KEY_CODE === 83 && event.keyCode === 87) return;
    if (KEY_CODE === 65 && event.keyCode === 68) return;
    if (KEY_CODE === 68 && event.keyCode === 65) return;
    if (event.keyCode === 32) {
      PAUSE = true;
      return;
    }
    if (event.keyCode !== 32) {
      PAUSE = false;
    }
    KEY_CODE = event.keyCode;
  }
};

document.querySelector(".btn").addEventListener("click", function(event) {
  console.log(event.target);
  document.querySelector(".banner").style.display = "none";
  game_start();
});
function clear_game_pad() {
  let el = document.querySelectorAll("#root *");
  el.forEach(function(elem) {
    elem.parentNode.removeChild(elem);
  });
}
function gamer_die() {
  clearInterval(GAMEID[0]);
  clearInterval(GAMEID[1]);
  document.querySelector(".banner").style.display = "flex";
  document.querySelector(".banner").style.top = "0";
  document.querySelector(".banner").style.left = "0";
  document.querySelector(
    ".banner p"
  ).innerText = `It's your final direction. You score: ${last_score +
    1} Please restart😜`;
  clear_game_pad();
}
