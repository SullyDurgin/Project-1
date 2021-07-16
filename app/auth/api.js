const signUp = function (data) {
    
	return $.ajax({
		url: 'https://tic-tac-toe-api-development.herokuapp.com/sign-up',
		method: 'POST',
		data: data
	})
}
module.exports = {
	signUp,
}
