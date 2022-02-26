import React from 'react';
import Card from './Card'
import Filters from './Filters'

class Register extends React.Component {

    state = {
        title: 'Регистрациия'
    }
    
    render() {
        return (
            <div className='mx-auto w-fit mt-10 p-5 flex flex-col justify-center'>
                <div className='user-name mb-7'>
                        <label htmlFor='user-name' className='font-bold mr-2 mb-2 block'>ФИО:</label>
                        <input type='text' id='user-name' className='border border-solid rounded-sm'/>
                </div>
                <div className='user-tel mb-7'>
                        <label htmlFor='user-tel' className='font-bold mr-2 mb-2 block'>Телефон:</label>
                        <input type='text' id='user-tel' className='border border-solid rounded-sm'/>
                </div>
                <div className='user-email mb-7'>
                        <label htmlFor='user-email' className='font-bold mr-2 mb-2 block'>E-mail:</label>
                        <input type='text' id='user-email' className='border border-solid rounded-sm'/>
                </div>
                <div className='user-pass mb-7'>
                        <label htmlFor='user-pass' className='font-bold mr-2 mb-2 block'>Пароль:</label>
                        <input type='password' id='user-pass' className='border border-solid rounded-sm'/>
                </div>
                <button className='register-save py-2 px-4 text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700'>Сохранить</button>
            </div>
        )
    }
}

export default Register;