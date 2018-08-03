const Mongoose = require('mongoose')

const gamesSchema = new Mongoose.Schema({
    winner: String,
    movements: [{value: Number}],
    createAt: { type: Date, default: Date.now }
  })
  
const games = Mongoose.model('games',gamesSchema); 

module.exports = games;