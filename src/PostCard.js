import React from 'react';
function PostCard(props) {
    return (
        <div key={props.post.id} className='mx-auto text-center w-5/12 h-40 pt-3 mt-10 mb-10 bg-card rounded-md'>
            <h2 className='font-bold text-xl mb-5'>{props.post.header}</h2>
            <p>{props.post.text}</p>
        </div>
        )
}

export default PostCard;