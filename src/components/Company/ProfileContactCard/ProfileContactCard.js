import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

//services
import { createCompany, getCompanyById } from "../../../services/company";
import { useAuth } from "../../../services/authentication";

//UI
import Card from "@material-ui/core/Card";
import EditIcon from "@material-ui/icons/Edit";
import Fab from "@material-ui/core/Fab";
import CheckIcon from "@material-ui/icons/Check";

//components
import ProfileContactInfo from "./ProfileContactInfo";
import ProfileContactEdit from "./ProfileContactEdit";
import EditProfileCardInfo from "../EditProfileCardInfo/EditProfileCardInfo"

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 10,
    display: "flex",
    flexDirection: "column",
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

export default function ProfileContactCard(props) {
  const classes = useStyles();
  const [edit, setEdit] = useState(false);
  const [company, setCompany] = useState({});
  const { user } = useAuth();

  const handleCompanyInput = ({ target: { value, name } }) => {
    setCompany((e) => ({
      ...e,
      [name]: value,
      id: user.uid,
    }));
  };

  const handleEdit = () => {
    setEdit(!edit);
    createCompany(company);
  };

  useEffect(() => {
    getCompanyById(user.uid).then((c) => {
      setCompany(c);
    });
  }, [user.uid]);

  return (
    <>
      {!edit ? (
        <div>
          <div>
            <Fab className={classes.edit}>
              <EditIcon className={classes.edit} onClick={handleEdit} />
              {/* <EditProfileCardInfo /> */}
            </Fab>
          </div>
          <Card>
            <ProfileContactInfo
              country={company.country}
              city={company.city}
              address={company.address}
              tel={company.tel}
              mail={company.mail}
              website={company.website}
            />
          </Card>
        </div>
      ) : (
        <Card>
          <Fab className={classes.edit}>
            <CheckIcon className={classes.edit} onClick={handleEdit} />
          </Fab>
          <ProfileContactEdit
            country={company.country}
            city={company.city}
            address={company.address}
            tel={company.tel}
            mail={company.mail}
            website={company.website}
          />
        </Card>
      )}
    </>
  );
}
