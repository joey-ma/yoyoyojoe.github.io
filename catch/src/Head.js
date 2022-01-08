class Head {
  constructor(el) {
    this.node = document.createElement('img');
    this.node.setAttribute('id', 'head');
    this.node.setAttribute('src', 'assets/ash.png');
    el.appendChild(this.node);
    // this.rear = null

    // places the body 
    // this.node.style.left = `${(Math.floor(Math.random() * 14)) * 50}px`;
    // this.node.style.top = `${(Math.floor(Math.random() * 14)) * 50}px`;

    this.score = 0 // initial score
    this.scoreboard = document.querySelector('#scoreboard')

    this.currentDirection = '';
    this.SPEED = 250; // ms

    // place ash near the center of the board
    this.node.style.top = "300px";
    this.node.style.left = "300px";

    this.snakeBody = []; // <-- holds the body


    this.wakka = new Audio();
    this.wakka.src = "./src/assets/pacman_chomp.mp3";
    this.wakka.loop = true;
    this.wakka.volume = 0.15;


    this.eat = new Audio();
    this.eat.volume = 0.2;
    this.eat.src = "./src/assets/pacman_eatfruit.wav";

    this.death = new Audio();
    this.death.volume = 0.20;
    this.death.src = "./src/assets/pacman_death.wav";

    setTimeout(this.move.bind(this), this.SPEED);
  }

  move() {
    const head = this.node;
    // this.currentDirection = this.input;
    const direction = this.currentDirection;

    let leftPosition = Number(head.style.left.replace('px', '')); // snake head's x
    let topPosition = Number(head.style.top.replace('px', '')); // snake head's y
    let appleLeft = Number(apple.style.left.replace('px', '')); // apple's x
    let appleTop = Number(apple.style.top.replace('px', '')); // apple's y

    // keep adding a body part
    const body = new Body(head.style.left, head.style.top);
    // push body into array to keep track
    this.snakeBody.push(body);

    if (direction === 'right') {
      head.style.left = `${(leftPosition += 50)}px`;
    } else if (direction === 'left') {
      head.style.left = `${(leftPosition -= 50)}px`;
    } else if (direction === 'down') {
      head.style.top = `${(topPosition += 50)}px`;
    } else if (direction === 'up') {
      head.style.top = `${(topPosition -= 50)}px`;
    }

    // when snake eats apple
    if (leftPosition === appleLeft && topPosition === appleTop) {
      // apple is eaten / remove apple from board
      apple.remove();
      const newApple = new Apple(board);
      this.SPEED -= 5;

      // increment score
      this.score += 500
      this.eat.load();
      this.eat.play();
      scoreboard.innerText = `Score: ${this.score}`
    } else {
      // remove the added body if snake did not eat
      this.snakeBody.shift().node.remove();
    }

    // game over: out of bounds
    if (leftPosition > 650 || leftPosition < 0) {
      this.gameOver();
    } else if (topPosition > 650 || topPosition < 0) {
      this.gameOver();
    };

    // game over: when snake crashes into itself
    for (let i = 0; i < this.snakeBody.length; i++) {
      if (leftPosition === Number(this.snakeBody[i].node.style.left.replace('px', '')) && topPosition === Number(this.snakeBody[i].node.style.top.replace('px', ''))) {
        this.gameOver();
      };
      if (appleLeft === Number(this.snakeBody[i].node.style.left.replace('px', '')) && appleTop === Number(this.snakeBody[i].node.style.top.replace('px', ''))) { //reduce chance of apple spawning where snake is?
        apple.remove();
        new Apple(board);
      };
    }

    //moving the head
    const time = setTimeout(this.move.bind(this), this.SPEED);
  }

  gameOver() {
    setTimeout(() => {
      document.querySelector("#darken").style.display = "block";
      document.querySelector("#gameover").style.display = "block";
    }, 500);

    document.querySelector("#score").innerText = `Score: ${this.score}`;
    // document.querySelector('#head').style.backgroundColor = 'red';
    this.death.play();
    if (this.wakka) this.wakka.pause();
    this.wakka = null;
    clearTimeout(time);
    // bonk.play();
  }

}
