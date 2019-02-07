let container = document.createElement('div');
document.body.appendChild(container);
container.innerHTML = '<h1>Snake.</h1>';
container.style.textAlign = 'center';
container.style.width = '1500px';
container.style.margin = '0 auto';
let frame = document.createElement('div');
container.appendChild(frame);
frame.style.backgroundColor = 'black';
frame.style.width = '500px';
frame.style.height = '500px';
frame.style.marginLeft = '500px';
var x = 1,
    y = 50;
for (let i = 1; i <= 2500; i++) {
    let px = document.createElement('div');
    frame.appendChild(px);
    px.style.width = '10px';
    px.style.height = '10px';
    px.style.cssFloat = 'left';
    if (x == 51) {
        x = 1;
        y--;
    }
    px.setAttribute('posX', x);
    px.setAttribute('posY', y);
    x++;
}

function generateSnake() {
    let posX = Math.round(Math.random() * (50 - 3) + 3);
    let posY = Math.round(Math.random() * (50 - 1) + 1);
    return [posX, posY];
}
let coordinates = generateSnake();
let snake = [document.querySelector('[posX = "' + coordinates[0] + '"][posY = "' + coordinates[1] + '"]'), document.querySelector('[posX = "' + (coordinates[0] - 1) + '"][posY = "' + coordinates[1] + '"]'), document.querySelector('[posX = "' + (coordinates[0] - 2) + '"][posY = "' + coordinates[1] + '"]')];

for (let i = 0; i < snake.length; i++) {
    snake[i].classList.add('snakeBody');
    snake[i].style.backgroundColor = 'green';
}
snake[0].style.backgroundColor = 'yellow'
let mouse;

function createMouse() {
    function generateMouse() {
        let posX = Math.round(Math.random() * (50 - 1) + 1);
        let posY = Math.round(Math.random() * (50 - 1) + 1);
        return [posX, posY];
    }
    let mouseCoordinates = generateMouse();
    mouse = document.querySelector('[posX = "' + mouseCoordinates[0] + '"][posY = "' + mouseCoordinates[1] + '"]');

    while (mouse.classList.contains('snakeBody')) {
        let mouseCoordinates = generateMouse();
        mouse = document.querySelector('[posX = "' + mouseCoordinates[0] + '"][posY = "' + mouseCoordinates[1] + '"]');
    }
    mouse.classList.add('mouse');
    mouse.style.backgroundColor = 'grey';
}
createMouse();

let dicertion = 'right';
let steps = false;
let input = document.createElement('input');
document.body.appendChild(input);
input.style.cssText = "margin: auto;margin - top: 40 px;font - size: 30 px;display: block ";
let score = 0;
input.value = `Your account: ${score}`;

function move() {
    let snakeCoordinates = [snake[0].getAttribute('posX'), snake[0].getAttribute('posY')];
    snake[snake.length - 1].style.backgroundColor = 'black';
    snake[snake.length - 1].classList.remove('snakeBody');
    snake.pop();
    if (dicertion == 'right') {
        if (snakeCoordinates[0] < 50) {
            snake.unshift(document.querySelector('[posX = "' + (+snakeCoordinates[0] + 1) + '"][posY = "' + snakeCoordinates[1] + '"]'));
        } else {
            snake.unshift(document.querySelector('[posX = "1"][posY = "' + snakeCoordinates[1] + '"]'));
        }
    } else if (dicertion == 'left') {
        if (snakeCoordinates[0] > 1) {
            snake.unshift(document.querySelector('[posX = "' + (+snakeCoordinates[0] - 1) + '"][posY = "' + snakeCoordinates[1] + '"]'));
        } else {
            snake.unshift(document.querySelector('[posX = "50"][posY = "' + snakeCoordinates[1] + '"]'));
        }
    } else if (dicertion == 'up') {
        if (snakeCoordinates[1] < 50) {
            snake.unshift(document.querySelector('[posX = "' + snakeCoordinates[0] + '"][posY = "' + (+snakeCoordinates[1] + 1) + '"]'));
        } else {
            snake.unshift(document.querySelector('[posX = "' + snakeCoordinates[0] + '"][posY = "1"]'));
        }
    } else if (dicertion == 'down') {
        if (snakeCoordinates[1] > 1) {
            snake.unshift(document.querySelector('[posX = "' + snakeCoordinates[0] + '"][posY = "' + (snakeCoordinates[1] - 1) + '"]'));
        } else {
            snake.unshift(document.querySelector('[posX = "' + snakeCoordinates[0] + '"][posY = "50"]'));
        }
    }

    if (snake[0].getAttribute('posX') == mouse.getAttribute('posX') && snake[0].getAttribute('posY') == mouse.getAttribute('posY')) {
        let a = snake[snake.length - 1].getAttribute('posX');
        let b = snake[snake.length - 1].getAttribute('posY');
        snake.push(document.querySelector('[posX="' + a + '"][posY="' + b + '"]'));
        createMouse();
        score++;
        input.value = `Your account: ${score}`;
    }

    if (snake[0].classList.contains('snakeBody')) {
        alert('Game over.Your account:' + score);
        clearInterval(interval);
    }

    for (let i = 0; i < snake.length; i++) {
        snake[i].classList.add('snakeBody');
        snake[i].style.backgroundColor = 'green';
        snake[0].style.backgroundColor = 'yellow';
    }
    steps = true;
}
let interval = setInterval(move, 100);

window.addEventListener('keydown', function (e) {
    if (steps == true) {
        if (e.keyCode == 65 && dicertion !== 'right') {
            dicertion = 'left';
            steps = false;
        } else if (e.keyCode == 87 && dicertion !== 'down') {
            dicertion = 'up';
            steps = false;
        } else if (e.keyCode == 68 && dicertion !== 'left') {
            dicertion = 'right';
            steps = false;
        } else if (e.keyCode == 83 && dicertion !== 'up') {
            dicertion = 'down';
            steps = false;
        }
    }
});