import React from 'react';
import StartupCard from './StartupCard'
import Filters from './Filters'
import Register from './Register'
import Startup from './Startup'
import PersonalArea from './PersonalArea'

class MainPage extends React.Component {

    state = {
        startups: [],
        canLoadMore: true,
        offset: 0,
        isLoading: false,
    };

    constructor(props)
    {
        super(props)
        props.onTitleChanged('Лента')
        this.state.token = window.cookie.get('token')

        this.loadData = this.loadData.bind(this);
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        if (this.state.isLoading) {
            return;
        }

        this.setState({
            isLoading: true
        });
        fetch('/api/feed/api/startupfeed?offset=' + this.state.offset, {
            headers: {
                'Authorization': `Bearer ${this.state.token}`
            },
        })
        .then(res => res.json())
        .then((result) => {
            this.setState({
                startups: this.state.startups.concat(result),
                canLoadMore: result.length > 0,
                offset: this.state.offset + result.length,
                isLoading: false,
            });
        });
    }

    render() {
        return (
            <div className='content mt-10 px-4 mx-auto'>
                <ul>
                    {this.state.startups.map(startup => {
                        return (
                            <li key={startup.id}><StartupCard startup={startup} token={this.state.token} /></li>
                        );
                    })}
                </ul>
                {(this.state.isLoading && (
                    <div className='mx-auto my-5 text-xl text-center'>Загрузка</div>
                )) || (this.state.canLoadMore && (
                    <button onClick={this.loadData} className='mx-auto my-5 p-2 block rounded-xl text-xl text-center bg-gray-200 hover:bg-blue hover:text-white'>Загрузить больше</button>
                ))}
            </div>
        )
    }
}

export default MainPage;