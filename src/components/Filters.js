import React from 'react';

class Filters extends React.Component {

    state = {
        turnover: 500
    }

    render() {
        return (
            <div className='filters-container bg-card text-center h-80'>
                <h1 className='font-bold'>Фильтры</h1>
                <h2>Годовой оборот</h2>
                <div className='turnover-slider-container mb-3'>
                    <input type='range' min='0' max='100' value='50' className='turnover-slider' />
                    <p>{this.state.turnover / 10} млн. руб.</p>
                </div>
                <div className='are-places-container mb-3'>
                    <input type="checkbox" id='are-places-checkox' />
                    <label htmlFor='are-places-checkbox'>Есть вакантные места</label>
                </div>
                <div className='flex flex-row'>
                    <div className='rate-container mx-5'>
                        <h2>Рейтинг</h2>
                        <div className='text-left'>
                            <div>
                                <input type='radio' id='5' name='rate' />
                                <label htmlFor='5'>5</label>
                            </div>
                            <div>
                                <input type='radio' id='>=4' name='rate' />
                                <label htmlFor='>=4'>&gt;=4</label>
                            </div>
                            <div>
                                <input type='radio' id='>=3' name='rate' />
                                <label htmlFor='>=3'>&gt;=3</label>
                            </div>
                            <div>
                                <input type='radio' id='>=2' name='rate' />
                                <label htmlFor='>=2'>&gt;=2</label>
                            </div>
                            <div>
                                <input type='radio' id='all' name='rate' />
                                <label htmlFor='all'>Все</label>
                            </div>
                        </div>
                    </div>
                    <div className='tag-container text-center mx-5 mb-8'>
                        <h2>Профиль</h2>
                        <div className='text-left'>
                            <div>
                                <input type="checkbox" id='it-checkox' />
                                <label htmlFor='it-checkbox'>IT</label>
                            </div>
                            <div>
                                <input type="checkbox" id='edu-checkox' />
                                <label htmlFor='edu-checkbox'>Edu</label>
                            </div>
                            <div>
                                <input type="checkbox" id='food-checkox' />
                                <label htmlFor='food-checkbox'>Еда</label>
                            </div>
                            <div>
                                <input type="checkbox" id='fintech-checkox' />
                                <label htmlFor='fintech-checkbox'>Финтех</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Filters;