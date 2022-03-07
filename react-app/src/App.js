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
import {BrowserRouter as Router,
        Routes,
        Route,
        Link} from 'react-router-dom'
import './cookie'

class App extends React.Component {

    state = {
        title: 'Лента',
        token: undefined
    }

    constructor(props)
    {
        super(props)
        this.state.token = window.cookie.get('token')
        this.handleTitleChanged= this.handleTitleChanged.bind(this)
    }

    handleTitleChanged(newTitle)
    {
        this.setState({title: newTitle})
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
                        <div className='signup mt-4 basis-1/12 text-center text-white'>
                            <Link to='/signup'><p>Регистрация</p></Link>
                        </div>
                        <div className='mt-4 basis-1/12 text-center text-white'>
                            <Link to='/login'><p>Вход</p></Link>
                        </div>
                    </div>
                </header>
                <Routes>
                    <Route 
                        exact path='/'
                        element={<MainPage onTitleChanged={this.handleTitleChanged}/>} />
                    <Route 
                        exact path='/login'
                        element={<Enter onTitleChanged={this.handleTitleChanged}/>} />
                    <Route
                        exact path='/signup'
                        element={<Register onTitleChanged={this.handleTitleChanged}/>}/>
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
                </Routes>
                <footer className='bot-bar'>

                </footer>
            </>
        )
    }
}

export default App;