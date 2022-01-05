class Head {
  constructor(el) {
    this.node = document.createElement('div');
    this.node.setAttribute('id', 'head');
    el.appendChild(this.node);
    this.rear = null

    this.score = 0 // initial score
    let scoreboard = document.querySelector('#scoreboard')

    this.input = '';
    this.currentDirection = '';
    this.SPEED = 175; // ms

    this.node.style.top = "300px";
    this.node.style.left = "300px";

    this.snakeBody = []; // <-- holds the body

    this.gameOver = function () {
      setTimeout(() => {
        document.querySelector("#darken").style.display = "block";
        document.querySelector("#gameover").style.display = "block";
      }, 2000)
      document.querySelector("#score").innerText = `Score: ${this.score}`;
      document.querySelector('#head').style.backgroundColor = 'red';
      this.death.play();
      if (this.wakka) this.wakka.pause();
      this.wakka = null;
      clearTimeout(time);
      // bonk.play();
    }

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
    this.currentDirection = this.input;
    const direction = this.currentDirection;

    let topPosition = Number(head.style.top.replace('px', ''));
    let leftPosition = Number(head.style.left.replace('px', ''));
    let appleLeft = Number(apple.style.left.replace('px', ''));
    let appleTop = Number(apple.style.top.replace('px', ''));

    const body = new Body(head.style.left, head.style.top);     //keep adding a body part
    this.snakeBody.push(body);                                //push body into array to keep track

    if (direction === 'right') {
      head.style.left = `${(leftPosition += 50)}px`;
    } else if (direction === 'left') {
      head.style.left = `${(leftPosition -= 50)}px`;
    } else if (direction === 'down') {
      head.style.top = `${(topPosition += 50)}px`;
    } else if (direction === 'up') {
      head.style.top = `${(topPosition -= 50)}px`;
    }

    if (leftPosition === appleLeft && topPosition === appleTop) { //when snake eats apple
      apple.remove(); //apple is eaten
      const newApple = new Apple(board);
      this.SPEED -= 5;

      this.score += 500
      // adds score
      this.eat.load();
      this.eat.play();
      scoreboard.innerText = `Score: ${this.score}`
    } else {
      this.snakeBody.shift().node.remove();                    //remove the added body if snake did not eat
    }

    for (let i = 0; i < this.snakeBody.length; i++) {          //when snake crashes into itself, game over
      if (leftPosition === Number(this.snakeBody[i].node.style.left.replace('px', '')) && topPosition === Number(this.snakeBody[i].node.style.top.replace('px', ''))) {
        this.gameOver();
      }
      if (appleLeft === Number(this.snakeBody[i].node.style.left.replace('px', '')) && appleTop === Number(this.snakeBody[i].node.style.top.replace('px', ''))) { //reduce chance of apple spawning where snake is?
        apple.remove();
        new Apple(board);
      }
    }

    if (leftPosition > 650 || leftPosition < 0) {
      this.gameOver();
    }  //out of bounds
    else if (topPosition > 650 || topPosition < 0) {
      this.gameOver();
    } //out of bounds

    const time = setTimeout(this.move.bind(this), this.SPEED); //moving the head
  }
}
