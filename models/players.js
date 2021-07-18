const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerSchema = new Schema ({
    username: String,
    score: [Scores],
    created_at: Date,
    updated_at: Date
})

const Player = mongoose.model('player', playerSchema);
module.exports = Player;