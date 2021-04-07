const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: String,
    game_id: String,
    year_made: Number
}, { toJSON: {virtuals: true}, toObject: {virtuals: true}, versionKey: false});

/** Join objectives with the game **/
schema.virtual('objectives', {
    ref: 'Objective',
    localField: 'game_id',
    foreignField: 'game_id',
    justOne: false
});

module.exports = mongoose.model('Game', schema, 'game');
