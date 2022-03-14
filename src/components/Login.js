import React from 'react';
import * as config from '../helpers/config'
import { withNavigation } from '../helpers/hooks';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pass: '',
            status: '',
        };
    }

    componentDidMount = () => {
        this.props.onTitleChanged('Вход');
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        let response = await fetch(config.url + '/api/auth/login?email=' + this.state.email + '&password=' + this.state.pass,
            {
                method: 'POST',
                headers: {
                    "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
                },
                mode: 'cors'
            })
        let data = await response.json();
        if (!response.ok) {
            if (response.status === 400) {
                this.setState({
                    status: JSON.stringify(data.errors),
                });
            }
        } else {
            this.props.onAuthorized(data.token);
            alert('Успешный вход!');
            this.props.navigate('/');
        }

    }

    render() {
        return (
            <div className='mx-auto w-72 mt-10 flex flex-col justify-center'>
                <div>{this.state.status}</div>
                <div className='mb-7'>
                    <label htmlFor='login-email' className='font-bold mr-2 mb-2 block'>E-mail:</label>
                    <input type='text' onChange={(event) => this.setState({ email: event.target.value })} id='login-email' className='w-full border border-solid rounded-sm' />
                </div>
                <div className='mb-7'>
                    <label htmlFor='login-pass' className='font-bold mr-2 mb-2 block'>Пароль:</label>
                    <input type='text' onChange={(event) => this.setState({ pass: event.target.value })} id='login-pass' className='w-full border border-solid rounded-sm' />
                </div>
                <button onClick={this.handleSubmit} className='enter-button py-2 px-4 text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700'>Вход</button>
            </div>
        )
    }
}

export default withNavigation(Login);