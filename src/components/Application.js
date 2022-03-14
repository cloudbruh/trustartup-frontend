import React from 'react';
import { Link } from 'react-router-dom'
import * as config from '../helpers/config';

class Application extends React.Component {

    types = {
        'ROLE_CREATOR': 'Получение роли стартапера',
        'ROLE_APPLICANT': 'Получение роли  соискателя',
        'ROLE_MODERATOR': 'Получение роли модератора',
        'STARTUP': 'Создание стартапа'
    }

    statuses = {
        'GRANTED': 'Одобрено',
        'PROHIBITED': 'Отклонено',
        'CREATED': 'Ожидает рассмотрения'
    }

    render() {
        return (
            <div className="text-center mb-5 bg-card w-80 mx-auto">
                <div>Тип заявки: {this.types[this.props.appl.moderatable_type]}</div>
                <div>Статус: {this.statuses[this.props.appl.status]}</div>
                <div>Мой комментарий: {this.props.appl.content}</div>
                <div>Комментарий модератора: {this.props.appl.comment}</div>
            </div>
        )
    }
}

export default Application;