class Apple {
    constructor(el) {
        this.node = document.createElement('img');
        this.node.setAttribute('id', 'apple');
        const food = ['src/assets/apple.jpg',
            'src/assets/cherry.png', //cherry
            'src/assets/orange.png', //ornage
            'src/assets/lime.png', //lime
            'src/assets/melon.jpg',//watermelon
            'src/assets/strawberry.jpg',//strawberry
            'src/assets/bluecherry.png', //blue cherries
            'src/assets/blueberry.jpg', //blueberry
            'src/assets/peach.png', //peach
            'src/assets/banana.png' //banana
        ]
        this.node.setAttribute('src', food[Math.floor(Math.random() * food.length)]);


        el.appendChild(this.node);

        this.node.style.left = `${(Math.floor(Math.random() * 14)) * 50}px`;
        this.node.style.top = `${(Math.floor(Math.random() * 14)) * 50}px`;
    }
}