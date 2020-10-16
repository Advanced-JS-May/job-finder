import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../services/authentication";
import GoogleButton from "../buttons/GoogleButton/GoogleButton";
import FacebookButton from "../buttons/FacebookButton/FacebookButton";
import { checkUserRole } from "../../services/userRoleCheck";
import { USER_ROLES } from "../../constants/user.constants";

export default function EmployeeSignIn() {
  const history = useHistory();

  const [email, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setError] = useState("");
  const { signin } = useAuth();

  const handleLoginUpdate = ({ target: { value } }) => setLogin(value);
  const handlePasswordUpdate = ({ target: { value } }) => setPassword(value);

  const handleLogin = () => {
    signin(email, password)
    .then((res) => {
    console.log("response", res);
    checkUserRole(res.uid, USER_ROLES.user)
    .then((res) => {
     res ? history.push("/signin/jobseeker") : setError("Not a JobSeeker ");
        })
    .catch(console.warn);
    });
  };

  return (
    <>
    <div>
    <p>{errorMsg}</p>
    </div>
      <label>
        Login:
        <br />
        <input value={email} onChange={handleLoginUpdate} />
      </label>
      <br />
      <label>
        Password:
        <br />
        <input
          value={password}
          onChange={handlePasswordUpdate}
          type="password"
        />
      </label>
      <br />
      <button onClick={handleLogin}>Login</button>
      <GoogleButton />
      <FacebookButton />
    </>
  );
}
