import React from "react";
import { CreatePost, Feed, Navbar } from "../../containers";
import "./style.css";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <CreatePost />
      <Feed />
    </div>
  );
};

export default Home;
