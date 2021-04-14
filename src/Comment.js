import React from "react";

const Comment = ({ comment, likeCount, setLikeCount }) => {

  return (
    <>
      <div>
        {comment.message} by {comment.name}, {comment.dateTime}
      </div>
      <div>
        {likeCount}
        <button
         onClick = {() => setLikeCount( likeCount +1 )}        
        > Like </button>
        <br/>
        <input placeholder="placeholder text" />
        <button> Post Comment</button>

      </div>
    </>
  );
};

export default Comment;
