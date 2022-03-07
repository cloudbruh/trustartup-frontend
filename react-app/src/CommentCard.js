import React from 'react';
function CommentCard(props) {
     return (
        <div key={props.comment.id} className='mx-auto text-center w-5/12 h-40 pt-3 mt-10 mb-10 bg-card rounded-xl'>
            <h2 className='font-bold text-xl mb-5'>{props.comment.userName} {props.comment.userSurname}</h2>
            <p>{props.comment.text}</p>
        </div>
        )
}

export default CommentCard;