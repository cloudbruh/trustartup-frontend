import React from 'react';

class Enter extends React.Component {

    state = {
        title: 'Вход'
    }
    
    render() {
        return (
            <div className='mx-auto w-fit mt-10 p-5 flex flex-col justify-center'>
                <div className='login-email mb-7'>
                        <label htmlFor='login-email' className='font-bold mr-2 mb-2 block'>E-mail:</label>
                        <input type='text' id='login-email' className='border border-solid rounded-sm'/>
                </div>
                <div className='login-pass mb-7'>
                        <label htmlFor='login-pass' className='font-bold mr-2 mb-2 block'>Пароль:</label>
                        <input type='text' id='login-pass' className='border border-solid rounded-sm'/>
                </div>
                <button className='enter-button py-2 px-4 text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700'>Вход</button>
            </div>
        )
    }
}

export default Enter;