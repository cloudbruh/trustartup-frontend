import React from 'react';
import * as config from '../helpers/config';
import { withParams } from '../helpers/hooks';

class AddPost extends React.Component {

    state = {
        header: '',
        text: '',
        files: []
    }

    componentDidMount = () => {
        this.props.onTitleChanged('Создать пост для стартапа ' + this.props.params.id);
    }

    handleSubmit = async (event) => {
        let fd = new FormData();
        for (var i = 0; i < this.state.files.length; i++)
            fd.append('files[]', this.state.files[i])
        fd.append('header', this.state.header);
        fd.append('text', this.state.text);
        fd.append('startup_id', this.props.params.id);

        let response = await fetch(config.url + '/api/business/create_post',
            {
                method: 'POST',
                headers: {
                    Authorization: 'Bearer ' + window.cookie.get('token')
                },
                body: fd
            })

        if (!response.ok)
            alert('Пост успешно создан!');

        event.preventDefault();
    }

    render() {
        return (
            <div className='mx-auto w-fit mt-10 p-5 flex flex-col justify-center'>
                <h1 className='font-bold text-xl mb-10'>Введите новость:</h1>
                <div className='mb-7'>
                    <label htmlFor='header' className='font-bold mr-2 mb-2 block'>Заголовок:</label>
                    <input type='text' id='header' className='border border-solid rounded-sm' onChange={(event) => this.setState({ header: event.target.value })} />
                </div>
                <div className='mb-7'>
                    <label htmlFor='text' className='font-bold mr-2 mb-2 block'>Текст:</label>
                    <textarea cols='40' rows='5' id='text' className='border border-solid rounded-sm w-80 h-20' onChange={(event) => this.setState({ text: event.target.value })} />
                </div>
                <div className=''>
                    <label htmlFor='files' className='font-bold mr-2'>Загрузка медиа:</label>
                    <input type='file' multiple accept='.pdf, image/png, image/jpeg' id='files' className='mb-5 mt-3' onChange={(event) => this.setState({ files: event.target.files })} />
                </div>
                <div className='text-center mt-20'>
                    <button className='py-2 px-4 text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700' onClick={this.handleSubmit}>Создать</button>
                </div>
            </div>
        )
    }
}

export default withParams(AddPost);