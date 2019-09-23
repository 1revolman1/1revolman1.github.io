const snake = [
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
const food = [];
const MAX_Y = 450;
const MAX_X = 600;
const STEP = 10;

let _snake_direction = null;

snake.forEach(e => {
  const div = document.createElement("div");
  e.link = div;
  div.className = "block";
  div.style.top = `${e.y}px`;
  div.style.left = `${e.x}px`;
  root.appendChild(div);
});

function helpSwitchEndToHead() {
  snake.unshift(snake.pop());
  snake[0].link.style.top = `${snake[0].y}px`;
  snake[0].link.style.left = `${snake[0].x}px`;
}

setInterval(() => {
  if (food.length < 6) {
    const div = document.createElement("div");
    div.className = "food";
    let randX =
      Math.round((Math.random() * (MAX_X - STEP - STEP) + STEP) / STEP) * STEP;
    let randY =
      Math.round((Math.random() * (MAX_Y - STEP - STEP) + STEP) / STEP) * STEP;
    let foodX = food.findIndex(item => item.x == randX);
    let foodY = food.findIndex(item => item.y == randY);
    if (foodX != -1) {
      randX = 0;
      randX =
        Math.round((Math.random() * (MAX_X - STEP - STEP) + STEP) / 10) * 10;
    }
    if (foodY != -1) {
      randY = 0;
      randY =
        Math.round((Math.random() * (MAX_Y - STEP - STEP) + STEP) / 10) * 10;
    }
    food.push({
      x: randX,
      y: randY,
      link: div
    });
    div.style.top = `${food[food.length - 1].y}px`;
    div.style.left = `${food[food.length - 1].x}px`;
    //ВВЕСТИ ФАЙНД В КОНСОЛЬ
    root.appendChild(div);
  }
}, 1000);

window.onkeyup = event => {
  if ([37, 38, 39, 40, 65, 87, 68, 83].includes(event.keyCode)) {
    // console.log(event.keyCode);
    const x = snake[0].x;
    const y = snake[0].y;

    switch (event.keyCode) {
      case 38:
      case 87: // w
        if (_snake_direction == "bottom") return;
        snake[snake.length - 1].x = x;
        snake[snake.length - 1].y = y - STEP >= 0 ? y - STEP : MAX_Y - STEP;
        helpSwitchEndToHead();
        _snake_direction = "top";
        break;
      case 37:
      case 65: // a
        if (_snake_direction == "right") return;
        snake[snake.length - 1].x = x - STEP >= 0 ? x - STEP : MAX_X - STEP;
        snake[snake.length - 1].y = y;
        helpSwitchEndToHead();
        _snake_direction = "left";
        break;
      case 39:
      case 68: // d
        if (_snake_direction == "left") return;
        snake[snake.length - 1].x = x + STEP >= MAX_X ? 0 : x + STEP;
        snake[snake.length - 1].y = y;
        helpSwitchEndToHead();
        _snake_direction = "right";
        break;
      case 40:
      case 83: // s
        if (_snake_direction == "top") return;
        snake[snake.length - 1].x = x;
        snake[snake.length - 1].y = y + STEP >= MAX_Y ? 0 : y + STEP;
        helpSwitchEndToHead();
        _snake_direction = "bottom";
        break;
    }
  }

  document.querySelector(".control-panel").innerHTML = _snake_direction;
};

// console.log(food);
