const mongoose = require('mongoose');

const EngineersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'User must have a name'],
        minlength: 4,
        maxlength: 20,
        trim: true,
        unique: true
    },
    shiftsWorked: {
        type: Number
    }

});

const Engineers = mongoose.model('Engineers', EngineersSchema);

module.exports = Engineers;