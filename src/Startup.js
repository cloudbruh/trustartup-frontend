import React from 'react';
import PostCard from './PostCard';
import CommentCard from './CommentCard';
import withParams from './hooks';
import * as c from './constants';


class Startup extends React.Component {

    state = {
        startup: {
            imageLinks: [],
            id: undefined
        },
        posts: [],
        comments: [],
        commentDraft: "",
        funds: 0,
        isApply: false,
        isDonate: false,
        applyDesc: '',
        isApplicant: false
    }

    constructor(props)
    {
        super(props);
        this.state.token = window.cookie.get('token')
        this.state.startup.id = props.params.id
        this.handleLikeClick = this.handleLikeClick.bind(this)
        this.handleFollowClick = this.handleFollowClick.bind(this)
        this.handleCommentInput = this.handleCommentInput.bind(this)
        this.postComment = this.postComment.bind(this)
        this.handleChangeDonate = this.handleChangeDonate.bind(this)
        this.handleSubmitDonate = this.handleSubmitDonate.bind(this)
        this.handleVaccancySubmit = this.handleVaccancySubmit.bind(this)
        this.handleOpenVaccancyClick = this.handleOpenVaccancyClick.bind(this)
        this.handleOpenDonateClick = this.handleOpenDonateClick.bind(this)
        this.handleApplyDescChanged = this.handleApplyDescChanged.bind(this)
    }

    async init()
    {
        let data = await fetch(c.addr + '/api/business/current_user', {
            headers: {
                Authorization: 'Bearer ' + this.state.token
            }
        }).then((res) => res.json())
        this.setState({isApplicant: data.roles.some((role) => role.type === 'APPLICANT')})
    }
      
