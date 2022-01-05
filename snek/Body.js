class Body {
  constructor(left, top) {
    this.node = document.createElement("div");
    this.node.classList.add("body");

    this.node.style.left = left;
    this.node.style.top = top;

    board.appendChild(this.node)
  }
}
