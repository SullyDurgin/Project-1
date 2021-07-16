const onSignUpSuccess = (response) => {
    
	$('#message').text(`Thank you for signing up ${response.user.email}`)
	console.log(response)
	$('#sign-up').trigger('reset')
}
const onSignUpFailure = () => {
	$('#message').text('Sign up failure')
	$('#sign-up').trigger('reset')
}

module.exports = {
  onSignUpFailure,
  onSignUpSuccess,
}