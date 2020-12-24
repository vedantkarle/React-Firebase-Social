import React from "react";
import { CreatePost, Navbar } from "../../containers";
import "./style.css";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <CreatePost />
    </div>
  );
};

export default Home;
