import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../services/authentication";
import { checkUserRole } from "../../services/userRoleCheck";
import { USER_ROLES } from "../../constants/user.constants";

export default function CompanySignIn() {
  const history = useHistory();

  const [email, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setError] = useState("");
  const { signin } = useAuth();

  const handleLoginUpdate = ({ target: { value } }) => setLogin(value);
  const handlePasswordUpdate = ({ target: { value } }) => setPassword(value);

  const handleLogin = () => {
    signin(email, password).then((res) => {
      checkUserRole(res.uid, USER_ROLES.employer)
        .then((res) => {
          res ? history.push("/signin/company") : setError("Not a Company");
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
    </>
  );
}
