const mongoose = require('mongoose');
const HighScore = require('../models/highscores');
const highscoresToSeed = [
                            {score: 5759, player: "anjali"},
                            {score: 5268, player: "saumya"}
                        ];
module.exports = () => {
    HighScore.find({}, (err, highscores) => {
        if (err) {
            console.log(err)
        } else {
            if (highscores.length == 0) {
                HighScore.create(highscoresToSeed, (err, highscores) => {
                    console.log(highscores)
                })
            }
        }
    })
}