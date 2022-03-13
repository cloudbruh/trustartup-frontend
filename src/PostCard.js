import React from 'react';
import {Link} from 'react-router-dom'
import * as c from './constants'

class PostCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: props.post,
            token: props.token,
        };

        this.handleLikeClick = this.handleLikeClick.bind(this)
    }

    handleLikeClick(event) {
        if (this.state.post.liked) {
            fetch(c.addr + '/api/feed/api/post/' + this.state.post.id + "/like", {
                method: "DELETE",
                headers: {
                    'Authorization': `Bearer ${this.state.token}`
                },
            })
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    post: {...this.state.post, likes: result.likes, liked: result.liked}
                });
            })
            .catch((error) => {
                alert(error);
            });
        } else {
            fetch(c.addr + '/api/feed/api/post/' + this.state.post.id + "/like", {
                method: "POST",
                headers: {
                    'Authorization': `Bearer ${this.state.token}`
                },
            })
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    post: {...this.state.post, likes: result.likes, liked: result.liked}
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
                {this.state.post.imageLinks.map(link => (
                    <img className='w-full' src={"/api/media/api/media/download/" + link}></img>
                ))}
                <div className='p-2'>
                    <Link to={'/post/' + this.state.post.id}>
                        <div className="font-medium text-lg">{this.state.post.header}</div>
                    </Link>
                    <div className="text-light">{this.state.post.userName} {this.state.post.userSurname}</div>
                    <p>{this.state.post.text}</p>
                    <div className="mt-2">
                        <button type='button' className="p-1 px-2 rounded-full bg-gray-200 hover:bg-blue hover:text-white" onClick={this.handleLikeClick}>{this.state.post.likes} лайков</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostCard;