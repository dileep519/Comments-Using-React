import React from 'react';

const CommentDetail=(props)=>{
    return (<div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={props.image}/>
            </a>
            <div className="content">
            <a href="/" className="author">{props.author}</a>
                <div className="metadata">
                    <span className="date">{props.timeAgo}</span>
                </div>
                <div className="text">{props.comment}</div>
            </div>
    </div>);
}

// exporting comment

export default CommentDetail;