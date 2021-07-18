const express = require('express');
const app = express();
const fs = require('fs');

const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/build'));

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/maze-game')

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, authorization");
    next();
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
    console.log('Connected to db');
});

const seedHighScores = require('./seeds/highscores');
seedHighScores();

const HighScore = require('./models/highscores');

app.get('/highscores', (req, res) => {
    HighScore
        .find({})
        .sort({score: -1})
        .limit(10)
        .exec((err, highscores) => {
            if (!err) {
                console.log(highscores);
                res.json(highscores);
            } else {
                console.log("There was an error grabbing all highscore objects.");
                res.status(500).send(err);
            }
        })
})

app.post('/highscores', (req, res) => {
    const newHighScore = HighScore(req.body);
    console.log(req.body);
    newHighScore.save((err, highscore) => {
        if (!err) {
            console.log("The following highscore object was saved " + highscore);
            res.json(highscore);
        } else {
            console.log("There was an error saving this highscore object.");
            res.status(500).send(err);
        }
    })
})

app.listen(PORT, function() {
    console.log("Listening on port:%s", PORT)
    console.log("Stop with Ctrl+C");
});