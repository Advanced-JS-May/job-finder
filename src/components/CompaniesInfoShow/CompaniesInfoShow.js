import React, { useState, useEffect } from "react";

import "./CompaniesInfoShow.css";
import { makeStyles } from "@material-ui/core/styles";
import {
  ProfilePicture,
  CoverImage,
} from "../../components/ProfilePictureCover/ProfilePictureCover";
import Fab from '@material-ui/core/Fab';
import { useLocation,useHistory } from "react-router-dom";
import { getCompanyById } from "../../services/company.js";
import DetailInfoCompanies from "../DetailInfoCompanies/DetailInfoCompanies";
import MiniCardJobs from "../MiniCardJobs/MiniCardJobs.js"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

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
  },
  root: {
    paddingTop: '10px',
    paddingLeft: '10px',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function CompaniesInfoShow() {
  const classes = useStyles();
  const location = useLocation();
  const [company, setCompany] = useState({});
  let history = useHistory();

  function goBack() {
    history.push('/companies')
  }
  useEffect(() => {
    getCompanyById(
      location.pathname.substring(location.pathname.lastIndexOf("/") + 1)
    ).then((x) => {
      setCompany(x);
    });
  });
  return (
    <div className="AllPageContainer">
      <div className={classes.root}>
        <Fab color="primary" aria-label="add" onClick={goBack}>
          <ArrowBackIcon />
        </Fab>
      </div>
      
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
                {company.name ? company.name : "No Company Name"}
              </h1>
              <p className="descppp">
                {company.headline
                  ? company.headline
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
             
                <DetailInfoCompanies
                  field={company.field ? company.field : 'No Field'}
                  country={
                    company.country
                      ? company.country
                      : "No info given"
                  }
                  city={company.city ? company.city : "No data"}
                  address={
                    company.address
                      ? company.address
                      : "No data"
                  }
                  tel={company.phone ? company.phone : "No data"}
                  mail={company.mail ? company.mail : "No data"}
                  website={
                    company.website
                      ? company.website
                      : "No data"
                  }
                  emp={company.employee ? company.employee : 'No data'}
                  LinkedIn={company.linkedIn ? company.linkedIn : 'No data'}
                  facebook={company.facebook ? company.facebook : 'No data'}
                  twitter={company.twitter ? company.twitter : 'No data'}
                />
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
