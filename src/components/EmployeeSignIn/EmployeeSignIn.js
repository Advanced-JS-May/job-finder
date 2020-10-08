import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../services/authentication";
import GoogleButton from "../GoogleButton/GoogleButton";
import faceAuth from "../../services/facebook";
import FacebookButton from "../FacebookButton/FacebookButton";

export default function EmployeeSignIn() {
  const [email, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const { signin } = useAuth();

  const handleLoginUpdate = ({ target: { value } }) => setLogin(value);
  const handlePasswordUpdate = ({ target: { value } }) => setPassword(value);
  const history = useHistory();

  const handleLogin = () => {
    signin(email, password)
      .then(() => {
        history.push("/signin/employer");
      })
      .catch(console.warn);
  };
  const handleFacebook = () => {
    faceAuth()
      .then((user) => {
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <label>
        Login:
        <br />
        <input value={email} onChange={handleLoginUpdate} />
      </label>
      <br />
      <label>
        Password:
        <br />
        <input value={password} onChange={handlePasswordUpdate} />
      </label>
      <br />
      <button onClick={handleLogin}>Login</button>
      <GoogleButton />
      <FacebookButton />
    </>
  );
}
