class Body {
  constructor(x, y) {
    this.node = document.createElement("img");
    this.node.classList.add("body");
    this.node.setAttribute('src', 'assets/pikachu.png');

    this.node.style.left = x;
    this.node.style.top = y;

    board.appendChild(this.node)
  }
}
