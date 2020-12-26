import React, { useState, useEffect } from "react";
import { Post } from "../../containers";
import { db } from "../../firebase";
import "./style.css";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, post: doc.data() })));
    });
  }, []);

  return (
    <div className="feed">
      {posts.map(({ id, post }) => {
        return (
          <Post
            key={id}
            userPhoto={post.userPhoto}
            username={post.username}
            photoURL={post.photoUrl}
            caption={post.caption}
            comments={post.comments}
            id={id}
          />
        );
      })}
    </div>
  );
};

export default Feed;
