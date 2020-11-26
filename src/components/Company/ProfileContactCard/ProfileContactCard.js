import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

//services
import { getCompanyById } from "../../../services/company";
import { useAuth } from "../../../services/authentication";

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

// //components
// import ProfileContactInfo from "./ProfileContactInfo";
// import ProfileContactEdit from "./ProfileContactEdit";
// import EditProfileCardInfo from "../EditProfileCardInfo/EditProfileCardInfo";

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

export default function ProfileContactCard() {
  const classes = useStyles();
  const [edit, setEdit] = useState(false);
  const [company, setCompany] = useState({});
  const { user } = useAuth();

  const handleEdit = () => {
    setEdit(!edit);
  };

  useEffect(() => {
    getCompanyById(user.uid).then((c) => {
      setCompany(c.contacts);
    });
  }, [user.uid]);

  return (
    <Card>
      <Button className={classes.edit}>
        <Link to="/profile/profileContactCard/edit">
          <EditIcon />
        </Link>
      </Button>
      <CardContent className={classes.root}>
        <h3>Contacts</h3>
        <div className={classes.element}>
          <LocationCityIcon />
          State:{company.country} City:{company.city}
        </div>
        <div className={classes.element}>
          <BusinessIcon />
          Address:{company.address}
        </div>
        <div className={classes.element}>
          <PhoneIcon />
          Tel:{company.tel}
        </div>
        <div className={classes.element}>
          <MailIcon />
          Mail:{company.mail}
        </div>
        <div className={classes.element}>
          <LanguageIcon />
          Website:{company.website}
        </div>
      </CardContent>
    </Card>
  );
}
