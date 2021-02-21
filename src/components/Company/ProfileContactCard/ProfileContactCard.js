import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

//UI
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import EditIcon from "@material-ui/icons/Edit";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import BusinessIcon from "@material-ui/icons/Business";
import MailIcon from "@material-ui/icons/Mail";
import PhoneIcon from "@material-ui/icons/Phone";
import LanguageIcon from "@material-ui/icons/Language";
import LocationCityIcon from "@material-ui/icons/LocationCity";

//compoents
import ProfileSocialMediaCard from "../ProfileSocialMediaCard/ProfileSocialMediaCard";

const useStyles = makeStyles({
  card: {
    boxShadow: "10px  8px 10px #888888",
    border: "1px solid #808080 ",
  },
  root: {
    maxWidth: 345,
    // margin: "20px",
    height: "230px",
    display: "flex",
    flexDirection: "column",
    // backgroundSize: "cover",
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
  facebook,
  twitter,
  linkedIn,
}) {
  const classes = useStyles();
  const history = useHistory();

  const handleEdit = () => {
    history.push("/profile/profileContactCard/edit");
  };

  return (
    <Card className={classes.card}>
      <CardContent className={classes.root}>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
          <Button className={classes.edit} onclick={handleEdit}>
            <Link to="/profile/profileContactCard/edit">
              <EditIcon />
            </Link>
          </Button>
          <h3>Contacts</h3>
        </Grid>
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
        <ProfileSocialMediaCard
          facebook={facebook}
          twitter={twitter}
          linkedIn={linkedIn}
          website={website}
        />
      </CardContent>
    </Card>
  );
}
