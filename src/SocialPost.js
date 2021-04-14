import React from "react";
import Comment from "./Comment";

const SocialPost = ({ post, likeCount, setLikeCount }) => {
  return (
    <div className="feed-item">
      <span>
        {post.message} by {post.user}
      </span>
      <br />
      <span>
        Likes: {post.favs}, {post.dateTime}
      </span>
      {post.comments.map((comment) => {
        return <Comment 
        likeCount = {likeCount}
        setLikeCount= {setLikeCount}
        comment={comment} />;
      })}
      <br />
      <br />
    </div>
  );
};

export default SocialPost;
