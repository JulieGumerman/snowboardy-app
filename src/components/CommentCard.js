import React from "react";

const CommentCard = ({comment}) => {
    return (
            <div className="comment-card">
                <h5>{comment.title}</h5>
                <p>{comment.comment}</p>
                <p><span className="byline">Added by: </span>{comment.username}</p>
            </div>
            
    )
    }


export default CommentCard;