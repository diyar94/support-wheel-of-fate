const url = 'http://localhost:4000/api/v1';

const updateEngineers = (engineers, shiftToday, shiftYesterday) =>
{
    console.log(JSON.stringify({engineers, shiftToday, shiftYesterday}));
    return new Promise(() =>
    {
        fetch(`${url}/engineers/update`, {
            method: 'post',
            body: ({engineers, shiftToday, shiftYesterday})
        })
            .then(res =>
            {
                console.log(res);
                console.log('successfully updated');
            })
            .catch(error => error
                //console.error('error occurred updating data');
            );
    });
};
export default updateEngineers;
