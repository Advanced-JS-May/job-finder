import React from "react";
import FacebookSvgIcon from "../FacebookSvgIcon/FacebookSvgIcon";
import Button from "@material-ui/core/Button";
import { useAuth } from "../../services/authentication";
import { useHistory } from "react-router-dom";
import { ROLES } from "../../constants/constants";

export default function FacebookButton() {
  const { authWithFacebook } = useAuth();
  const history = useHistory();

  function signInWithFacebook() {
    authWithFacebook(ROLES.employer)
      .then((user) => {
        if (user) {
          history.push("/");
        }
      })
      .catch((error) => console.log(error));
  }
  return (
    <Button
      variant="outlined"
      color="primary"
      onClick={signInWithFacebook}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "220px",
      }}
    >
      <FacebookSvgIcon width="20" />
      <span>sign In with Facebook</span>
    </Button>
  );
}
