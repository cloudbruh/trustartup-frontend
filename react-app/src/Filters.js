import React from 'react';

class Filters extends React.Component {

    state = {
        turnover: 500
    }
    
    render() {
        return (
            <div className='filters-container'>
                <h1>Фильтры</h1>
                <h2>Годовой оборот</h2>
                <div className='turnover-slider-container'>
                    <input type='range' min='0' max='100' value='50' className='turnover-slider'/>
                    <p>{this.state.turnover / 10} млн. руб.</p>
                </div>
                <div className='are-places-container'>
                    <input type="checkbox" id='are-places-checkox'/>
                    <label htmlFor='are-places-checkbox'>Есть вакантные места</label>
                </div>
                <div className='rate-container'>
                    <h2>Рейтинг</h2>
                    <input type='radio' id='5' name='rate'/>
                    <label htmlFor='5'>5</label>
                    <input type='radio' id='>=4' name='rate'/>
                    <label htmlFor='>=4'>&gt;=4</label>
                    <input type='radio' id='>=3' name='rate'/>
                    <label htmlFor='>=3'>&gt;=3</label>
                    <input type='radio' id='>=2' name='rate'/>
                    <label htmlFor='>=2'>&gt;=2</label>
                    <input type='radio' id='all' name='rate'/>
                    <label htmlFor='all'>Любой</label>
                </div>
            </div>
        )
    }
}

export default Filters;