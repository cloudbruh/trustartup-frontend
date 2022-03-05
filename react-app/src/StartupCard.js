import React from 'react';
import {Link} from 'react-router-dom'

class StartupCard extends React.Component {
    render() {
        return (
            <Link to='/startup'>
                <div className='card bg-card border-solid mx-auto relative w-2/5 px-2 py-5 mb-20'>
                    <div className='mb-3'>
                        <h1 className='card-title font-bold text-center mb-2'>{this.props.startup.name}</h1>
                        <p className='card-desc text-center mb-2'>{this.props.startup.descriptionShort}</p>
                    </div>
                    <div className='text-center'>
                        <p className='card-staff block'><b>Лайков:</b> {this.props.startup.likes}</p>
                        <p className='card-places block '><b>Цель:</b> {this.props.startup.fundsGoal}</p>
                    </div>
                    <img src={"http://localhost:8080/api/media/api/media/download/" + this.props.startup.thumbnailLink} />
                </div>
            </Link>
        )
    }
}

export default StartupCard;