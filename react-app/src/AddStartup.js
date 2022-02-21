import React from 'react';
import Card from './Card'
import Filters from './Filters'

class AddStartup extends React.Component {

    state = {
        title: 'Добавить компанию'
    }
    
    render() {
        return (
            <>
                <div className='name'>
                    <input type='text' id='name'/>
                    <label htmlFor='name'>Название:</label>
                </div>
                <div className='short-desc'>
                    <input type='text' id='short-desc'/>
                    <label htmlFor='short-desc'>Краткое описание:</label>
                </div>
                <div className='full-desc'>
                    <input type='text' id='full-desc'/>
                    <label htmlFor='full-desc'>Полное описание:</label>
                </div>
                <div className='staff'>
                    <input type='text' id='staff'/>
                    <label htmlFor='staff'>Штат(человек):</label>
                </div>
                <div className='turnover'>
                    <input type='text' id='turnover'/>
                    <label htmlFor='turnover'>Годовой оборот(рублей):</label>
                </div>
                <div className='vaccancies'>
                    <button id='vaccancies'>+</button>
                    <label htmlFor='vaccancies'>Добавить вакансию:</label>
                </div>
                <div className='docs'>
                    <button id='docs'>+</button>
                    <label htmlFor='docs'>Загрузить документ:</label>
                </div>
            </>
        )
    }
}

export default AddStartup;