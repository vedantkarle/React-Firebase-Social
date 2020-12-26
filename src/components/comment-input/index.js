import React from "react";
import "./style.css";

const CommentInput = ({ id }) => {
  return (
    <div className="comment__input">
      <textarea
        className="comment__input__textarea"
        rows="1"
        placeholder="Add Comment"
      ></textarea>
      <button>Post</button>
    </div>
  );
};

export default CommentInput;