    async componentDidMount() {

        await fetch(c.addr + '/api/feed/api/startup/' + this.props.params.id, {
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
        await this.props.onTitleChanged(this.state.startup.name)
        fetch(c.addr + '/api/feed/api/startup/' + this.props.params.id + '/posts/', {
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

            this.updateComments();
            this.init()
    }

    updateComments() {
        fetch(c.addr + '/api/feed/api/startup/' + this.props.params.id + '/comments/', {
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
            fetch(c.addr + '/api/feed/api/startup/' + this.props.params.id + "/like", {
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
            fetch(c.addr + '/api/feed/api/startup/' + this.props.params.id + "/like", {
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
            fetch(c.addr + '/api/feed/api/startup/' + this.props.params.id + "/follow", {
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
            fetch(c.addr + '/api/feed/api/startup/' + this.props.params.id + "/follow", {
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

    handleCommentInput(event) {
        this.setState({
            commentDraft: event.target.value,
        });
    }

    handleChangeDonate(event) {
        this.setState({
            funds: event.target.value
        });
    }

    async handleSubmitDonate(ev)
    {
        if (this.state.funds == 0) {
            return;
        }
        let req
        try
        {
            req = await fetch(c.addr + '/api/business/donate?startup_id=' + this.props.params.id + '&amount=' + this.state.funds,
            {method: 'POST',
            headers: {  
            Authorization: 'Bearer '+ window.cookie.get('token')  
            }})
        }
        catch(e)
        {
            alert(e)
            return
        }
        if(!req.ok)
            req.text().then(function (text) {
                alert(text)
            });
        else
        {
          let data = await req.json()
          window.open('http://' + data.link, '_blank').focus()
        }
    }

    async handleVaccancySubmit()
    {
        let req
        let fd = new FormData()
        fd.append('message', this.state.applyDesc)
        try
        {
            req = await fetch(c.addr + '/api/business/apply_startup?startup_id=' + this.props.params.id,
            {method: 'POST',
            headers: {  
            Authorization: 'Bearer '+ window.cookie.get('token')  
            }, body: fd})
        }
        catch(e)
        {
            alert(e)
            return
        }
        if(!req.ok)
            req.text().then(function (text) {
                alert(text)
            });
        else
        {
          alert('Заявка подана!')
        }
    }

    handleOpenVaccancyClick()
    {
        this.setState({
            isApply: !this.state.isApply,
            isDonate: false
        })
    }

    handleOpenDonateClick()
    {
        this.setState({
            isApply: false,
            isDonate: !this.state.isDonate
        })
    }

    handleApplyDescChanged(ev)
    {
        this.setState({
            applyDesc: ev.target.value
        })
    }

    postComment(event) {
        if (this.state.commentDraft == "") {
            return;
        }

        fetch(c.addr + '/api/feed/api/startup/' + this.props.params.id + '/comment', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${this.state.token}`,
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

    cardBottom()
    {
        if(this.state.isApply && this.state.isApplicant) return (
            <div className='desc-vac-input text-center'>
                <label htmlFor='desc' className='font-bold mr-2 mb-2 block'>Напишите о ваших навыках и мотивации работать в этой компании:</label>
                <textarea cols='40' rows='5' id='desc' className='border border-solid rounded-sm w-80 h-20' onChange={this.handleApplyDescChanged}/>
                <button onClick={this.handleVaccancySubmit} className='enter-button block mx-auto py-2 px-4 text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700'>Отправить</button>
            </div>)
        else if(this.state.isDonate) return (
        <div className='donation-form text-center mb-7'>
            <label htmlFor='donate' className='font-bold mr-2 mb-5 mt-5 block'>Размер пожертвования(рублей):</label>
            <input type='text' onChange={this.handleChangeDonate} id='donate' className='border border-solid rounded-sm'/>
            <button onClick={this.handleSubmitDonate} className='enter-button ml-5 py-2 px-4 text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700'>Пожертвовать!</button>
        </div>)
        else return null
    }
    
    render() {
        return (
            <div>
                <div className="max-w-2xl mx-auto my-5 rounded-xl overflow-hidden shadow-dark shadow-sm bg-card">
                    {this.state.startup.imageLinks.map(link => (
                        <img className='w-full' src={c.addr + "/api/media/api/media/download/" + link}></img>
                    ))}
                    <div className='p-2'>
                        <div className="font-medium text-lg">{this.state.startup.name}</div>
                        <div className="text-light">{this.state.startup.userName} {this.state.startup.userSurname}</div>
                        <div className="flex my-1">
                            <div className="flex-1 h-6 bg-dark rounded-full">
                                <div className="h-6 px-2 bg-blue rounded-full text-white text-right" style={{width: this.state.startup.totalFunded * 100 / this.state.startup.fundsGoal + "%"}}>{this.state.startup.totalFunded}</div>
                            </div>
                            <div className="ml-2">из {this.state.startup.fundsGoal}</div>
                        </div>
                        <p>{this.state.startup.descriptionShort}</p>
                        <div className="mt-2 text-center">
                            <button type='button' className="p-1 px-2 rounded-full bg-gray-200 hover:bg-blue hover:text-white" onClick={this.handleLikeClick}>{this.state.startup.likes} лайков</button>
                            <button className="p-1 px-2 rounded-full bg-gray-200 hover:bg-blue hover:text-white" onClick={this.handleFollowClick}>{this.state.startup.follows} подписок</button>
                            {this.state.isApplicant ? <button className="p-1 px-2 rounded-full bg-gray-200 hover:bg-blue hover:text-white" onClick={this.handleOpenVaccancyClick}>Откликнуться на вакансию</button> : null}
                            <button className="p-1 px-2 rounded-full bg-gray-200 hover:bg-blue hover:text-white" onClick={this.handleOpenDonateClick}>Сделать пожертвование</button>
                        </div>
                        {this.cardBottom()}
                    </div>
                </div>
                <div className='news mt-5'>
                    <h2 className='font-bold text-2xl text-center'>Новости</h2>
                    {this.state.posts.map(post => {return <PostCard post={post} token={this.state.token} />})}
                </div>
                <div className='comments mt-10'>
                    <h2 className='font-bold text-2xl text-center'>Комментарии</h2>
                    <textarea onChange={this.handleCommentInput} className='w-full max-w-xl mx-auto my-5 p-1 h-40 rounded-xl block overflow-hidden shadow-dark shadow-sm' placeholder='Напишите ваш комментарий'></textarea>
                    <button className='mx-auto my-5 p-2 block rounded-xl text-xl text-center bg-gray-200 shadow-dark shadow-sm hover:bg-blue hover:text-white'
                        onClick={this.postComment}>Отправить</button>
                    {this.state.comments.map(comment => {return <CommentCard comment={comment}/>})}
                </div>
            </div>
        )
    }
}

export default withParams(Startup);