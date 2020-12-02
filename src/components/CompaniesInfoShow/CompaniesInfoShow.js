import React, { useState, useEffect } from "react";

import "./CompaniesInfoShow.css";
import { makeStyles } from "@material-ui/core/styles";
import {
  ProfilePicture,
  CoverImage,
} from "../../components/ProfilePictureCover/ProfilePictureCover";
import { useLocation } from "react-router-dom";
import { getCompanyById } from "../../services/company.js";
import DetailInfoCompanies from "../DetailInfoCompanies/DetailInfoCompanies";
import MiniCardJobs from "../MiniCardJobs/MiniCardJobs.js"

const useStyles = makeStyles((theme) => ({
  paperCont: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    marginTop: "50px",
    marginRight: "150px",
    marginLeft: "150px",
    padding: "none",
  },
  backButton: {
    position: "absolute",
    top: "100px",
    left: "50px",
  },
  MiniCardJobs: {
    margin: '0 25px',
  }
}));

export default function CompaniesInfoShow() {
  const classes = useStyles();
  const location = useLocation();
  const [company, setCompany] = useState({ bio: {}, contacts: {} });
  useEffect(() => {
    getCompanyById(
      location.pathname.substring(location.pathname.lastIndexOf("/") + 1)
    ).then((x) => {
      setCompany(x);
    });
  });
  return (
    <div className="AllPageContainer">
      <div className="containerCompaniesMini">
        <div className="mainContainerppp">
          <div className={classes.mainHeader}>
            <div className={classes.paperCont}>
              <ProfilePicture
                imageLink={company.image ? company.image : "No image"}
                className="avatarppp"
                alt="img"
              />
              <CoverImage
                imageLink={company.coverImage ? company.coverImage : "No image"}
              />
            </div>
            <div className="textppp">
              <h1>
                {company.companyName ? company.companyName : "No Company Name"}
              </h1>
              <p className="descppp">
                {company.bio
                  ? company.bio.description
                    ? company.bio.description
                    : "No Info"
                  : "No Company Description"}
              </p>
            </div>
          </div>
          <hr style={{
              color: '#ccc',
              backgroundColor: '#ccc',
              height: .5,
              width: '60%',
          }}/>
          <div className="DetailInfoJobsppp">
            <div>
              {company.contacts ? (
                <DetailInfoCompanies
                  country={
                    company.contacts.country
                      ? company.contacts.country
                      : "No data"
                  }
                  city={company.contacts.city ? company.contacts.city : "No data"}
                  address={
                    company.contacts.address
                      ? company.contacts.address
                      : "No data"
                  }
                  tel={company.contacts.tel ? company.contacts.tel : "No data"}
                  mail={company.contacts.mail ? company.contacts.mail : "No data"}
                  website={
                    company.contacts.website
                      ? company.contacts.website
                      : "No data"
                  }
                />
              ) : (
                "No detail info were given"
              )}
            </div>
            <div className="JobsContainerppp">
              <h2 style={{marginBlockEnd: '0'}}>
                Available Jobs: 
              </h2>
              <br />
              <div className="onlyJobsContainerppp">
                <MiniCardJobs image='https://m.economictimes.com/thumb/msid-75241252,width-1200,height-900,resizemode-4,imgsize-94829/hiring-agencies.jpg' jobName='Some name' jobDesc='Be responsible for Support aaaa' className={classes.MiniCardJobs} />
                <MiniCardJobs image='https://cdn.lynda.com/static/landing/images/hero/Manager_1200x630-1503438961060.jpg' jobName='Manager' jobDesc='We are hiring for manager. For more info call us' className={classes.MiniCardJobs} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
