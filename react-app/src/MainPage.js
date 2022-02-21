import React from 'react';
import Card from './Card'
import Filters from './Filters'
import Register from './Register'
import Startup from './Startup'
import PersonalArea from './PersonalArea'

class MainPage extends React.Component {

    state = {
        title: 'Лента'
    }
    render() {
        return (
            <div className='content mt-10 mx-10 flex flex-row'>
                    <ul>
                        <li><Card/></li>
                    </ul>
                    <Filters/>
            </div>
        )
    }
}

export default MainPage;