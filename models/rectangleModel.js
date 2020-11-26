const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rectangleSchema = new Schema({
    width: {
        type: Number,
        required: true
    },
    height: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        required: true
    }
});

const Rectangle = mongoose.model('rectangle', rectangleSchema);

module.exports = Rectangle;