import React from 'react';
import StartupCard from './StartupCard'
import Filters from './Filters'
import Register from './Register'
import Startup from './Startup'
import PersonalArea from './PersonalArea'
import AddStartup from './AddStartup'
import MainPage from './MainPage'
import Enter from './Enter'
import ModeratorPage from './ModeratorPage';
import LoadDoc from './LoadDoc'
import {BrowserRouter as Router,
        Routes,
        Route,
        Link} from 'react-router-dom'
import './cookie'
import * as c from './constants';

class App extends React.Component {

    state = {
        title: 'Лента',
        token: undefined,
        authorized: false,
        name: undefined,
        surname: undefined
    }

    constructor(props)
    {
        super(props)
        this.handleTitleChanged= this.handleTitleChanged.bind(this)
        this.handleAuthorization = this.handleAuthorization.bind(this)
        this.init()
    }

    async init()
    {
        if(!window.cookie.get('title'))
            window.cookie.set('title', 'Лента')
        let token = window.cookie.get('token')
        if(!token)
            return
        let data, resp
        try{
            resp = await fetch(c.addr + '/api/business/current_user', {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            })
        }
        catch(e)
        {
            alert(e)
            return
        }
        data = await resp.json()
        if(!resp.ok)
        {
            alert(data.message)
            return
        }
        this.setState({
            title: window.cookie.get('title'),
            token: token,
            name: data.name,
            surname: data.surname,
            authorized: true
        })
    }

    handleTitleChanged(newTitle)
    {
        this.setState({title: newTitle})
        window.cookie.set('title', newTitle)
    }

    async handleAuthorization(token)
    {
        let data, resp
        try{
            resp = await fetch(c.addr + '/api/business/current_user', {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            })
        }
        catch(e)
        {
            alert(e)
            return
        }
        data = await resp.json()
        if(!resp.ok)
        {
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
                <header className='top-bar bg-blue h-16'>
                    <div className='flex flex-row'>
                        <div className='basis-1/6'>
                        <Link to='/'><p className='pl-10 text-left font-bold text-white text-xl'><span className='inline-block my-4'>Trustartup</span></p></Link>
                        </div>
                        <div className='basis-2/3'>
                            <p className='title text-center font-bold text-white text-2xl'><span className='inline-block my-4'>{this.state.title}</span></p>
                        </div>
                        {
                            !this.state.authorized ? 
                            (<>
                                <div className='signup mt-4 basis-1/12 text-center text-white'>
                                    <Link to='/signup'><p>Регистрация</p></Link>
                                </div>
                                <div className='mt-4 basis-1/12 text-center text-white'>
                                    <Link to='/login'><p>Вход</p></Link>
                                </div>
                            </>) : 
                            (<div className='signup mt-4 basis-1/6 text-center text-white'>
                            <Link to='/personal'><p>{this.state.surname + ' ' + this.state.name}</p></Link>
                        </div>)
                        }
                    </div>
                </header>
                <Routes>
                    <Route 
                        exact path='/'
                        element={<MainPage onTitleChanged={this.handleTitleChanged}/>} />
                    <Route 
                        exact path='/login'
                        element={<Enter onTitleChanged={this.handleTitleChanged} onAuthorized={this.handleAuthorization}/>} />
                    <Route
                        exact path='/signup'
                        element={<Register onTitleChanged={this.handleTitleChanged} onAuthorized={this.handleAuthorization}/>}/>
                    <Route
                        exact path='/startup/:id'
                        element={<Startup onTitleChanged={this.handleTitleChanged}/>}/>
                    <Route
                        exact path='/addstartup'
                        element={<AddStartup onTitleChanged={this.handleTitleChanged}/>}/>
                    <Route
                        exact path='/personal'
                        element={<PersonalArea onTitleChanged={this.handleTitleChanged}/>}/>
                    <Route
                        exact path='/moderator'
                        element={<ModeratorPage onTitleChanged={this.handleTitleChanged}/>}/>
                    <Route
                        exact path='/loaddoc'
                        element={<LoadDoc onTitleChanged={this.handleTitleChanged}/>}/>
                </Routes>
                <footer className='bot-bar'>

                </footer>
            </>
        )
    }
}

export default App;