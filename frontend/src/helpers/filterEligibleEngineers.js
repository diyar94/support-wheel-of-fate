const filterEligibleEngineers = (allEngineers, shiftToday) =>
{
    console.log(allEngineers);
    const newShiftYesterday = shiftToday;

    let meetsCriteria;

    //if some engineers worked less than one shift, select from that pool
    if (allEngineers.some(eng => eng.shiftsWorked < 1))
    {
        meetsCriteria = engineer => !newShiftYesterday.includes(engineer.name) && engineer.shiftsWorked < 1;
    }// all engineers reached the 2 shift limit, reset the shifts_worked count
    else if (allEngineers.every(eng => eng.shiftsWorked === 2))
    {
        return allEngineers.map(engineer =>
        {
            engineer.shiftsWorked = 0;
            return engineer;
        });
    }
    else
    {
        meetsCriteria = engineer => !newShiftYesterday.includes(engineer.name) && engineer.shiftsWorked < 2;
    }
    return allEngineers.filter(meetsCriteria);
};

export default filterEligibleEngineers;