import React from 'react';

import morning from '../assets/sunrise.svg';
import afternoon from '../assets/sunset.svg';

const TodaysEngineers = ({shiftToday}) =>
{
    return (
        <section className="mt4-ns mt2 flex flex-column flex-row-ns">

            <div className="w-50-ns flex flex-column items-center">
                <header className="f2 pv3">AM</header>
                <img
                    className={`${new Date().getHours() >= 8 && new Date().getHours() < 13 ? 'animation' : ''} w-50 w-40-ns`}
                    src={morning}
                    alt="sunrise illustration">
                </img>
                <p className="f3">{shiftToday[0]}</p>
            </div>

            <div className="w-50-ns flex flex-column items-center">
                <header className="f2 pv3">PM</header>
                <img
                    className={`${new Date().getHours() >= 13 ? 'animation' : ''} w-50 w-40-ns`}
                    src={afternoon}
                    alt="sunrise illustration">
                </img>
                <p className="f3">{shiftToday[1]}</p>
            </div>

        </section>
    );
};

export default TodaysEngineers;
