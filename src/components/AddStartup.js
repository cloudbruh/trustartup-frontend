import React from 'react';
import * as config from '../helpers/config'

class AddStartup extends React.Component {

    state = {
        title: 'Добавить компанию',
        date: '',
        name: '',
        desc: '',
        goal: '',
        files: []
    }

    constructor(props) {
        super(props)
        let date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let today = year + '-' + (month < 10 ? '0' : '') + month + '-' + (day < 10 ? '0' : '') + day;
        this.state.date = today;
    }

    componentDidMount = () => {
        this.props.onTitleChanged('Создать стартап');
    }

    handleDateChanged = (ev) => {
        this.setState({ date: ev.target.value })
    }

    handleNameChanged = (ev) => {
        this.setState({ name: ev.target.value })
    }

    handleDescChanged = (ev) => {
        this.setState({ desc: ev.target.value })
    }

    handleGoalChanged = (ev) => {
        this.setState({ goal: ev.target.value })
    }

    handleUploadFiles = (event) => {
        this.setState({ files: event.target.files });
    }

    handleSubmit = async (event) => {
        let req;
        let fd = new FormData()
        let date = new Date(this.state.date)
        for (var i = 0; i < this.state.files.length; i++)
            fd.append('files[]', this.state.files[i])
        fd.append('name', this.state.name)
        fd.append('description', this.state.desc)
        fd.append('funds_goal', this.state.goal)
        fd.append('ending_at', date.toISOString())
        try {
            req = await fetch(config.url + '/api/business/create_startup',
                {
                    method: 'POST',
                    headers: {
                        Authorization: 'Bearer ' + window.cookie.get('token')
                    }, body: fd
                })
        }
        catch (e) {
            console.log(e)
        }
        if (req.ok)
            alert('Стартап успешно создан!');
        event.preventDefault();
    }

    render() {
        return (
            <div className='mx-auto w-fit mt-10 p-5 flex flex-col justify-center'>
                <h1 className='font-bold text-xl mb-10'>Введите данные о стартапе:</h1>
                <div className='name mb-7'>
                    <label htmlFor='name' className='font-bold mr-2 mb-2 block'>Название:</label>
                    <input type='text' id='name' className='border border-solid rounded-sm' onChange={this.handleNameChanged} />
                </div>
                <div className='desc mb-7'>
                    <label htmlFor='desc' className='font-bold mr-2 mb-2 block'>Описание:</label>
                    <textarea cols='40' rows='5' id='desc' className='border border-solid rounded-sm w-80 h-20' onChange={this.handleDescChanged} />
                </div>
                <div className='goal mb-7'>
                    <label htmlFor='goal' className='font-bold mr-2 mb-2 block'>Цель(рублей):</label>
                    <input type='text' id='goal' className='border border-solid rounded-sm' onChange={this.handleGoalChanged} />
                </div>
                <div className='date-end mb-7'>
                    <label htmlFor='date-end' className='font-bold mr-2 mb-2 block'>Дата окончания сбора средств:</label>
                    <input type="date" id="date-end"
                        value={this.state.date}
                        min={this.state.date} onChange={this.handleDateChanged} />
                </div>
                <div className='docs'>
                    <label htmlFor='docs' className='font-bold mr-2'>Загрузка медиа:</label>
                    <input type='file' multiple accept='.pdf, image/png, image/jpeg' id='docs' className='mb-5 mt-3' onChange={this.handleUploadFiles} />
                </div>
                <div className='text-center mt-20'>
                    <button className='py-2 px-4 text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700' onClick={this.handleSubmit}>Создать</button>
                </div>
            </div>
        )
    }
}

export default AddStartup;