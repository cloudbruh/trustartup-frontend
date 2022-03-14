import React from 'react';
import { Link } from 'react-router-dom'
import * as config from '../helpers/config';

class StartupCard extends React.Component {
    handleLikeClick = (event) => {
        if (this.props.startup.liked) {
            fetch(config.url + '/api/feed/api/startup/' + this.props.startup.id + "/like", {
                method: "DELETE",
                headers: {
                    'Authorization': `Bearer ${window.token}`
                },
            })
                .then(res => res.json())
                .then((result) => {
                    this.props.onStartupChange({...this.props.startup, likes: result.likes, liked: result.liked});
                })
                .catch((error) => {
                    alert(error);
                });
        } else {
            fetch(config.url + '/api/feed/api/startup/' + this.props.startup.id + "/like", {
                method: "POST",
                headers: {
                    'Authorization': `Bearer ${window.token}`
                },
            })
                .then(res => res.json())
                .then((result) => {
                    this.props.onStartupChange({...this.props.startup, likes: result.likes, liked: result.liked});
                })
                .catch((error) => {
                    alert(error);
                });
        }
    }

    handleFollowClick = (event) => {
        if (this.props.startup.followed) {
            fetch(config.url + '/api/feed/api/startup/' + this.props.startup.id + "/follow", {
                method: "DELETE",
                headers: {
                    'Authorization': `Bearer ${window.token}`
                },
            })
                .then(res => res.json())
                .then((result) => {
                    this.props.onStartupChange({...this.props.startup, follows: result.follows, followed: result.followed});
                })
                .catch((error) => {
                    alert(error);
                });
        } else {
            fetch(config.url + '/api/feed/api/startup/' + this.props.startup.id + "/follow", {
                method: "POST",
                headers: {
                    'Authorization': `Bearer ${window.token}`
                },
            })
                .then(res => res.json())
                .then((result) => {
                    this.props.onStartupChange({...this.props.startup, follows: result.follows, followed: result.followed});
                })
                .catch((error) => {
                    alert(error);
                });
        }
    }

    render() {
        return (
            <div className="max-w-xl mx-auto my-5 rounded-xl overflow-hidden shadow-dark shadow-sm bg-card">
                {/* {this.props.startup.imageLinks && (
                     <img className='w-full' src={config.url + "/api/media/api/media/download/" + this.props.startup.imageLinks[0]} alt="startup thumbnail"></img>
                )} */}
                {/* {this.props.startup.imageLinks && this.props.startup.imageLinks.map(link => (
                    <img key={link} className='w-full' src={config.url + "/api/media/api/media/download/" + link} alt="startup"></img>
                ))} */}
                {this.props.startup.thumbnailLink && (
                    <img className='w-full' src={config.url + "/api/media/api/media/download/" + this.props.startup.thumbnailLink} alt="startup thumbnail"></img>
                )}
                <div className='p-2'>
                    <Link to={'/startup/' + this.props.startup.id}>
                        <div className="font-medium text-lg">{this.props.startup.name}</div>
                    </Link>
                    <div className="text-light">{this.props.startup.userName} {this.props.startup.userSurname}</div>
                    <div className="flex my-1">
                        <div className="flex-1 h-6 bg-dark rounded">
                            <div className="h-6 px-2 bg-blue rounded text-white text-right" style={{ width: this.props.startup.totalFunded * 100 / this.props.startup.fundsGoal + "%" }}>{this.props.startup.totalFunded}</div>
                        </div>
                        <div className="ml-2">из {this.props.startup.fundsGoal}</div>
                    </div>
                    <div>{this.props.startup.descriptionShort}</div>
                    <div className="mt-2">
                        <button type='button' className="p-1 px-2 rounded-full bg-gray-200 hover:bg-blue hover:text-white" onClick={this.handleLikeClick}>{this.props.startup.likes} лайков</button>
                        <button className="p-1 px-2 rounded-full bg-gray-200 hover:bg-blue hover:text-white" onClick={this.handleFollowClick}>{this.props.startup.follows} подписок</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default StartupCard;