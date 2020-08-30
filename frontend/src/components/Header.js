import React from 'react';

const Header = ({title, PickEngineers, selectTodaysEngineers}) =>
{
    return (
        <section className="flex flex-column flex-row-ns pa3 items-center justify-between">
            <h1 className="f3 mv0-ns ttu bb bw1 b--white">{title}</h1>
            <PickEngineers selectTodaysEngineers={selectTodaysEngineers}/>
        </section>
    );
};

export default Header;
