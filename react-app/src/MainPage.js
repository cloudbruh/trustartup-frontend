import React from 'react';
import StartupCard from './StartupCard'
import Filters from './Filters'
import Register from './Register'
import Startup from './Startup'
import PersonalArea from './PersonalArea'

class MainPage extends React.Component {

    state = {
        startups: [],
    };

    constructor(props)
    {
        super(props)
        props.onTitleChanged('Лента')
    }

    componentDidMount() {
        fetch('http://localhost:8080/api/feed/api/startupfeed')
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