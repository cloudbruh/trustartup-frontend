import React from 'react';
import StartupCard from './StartupCard'
import Filters from './Filters'
import * as config from '../helpers/config';

class MainPage extends React.Component {

    state = {
        startups: [],
        canLoadMore: true,
        offset: 0,
        isLoading: false,
    };

    componentDidMount = () => {
        this.props.onTitleChanged('Лента');
        this.loadData();
    }

    loadData = () => {
        if (this.state.isLoading)
            return;

        this.setState({
            isLoading: true
        });
        fetch(config.url + '/api/feed/api/startupfeed?offset=' + this.state.offset, {
            headers: {
                'Authorization': `Bearer ${window.token}`
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
                    {this.state.startups.map((startup,index) => {
                        return (
                            <li key={startup.id} ><StartupCard startup={startup} onStartupChange={startup => {
                                this.setState(prevState => {
                                    prevState.startups[index] = startup
                                    return {
                                        startups: prevState.startups,
                                    }
                                })
                            }} /></li>
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