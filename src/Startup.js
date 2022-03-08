import React from 'react';
import PostCard from './PostCard';
import CommentCard from './CommentCard';
import withParams from './hooks';

class Startup extends React.Component {

    state = {
        startup: {},
        posts: [],
        comments: [{author: 'Иван Петров', text: 'Мне нравится!'}]
    }

    constructor(props)
    {
        super(props)
        props.onTitleChanged(this.state.title)
    }
      
    componentDidMount() {
        fetch('/api/feed/api/startup/' + this.props.params.id)
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    startup: result
                });
            });
        
        fetch('/api/feed/api/startup/' + this.props.params.id + '/posts/')
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    posts: result
                });
            });

        fetch('/api/feed/api/startup/' + this.props.params.id + '/comments/')
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    comments: result
                });
            });
    }
    
    render() {
        return (
            <div>

                <div className='main-info flex flex-row'>
                    <div className='ml-10 mt-10'>
                        <img src='' alt='Лого компании'/>
                        <button className='mt-10 py-2 px-4 text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700'>Откликнуться на вакансию</button>
                    </div>  
                    <div className='main-info mx-20 mt-10'>
                        <div className='text-center mb-10'>
                            <p>{this.state.startup.name}</p>
                            <p className='mb-5 font-bold'>Собрано средств: {this.state.amount} / {this.state.startup.fundsGoal}</p>
                            <p className='font-bold'>Лайков: {this.state.startup.likes}</p>
                            <p className='font-bold'>Подписчиков: {this.state.startup.follows}</p>
                        </div>
                        <div className='desc'>
                            <p>{this.state.startup.description}</p>
                        </div>
                    </div>
                </div>
                    <div className='news mt-5'>
                        <h2 className='font-bold text-2xl text-center'>Новости</h2>
                        {this.state.posts.map(post => {return <PostCard post={post}/>})}
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