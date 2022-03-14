import React from 'react';
import '../helpers/cookie';
import * as config from '../helpers/config';
import { withNavigation } from '../helpers/hooks';

class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            surname: '',
            email: '',
            pass: '',
            status: '',
        };
    }

    componentDidMount = () => {
        this.props.onTitleChanged('Регистрация');
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        let response = await fetch(config.url + '/api/auth/register?name=' + this.state.name + '&surname=' + this.state.surname + '&email=' + this.state.email + '&password=' + this.state.pass,
            {
                method: 'POST',
                headers: {
                    "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
                },
                mode: 'cors'
            });

        let data = await response.json();
        if (!response.ok) {
            if(response.status === 400){
                this.setState({
                    status: JSON.stringify(data.errors),
                });
            }
        } else {
            this.props.onAuthorized(data.token);
            alert('Успешно зарегистрирован!');
            this.props.navigate('/');
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className='mx-auto w-72 mt-10 flex flex-col justify-center'>
                    <div>{ this.state.status }</div>
                    <div className='mb-7'>
                        <label htmlFor='user-name' className='font-bold mb-2 block'>Имя:</label>
                        <input type='text' onChange={(event) => this.setState({ name: event.target.value })} value={this.state.name} id='user-name' className='border border-solid rounded-sm w-full' />
                    </div>
                    <div className='mb-7'>
                        <label htmlFor='user-surname' className='font-bold mb-2 block'>Фамилия:</label>
                        <input type='text' onChange={(event) => this.setState({ surname: event.target.value })} value={this.state.surname} id='user-surname' className='border border-solid rounded-sm w-full' />
                    </div>
                    <div className='mb-7'>
                        <label htmlFor='user-email' className='font-bold mb-2 block'>E-mail:</label>
                        <input type='text' onChange={(event) => this.setState({ email: event.target.value })} value={this.state.email} id='user-email' className='border border-solid rounded-sm w-full' />
                    </div>
                    <div className='mb-7'>
                        <label htmlFor='user-pass' className='font-bold mb-2 block'>Пароль:</label>
                        <input type='password' onChange={(event) => this.setState({ pass: event.target.value })} value={this.state.pass} id='user-pass' className='border border-solid rounded-sm w-full' />
                    </div>
                    <input type='button' onClick={this.handleSubmit} value='Сохранить' className='register-save py-2 px-4 text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700' />
                </div>
            </form>
        )
    }
}

export default withNavigation(Register);