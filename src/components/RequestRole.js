import React from 'react';
import FormData from 'form-data';
import * as config from '../helpers/config';

class RequestRole extends React.Component {

    state = {
    }

    constructor(props) {
        super(props);
        this.state = {
            role: 'APPLICANT',
            desc: '',
            files: [],
            short: true
        };
        this.handleChangeRole = this.handleChangeRole.bind(this);
        this.handleChangeDesc = this.handleChangeDesc.bind(this);
        this.handleUploadFiles = this.handleUploadFiles.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount = () => {
        this.props.onTitleChanged('Получить роль');
    }

    async handleSubmit(event) {
        let req;
        let fd = new FormData()
        for (var i = 0; i < this.state.files.length; i++)
            fd.append('files[]', this.state.files[i])
        fd.append('type', this.state.role)
        fd.append('content', this.state.desc)
        try {
            req = await fetch(config.url + '/api/business/request_role',
                {
                    method: 'POST',
                    headers: {
                        Authorization: 'Bearer ' + window.cookie.get('token')
                    }, body: fd
                })
        }
        catch (e) {
            console.log(e)
            return
        }
        if (req.ok)
            alert('Заявка подана!')
        event.preventDefault();
    }

    async handleChangeRole(event) {
        await this.setState({ role: event.target.value });
    }

    async handleChangeDesc(event) {
        await this.setState({
            desc: event.target.value,
            short: event.target.value.length < 10
        });
    }

    async handleUploadFiles(event) {
        await this.setState({ files: event.target.files });
    }

    render() {
        return (
            <>
                <div className='mx-auto w-fit mt-10 p-5 flex flex-col justify-center'>
                    <div className='role_select mx-auto mb-7'>
                        <label htmlFor='role' className='font-bold mr-2 mb-2 block'>Название:</label>
                        <select id='role' onChange={this.handleChangeRole}>
                            <option value='APPLICANT'>Соискатель</option>
                            <option value='CREATOR'>Стартапер</option>
                            <option value='MODERATOR'>Модератор</option>
                        </select>
                    </div>
                    <div className='desc mx-auto text-center mb-7'>
                        <label htmlFor='short-desc' className='font-bold mr-2 mb-2 block'>Описание заявки:</label>
                        <textarea cols='40' rows='5' id='short-desc' className='border border-solid rounded-sm w-80 h-20' onChange={this.handleChangeDesc} />
                        {this.state.short ? <p>Описание заявки не может быть короче 10 символов!</p> : ''}
                    </div>
                    <div className='docs'>
                        <label htmlFor='docs' className='font-bold mr-2'>Загрузить документ(ы):</label>
                        <input type='file' multiple accept='.pdf, image/png, image/jpeg' id='docs' className='mb-5 mt-3' onChange={this.handleUploadFiles} />
                    </div>
                    <div className='text-center mt-20'>
                        <button className='py-2 px-4 text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700' onClick={this.handleSubmit}>Сохранить</button>
                    </div>
                </div>
            </>
        )
    }
}

export default RequestRole;