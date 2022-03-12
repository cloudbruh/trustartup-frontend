import React from 'react';
import StartupCard from './StartupCard'
import Filters from './Filters'
import Register from './Register'
import Startup from './Startup'
import PersonalArea from './PersonalArea'

class MainPage extends React.Component {

    state = {
        startups: [{name: 'Sample name',
                    descriptionShort: 'Sample desc',
                    likes: 100,
                    followers: 200,
                    fundsGoal: 100000}],
    };

    constructor(props)
    {
        super(props)
        props.onTitleChanged('Лента')
    }

    componentDidMount() {
        fetch('/api/feed/api/startupfeed', 
        {method: 'GET',
        headers: {  
          "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"  
        },  
         mode: 'cors'})
          .then(res => res.json())
          .then((result) => {
            this.setState({
                startups: result
            });
          });
      }

    render() {
        return (
            <div className='content mt-10 px-4 mx-auto'>
                    <ul>
                        {this.state.startups.map(startup => {
                            return (
                                <li key={startup.id}><StartupCard startup={startup} /></li>
                            );
                        })}
                    </ul>
            </div>
        )
    }
}

export default MainPage;