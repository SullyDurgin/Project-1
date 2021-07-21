
const getFormFields = require('../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const game = require('../game')
const store = require('./../store') 
const { validate } = require('webpack')

const onSignUp = function (event) {

	event.preventDefault()
	const data = getFormFields(this)
	api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

const onSignIn = function (event) {

	event.preventDefault()
	const form = event.target
	const data = getFormFields(form)
	api.signIn(data).then(ui.onSignInSuccess).catch(ui.onSignInFailure)
}

const onSignOut = function (event) {

  	event.preventDefault()
  	api.signOut().then(ui.onSignOutSuccess).catch(ui.onSignOutFailure)
}

const onNewGame = function (event) {
	event.preventDefault()
	api.newGame().then(ui.onNewGameSuccess).catch(ui.onNewGameFailure)
}

const updateGame = function (event) {
	const clickedBox = event.target.getAttribute('data-box')
	store.gameIndex = event.target.getAttribute('data-box')

	api.updateGame().then(ui.onUpdateGameSuccess).catch(ui.onUpdateGameFailure)
	let gameIndex = store.game.cells[clickedBox]

	if (store.game.cells[clickedBox] === '') {
		store.game.cells[clickedBox] = store.currentPlayer
	}

	if (store.currentPlayer === 'X') {
		store.currentPlayer = 'O'
		$(event.target).text('X')
	} else {
		store.currentPlayer = 'X'
		$(event.target).text('O')
	}
	winnerOfGame()
}

const winnerOfGame = function () {


let winningPlayer = null;

	const checkWinIndexes = [
	[0, 1, 2], //top row
	[3, 4, 5], //middle row
	[6, 7, 8], //bottom row
	[0, 3, 6], //left column
	[1, 4, 7], //middle column
	[2, 5, 8], //right column
	[0, 4, 8], //first diagonal
	[2, 4, 6], // second diagonal
	]

    checkWinIndexes.forEach(function(threeIndexes){

    if (threeIndexes.every((index) => {
        return store.game.cells[index] === 'X'

    })) {
        winningPlayer = 'X'
    }

    if (threeIndexes.every((index) => {
        return store.game.cells[index] === 'O'

    })) {
        winningPlayer = 'O'
    }
})

if (winningPlayer) {
    store.game.over = true
	winner.innerText = 'Winner is player ' + winningPlayer + " !!"
    //console.log('Player ' + winningPlayer + ' WON!')
}
}


module.exports = {
	onSignUp,
	onSignIn,
	onSignOut,
	onNewGame,
	updateGame,
	winnerOfGame,	
}