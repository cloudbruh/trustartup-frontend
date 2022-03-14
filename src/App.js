import React from 'react';
import Register from './components/Register';
import Startup from './components/Startup';
import PersonalArea from './components/PersonalArea';
import AddStartup from './components/AddStartup';
import AddPost from './components/AddPost';
import MainPage from './components/MainPage';
import Login from './components/Login';
import ModeratorPage from './components/ModeratorPage';
import RequestRole from './components/RequestRole';
import RequestModeration from './components/RequestModeration';
import {
    Routes,
    Route,
    Link
} from 'react-router-dom';
import './helpers/cookie';
import * as config from './helpers/config';

class App extends React.Component {

    state = {
        title: 'Trustartup',
        user: undefined,
        authorized: false,
        name: undefined,
        surname: undefined
    }

    constructor(props) {
        super(props);
        this.init();
    }

    handleTitleChange = (title) => {
        this.setState({ title: title });
    }

    handleExit = () => {
        window.cookie.remove('token');
        document.location.reload();
    }

    async init() {
        if (!window.token)
            return;

        let response = await fetch(config.url + '/api/business/current_user', {
            headers: {
                Authorization: 'Bearer ' + window.token
            }
        })
        let data = await response.json()
        if (!response.ok) {
            return;
        }
        this.setState({
            user: data,
        })
    }

    handleAuthorization = async (token) => {
        window.cookie.set('token', token);
        window.token = token;
        let response = await fetch(config.url + '/api/business/current_user', {
            headers: {
                Authorization: 'Bearer ' + window.token,
            }
        })
        let data = await response.json();
        this.setState({
            user: data,
        })
    }
    render() {
        return (
            <>
                <header className='top-bar bg-blue '>
                    <div className='flex flex-row items-center h-16'>
                        <div className='basis-1/6'>
                            <Link to='/'><div className='pl-10 text-left font-bold text-white text-xl'>Trustartup</div></Link>
                        </div>
                        <div className='basis-2/3'>
                            <div className='title text-center font-bold text-white text-xl'>{this.state.title}</div>
                        </div>
                        {
                            !this.state.user ?
                                (<>
                                    <div className='signup basis-1/12 text-center text-white'>
                                        <Link to='/register'><p>Регистрация</p></Link>
                                    </div>
                                    <div className='basis-1/12 text-center text-white'>
                                        <Link to='/login'><p>Вход</p></Link>
                                    </div>
                                </>) :
                                (<>
                                    <div className='signup basis-1/12 text-center text-white'>
                                        <Link to='/personal'><p>{this.state.user.surname + ' ' + this.state.user.name}</p></Link>
                                    </div>
                                    <div className='basis-1/12 text-center text-white'>
                                        <button onClick={this.handleExit}>Выход</button>
                                    </div>
                                </>)
                        }
                    </div>
                </header>
                <Routes>
                    <Route
                        exact path='/'
                        element={<MainPage onTitleChanged={this.handleTitleChange} />}
                    />
                    <Route
                        exact path='/login'
                        element={<Login onAuthorized={this.handleAuthorization} onTitleChanged={this.handleTitleChange} />}
                    />
                    <Route
                        exact path='/register'
                        element={<Register onAuthorized={this.handleAuthorization} onTitleChanged={this.handleTitleChange} />} />
                    <Route
                        exact path='/startup/:id'
                        element={<Startup onTitleChanged={this.handleTitleChange} />} />
                    <Route
                        exact path='/startup/:id/create_post'
                        element={<AddPost onTitleChanged={this.handleTitleChange} />} />
                    <Route
                        exact path='/startup/:id/request_moderation'
                        element={<RequestModeration onTitleChanged={this.handleTitleChange} />} />
                    <Route
                        exact path='/add_startup'
                        element={<AddStartup onTitleChanged={this.handleTitleChange} />} />
                    <Route
                        exact path='/personal'
                        element={<PersonalArea onTitleChanged={this.handleTitleChange} />} />
                    <Route
                        exact path='/moderator'
                        element={<ModeratorPage onTitleChanged={this.handleTitleChange} />} />
                    <Route
                        exact path='/request_role'
                        element={<RequestRole onTitleChanged={this.handleTitleChange} />} />
                </Routes>
                {/* <footer className='bot-bar'>

                </footer> */}
            </>
        )
    }
}

export default App;