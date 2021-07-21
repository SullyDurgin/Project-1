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
	$('.box').show()
	$('#sign-out').on()
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

const onNewGameSuccess = (response) => {
	$('#message').text('Play!')
	$('data-box').val(null)
	$('.box').text("")
	console.log(response)
	store.game=response.game
	store.currentPlayer='X'
}

const onNewGameFailure = () => {
	$('#message').text('error with Game Start')
}

const onUpdateGameSuccess = (response) => {
	store.game = response.game
	console.log(store.game)
	
}
	
const onUpdateGameFailure = () => {

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
	onUpdateGameFailure,
	onUpdateGameSuccess

}