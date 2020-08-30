const Engineers = require('../models/Engineers');
const AppError = require('../utils/appError');
const Shifts = require('../models/Shifts');


exports.createEngineers = async (req, res, next) =>
{
    const result = await Engineers.create(req.body);

    if (!result)
    {
        return next(new AppError('Could not create! Something went wrong!'));
    }

    res.status(201).json({
        result
    });
};

exports.getEngineers = async (req, res) =>
{

    const engineers = await Engineers.find({}, {__v: 0});

    if (!engineers)
    {
        res.send('something went wrong');
    }
    else
    {
        const shifts = await Shifts.find({}, {__v: 0});
        return res.json({
            engineers: engineers,
            shiftToday: shifts[0].shiftToday,
            shiftYesterday: shifts[0].shiftYesterday
        });
    }

};

exports.updateEngineers = async (req, res) =>
{
    const {engineers, shiftToday, shiftYesterday} = req.body;

    //  console.log(engineers); are undefined

    console.log(engineers);
    if (engineers)
    {
        const query = await Engineers.findOneAndUpdate({
                name: `${engineers.name}`
            }, {
                $set: {name: `${engineers.name}`, shiftsWorked: `${engineers.shiftsWorked}`}
            }
        );

        console.log(query);
        console.log('I am here');

        if (!query)
        {
            res.send('error');
        }
        else
        {

            const shiftsQuery = await Shifts.findOneAndUpdate({_id: '5f49180a42ec360c3cb3113a'}, {
                $set: {
                    shiftToday: shiftToday,
                    shiftYesterday: shiftYesterday
                }
            }, {new: true});
            if (shiftsQuery)
            {
                res.send({'status': 'Success'});
            }
        }
    }
    else
    {
        res.send('NO more eligible engineers');
    }

};