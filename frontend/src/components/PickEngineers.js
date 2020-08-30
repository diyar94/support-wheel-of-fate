import React from 'react';

const PickEngineers = ({selectTodaysEngineers}) =>
{
    return (
        <div
            onClick={() => selectTodaysEngineers()}
            className="grow f4 pv3 pa3 bg-black-30 tc pointer br3 ttu b">
            Pick Engineers
        </div>
    );
};

export default PickEngineers;
