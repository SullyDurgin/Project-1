// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events.js')

$(() => { //run these things immediately (jquery)

  $('#sign-up').on('submit', authEvents.onSignUp) //get the sign up element, .on (register an event handler), (what even to use 'submit' and what function to call 'authEvents.onSignUp')
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').hide()
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#new-game').hide()
  $('#new-game').on('submit', authEvents.onNewGame)
  $('.box').hide()
  $('.box').one('click', authEvents.updateGame) //when page loads find all .box and add click handler
  
})
