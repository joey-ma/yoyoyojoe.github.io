# Catch

Snake is one of the [first video game genres](https://en.wikipedia.org/wiki/Snake_(video_game_genre)).
Catch, a browser based version of the classic snake game, is created using an understanding of OOP and DOM manipulation to create this dynamic, single-page app. 
Hope you'll enjoy!

## Learning objectives

- Using JavaScript to change the look and behavior of the DOM
- React to user input
- Utilize object-oriented programming

## Challenges

### Building Snake

1. The **snake** is consisted of two files, `Head.js` & `Body.js`, with **Apple** consisting of, well, `Apple.js`.

  - Head
  - Body
  - Apple

Because each of the files is included in a script tag on index.html, these three classes are available to our main.js file (which is included AFTER the other script tags). To access classes (or instances of classes) from other classes, experiment leaving out the `var`, `let`, or `const` keywords. *Always be careful when messing with the global scope!

1. Head Class

   - [ ] Make the head of the snake be able to turn based on the arrow keys
   - [ ] When the head of the snake reaches a border, end the game

1. Apple Class

   - [ ] The apple should appear randomly on the screen
   - [ ] The apple should appear within the size of the board
   - [ ] Remove the apple when the head of the snake reaches the apple
   - [ ] Another apple should appear on the screen
   - [ ] The apple should not appear on the snake

## Extension Challenges

1. Head Class

   - [ ] The head of the snake should not be able to move backwards

1. Body Class

   - [ ] Add a segment to the snake when the head of the snake reaches an apple
   - [ ] End the game when the snake runs into its own segment

1. Make it your own!

   - [ ] Once you've gotten the core functionality down, feel free to have fun! Modify the functionality, look, even sound of your game. Get creative!

1. jQuery
   - [ ] Refactor your code with jQuery!

## Testing

While we can certainly write tests for this unit, the more intuitive approach is to try playing the game by opening `index.html` in your browser.
