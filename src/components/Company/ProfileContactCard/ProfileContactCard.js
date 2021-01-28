import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

//UI
import Card from "@material-ui/core/Card";
import EditIcon from "@material-ui/icons/Edit";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import BusinessIcon from "@material-ui/icons/Business";
import MailIcon from "@material-ui/icons/Mail";
import PhoneIcon from "@material-ui/icons/Phone";
import LanguageIcon from "@material-ui/icons/Language";
import LocationCityIcon from "@material-ui/icons/LocationCity";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 10,
    display: "flex",
    flexDirection: "column",
    backgroundSize: "cover",
  },
  element: {
    display: "flex",
    alignItems: "center",
  },

  edit: {
    position: "relative",
    top: 0,
    left: 0,
  },
});

export default function ProfileContactCard({
  country,
  city,
  address,
  tel,
  mail,
  website,
}) {
  const classes = useStyles();
  const history = useHistory();

  const handleEdit = () => {
    history.push("/profile/profileContactCard/edit");
  };

  return (
    <Card>
      <Button className={classes.edit} onclick={handleEdit}>
        <Link to="/profile/profileContactCard/edit">
          <EditIcon />
        </Link>
      </Button>

      <CardContent className={classes.root}>
        <h3>Contacts</h3>
        <div className={classes.element}>
          <LocationCityIcon />
          State:{country} City:{city}
        </div>
        <div className={classes.element}>
          <BusinessIcon />
          Address:{address}
        </div>
        <div className={classes.element}>
          <PhoneIcon />
          Tel:{tel}
        </div>
        <div className={classes.element}>
          <MailIcon />
          Mail:{mail}
        </div>
        <div className={classes.element}>
          <LanguageIcon />
          Website:{website}
        </div>
      </CardContent>
    </Card>
  );
}
