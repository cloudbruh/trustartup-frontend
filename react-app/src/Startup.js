import React from 'react';
import ArticleCard from './ArticleCard'

class Startup extends React.Component {

    state = {
        title: 'Batsales',
        text: 'Наша компания специализируется на разведении и продаже летучих мышей. Украшаем ваши уютные пещеры этими прекрасными грациозными созданиями с 2006 года.',
        rate: 4,
        staff: 10,
        places: 3,
        turnover: 1000,
        vaccancies: ['продавец', 'охранник', 'воспитатель летучих мышей'],
        description: 'Мы крупнейший в мире и всей обозримой вселенной питомник летучих мышей. Мы постоянно развиваемся выводим, селекционируем и генетический модифицируем наших питомцев. Профтрафифвшиеся сотрудники становятся кормом для новых хищных видов.',
        news: [{title: 'Заголовок новости', text: 'Содержание новости'},
        {title: 'Заголовок новости 2', text: 'Содержание новости 2'},
        {title: 'Заголовок новости 3', text: 'Содержание новости 3'}]
    }
    
    render() {
        return (
            <div>
                <div className='flex flex-row'>
                    <div className='logo'>
                        <img src='' alt='Лого компании'/>
                        <button className='mt-10 py-2 px-4 text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700'>Откликнуться на вакансию</button>
                    </div>
                    <div className='main-info mx-20'>
                        <div className='top-block flex flex-row mb-10'>
                            <div className='params mr-80'>
                                <p>Штат: {this.state.staff} человек</p>
                                <p>Годовой оборот: {this.state.turnover} рублей</p>
                                <p>Рейтинг: {this.state.rate} / 5</p>
                            </div>
                            <div className='vacs'>
                                <h2>Доступные вакансии:</h2>
                                <ul className='list-disc'>
                                    {this.state.vaccancies.map(vac => {return <li>{vac}</li>})}
                                </ul>
                            </div>
                        </div>
                        <div className='desc'>
                            <p>{this.state.description}</p>
                        </div>
                    </div>
                </div>
                    <div className='news'>
                        {this.state.news.map(article => {return <ArticleCard title={article.title} text={article.text}/>})}
                    </div>
        </div>
        )
    }
}

export default Startup;