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
                <div className='mx-auto w-fit mt-10 p-5 flex flex-col justify-center'>
                    <h1 className='font-bold text-xl mb-10'>Введите данные о стартапе:</h1>
                    <div className='name mb-7'>
                        <label htmlFor='name' className='font-bold mr-2'>Название:</label>
                        <input type='text' id='name' className='border border-solid rounded-sm'/>
                    </div>
                    <div className='short-desc mb-7'>
                        <label htmlFor='short-desc' className='font-bold mr-2 mb-2 block'>Краткое описание:</label>
                        <textarea cols='40' rows='5' id='short-desc' className='border border-solid rounded-sm w-80 h-20'/>
                    </div>
                    <div className='full-desc mb-7'>
                        <label htmlFor='full-desc' className='font-bold mr-2 mb-2 block'>Полное описание:</label>
                        <textarea cols='40' rows='5' id='full-desc' className='border border-solid rounded-sm w-80 h-20'/>
                    </div>
                    <div className='staff mb-7'>
                        <label htmlFor='staff' className='font-bold mr-2'>Штат(человек):</label>
                        <input type='text' id='staff' className='border border-solid rounded-sm'/>
                    </div>
                    <div className='turnover mb-7'>
                        <label htmlFor='turnover' className='font-bold mr-2'>Годовой оборот(рублей):</label>
                        <input type='text' id='turnover' className='border border-solid rounded-sm'/>
                    </div>
                    <div className='vaccancies mb-7'>
                        <label htmlFor='vaccancies' className='font-bold mr-2'>Добавить вакансию:</label>
                        <button id='vaccancies' className='font-bold py-2 px-4 text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700'>+</button>
                    </div>
                    <div className='docs'>
                        <label htmlFor='docs' className='font-bold mr-2'>Загрузить документ:</label>
                        <button id='docs' className='font-bold py-2 px-4 text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700'>+</button>
                    </div>
                    <div className='text-center mt-20'>
                        <button className='py-2 px-4 text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700'>Сохранить</button>
                    </div>
                </div>
            </>
        )
    }
}

export default AddStartup;