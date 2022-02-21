import React from 'react';

class Card extends React.Component {

    state = {
        title: 'Batsales',
        text: 'Наша компания специализируется на разведении и продаже летучих мышей. Украшаем ваши уютные пещеры этими прекрасными грациозными созданиями с 2006 года.',
        rate: 4,
        staff: 10,
        places: 3,
        turnover: 1000
    }
    
    render() {
        return (
            <div className='card bg-card border-solid mx-auto relative w-2/5 px-2 mb-20'>
                <div className='mb-3'>
                    <h1 className='card-title font-bold text-center mb-2'>{this.state.title}</h1>
                    <p className='card-desc text-center mb-2'>{this.state.text}</p>
                    <p className='card-rate text-center'>Рейтинг: {this.state.rate}/5</p>
                </div>
                <div className='flex flex-row mx-auto w-3/5'>
                    <div className='mx-4 mb-3'>
                        <p className='card-staff'>Штат: {this.state.staff}</p>
                        <p className='card-places'>Вакантных мест: {this.state.places}</p>
                    </div>
                    <div>
                        <p className='card-turnover'>Штат: {this.state.turnover}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;