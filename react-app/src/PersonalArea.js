import React from 'react';

class PersonalArea extends React.Component {

    state = {
        title: 'Личный кабинет',
        name: 'Зубенко Михаил Петрович',
        tel: '8(800)5553535',
        info: 'Я основатель компании Batsales',
        companies=['Batsales']
    }
    
    render() {
        return (
            <>
                <div className='avatar'>
                    <img src=''/>
                </div>
                <div className='main-info'>
                    <p>{this.state.name}</p>
                    <p>{this.state.tel}</p>
                </div>
                <div className='personal-data'>
                    <div className='personal-docs'>
                        <h2>Загруженные личные документы:</h2>
                        <div className='is-passport-container'>
                            <input type='checkbox' id='is-passport'/>
                            <label htmlFor='is-passport'>Паспорт</label>
                        </div>
                        <div className='is-diploma-container'>
                            <input type='checkbox' id='is-diploma'/>
                            <label htmlFor='is-diploma'>Диплом об образовании</label>
                        </div>
                    </div>
                    <div className='company-docs'>
                        <h2>Загруженные документы о компании:</h2>
                        <div className='is-finstatements-container'>
                            <input type='checkbox' id='is-finstatements'/>
                            <label htmlFor='is-finstatements'>Финансовая отчетность</label>
                        </div>
                    </div>
                    <div className='about-container'>
                        <p>{this.state.info}</p>
                    </div>
                </div>
                <div className='load-buttons'>
                    <button>Загрузить личный документ</button>
                    <button>Загрузить документ о компании</button>
                    <button>Создать компанию</button>
                </div>
                <div className='companies-list'>
                    <ul>
                        {this.state.companies}
                    </ul>
                </div>
            </>
        )
    }
}

export default PersonalArea;