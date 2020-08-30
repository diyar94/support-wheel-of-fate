import React from 'react';

const YesterdaysEngineers = ({shiftYesterday}) =>
{
    return (
        <section className="mt3-ns mt2 flex-column dn db-ns">
            <div className="flex items-center justify-center">
                <h2 className="w-third pa3 br3 bg-black-30 tc">Yesterday&#x27;s Shifts</h2>
            </div>
            <div className="flex items-center justify-center">
                <p className="w-third tr pr3 flex items-center justify-end">
                    <span className="f4 b">AM &nbsp;</span> {shiftYesterday[0]}
                </p>
                <p className="w-third pl3 flex items-center">
                    <span className="f4 b">PM &nbsp;</span>{shiftYesterday[1]}
                </p>
            </div>
        </section>
    );
};

export default YesterdaysEngineers;
