import React from 'react';
import {Link} from 'react-router-dom';

class PersonalArea extends React.Component {

    state = {
        name: undefined,
        surname: undefined,
        tel: undefined,
        desc: undefined,
        companies: []
    }

    constructor(props)
    {
        super(props)
        this.init()
    }

    async init()
    {
        this.props.onTitleChanged('Личный кабинет')
        let token = window.cookie.get('token')
        let data = await fetch('http://192.168.1.69:8080/api/business/current_user', {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then((res) => res.json())
        this.setState({
            name: data.name,
            surname: data.surname,
            tel: data.tel,
            desc: data.description
        })
    }

    render() {
        return (
            <div className='w-100%'>
                <div className='flex flex-row w-100%'>
                    <div className='main-info mx-auto mt-10 text-center'>
                        <p className='font-bold text-2xl'>{this.state.surname + ' ' + this.state.name}</p>
                        <p className='font-bold text-2xl'>{this.state.tel}</p>
                    </div>
                </div>
                <div className='flex flex-row'>
                    <div className='companies-list basis-1/4 ml-40 mx-auto'>
                        <p className='font-bold'>Мои компании:</p>
                        <ul className='list-disc'>
                        {this.state.companies.map(startup => {return <li><Link to={'/startup/' + startup.id}>{startup.name}</Link></li>})}
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
                        {/*<div>
                            <p>Загрузить документ о компании:</p>
                            <input type='file' className='mb-5 mt-3'/>
                        </div>*/}
                        <div>
                            <Link to='/addstartup'><button className='py-2 px-4 text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700'>Создать компанию</button></Link>
                        </div>
                    </div>
                </div>
                <div className='about-container mt-10 w-96 mx-auto text-center'>
                        <h2 className='font-bold'>О себе:</h2>
                        <p>{this.state.desc}</p>
                    </div>
            </div>
        )
    }
}

export default PersonalArea;