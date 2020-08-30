const todaysEngineers = (eligibleEngineersList, engineersState) =>
{

    const engineers = eligibleEngineersList.map(engineer => engineer.name);

    // let engineers = ["1234", "andrei", "Diyar", "cuvak", "pizdyosh", "huyova"]
    console.log('********');

    const engineersObj = {
        shiftYesterday: [],
        shiftToday: [],
        engineers: []
    };

    const shifts = {
        morning: null,
        afternoon: null
    };

    const selectFirstEngineer = engineers[Math.floor(Math.random() * engineers.length)];
    shifts.morning = selectFirstEngineer;

    if (shifts.morning)
    {
        // remove key of engineer who worked in morning from the pool of eligible engineers
        const morningEng = engineers.indexOf(shifts.morning);
        if (morningEng !== -1)
        {
            engineers.splice(morningEng, 1);
        }
        // then run the function again and assign an engineer to shifts.afternoon
        const selectSecondEngineer = engineers[Math.floor(Math.random() * engineers.length)];
        shifts.afternoon = selectSecondEngineer;
    }

    engineersObj.engineers = engineersState.slice(0);

    // update the shift counts for morning and afternoon
    if (shifts.morning !== '' && shifts.afternoon !== '')
    {
        console.log('inside the if');

        Object.keys(engineersObj.engineers).forEach(key =>
        {
            if (engineersObj.engineers[key].name === shifts.morning)
            {
                engineersObj.engineers[key].shiftsWorked += 1;
            }
            if (engineersObj.engineers[key].name === shifts.afternoon)
            {
                engineersObj.engineers[key].shiftsWorked += 1;
            }
        });
    }

    // update who will work today
    engineersObj.shiftToday.push(shifts.morning);
    engineersObj.shiftToday.push(shifts.afternoon);

    return engineersObj;
};

export default todaysEngineers;
