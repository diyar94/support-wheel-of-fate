const Shifts = require('../models/Shifts');
const AppError = require('../utils/appError');

exports.createShift = async (req, res, next) =>
{
    const result = await Shifts.create(req.body);

    if (!result)
    {
        return next(new AppError('Could not create! Something went wrong!'));
    }

    res.status(201).json({
        status: 'Success',
        data: result
    });
};

exports.getShifts = async (req, res, next) =>
{
    const doc = await Shifts.find({}, {__v: 0});

    if (!doc)
    {
        res.send('Somethng went wrong');
    }
    res.send({
        result: doc
    });
};


