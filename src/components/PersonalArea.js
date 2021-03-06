import React from 'react';
import { Link } from 'react-router-dom';
import * as config from '../helpers/config';
import Application from './Application';

class PersonalArea extends React.Component {

    state = {
        name: undefined,
        surname: undefined,
        desc: undefined,
        isCreator: false,
        updateDesc: false,
        startups: [],
        appls: []
    }

    constructor(props) {
        super(props)
        this.init()
        this.onChangeDescClick = this.onChangeDescClick.bind(this)
        this.onSaveClick = this.onSaveClick.bind(this)
    }

    componentDidMount = () => {
        this.props.onTitleChanged('Личный кабинет');
    }

    async init() {
        let token = window.cookie.get('token')
        let data = await fetch(config.url + '/api/business/current_user', {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then((res) => res.json())
        this.setState({
            name: data.name,
            surname: data.surname,
            desc: data.description,
            isCreator: data.roles.some((role) => role.type === 'CREATOR')
        })
        if (this.state.isCreator) {
            data = await fetch(config.url + '/api/business/get_startups', {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            }).then((res) => res.json())
            this.setState({
                startups: data
            })
        }
        data = await fetch(config.url + '/api/business/get_datasets', {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then((res) => res.json())
        this.setState({
            appls: data
        })
    }

    onChangeDescClick() {
        this.setState({
            updateDesc: true
        })
    }

    onSaveClick() {
        let desc = document.getElementById('new-user-desc').value
        this.setState({
            desc: desc,
            updateDesc: false
        })
    }
    render() {
        return (
            <div className='w-100%'>
                <div className='flex flex-row w-100%'>
                    <div className='main-info mx-auto mt-10 text-center'>
                        <p className='font-bold text-2xl'>{this.state.surname + ' ' + this.state.name}</p>
                    </div>
                </div>
                <div className='flex flex-row'>
                    <div className='basis-1/4 ml-40 mx-auto'>
                        <p className='font-bold'>Мои стартапы:</p>
                        <ul className='list-disc'>
                            {this.state.startups.map(startup => { return <li key={startup.id}><Link to={'/startup/' + startup.id}>{startup.name}</Link></li> })}
                        </ul>
                    </div>
                    {/* <div className='personal-data basis-1/3 mx-auto mt-10'>
                        <div className='personal-docs w-72 mx-auto'>
                            <h2 className='font-bold mb-3'>Загруженные личные документы:</h2>
                            <div className='is-passport-container'>
                                <input type='checkbox' id='is-passport' />
                                <label htmlFor='is-passport' className='ml-5'>Паспорт</label>
                            </div>
                            <div className='is-diploma-container'>
                                <input type='checkbox' id='is-diploma' />
                                <label htmlFor='is-diploma' className='ml-5'>Диплом об образовании</label>
                            </div>
                        </div>
                        <div className='company-docs mt-5 w-72 mx-auto'>
                            <h2 className='font-bold mb-3'>Загруженные документы о компании:</h2>
                            <div className='is-finstatements-container'>
                                <input type='checkbox' id='is-finstatements' />
                                <label htmlFor='is-finstatements' className='ml-5'>Финансовая отчетность</label>
                            </div>
                        </div>
                    </div> */}
                    <div className='load-buttons basis-1/3'>
                        {/*<div>
                            <p>Загрузить документ о компании:</p>
                            <input type='file' className='mb-5 mt-3'/>
                        </div>*/}
                        <div>
                            {this.state.isCreator ?
                                <Link to='/add_startup'><button className='py-2 px-4 text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700'>Создать стартап</button></Link> :
                                <button disabled className='py-2 px-4 text-sm font-medium rounded-md text-white bg-card'>Создать стартап</button>}
                        </div>
                        <div>
                            <Link to='/request_role'><button className='mt-10 py-2 px-4 text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700'>Запросить роль</button></Link>
                        </div>
                    </div>
                </div>
                <div className='about-container mt-10 w-96 text-center mx-auto'>
                    <h2 className='font-bold mx-auto'>О себе:</h2>
                    {!this.state.updateDesc ?
                        <div>
                            <div>{this.state.desc}</div>
                            <button className='mx-auto mt-20 py-2 px-4 text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700' onClick={this.onChangeDescClick}>Изменить</button>
                        </div> :
                        <div>
                            <textarea cols='40' rows='15' id='new-user-desc' className='border border-solid rounded-sm w-80 h-20' />
                            <button className='text-center py-2 px-4 text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700' onClick={this.onSaveClick}>Сохранить</button>
                        </div>}
                </div>
                <div>
                    <h2 className='text-center font-bold mt-10 mb-5'>Мои заявки на модерацию:</h2>
                    {this.state.appls.map(appl => { return <Application key={appl.id} appl={appl} /> })}
                </div>
            </div>
        )
    }
}

export default PersonalArea;