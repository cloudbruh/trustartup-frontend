import React from 'react';
import StartupCard from './StartupCard'
import Filters from './Filters'
import Register from './Register'
import Startup from './Startup'
import PersonalArea from './PersonalArea'
import AddStartup from './AddStartup'
import MainPage from './MainPage'
import Enter from './Enter'
import {BrowserRouter as Router,
        Routes,
        Route,
        Link} from 'react-router-dom'

class App extends React.Component {

    state = {
        title: 'Лента'
    }
    render() {
        return (
            <>
                <header className='top-bar bg-blue h-16'>
                    <div className='flex flex-row'>
                        <div className='basis-10/12'>
                            <p className='title ml-80 text-center font-bold text-white text-2xl'><span className='inline-block my-4'>{this.state.title}</span></p>
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
                    <Route exact path='/' element={<MainPage/>}/>
                    <Route exact path='/login' element={<Enter/>}/>
                    <Route exact path='/signup' element={<Register/>}/>
                    <Route exact path='/startup' element={<Startup/>}/>
                    <Route exact path='/addstartup' element={<AddStartup/>}/>
                </Routes>
                <footer className='bot-bar'>

                </footer>
            </>
        )
    }
}

export default App;