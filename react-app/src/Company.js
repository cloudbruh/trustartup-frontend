import React from 'react';

class Card extends React.Component {

    state = {
        title: 'Batsales',
        text: 'Наша компания специализируется на разведении и продаже летучих мышей. Украшаем ваши уютные пещеры этими прекрасными грациозными созданиями с 2006 года.',
        rate: 4,
        staff: 10,
        places: 3,
        turnover: 1000,
        vaccancies = ['продавец, охранник, воспитатель летучих мышей'],
        description = 'Мы крупнейший в мире и всей обозримой вселенной питомник летучих мышей. Мы постоянно развиваемся выводим, селекционируем и генетический модифицируем наших питомцев. Профтрафифвшиеся сотрудники становятся кормом для новых хищных видов.',
        news=[]
    }
    
    render() {
        return (
            <>
                <div className='logo'>
                    <img src='' alt='Лого компании'/>
                    <button>Откликнуться на вакансию</button>
                </div>
                <div className='main-info'>
                    <div className='params'>
                        <p>Штат: {this.state.staff} человек</p>
                        <p>Годовой оборот: {this.state.turnover} рублей</p>
                        <p>Рейтинг: {this.state.rate} / 5</p>
                    </div>
                    <div className='vacs'>
                        <h2>Доступные вакансии:</h2>
                        <ul>
                            {vaccancies.map(vac => {return <li>{vac}</li>})}
                        </ul>
                    </div>
                    <div className='desc'>
                        <p>{this.state.description}</p>
                    </div>
                </div>
                <div className='news'>
                    {this.news.map(article => {return <ArtcileCard title={article.title} text={article.text}/>})}
                </div>
            </>
        )
    }
}

export default Card;