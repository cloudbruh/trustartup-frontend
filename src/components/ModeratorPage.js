import React from 'react';
import * as config from '../helpers/config';

class ModeratorPage extends React.Component {
    state = {
        datasets: [{ id: 0, name: 'SampleStartupName' }],
    };

    componentDidMount = () => {
        this.props.onTitleChanged('Модерация');
        fetch(config.url + '/api/business/moderate', {
            headers: {
                Authorization: 'Bearer ' + window.token
            }
        }).then((res) => res.json()).then((result) => {
            if (!result.status) {
                this.setState({
                    datasets: result,
                });
            }
        });
    }

    render() {
        return (
            <div>
                <h1 className='text-center font-bold text-xl my-5'>Заявки на модерацию</h1>
                {this.state.datasets.map(dataset => (
                    <div key={dataset.id} className='card bg-card border-solid mx-auto relative w-1/2 h-auto px-2 py-5 mb-20'>
                        <div className='text-center'>
                            <p>Id: {dataset.id}</p>
                            <p>Name: {dataset.id}</p>
                        </div>
                        <div className='img'>
                            <h3 className='text-center font-bold'>Документы</h3>
                            {dataset.media?.map(link => (
                                <img key={link} className='w-full' src={config.url + "/api/media/api/media/download/" + link} alt="документ компании"></img>
                            ))}
                        </div>
                        <div className='text-center'>
                            <button className='mt-10 mb-5 py-2 px-4 text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700'>Одобрить</button>
                            <button className='mt-10 ml-5 mb-5 py-2 px-4 text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700'>Отклонить</button>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default ModeratorPage;
