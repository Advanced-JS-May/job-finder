import React, { useState, useEffect } from "react";

import "./CompaniesInfoShow.css";
import { makeStyles } from "@material-ui/core/styles";
import { ProfilePicture, CoverImage  } from "../../components/icons/Avatar/Avatar";
import ProfileContactInfo from '../../components/Company/ProfileContactCard/ProfileContactInfo.js'
import { useLocation } from 'react-router-dom'
import { getCompanyById } from '../../services/company.js'

const useStyles = makeStyles((theme) => ({
  paperCont: {
    display: "flex",
    alignItems: "center",
  },
  backButton: {
    position: "absolute",
    top: "100px",
    left: "50px",
  },
}));

export default function SimplePaper() {
  const classes = useStyles();
  const location = useLocation();
  const [ company, setCompany ] = useState({bio: {},contacts: {}});
  useEffect(() => {
    getCompanyById(location.pathname.substring(location.pathname.lastIndexOf('/') + 1)).then((x) => {
      setCompany(x)
    })
  })
  return (
    <div className="AllPageContainer">
      <div className="containerCompaniesMini">

        <div className="mainContainerppp">
          <div className="headerppp">
            <div className={classes.paperCont}>
              <ProfilePicture
                imageLink={company.image ? company.image : 'No image'}
                className="avatarppp"
                alt="img"
              />
              <CoverImage imageLink={company.coverImage ? company.coverImage : 'No image'} />
            </div>
            <div className="textppp">
              <h1>{company.companyName ? company.companyName : 'No Company Name'}</h1>
              <p className="descppp">{company.bio.description ? company.bio.description : 'No Company Description'}</p>
            </div>
          </div>
          <div>
            <ProfileContactInfo country={company.contacts.country ? company.contacts.country: 'No data'}  city={company.contacts.city ? company.contacts.city: 'No data'}  address={company.contacts.address ? company.contacts.address: 'No data'}  tel={company.contacts.tel ? company.contacts.tel: 'No data'}  mail={company.contacts.mail ? company.contacts.mail: 'No data'}  website={company.contacts.website ? company.contacts.website: 'No data'} />
          </div>
        </div>
      </div>
    </div>
  );
}
