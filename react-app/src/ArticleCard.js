import React from 'react';
function ArticleCard(props) {
     return (
        <div className='mx-auto text-center w-5/12 h-40 pt-3 mt-10 mb-10 bg-card rounded-md'>
            <h2 className='font-bold text-xl mb-5'>{props.title}</h2>
            <p>{props.text}</p>
        </div>
        )
}

export default ArticleCard;