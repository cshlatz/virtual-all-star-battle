const mongoose = require('mongoose');

const schema = mongoose.Schema({
    game_id: String,
    objective: String,
    score: Boolean,
    par: Number
}, { toJSON: {}, toObject: {}, versionKey: false });

module.exports = mongoose.model('Objective', schema, 'objective');
