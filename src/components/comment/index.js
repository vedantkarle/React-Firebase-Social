import React from "react";
import "./style.css";

const Comment = ({ username, caption, userPhoto }) => {
  return (
    <div className="comment">
      <p
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
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
        <span style={{ marginLeft: "24px" }}>{caption}</span>
      </p>
    </div>
  );
};

export default Comment;
