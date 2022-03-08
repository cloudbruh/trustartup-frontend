import React from 'react';

class PersonalArea extends React.Component {

    state = {
        title: 'Личный кабинет',
        name: 'Зубенко Михаил Петрович',
        tel: '8(800)5553535',
        info: 'Я основатель компании Batsales',
        companies: ['Batsales']
    }

    constructor(props)
    {
        super(props)
        props.onTitleChanged('Личный кабинет')
    }
    render() {
        return (
            <div className='w-100%'>
                <div className='flex flex-row w-100%'>
                    <div className='main-info mx-auto mt-10 text-center'>
                        <p className='font-bold text-2xl'>{this.state.name}</p>
                        <p className='font-bold text-2xl'>{this.state.tel}</p>
                    </div>
                </div>
                <div className='flex flex-row'>
                    <div className='companies-list basis-1/4 ml-40 mx-auto'>
                        <p className='font-bold'>Мои компании:</p>
                        <ul className='list-disc'>
                        {this.state.companies.map(comp => {return <li>{comp}</li>})}
                        </ul>
                    </div>
                    <div className='personal-data basis-1/3 mx-auto mt-10'>
                        <div className='personal-docs w-72 mx-auto'>
                            <h2 className='font-bold mb-3'>Загруженные личные документы:</h2>
                                <div className='is-passport-container'>
                                    <input type='checkbox' id='is-passport'/>
                                    <label htmlFor='is-passport' className='ml-5'>Паспорт</label>
                                </div>
                                <div className='is-diploma-container'>
                                    <input type='checkbox' id='is-diploma'/>
                                    <label htmlFor='is-diploma' className='ml-5'>Диплом об образовании</label>
                                </div>
                        </div>
                        <div className='company-docs mt-5 w-72 mx-auto'>
                            <h2 className='font-bold mb-3'>Загруженные документы о компании:</h2>
                            <div className='is-finstatements-container'>
                                <input type='checkbox' id='is-finstatements'/>
                                <label htmlFor='is-finstatements' className='ml-5'>Финансовая отчетность</label>
                            </div>
                        </div>
                    </div>
                    <div className='load-buttons basis-1/3'>
                        <div>
                            <button className='mt-10 mb-5 py-2 px-4 text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700'>Загрузить личный документ</button>
                        </div>
                        <div>
                            <button className='py-2 px-4 text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700'>Создать компанию</button>
                        </div>
                    </div>
                </div>
                <div className='about-container mt-10 w-96 mx-auto text-center'>
                        <h2 className='font-bold'>О себе:</h2>
                        <p>{this.state.info}</p>
                    </div>
            </div>
        )
    }
}

export default PersonalArea;