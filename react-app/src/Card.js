import React from 'react';
import {Link} from 'react-router-dom'

class Card extends React.Component {

    state = {
        title: 'Batsales',
        text: 'Наша компания специализируется на разведении и продаже летучих мышей. Украшаем ваши уютные пещеры этими прекрасными грациозными созданиями с 2006 года.',
        likes: 10,
        amount: 1000,
        need: 100000
    }
    
    render() {
        return (
            <Link to='/startup'>
                <div className='card bg-card border-solid mx-auto relative w-2/5 px-2 py-5 mb-20'>
                    <div className='mb-3'>
                        <h1 className='card-title font-bold text-center mb-2'>{this.state.title}</h1>
                        <p className='card-desc text-center mb-2'>{this.state.text}</p>
                    </div>
                    <div className='text-center'>
                        <p className='card-staff block'><b>Лайков:</b> {this.state.likes}</p>
                        <p className='card-places block '><b>Собрано:</b> {this.state.amount} из {this.state.need}</p>
                    </div>
                </div>
            </Link>
        )
    }
}

export default Card;