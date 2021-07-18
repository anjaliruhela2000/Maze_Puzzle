const Player = require('../models/players');
const playersToSeed = [
    {username: "anjali", scores: []},
    {username: "saumya", scores: []}
]

module.exports = () => {
    Player.find({}, (err, players) => {
        if (err) {
            console.log(err)
        } else {
            if (players.length === 0) {
                Player.collection.save(playersToSeed, (err, players) => {
                    console.log(players)
                })
            }
        }
    })
}