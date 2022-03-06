import React from 'react';
import Card from './Card'
import Filters from './Filters'
import Register from './Register'
import Startup from './Startup'
import PersonalArea from './PersonalArea'

class MainPage extends React.Component {

    constructor(props)
    {
        super(props)
        props.onTitleChanged('Лента')
    }
    render() {
        return (
            <div className='content mt-10 px-4 mx-auto'>
                    <ul>
                        <li><Card/></li>
                    </ul>
            </div>
        )
    }
}

export default MainPage;