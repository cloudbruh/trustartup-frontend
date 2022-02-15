import React from 'react';

class Enter extends React.Component {

    state = {
        title: 'Вход'
    }
    
    render() {
        return (
            <>
                <div className='enter-email'>
                    <input type='text' id='enter-email'/>
                    <label htmlFor='enter-email'>E-mail:</label>
                </div>
                <div className='enter-pass'>
                    <input type='password' id='enter-pass'/>
                    <label htmlFor='enter-pass'>Пароль:</label>
                </div>
                <button className='enter-button'>Вход</button>
            </>
        )
    }
}

export default Enter;