import React, { useContext } from "react";
import { Comment, CommentInput } from "../../components";
import { db, storage } from "../../firebase";
import "./style.css";

const Post = ({ userPhoto, username, id, photoURL, caption, comments }) => {
  const deletePost = () => {
    //1.delete image from firebase storage

    //get ref to the image file we like to delete
    const imageRef = storage.refFromURL(photoURL);

    //delete the file
    imageRef
      .delete()
      .then(() => {
        console.log("image deleted");
      })
      .catch((e) => {
        console.log(e);
      });

    //2. delete post info from firestore

    db.collection("posts")
      .doc(id)
      .delete()
      .then(() => {
        console.log("post deleted");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="post">
      <div className="post__header">
        <div className="post__headerLeft">
          <img src={userPhoto} className="post__profilePic" />
          <p style={{ marginLeft: "8px" }}>{username}</p>
        </div>
        <button className="deleteBtn" onClick={deletePost}>
          Delete
        </button>
      </div>

      <div className="post__center">
        <img src={photoURL} className="post__photoUrl" />
      </div>

      <div className="post__caption">
        <p style={{ display: "flex", alignItems: "center" }}>
          <span
            style={{
              fontWeight: "500",
              marginRight: "8px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img src={userPhoto} className="caption__profilePic" />
            {username}
          </span>
          {caption}
        </p>
      </div>

      <CommentInput id={id} />

      {comments ? <h5 style={{ marginTop: "8px" }}>Comments:</h5> : <></>}

      {comments ? (
        comments.map((comment) => (
          <Comment
            key={id}
            caption={comment.comment}
            username={comment.username}
            userPhoto={comment.userPhoto}
          />
        ))
      ) : (
        <></>
      )}
    </div>
  );
};

export default Post;
