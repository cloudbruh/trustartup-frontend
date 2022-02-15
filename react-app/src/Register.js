import React from 'react';
import Card from './Card'
import Filters from './Filters'

class Register extends React.Component {

    state = {
        title: 'Регистрациия'
    }
    
    render() {
        return (
            <>
                <div className='user-name'>
                    <input type='text' id='user-name'/>
                    <label htmlFor='name'>ФИО:</label>
                </div>
                <div className='user-tel'>
                    <input type='text' id='user-tel'/>
                    <label htmlFor='user-tel'>Телефон:</label>
                </div>
                <div className='user-email'>
                    <input type='text' id='user-email'/>
                    <label htmlFor='user-email'>E-mail:</label>
                </div>
                <div className='password'>
                    <input type='text' id='password'/>
                    <label htmlFor='staff'>Штат(человек):</label>
                </div>
                <button className='register-save'>Сохранить</button>
            </>
        )
    }
}

export default Register;