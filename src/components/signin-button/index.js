import React from "react";
import { useContext } from "react";
import { UserContext } from "../../contexts/user";
import { signInWithGoogle } from "../../services/auth";
import "./style.css";

const SignInBtn = () => {
  const [user, setUser] = useContext(UserContext).user;

  const signInBtnClick = async () => {
    let user = await signInWithGoogle();
    if (user) setUser(user);
  };

  return (
    <div className="signInBtn" onClick={signInBtnClick}>
      <p>Sign In With Google</p>
    </div>
  );
};

export default SignInBtn;
