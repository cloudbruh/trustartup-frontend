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
            <div className='card'>
                <h1 className='card-title'>{this.state.title}</h1>
                <p className='card-desc'>{this.state.text}</p>
                <p className='card-rate'>Рейтинг: {this.state.rate}/5</p>
                <p className='card-staff'>Штат: {this.state.staff}</p>
                <p className='card-places'>Вакантных мест: {this.state.places}</p>
                <p className='card-turnover'>Штат: {this.state.turnover}</p>
            </div>
        )
    }
}

export default Card;