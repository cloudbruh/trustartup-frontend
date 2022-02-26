import React from 'react';
import ArticleCard from './ArticleCard'
import CommentCard from './CommentCard'

class Startup extends React.Component {

    state = {
        title: 'Batsales',
        text: 'Наша компания специализируется на разведении и продаже летучих мышей. Украшаем ваши уютные пещеры этими прекрасными грациозными созданиями с 2006 года.',
        amount: 1000,
        need: 100000,
        likes: 10,
        description: 'Мы крупнейший в мире и всей обозримой вселенной питомник летучих мышей. Мы постоянно развиваемся выводим, селекционируем и генетический модифицируем наших питомцев. Профтрафифвшиеся сотрудники становятся кормом для новых хищных видов.',
        news: [{title: 'Заголовок новости', text: 'Содержание новости'},
        {title: 'Заголовок новости 2', text: 'Содержание новости 2'},
        {title: 'Заголовок новости 3', text: 'Содержание новости 3'}],
        comments: [{author: 'Иван Петров', text: 'Мне нравится!'}]
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
                            <p className='mb-5 font-bold'>Собрано средств: {this.state.amount} / {this.state.need}</p>
                            <p className='font-bold'>Лайков: {this.state.likes}</p>
                        </div>
                        <div className='desc'>
                            <p>{this.state.description}</p>
                        </div>
                    </div>
                </div>
                    <div className='news mt-5'>
                        <h2 className='font-bold text-2xl text-center'>Новости</h2>
                        {this.state.news.map(article => {return <ArticleCard title={article.title} text={article.text}/>})}
                    </div>
                    <div className='comments mt-10'>
                        <h2 className='font-bold text-2xl text-center'>Комментарии</h2>
                        {this.state.comments.map(comment => {return <CommentCard author={comment.author} text={comment.text}/>})}
                    </div>
        </div>
        )
    }
}

export default Startup;