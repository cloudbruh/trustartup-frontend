import React from 'react';
import Card from './Card'
import Filters from './Filters'

class App extends React.Component {

    state = {
        title: 'Лента'
    }
    
    render() {
        return (
            <>
                <header className='top-bar'>
                    <h1 className='title text-3xl font-bold underline'>{this.state.title}</h1>
                    <div className='login'>

                    </div>
                </header>
                <div className='content'>
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