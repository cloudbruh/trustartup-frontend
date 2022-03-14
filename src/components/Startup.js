import React from 'react';
import PostCard from './PostCard';
import CommentCard from './CommentCard';
import withParams from '../helpers/hooks';
import * as config from '../helpers/config';
import StartupCard from './StartupCard';


class Startup extends React.Component {

    state = {
        startup: {},
        posts: [],
        comments: [],
        commentDraft: "",
    }

    componentDidMount() {
        this.props.onTitleChanged('');
        fetch(config.url + '/api/feed/api/startup/' + this.props.params.id, {
            headers: {
                'Authorization': `Bearer ${window.token}`
            },
        })
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    startup: result
                });
                this.props.onTitleChanged(this.state.startup.name);
            });

        fetch(config.url + '/api/feed/api/startup/' + this.props.params.id + '/posts/', {
            headers: {
                'Authorization': `Bearer ${window.token}`
            },
        })
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    posts: result
                });
            });

        //this.updateComments();
    }

    updateComments = () => {
        fetch(config.url + '/api/feed/api/startup/' + this.props.params.id + '/comments/', {
            headers: {
                'Authorization': `Bearer ${window.token}`
            },
        })
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    comments: result
                });
            });
    }

    handleLikeClick = () => {
        if (this.state.startup.liked) {
            fetch(config.url + '/api/feed/api/startup/' + this.state.startup.id + "/like", {
                method: "DELETE",
                headers: {
                    'Authorization': `Bearer ${window.token}`
                },
            })
                .then(res => res.json())
                .then((result) => {
                    this.setState({
                        startup: { ...this.state.startup, likes: result.likes, liked: result.liked }
                    });
                })
                .catch((error) => {
                    alert(error);
                });
        } else {
            fetch(config.url + '/api/feed/api/startup/' + this.state.startup.id + "/like", {
                method: "POST",
                headers: {
                    'Authorization': `Bearer ${window.token}`
                },
            })
                .then(res => res.json())
                .then((result) => {
                    this.setState({
                        startup: { ...this.state.startup, likes: result.likes, liked: result.liked }
                    });
                })
                .catch((error) => {
                    alert(error);
                });
        }
    }

    handleFollowClick = () => {
        if (this.state.startup.followed) {
            fetch(config.url + '/api/feed/api/startup/' + this.state.startup.id + "/follow", {
                method: "DELETE",
                headers: {
                    'Authorization': `Bearer ${window.token}`
                },
            })
                .then(res => res.json())
                .then((result) => {
                    this.setState({
                        startup: { ...this.state.startup, follows: result.follows, followed: result.followed }
                    });
                })
                .catch((error) => {
                    alert(error);
                });
        } else {
            fetch(config.url + '/api/feed/api/startup/' + this.state.startup.id + "/follow", {
                method: "POST",
                headers: {
                    'Authorization': `Bearer ${window.token}`
                },
            })
                .then(res => res.json())
                .then((result) => {
                    this.setState({
                        startup: { ...this.state.startup, follows: result.follows, followed: result.followed }
                    });
                })
                .catch((error) => {
                    alert(error);
                });
        }
    }

    postComment = () => {
        if (this.state.commentDraft == "") {
            return;
        }

        fetch('/api/feed/api/startup/' + this.state.startup.id + '/comment', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${window.token}`,
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                repliedId: null,
                text: this.state.commentDraft,
            }),
        })
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    comments: [...this.state.comments, result]
                });
            })
            .catch((error) => {
                alert(error);
            });
    }

    render() {
        return (
            <div>
                <StartupCard startup={this.state.startup} onStartupChange={(startup) => {
                    this.setState({ startup: startup })
                }} ></StartupCard>
                <div className='news mt-5'>
                    <h2 className='font-bold text-2xl text-center'>Новости</h2>
                    {this.state.posts.map(post => { return <PostCard key={post.id} post={post} /> })}
                </div>
                <div className='comments mt-10'>
                    <h2 className='font-bold text-2xl text-center'>Комментарии</h2>
                    <textarea onChange={(event) => this.setState({ commentDraft: event.target.value })} className='w-full max-w-xl mx-auto my-5 p-1 h-40 rounded-xl block overflow-hidden shadow-dark shadow-sm' placeholder='Напишите ваш комментарий'></textarea>
                    <button className='mx-auto my-5 p-2 block rounded-xl text-xl text-center bg-gray-200 shadow-dark shadow-sm hover:bg-blue hover:text-white'
                        onClick={this.postComment}>Отправить</button>
                    {this.state.comments.map(comment => { return <CommentCard key={comment.id} comment={comment} /> })}
                </div>
            </div>
        )
    }
}

export default withParams(Startup);