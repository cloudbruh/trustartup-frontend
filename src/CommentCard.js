import React from 'react';
function CommentCard(props) {
     return (
        <div className="max-w-xl mx-auto my-5 rounded-xl overflow-hidden shadow-dark shadow-sm bg-card">
            <div className='p-2'>
                <div className="text-light">{props.comment.userName} {props.comment.userSurname}</div>
                <div className="text-light">{props.comment.createdAt}</div>
                <p>{props.comment.text}</p>
            </div>
        </div>
        )
}

export default CommentCard;