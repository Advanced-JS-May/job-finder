import React from "react";
import { useLocation, generatePath, useHistory } from "react-router-dom"; //forSaerch

//UI
import { Button } from "@material-ui/core";

export function SubmitButton() {
  let history = useHistory();

  let handleClick = () => {
    history.goBack();
  };

  return <Button onClick={handleClick}>Submit</Button>;
}
