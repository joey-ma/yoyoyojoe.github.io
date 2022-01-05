document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
    const board = document.querySelector('#board');


    const head = new Head(board);
    const apple = new Apple(board);

    let intro = new Audio();
    intro.volume = 0.20;
    intro.src = "./src/assets/pacman_beginning.wav";

    body.addEventListener('keydown', (e) => {
        if (e.code === 'ArrowLeft' && head.currentDirection !== 'right') {
            head.input = 'left';
            head.node.style.border = "1px solid black";
            head.node.style.borderLeft = "5px solid #a05740";
            if (head.wakka) head.wakka.play();
            if (intro) intro.play();
            intro = null;
        } else if (e.code === 'ArrowRight' && head.currentDirection !== 'left') {
            head.input = 'right';
            head.node.style.border = "1px solid black";
            head.node.style.borderRight = "5px solid #a05740";
            if (head.wakka) head.wakka.play();
            if (intro) intro.play();
            intro = null;
        } else if (e.code === 'ArrowDown' && head.currentDirection !== 'up') {
            head.input = 'down';
            head.node.style.border = "1px solid black";
            head.node.style.borderBottom = "5px solid #a05740";
            if (head.wakka) head.wakka.play();
            if (intro) intro.play();
            intro = null;
        } else if (e.code === 'ArrowUp' && head.currentDirection !== 'down') {
            head.input = 'up';
            head.node.style.border = "1px solid black";
            head.node.style.borderTop = "5px solid #a05740";
            if (head.wakka) head.wakka.play();
            if (intro) intro.play();
            intro = null;
        }
    });

    document.querySelector("#again").addEventListener('click', () => {
        window.location.reload();
    });
});



//better game over screen

//score board?

