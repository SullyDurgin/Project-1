'use strict'

const config = require('../config')
const store = require('../store')



const signUp = function (data) {
    
	return $.ajax({
		url: apiUrl + '/sign-up',
		method: 'POST',
		data: data
	})
}

const signIn = function (data) {

		return $.ajax({
			url: apiUrl + '/sign-in',
			method: 'POST',
			data: data
		})
		
 }

 const signOut = function () {

		return $.ajax({
			url: apiUrl + '/sign-out',
			method: 'DELETE',
			headers: {
				Authorization: 'Bearer ' + store.user.token
			}
		})
 }

 
 const newGame = function () {

	 return $.ajax({     //returns promise
		 url: apiUrl + '/games',
		 method: 'POST',
		 headers: {
				Authorization: 'Bearer ' + store.user.token
		},
		body: {}

	})
}

const updateGame = function () {

	return $.ajax({
		url:
			apiUrl + '/games/' +
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
		updateGame
		
	

 }
