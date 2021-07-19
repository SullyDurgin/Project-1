'use strict'

const store = require('./../store')

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

module.exports = {
	onSignUpFailure,
	onSignUpSuccess,
	onSignInFailure,
	onSignInSuccess,
	onSignOutFailure,
	onSignOutSuccess
}