'use strict'

const config = require('../config')
const store = require('../store')

const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: data
  })
}

const signOut = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const newGame = function () {
	 return $.ajax({ // returns promise
		 url: config.apiUrl + '/games',
		 method: 'POST',
		 headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    body: {}

  })
}

const updateGame = function () {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game._id,

    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: store.gameIndex,
          value: store.currentPlayer
        },

        over: store.game.over
      }
    }
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  newGame,
  updateGame

}
