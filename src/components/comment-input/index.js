import React, { useState, useContext } from "react";
import { UserContext } from "../../contexts/user";
import { db } from "../../firebase";
import "./style.css";

const CommentInput = ({ comments, id }) => {
  const [user, setUser] = useContext(UserContext).user;
  const [comment, setComment] = useState("");
  const [commentArray, setCommentArray] = useState(comments ? comments : []);

  const addComment = () => {
    if (comment !== "") {
      //add comment to post
      commentArray.push({
        comment: comment,
        username: user.email.replace("@gmail.com", "").toLowerCase(),
        userPhoto: user.photoURL,
      });

      db.collection("posts")
        .doc(id)
        .update({
          comments: commentArray,
        })
        .then(() => {
          setComment("");
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  return (
    <div className="comment__input">
      <textarea
        className="comment__input__textarea"
        rows="1"
        placeholder="Add Comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></textarea>
      <button className="comment__input__btn" onClick={addComment}>
        Post
      </button>
    </div>
  );
};

export default CommentInput;
