import React from 'react';
function ArticleCard(props) {
     return (
        <>
            <h2>{props.title}</h2>
            <p>{props.text}</p>
        </>
        )
}

export default ArticleCard;