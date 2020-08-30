import React, {Component} from 'react';
import updateEngineers from '../requests/updateEngineers.js';

import PickEngineers from './PickEngineers';
import YesterdaysEngineers from './YesterdaysEngineers';
import TodaysEngineers from './TodaysEngineers';
import Header from './Header';

import filterEligibleEngineers from '../helpers/filterEligibleEngineers';
import todaysEngineers from '../helpers/todaysEngineers';

const url = 'http://localhost:4000/api/v1';

class App extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            shiftYesterday: [],
            shiftToday: [],
            engineers: []
        };
    }

    async componentDidMount()
    {
        fetch(`${url}/engineers`).then(data => data.json())
                                 .then(res =>
                                 {
                                     this.setState({
                                         engineers: res.engineers,
                                         shiftToday: res.shiftToday,
                                         shiftYesterday: res.shiftYesterday
                                     });
                                     //   console.log(this.state);
                                 });
    }

    selectTodaysEngineers = () =>
    {

        const eligibleEngineersList = filterEligibleEngineers(this.state.engineers, this.state.shiftToday);

        const updatedEngineers = todaysEngineers(eligibleEngineersList, this.state.engineers);

        this.setState({
            engineers: updatedEngineers.engineers,
            shiftToday: updatedEngineers.shiftToday,
            shiftYesterday: this.state.shiftToday
        }, () =>
        {
            updateEngineers(this.state.engineers, this.state.shiftToday, this.state.shiftYesterday);
        });
    };

    render()
    {
        return (
            <div className="">
                <Header
                    title="Shift Selector"
                    PickEngineers={PickEngineers}
                    selectTodaysEngineers={this.selectTodaysEngineers}
                />

                <TodaysEngineers shiftToday={this.state.shiftToday}/>

                {this.state.shiftYesterday && this.state.shiftYesterday.length > 0 &&
                <YesterdaysEngineers shiftYesterday={this.state.shiftYesterday}/>
                }
            </div>

        );
    }
}

export default App;
