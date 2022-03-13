import React from 'react';
import StartupCard from './StartupCard'
import Filters from './Filters'

class AddStartup extends React.Component {

    state = {
        title: 'Добавить компанию',
    }

    constructor(props)
    {
        super(props)
        props.onTitleChanged('Добавить стартап')
    }
    
    render() {
        return (
            <>
                <div className='mx-auto w-fit mt-10 p-5 flex flex-col justify-center'>
                    <h1 className='font-bold text-xl mb-10'>Введите данные о стартапе:</h1>
                    <form>
                        <div className='name mb-7'>
                            <label htmlFor='name' className='font-bold mr-2 mb-2 block'>Название:</label>
                            <input type='text' id='name' className='border border-solid rounded-sm'/>
                        </div>
                        <div className='short-desc mb-7'>
                            <label htmlFor='short' className='font-bold mr-2 mb-2 block'>Описание:</label>
                            <textarea cols='40' rows='5' id='short-desc' className='border border-solid rounded-sm w-80 h-20'/>
                        </div>
                        <div className='name mb-7'>
                            <label htmlFor='funds-goal' className='font-bold mr-2 mb-2 block'>Сумма сбора:</label>
                            <input type='text' id='funds-goal' className='border border-solid rounded-sm'/>
                        </div>
                        <div className='name mb-7'>
                            <label htmlFor='ending-at' className='font-bold mr-2 mb-2 block'>Дата окончания сбора:</label>
                            <input type='date' id='ending-at' className='border border-solid rounded-sm'/>
                        </div>
                        <div className='vaccancies mb-7'>
                            <label htmlFor='vaccancies' className='font-bold mr-2'>Добавить вакансию:</label>
                            <button id='vaccancies' className='font-bold py-2 px-4 text-sm rounded-md text-white bg-indigo-600 hover:bg-indigo-700'>+</button>
                        </div>
                        <div className='docs'>
                            <label htmlFor='docs' className='font-bold mr-2'>Загрузить изображения:</label>
                            <input type='file' id='docs' className='mb-5 mt-3' multiple/>
                        </div>
                        <div className='text-center mt-20'>
                            <button type='submit' className='py-2 px-4 text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700'>Сохранить</button>
                        </div>
                    </form>
                </div>
            </>
        )
    }
}

export default AddStartup;