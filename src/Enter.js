import React from 'react';
import './cookie'
import * as c from './constants'

class Enter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
                      email: '',
                      pass: ''};
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePass = this.handleChangePass.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        props.onTitleChanged('Вход')
      }

    async handleSubmit(event) {
        let req;
        try{
        req = await fetch(c.addr + '/api/auth/login?' + 'email=' + this.state.email + '&password=' + this.state.pass,
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
          alert('Успешный вход!')
          //TODO(перекинуть на предыдущую страницу) 
        }
        event.preventDefault();
      }

      handleChangeEmail(event) {
        this.setState({email: event.target.value});
      }

      handleChangePass(event) {
        this.setState({pass: event.target.value});
      }
    
    render() {
        return (
            <div className='mx-auto w-fit mt-10 p-5 flex flex-col justify-center'>
                <div className='login-email mb-7'>
                        <label htmlFor='login-email' className='font-bold mr-2 mb-2 block'>E-mail:</label>
                        <input type='text' onChange={this.handleChangeEmail} id='login-email' className='border border-solid rounded-sm'/>
                </div>
                <div className='login-pass mb-7'>
                        <label htmlFor='login-pass' className='font-bold mr-2 mb-2 block'>Пароль:</label>
                        <input type='text' onChange={this.handleChangePass} id='login-pass' className='border border-solid rounded-sm'/>
                </div>
                <button onClick={this.handleSubmit} className='enter-button py-2 px-4 text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700'>Вход</button>
            </div>
        )
    }
}

export default Enter;