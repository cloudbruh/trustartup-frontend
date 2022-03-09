import React from 'react';
import PostCard from './PostCard';
import CommentCard from './CommentCard';
import withParams from './hooks';

class Startup extends React.Component {

    state = {
        startup: {
            imageLinks: []
        },
        posts: [],
        comments: [{author: 'Иван Петров', text: 'Мне нравится!'}]
    }

    constructor(props)
    {
        super(props)
        props.onTitleChanged(this.state.title)
        this.state.token = window.cookie.get('token')

        this.handleLikeClick = this.handleLikeClick.bind(this)
        this.handleFollowClick = this.handleFollowClick.bind(this)
    }
      
    componentDidMount() {
        fetch('/api/feed/api/startup/' + this.props.params.id, {
            headers: {
                'Authorization': `Bearer ${this.state.token}`
            },
        })
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    startup: result
                });
            });
        
        fetch('/api/feed/api/startup/' + this.props.params.id + '/posts/', {
            headers: {
                'Authorization': `Bearer ${this.state.token}`
            },
        })
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    posts: result
                });
            });

        fetch('/api/feed/api/startup/' + this.props.params.id + '/comments/', {
            headers: {
                'Authorization': `Bearer ${this.state.token}`
            },
        })
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    comments: result
                });
            });
    }

    handleLikeClick(event) {
        if (this.state.startup.liked) {
            fetch('/api/feed/api/startup/' + this.state.startup.id + "/like", {
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
            fetch('/api/feed/api/startup/' + this.state.startup.id + "/like", {
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
            fetch('/api/feed/api/startup/' + this.state.startup.id + "/follow", {
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
            fetch('/api/feed/api/startup/' + this.state.startup.id + "/follow", {
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
            <div>
                <div className="max-w-xl mx-auto my-5 rounded-xl overflow-hidden shadow-dark shadow-sm bg-card">
                    {this.state.startup.imageLinks.map(link => (
                        <img className='w-full' src={"/api/media/api/media/download/" + link}></img>
                    ))}
                    <div className='p-2'>
                        <div className="font-medium text-lg">{this.state.startup.name}</div>
                        <div className="text-light">{this.state.startup.userName} {this.state.startup.userSurname}</div>
                        <div className="flex my-1">
                            <div className="flex-1 h-6 bg-dark rounded-full">
                                <div className="h-6 px-2 bg-blue rounded-full text-white text-right" style={{width: "82%"}}>$1000</div>
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
                <div className='news mt-5'>
                    <h2 className='font-bold text-2xl text-center'>Новости</h2>
                    {this.state.posts.map(post => {return <PostCard post={post} token={this.state.token} />})}
                </div>
                <div className='comments mt-10'>
                    <h2 className='font-bold text-2xl text-center'>Комментарии</h2>
                    {this.state.comments.map(comment => {return <CommentCard comment={comment}/>})}
                </div>
            </div>
        )
    }
}

export default withParams(Startup);