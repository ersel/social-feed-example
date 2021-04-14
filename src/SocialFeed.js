import React, { useState, useEffect } from "react";
import SocialPost from "./SocialPost";

let posts = [
  {
    user: "Naciye",
    message: "yeni x aldim",
    media: "",
    dateTime: "17 Nisan Cumartesi, 18:24",
    favs: 56,
    comments: [
      {
        name: "Safiye",
        message: "canim cok yakisti",
        dateTime: "17 Nisan Cumartesi, 19:24",
      },
    ],
  },
  {
    user: "Ersel",
    message: "something",
    media: "",
    dateTime: "18 Nisan Cumartesi, 21:24",
    favs: 6,
    comments: [],
  },
];

const SocialFeed = () => {
  const [likeCount, setLikeCount] = useState(posts[0].favs);
  const [comment, setComment] = useState("x");

  return (
    <>
      <div>
        Birseyler yaz <input />
      </div>
      <div>
        {posts.map((post) => {
          return (
            <SocialPost
              post={post}
              likeCount={likeCount}
              setLikeCount={setLikeCount}
              comment ={comment}
              setComment={setComment}
            />
          );
        })}
      </div>
    </>
  );
};

export default SocialFeed;

/*
    SocialFeed
        SocialPost 
            Comments
*/
