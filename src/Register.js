import React from 'react';
import StartupCard from './StartupCard'
import Filters from './Filters'
import './cookie'
import * as c from './constants'

class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {name: '',
                      surname: '',
                      email: '',
                      pass: ''};
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeSurname = this.handleChangeSurname.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePass = this.handleChangePass.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        props.onTitleChanged('Регистрация')
      }

    async handleSubmit(event) {
        let req;
        try{
        req = await fetch(c.addr + '/api/auth/register?name=' + this.state.name + '&surname=' + this.state.surname + '&email=' + this.state.email + '&password=' + this.state.pass,
        {method: 'POST',
        headers: {  
          "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"  
        },  
         mode: 'cors'})
      }
      catch(e)
      {
        alert(e)
      }
        let resp = await  req.json()
        if(!req.ok)
          alert(resp.message)
        else
        {
          window.cookie.set('token', resp.token)
          this.props.onAuthorized(resp.token)
          alert('Успешно зарегистрирован!')
        }
        event.preventDefault();
      }

      handleChangeName(event) {
        this.setState({name: event.target.value});
      }

      handleChangeSurname(event) {
        this.setState({surname: event.target.value});
      }

      handleChangeEmail(event) {
        this.setState({email: event.target.value});
      }

      handleChangePass(event) {
        this.setState({pass: event.target.value});
      }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className='mx-auto w-fit mt-10 p-5 flex flex-col justify-center'>
                    <div className='user-name mb-7'>
                            <label htmlFor='user-name' className='font-bold mr-2 mb-2 block'>Имя:</label>
                            <input type='text' onChange={this.handleChangeName} value={this.state.name} id='user-name' className='border border-solid rounded-sm'/>
                    </div>
                    <div className='user-tel mb-7'>
                            <label htmlFor='user-surname' className='font-bold mr-2 mb-2 block'>Фамилия:</label>
                            <input type='text' onChange={this.handleChangeSurname} value={this.state.surname} id='user-surname' className='border border-solid rounded-sm'/>
                    </div>
                    <div className='user-email mb-7'>
                            <label htmlFor='user-email' className='font-bold mr-2 mb-2 block'>E-mail:</label>
                            <input type='text' onChange={this.handleChangeEmail} value={this.state.email} id='user-email' className='border border-solid rounded-sm'/>
                    </div>
                    <div className='user-pass mb-7'>
                            <label htmlFor='user-pass' className='font-bold mr-2 mb-2 block'>Пароль:</label>
                            <input type='password' onChange={this.handleChangePass} value={this.state.pass} id='user-pass' className='border border-solid rounded-sm'/>
                    </div>
                    <input type='button' onClick={this.handleSubmit} value='Сохранить' className='register-save py-2 px-4 text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700'/>
                </div>
            </form>
        )
    }
}

export default Register;