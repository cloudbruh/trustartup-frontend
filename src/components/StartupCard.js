import React from 'react';
import {Link} from 'react-router-dom'
import * as config from '../helpers/config';

class StartupCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startup: props.startup,
            token: props.token,
        };

        this.handleLikeClick = this.handleLikeClick.bind(this)
        this.handleFollowClick = this.handleFollowClick.bind(this)
    }

    handleLikeClick(event) {
        if (this.state.startup.liked) {
            fetch(config.url + '/api/feed/api/startup/' + this.state.startup.id + "/like", {
                method: "DELETE",
                headers: {
                    'Authorization': `Bearer ${this.state.token}`
                },
            })
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    startup: {...this.state.startup, likes: result.likes, liked: result.liked}
                });
            })
            .catch((error) => {
                alert(error);
            });
        } else {
            fetch(config.url + '/api/feed/api/startup/' + this.state.startup.id + "/like", {
                method: "POST",
                headers: {
                    'Authorization': `Bearer ${this.state.token}`
                },
            })
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    startup: {...this.state.startup, likes: result.likes, liked: result.liked}
                });
            })
            .catch((error) => {
                alert(error);
            });
        }
    }

    handleFollowClick(event) {
        if (this.state.startup.followed) {
            fetch(config.url + '/api/feed/api/startup/' + this.state.startup.id + "/follow", {
                method: "DELETE",
                headers: {
                    'Authorization': `Bearer ${this.state.token}`
                },
            })
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    startup: {...this.state.startup, follows: result.follows, followed: result.followed}
                });
            })
            .catch((error) => {
                alert(error);
            });
        } else {
            fetch(config.url + '/api/feed/api/startup/' + this.state.startup.id + "/follow", {
                method: "POST",
                headers: {
                    'Authorization': `Bearer ${this.state.token}`
                },
            })
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    startup: {...this.state.startup, follows: result.follows, followed: result.followed}
                });
            })
            .catch((error) => {
                alert(error);
            });
        }
    }

    render() {
        return (
            <div className="max-w-xl mx-auto my-5 rounded-xl overflow-hidden shadow-dark shadow-sm bg-card">
                {this.state.startup.thumbnailLink && (
                    <img className='w-full' src={config.url + "/api/media/api/media/download/" + this.state.startup.thumbnailLink}></img>
                )}
                <div className='p-2'>
                    <Link to={'/startup/' + this.state.startup.id}>
                        <div className="font-medium text-lg">{this.state.startup.name}</div>
                    </Link>
                    <div className="text-light">{this.state.startup.userName} {this.state.startup.userSurname}</div>
                    <div className="flex my-1">
                        <div className="flex-1 h-6 bg-dark rounded-full">
                            <div className="h-6 px-2 bg-blue rounded-full text-white text-right" style={{width: this.state.startup.totalFunded * 100 / this.state.startup.fundsGoal + "%"}}>{this.state.startup.totalFunded}</div>
                        </div>
                        <div className="ml-2">из {this.state.startup.fundsGoal}</div>
                    </div>
                    <p>{this.state.startup.descriptionShort}</p>
                    <div className="mt-2">
                        <button type='button' className="p-1 px-2 rounded-full bg-gray-200 hover:bg-blue hover:text-white" onClick={this.handleLikeClick}>{this.state.startup.likes} лайков</button>
                        <button className="p-1 px-2 rounded-full bg-gray-200 hover:bg-blue hover:text-white" onClick={this.handleFollowClick}>{this.state.startup.follows} подписок</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default StartupCard;