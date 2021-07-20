'use strict'

const getFormFields = require('../../lib/get-form-fields')

const api = require('./api')
const ui = require('./ui')
const game = require('../game')
const store = require('./../store')

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

const takeTurn = function (event) {
	const clickedBox = event.target.getAttribute('data-box')
	store.gameIndex = event.target.getAttribute('data-box')

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
//console.log(gameIndex)

	api.takeTurn().then(ui.onTakeTurnSuccess).catch(ui.onTakeTurnFailure)
}

const gameWin = function () {
	let xWin =
		((gameIndex = ['x', 'x', 'x', '', '', '', '', '', '']),
		['x', '', 'x', '', '', 'x', '', '', ''], ["","","","","","","","",""])

	if (xWin = true) {
		console.log('x wins!')
	}



}




module.exports = {
	onSignUp,
	onSignIn,
	onSignOut,
	onNewGame,
	takeTurn,
	
	
	
}
