const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const highScoreSchema = new Schema ({
    score: Number,
    player: String,
    created_at: Date,
    updated_at: Date
})

highScoreSchema.pre('save', function(next) {
    const currentDate = new Date();
    this.updated_at = currentDate;
    if (!this.created_at) {
        this.created_at = currentDate;
    }
    next();
});

const HighScore = mongoose.model('highscore', highScoreSchema);
module.exports = HighScore;