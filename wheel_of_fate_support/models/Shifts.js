const mongoose = require('mongoose');


const ShiftsSchema = new mongoose.Schema({
    shiftToday: {
        type: Array,
        required: [true, 'Specify shift name(for today)']
    },

    shiftYesterday: {
        type: Array,
        maxItems: 2

    }
});

const Shifts = mongoose.model('Shifts', ShiftsSchema);

module.exports = Shifts;