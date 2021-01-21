import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../services/authentication";
import { checkUserRole } from "../../services/checkUserRole";
import { USER_ROLES } from "../../constants/user.constants";
import FormField from "../FormElements/FormField/FormField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  form: {
    display: "flex",
    flexDirection: "column",
    width: "350px",
    ["@media and (max-width: 768px)"]: {
      width: "250px",
    },
  },
  button: {
    margin: " 16px 0",
    padding: "0.8rem",
    backgroundColor: "#4267B2",
    color: "white",
  },
});

export default function CompanySignIn() {
  const history = useHistory();
  const classes = useStyles();

  const [email, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setError] = useState("");
  const { signin, user } = useAuth();

  const handleLoginUpdate = ({ target: { value } }) => setLogin(value);
  const handlePasswordUpdate = ({ target: { value } }) => setPassword(value);

  const handleLogin = (e) => {
    e.preventDefault();
    signin(email, password).then((user) => {
      if (user.profileCreated) {
        if (user.role === USER_ROLES.employer) {
          history.push(`/company/${user.uid}`);
        } else {
          setError("Not a Company");
        }
      } else {
        history.push("/profile/create");
      }
    });
  };

  return (
    <>
      <div>
        <p>{errorMsg}</p>
      </div>
      <form onSubmit={handleLogin} className={classes.form}>
        <FormField
          type="email"
          name="email"
          value={email}
          label={"email"}
          onChange={handleLoginUpdate}
        />
        <br />
        <FormField
          value={password}
          onChange={handlePasswordUpdate}
          name="password"
          type="password"
          label={"password"}
        />
        <br />
        {/* <button className={classes.button}>Login</button> */}
        <Button
          type="submit"
          color="primary"
          variant="contained"
          className={classes.button}
          variant="contained"
          color="primary"
        >
          Login
        </Button>
      </form>
    </>
  );
}
