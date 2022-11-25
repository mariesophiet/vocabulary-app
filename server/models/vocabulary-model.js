const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Vocabulary = new Schema(
    {
        lang_1: { type: String, required: true },
        lang_2: { type: [String], required: true },
        level: { type: Number, required: true },
        repeat: {type: Date, required: true},
        group: [{
            type: String
        }]
    }
)

module.exports = mongoose.model('vocabulary', Vocabulary)