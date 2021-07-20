'use strict'

const getFormFields = require('../../lib/get-form-fields')

const api = require('./api')
const ui = require('./ui')
const game = require('../game')

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

const clickedBox = function (event) {
	event.target
	console.log(event.target)
}



module.exports = {
	onSignUp,
	onSignIn,
	onSignOut,
	onNewGame,
	clickedBox,

	
}
