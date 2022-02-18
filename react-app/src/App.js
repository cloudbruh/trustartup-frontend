import React from 'react';
import Card from './Card'
import Filters from './Filters'
import Register from './Register'

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
                <div className='content mt-10 mx-10 flex flex-row'>
                    <ul>
                        <li><Card/></li>
                    </ul>
                    <Filters/>
                </div>
                <footer className='bot-bar'>

                </footer>
            </>
        )
    }
}

export default App;