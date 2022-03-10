import React from 'react';
import {Link} from 'react-router-dom'

class StartupCard extends React.Component {
    render() {
        return (
            <Link to={'/startup/' + this.props.startup.id}>
                <div className='card flex flex-row bg-card border-solid mx-auto relative w-96 px-2 py-5 mb-20'>
                    <img className='ml-5' src={"/api/media/api/media/download/" + this.props.startup.thumbnailLink} width={100} height={100}/>
                    <div className='mx-auto'>
                        <div className='mb-3'>
                            <h1 className='card-title font-bold text-center mb-2'>{this.props.startup.name}</h1>
                            <p className='card-desc text-center mb-2'>{this.props.startup.descriptionShort}</p>
                        </div>
                        <div className='text-center'>
                            <p className='card-likes block'><b>Лайков:</b> {this.props.startup.likes}</p>
                            <p className='card-likes block'><b>Подписчиков:</b> {this.props.startup.followers}</p>
                            <p className='card-goal block '><b>Цель:</b> {this.props.startup.fundsGoal} рублей</p>
                        </div>
                    </div>
                </div>
            </Link>
        )
    }
}

export default StartupCard;