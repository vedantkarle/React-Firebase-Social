import React, { useState, useContext } from "react";
import { SignInBtn } from "../../components";
import { UserContext } from "../../contexts/user";
import "./style.css";

const Navbar = () => {
  const [user, setUser] = useContext(UserContext).user;

  return (
    <div className="navbar">
      <p>React Social</p>
      {user ? (
        <img src={user.photoURL} className="navbar__img" />
      ) : (
        <SignInBtn />
      )}
    </div>
  );
};

export default Navbar;
