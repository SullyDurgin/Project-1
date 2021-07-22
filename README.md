# Tic-Tac-Toe (Project-1)

This application is a Tic-Tac-Toe, SPA (single-page application) that is written in HTML, CSS & JavaScript. This application allows the user to create a log in and play a game of tic-tac-toe. I wanted to complete this project in order to prove to myself that I am capable of doing something like this. It is hard to see how much you have learned until you put your skills and knowledge to the test. I am proud of what I have made even if it is a little messy and disorganized. It works!

## Link 

[Deployed Tic-Tac-Toe (Project-1)]( https://sullydurgin.github.io/Project-1/)

## Planning

- This project is the first full working application I have made using JavaScript.
- This project allows for authentication (sign-up, sign-in, sign-out). This was pretty straight    forward because we handled most of it in class.
- I then decided to make a board in CSS 
- My first major struggle was figuring out how to make the boxes click, I was able to add classes to each of the boxes in HTML and then add an event listener in jQuery
- I made the game button, which easy because of the experience with submit buttons in authentication 
- I spent a lot of time writing what I wanted to do in JavaScript out in English first. For example, when trying to come up with how to play the game I knew that I had an empty array that represented the game board. I numbered out all of the squares on the board and wrote out what combinations in the array would be considered a win. I ended up using .forEach  to take those combos and see if any matched the combos that were played.
- After getting the game to work for winning combinations (which took forever) figuring out how to make the game a tie came super easy, I was proud of myself.
- I spent a little time styling trying to make everything readable and more aesthetically pleasing.
- My last big hurdle was making the board unclickable after a game was over. I started by trying to .addClass with jQuery but I kept breaking things so I had to step away. I finally ended up figuring out a super easy solution. I already had my clicked box to equal an empty string so that the empty boxes would not be clicked, so I just added to that with && !store.game.over.
- I finished up by hiding and showing features when they should be seen or hidden.


### User Stories

-	As a user I want to sign up/in
-	As a user I want to start a new game
-	As a user I want to play a game
-	As a user I want to see who won the game
-	As a user I want to be able to restart and play again
-	As a user I want to be able to sign out when finished

### Wireframe

![PC: Wireframe](https://i.ibb.co/w0KxKmH/Screen-Shot-2021-07-14-at-7-07-44-PM.png)
![Mobile: Wireframe](https://i.ibb.co/LC5R2V3/Screen-Shot-2021-07-14-at-7-06-43-PM.png)





