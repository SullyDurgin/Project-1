'use strict'

const store = require('./../store')


const markBox = function (event) {
	$('.box').on('click', events.clickedBox)
}

const onSignUpSuccess = (response) => {
    $('#message').text(`Thank you for signing up ${response.user.email}`)
	console.log(response)
	$('#sign-up').trigger('reset')
}
const onSignUpFailure = () => {
	$('#message').text('Sign up failure')
	$('#sign-up').trigger('reset')
}
const onSignInSuccess = (response) => {
	$('#message').text(`Now signed in as ${response.user.email}`)
	console.log(response)
	$('#sign-in').trigger('reset')
	$('#new-game').show()
	$('#game-board').show()
	
	store.user = response.user
}
const onSignInFailure = () => {
	$('#message').text('Sign in failure')
	$('#sign-in').trigger('reset')
}

const onSignOutSuccess = (error) => {
	$('#message').text('Signed out successfully')
	$('form').trigger('reset')
	
}

const onSignOutFailure = (error) => {
	$('#message').text('error on sign out')
	$('form').trigger('reset')
}

const onNewGameSuccess = () => {
	$('#message').text('Play!')
	
}

const onNewGameFailure = () => {
	$('#message').text('error with Game Start')
}


module.exports = {
	onSignUpFailure,
	onSignUpSuccess,
	onSignInFailure,
	onSignInSuccess,
	onSignOutFailure,
	onSignOutSuccess,
	onNewGameFailure,
	onNewGameSuccess,

}