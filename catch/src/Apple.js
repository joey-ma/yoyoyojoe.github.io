class Apple {
  constructor(el) {
    this.node = document.createElement('img');
    this.node.setAttribute('id', 'apple');
    this.node.setAttribute('src', 'assets/pikachu.png');

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