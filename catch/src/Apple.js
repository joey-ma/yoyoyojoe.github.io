class Apple {
  constructor(el) {
    this.node = document.createElement('img');
    this.node.setAttribute('id', 'apple');

    // const pika = [
    //   './assets/sfx/pikachu.mp3',
    //   './assets/sfx/pika-1.mp3',
    //   './assets/sfx/pika-2.mp3',
    //   './assets/sfx/pika-3.mp3',
    //   './assets/sfx/pika-pika.mp3.mp3',
    //   './assets/sfx/pika-pika-pika-chu.mp3',
    //   './assets/sfx/pika-pika-pika-pika.mp3',
    // ];
    // this.node.setAttribute('src', food[Math.floor(Math.random() * food.length)]);

    this.node.setAttribute('src', 'assets/pokeball.png');

    el.appendChild(this.node);

    this.placeApple();
  }

  // randomize the starting place of apple / pokeball
  placeApple() {
    // set up location of apple
    // since board is 700px x 700px && apple size is 50px x 50px
    this.node.style.left = `${Math.floor(Math.random() * 14) * 50}px`; // needs the px
    this.node.style.top = `${Math.floor(Math.random() * 14) * 50}px`;
  }
}