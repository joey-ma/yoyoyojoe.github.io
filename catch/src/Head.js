const snakeBody = []; // <-- holds the body

class Head {
  constructor(el) {
    this.node = document.createElement('img');
    this.node.setAttribute('class', 'head');
    this.node.setAttribute('src', 'assets/img/ash.png');
    el.appendChild(this.node);

    this.score = document.getElementById(''); // initial score
    this.scoreboard = document.querySelector('#scoreboard');

    this.input = '';
    this.currentDirection = '';
    this.SPEED = 250; // ms

    // place ash near the center of the gameboard
    this.node.style.top = '300px';
    this.node.style.left = '300px';

    // sfx setup
    this.bonk = new Audio('./assets/sfx/bonk.mp3');
    this.bonk.volume = 0.15;

    this.death = new Audio();
    this.death.volume = 0.15;
    this.death.src = './assets/bgm/145-ending.mp3';

    this.pikaSounds = [
      './assets/sfx/pikachu.mp3',
      './assets/sfx/pika-1.mp3',
      './assets/sfx/pika-2.mp3',
      './assets/sfx/pika-3.mp3',
      './assets/sfx/pika-pika.mp3',
      './assets/sfx/pika-pika-pika-chu.mp3',
      './assets/sfx/pika-pika-pika-pika.mp3',
    ];
    this.pikaSounds.forEach((sfx, i) => {
      this[i] = new Audio(sfx);
    });

    setTimeout(this.move.bind(this), this.SPEED);
  }

  move() {
    const head = this.node;
    this.currentDirection = this.input;
    const direction = this.currentDirection;

    // add a body part continuously
    const bodyPart = new Body(head.style.left, head.style.top);
    // push body into array to keep track
    snakeBody.push(bodyPart);
    // note: there's always one invisible body part (the last one)

    let leftPosition = Number(head.style.left.replace('px', '')); // snake head's x
    let topPosition = Number(head.style.top.replace('px', '')); // snake head's y
    const appleLeft = Number(apple.style.left.replace('px', '')); // apple's x
    const appleTop = Number(apple.style.top.replace('px', '')); // apple's y

    // logic:
    // 1. game over if snake hits border
    // 2. if not, move snake head
    if (direction === 'right') {
      if (leftPosition >= 650) this.gameOver();
      // minusX = head.style.left;
      // minusY = head.style.top;
      head.style.left = `${(leftPosition += 50)}px`;
    }
    if (direction === 'left') {
      if (leftPosition <= 0) this.gameOver();
      // minusX = head.style.left;
      // minusY = head.style.top;
      head.style.left = `${(leftPosition -= 50)}px`;
    }
    if (direction === 'down') {
      if (topPosition >= 650) this.gameOver();
      // minusX = head.style.left;
      // minusY = head.style.top;
      head.style.top = `${(topPosition += 50)}px`;
    }
    if (direction === 'up') {
      if (topPosition <= 0) this.gameOver();
      // minusX = head.style.left;
      // minusY = head.style.top;
      head.style.top = `${(topPosition -= 50)}px`;
    }

    // when snake eats apple
    if (leftPosition === appleLeft && topPosition === appleTop) {
      // apple is eaten / remove apple from gameboard / place newApple / speed up ever so slightly
      apple.remove();

      const newApple = new Apple(gameboard);
      // const { left, top } = newApple.node.style;
      // console.log(`(in Head.js) new apple: [x, y] = [${left}, ${top}]`);

      this.SPEED -= 5;

      // increment score
      this.score += 50;

      // ramdomize a new audio clip each time when capturing a pikachu
      const atRandom = Math.floor(Math.random() * this.pikaSounds.length);
      this.eat = this[atRandom];
      this.eat.volume = 0.2;
      this.eat.play();
      this.scoreboard.innerText = `Score: ${this.score}`; // updates score
    } else {
      // if the snake did not eat apple (as the game continues)
      // remove the added body
      snakeBody.shift().node.remove();
    }

    // game over: when snake crashes into itself
    for (let i = 0; i < snakeBody.length; i++) {
      // identify type of death
      this.tripped = leftPosition === Number(snakeBody[i].node.style.left.replace('px', ''))
        && topPosition === Number(snakeBody[i].node.style.top.replace('px', ''));

      if (this.tripped) {
        this.gameOver();
      }
      if (appleLeft === Number(snakeBody[i].node.style.left.replace('px', ''))
        && appleTop === Number(snakeBody[i].node.style.top.replace('px', ''))) {
        // reduce chance of apple spawning where snake is
        apple.remove();
        new Apple(gameboard);
      }
    }

    // moving the head
    const time = setTimeout(this.move.bind(this), this.SPEED);
  }

  gameOver() {
    // take off the last body part added
    // (the body part generated at the last location of the head)
    snakeBody.pop().node.remove();

    this.bonk.play();

    setTimeout(() => {
      document.querySelector('#darken').style.display = 'block';
      document.querySelector('#gameover').style.display = 'block';
    }, 500);

    // conditional end game message
    if (this.tripped) {
      document.querySelector('#score').innerText = `Score: ${this.score}\nOh no! You tripped over a pokeball!`;
    } else {
      document.querySelector('#score').innerText = `Score: ${this.score}\nOh no! You've run into the wall hard!`;
    }

    const musicPlayer = document.querySelector('#controllersContainer > audio');
    if (musicPlayer) musicPlayer.pause();

    this.death.play();

    clearTimeout(time);
  }
}
