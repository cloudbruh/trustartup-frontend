import React from 'react';
import StartupCard from './components/StartupCard'
//import Filters from './components/Filters'
import Register from './components/Register'
import Startup from './components/Startup'
import PersonalArea from './components/PersonalArea'
import AddStartup from './components/AddStartup'
import MainPage from './components/MainPage'
import Login from './components/Login'
import ModeratorPage from './components/ModeratorPage';
import LoadDoc from './components/LoadDoc'
import {
    Routes,
    Route,
    Link
} from 'react-router-dom'
import './helpers/cookie'
import * as config from './helpers/config';

class App extends React.Component {

    state = {
        title: 'Trustartup',
        token: undefined,
        authorized: false,
        name: undefined,
        surname: undefined
    }

    constructor(props) {
        super(props)
        this.handleAuthorization = this.handleAuthorization.bind(this)
        this.init()
    }

    handleTitleChange = (title) => {
        this.setState({ title: title });
    }

    async init() {
        let token = window.cookie.get('token')
        if (!token)
            return
        let data, resp
        try {
            resp = await fetch(config.url + '/api/business/current_user', {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            })
        }
        catch (e) {
            alert(e)
            return
        }
        data = await resp.json()
        if (!resp.ok) {
            alert(data.message)
            return
        }
        this.setState({
            token: token,
            name: data.name,
            surname: data.surname,
            authorized: true
        })
    }

    async handleAuthorization(token) {
        let data, resp
        try {
            resp = await fetch(config.url + '/api/business/current_user', {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            })
        }
        catch (e) {
            alert(e)
            return
        }
        data = await resp.json()
        if (!resp.ok) {
            //alert(data.message)
            return
        }
        window.cookie.set('token', token)
        this.setState({
            title: this.state.title,
            token: token,
            authorized: true,
            name: data.name,
            surname: data.surname
        })
    }
    render() {
        return (
            <>
                <header className='top-bar bg-blue '>
                    <div className='flex flex-row items-center h-16'>
                        <div className='basis-1/6'>
                            <Link to='/'><p className='pl-10 text-left font-bold text-white text-xl'>Trustartup</p></Link>
                        </div>
                        <div className='basis-2/3'>
                            <p className='title text-center font-bold text-white text-xl'>{this.state.title}</p>
                        </div>
                        {
                            !this.state.authorized ?
                                (<>
                                    <div className='signup basis-1/12 text-center text-white'>
                                        <Link to='/signup'><p>Регистрация</p></Link>
                                    </div>
                                    <div className='basis-1/12 text-center text-white'>
                                        <Link to='/login'><p>Вход</p></Link>
                                    </div>
                                </>) :
                                (<div className='signup basis-1/6 text-center text-white'>
                                    <Link to='/personal'><p>{this.state.surname + ' ' + this.state.name}</p></Link>
                                </div>)
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
                        exact path='/signup'
                        element={<Register onAuthorized={this.handleAuthorization} onTitleChanged={this.handleTitleChange} />} />
                    <Route
                        exact path='/startup/:id'
                        element={<Startup onTitleChanged={this.handleTitleChange} />} />
                    <Route
                        exact path='/addstartup'
                        element={<AddStartup onTitleChanged={this.handleTitleChange} />} />
                    <Route
                        exact path='/personal'
                        element={<PersonalArea onTitleChanged={this.handleTitleChange} />} />
                    <Route
                        exact path='/moderator'
                        element={<ModeratorPage onTitleChanged={this.handleTitleChange} />} />
                    <Route
                        exact path='/loaddoc'
                        element={<LoadDoc onTitleChanged={this.handleTitleChange} />} />
                </Routes>
                <footer className='bot-bar'>

                </footer>
            </>
        )
    }
}

export default App;