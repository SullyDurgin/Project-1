'use strict'

const config = require('../config')
const store = require('../store')



const signUp = function (data) {
    
	return $.ajax({
		url: 'https://tic-tac-toe-api-development.herokuapp.com/sign-up',
		method: 'POST',
		data: data
	})
}

const signIn = function (data) {

		return $.ajax({
			url: 'https://tic-tac-toe-api-development.herokuapp.com/sign-in',
			method: 'POST',
			data: data
		})
		
 }

 const signOut = function () {

		return $.ajax({
			url: 'https://tic-tac-toe-api-development.herokuapp.com/sign-out',
			method: 'DELETE',
			headers: {
				Authorization: 'Bearer ' + store.user.token
			}
		})
 }

 
 const newGame = function () {

	 return $.ajax({     //returns promise
		 url: 'https://tic-tac-toe-api-development.herokuapp.com/games',
		 method: 'POST',
		 headers: {
				Authorization: 'Bearer ' + store.user.token
		},
		body: {}

	})
}

const takeTurn = function () {

	return $.ajax({
		url:
			'https://tic-tac-toe-api-development.herokuapp.com/games/' +
			store.game._id,
		method: 'PATCH',
		headers: {
			Authorization: 'Bearer ' + store.user.token,
		},
		data: {
			"game": {
				"cell": {
					"index": store.game.cells,
					"value": store.currentPlayer
				},

				"over": false,
			},
		},
	})

}



 module.exports = {
		signUp,
		signIn,
		signOut,
		newGame,
		takeTurn
		
	

 }
