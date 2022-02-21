import React from 'react';
import Card from './Card'
import Filters from './Filters'
import Register from './Register'
import Startup from './Startup'
import PersonalArea from './PersonalArea'

class App extends React.Component {

    state = {
        title: 'Лента'
    }
    render() {
        return (
            <>
                <header className='top-bar bg-blue h-16'>
                    <h1 className='title text-center font-bold text-white text-2xl'><span className='inline-block my-4'>{this.state.title}</span></h1>
                    <div className='login'>

                    </div>
                </header>
                    <PersonalArea/>
                <footer className='bot-bar'>

                </footer>
            </>
        )
    }
}

export default App;