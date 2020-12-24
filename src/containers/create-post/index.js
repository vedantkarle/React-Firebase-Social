import React from "react";
import { SignInBtn } from "../../components";
import "./style.css";

const CreatePost = () => {
  return (
    <div className="createPost">
      <SignInBtn />
      <p style={{ marginLeft: "16px" }}>to Post & Comment</p>
    </div>
  );
};

export default CreatePost;
