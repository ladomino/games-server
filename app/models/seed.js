const mongoose = require('mongoose')
const Game = require('./game')

const db = require('../../config/db')

const startGames = [
    { name: 'Monopoly', company: 'Hasbro', description: 'Board game', players: 2, price: 27.99, educational: true, puzzle: false, family: true},
    { name: 'Puzzle 1000', company: 'Spin Master', description: 'JigSaw puzzle', players: 1, price: 15.95, educational: true, puzzle: true, family: true},
    { name: 'CandyLand', company: 'Hasbro', description: 'Child board game', players: 2, price: 11.99, educational: true, puzzle: false, family: true},
    { name: 'Otrio', company: 'Marbles', description: 'Strategy Based Board game', players: 2, price: 22.65, educational: true, puzzle: false, family: true}
]

// first we connect to the db via mongoose
mongoose.connect(db, {
	useNewUrlParser: true,
})
    .then(() => {
        // then we remove all the pets except the ones that have an owner
        Game.deleteMany({ owner: null })
            .then(deletedGames => {
                console.log('Games deleted: ', deletedGames)
                // then we create using the startGames array
                // we'll use console logs to check if it's working or if there are errors
                Game.create(startGames)
                    .then(newGames => {
                        console.log('Games added: ', newGames)
                        mongoose.connection.close()
                    })
                    .catch(err => {
                        console.log(err)
                        mongoose.connection.close()
                    })
            })
            .catch(error => {
                console.log(error)
                mongoose.connection.close()
            })
    })
    // then at the end, we close our connection to the db
    .catch(error => {
        console.log(error)
        mongoose.connection.close()
    })