class Apple {
  constructor(el) {
    this.node = document.createElement('img');
    this.node.setAttribute('id', 'apple');
    const food = [
      './assets/fruits/red-apple_1f34e.png', // red apple
      './assets/fruits/green-apple_1f34f.png', // green apple
      './assets/fruits/avocado_1f951.png', // avocado
      './assets/fruits/banana_1f34c.png', // banana
      './assets/fruits/blueberries_1fad0.png', // blueberries
      './assets/fruits/cherries_1f352.png', // cherries
      './assets/fruits/grapes_1f347.png', // grapes
      './assets/fruits/kiwi-fruit_1f95d.png', // kiwi fruit
      './assets/fruits/mango_1f96d.png', // mango
      './assets/fruits/melon_1f348.png', // melon
      './assets/fruits/peach_1f351.png', // peach
      './assets/fruits/pear_1f350.png', // pear
      './assets/fruits/strawberry_1f353.png', // strawberry
      './assets/fruits/tangerine_1f34a.png', // tangerine
      './assets/fruits/tomato_1f345.png', // tomato
    ];
    this.node.setAttribute('src', food[Math.floor(Math.random() * food.length)]);

    el.appendChild(this.node);

    this.node.style.left = `${(Math.floor(Math.random() * 14)) * 50}px`;
    this.node.style.top = `${(Math.floor(Math.random() * 14)) * 50}px`;
  }
}