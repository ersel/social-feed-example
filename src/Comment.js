import React from "react";

const Comment = ({ comment }) => {
  return (
    <div>
      {comment.message} by {comment.name}, {comment.dateTime}
    </div>
  );
};

export default Comment;
