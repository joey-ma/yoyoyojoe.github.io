class Head {
  constructor(el) {
    this.node = document.createElement('img');
    this.node.setAttribute('id', 'head');
    this.node.setAttribute('src', 'assets/ash.png');
    el.appendChild(this.node);

    this.score = 0; // initial score
    this.scoreboard = document.querySelector('#scoreboard');

    this.currentDirection = '';
    this.SPEED = 250; // ms

    // place ash near the center of the board
    this.node.style.top = '300px';
    this.node.style.left = '300px';

    this.snakeBody = []; // <-- holds the body

    this.bonk = new Audio('./assets/sfx/bonk.mp3');
    this.bonk.volume = 0.05;

    this.death = new Audio();
    this.death.volume = 0.2;
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
    this.pikaSounds.forEach((el, i) => this[i] = new Audio(el));

    setTimeout(this.move.bind(this), this.SPEED);
  }

  move() {
    const head = this.node;
    const direction = this.currentDirection;

    let leftPosition = Number(head.style.left.replace('px', '')); // snake head's x
    let topPosition = Number(head.style.top.replace('px', '')); // snake head's y
    let appleLeft = Number(apple.style.left.replace('px', '')); // apple's x
    let appleTop = Number(apple.style.top.replace('px', '')); // apple's y

    // keep adding a body part
    const body = new Body(head.style.left, head.style.top);
    // push body into array to keep track
    this.snakeBody.push(body);

    // logic: 
    // 1. game over if snake hits border
    // 2. if not, move snake head
    if (direction === 'right') {
      if (leftPosition >= 650) this.gameOver();
      head.style.left = `${(leftPosition += 50)}px`;
    }
    if (direction === 'left') {
      if (leftPosition <= 0) this.gameOver();
      head.style.left = `${(leftPosition -= 50)}px`;
    } else if (direction === 'down') {
      if (topPosition >= 650) this.gameOver();
      head.style.top = `${(topPosition += 50)}px`;
    } else if (direction === 'up') {
      if (topPosition <= 0) this.gameOver();
      head.style.top = `${(topPosition -= 50)}px`;
    }

    // when snake eats apple
    if (leftPosition === appleLeft && topPosition === appleTop) {
      // apple is eaten / remove apple from board / place newApple / speed up ever so slightly
      apple.remove();
      const newApple = new Apple(board);
      this.SPEED -= 5;

      // increment score
      this.score += 500;

      // ramdomize a new audio clip each time when capturing a pikachu
      const atRandom = Math.floor(Math.random() * this.pikaSounds.length);
      this.eat = this[atRandom];
      this.eat.volume = 0.1;
      this.eat.play();
      scoreboard.innerText = `Score: ${this.score}`; // updates score

    } else {
      // remove the added body if snake did not eat
      this.snakeBody.shift().node.remove();
    }

    // game over: when snake crashes into itself
    for (let i = 0; i < this.snakeBody.length; i++) {
      // identify type of death
      this.tripped =
        leftPosition === Number(this.snakeBody[i].node.style.left.replace('px', ''))
        && topPosition === Number(this.snakeBody[i].node.style.top.replace('px', ''));

      if (this.tripped) {
        this.gameOver();
      }
      if (appleLeft === Number(this.snakeBody[i].node.style.left.replace('px', ''))
        && appleTop === Number(this.snakeBody[i].node.style.top.replace('px', ''))) {
        // reduce chance of apple spawning where snake is
        apple.remove();
        new Apple(board);
      }
    }

    // moving the head
    const time = setTimeout(this.move.bind(this), this.SPEED);
  }

  gameOver() {
    this.bonk.play();

    setTimeout(() => {
      document.querySelector('#darken').style.display = 'block';
      document.querySelector('#gameover').style.display = 'block';
    }, 500);

    // conditional end game message
    if (this.tripped) {
      document.querySelector('#score').innerText = `Score: ${this.score}\nOh no! You tripped over a pokeball and died!`;
    } else {
      document.querySelector('#score').innerText = `Score: ${this.score}`;
    }


    this.death.play();
    if (!!intro) intro.pause();
    if (!!bgm) bgm.pause();
    clearTimeout(time);
  }

}
