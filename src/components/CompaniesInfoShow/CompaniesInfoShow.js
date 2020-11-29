import React from "react";

import "./CompaniesInfoShow.css";
import { makeStyles } from "@material-ui/core/styles";
import PeopleIcon from "@material-ui/icons/People";
import WorkIcon from "@material-ui/icons/Work";
import BusinessIcon from "@material-ui/icons/Business";
import MailIcon from "@material-ui/icons/Mail";
import PhoneIcon from "@material-ui/icons/Phone";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import AssignmentIcon from "@material-ui/icons/Assignment";
import Fab from "@material-ui/core/Fab";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const useStyles = makeStyles((theme) => ({
  paperCont: {
    display: "flex",
    marginRight: "20px",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
  backButton: {
    position: "absolute",
    top: "100px",
    left: "50px",
  },
}));

export default function SimplePaper({
  functionBack,
  companyName,
  companyDescription,
  companyImg,
  companyField,
  companyAdress,
  companyMail,
  companyTelephone,
  companyCity,
  companyCountrey,
  companyEmployees,
  companyJobs,
  companyEstablishTime,
  companyTax,
}) {
  const classes = useStyles();
  return (
    <div className='containerCompaniesMini'>
      <Fab
        className={classes.backButton}
        color="primary"
        aria-label="back"
        onClick={functionBack}
      >
        <ArrowBackIcon />
      </Fab>
      <div className="mainContainerppp">
        <div className={classes.paperCont}>
          <img src={companyImg} className="avatarppp" alt="img"></img>
        </div>
        <div>
          <h1>{companyName}</h1>
          <p className="descppp">{companyDescription}</p>
        </div>
      </div>
      <div className="detailInfoppp">
        <div className="infoppp">
          <div>
            <AssignmentIcon fontSize="large" color="primary" />
            <span>Field: {companyField}</span>
          </div>
          <div>
            <BusinessIcon fontSize="large" color="primary" />
            <span>
              Address: {companyAdress}, {companyCity} {companyCountrey} ,{" "}
              {companyTax}
            </span>
          </div>
          <div>
            <MailIcon fontSize="large" color="primary" />
            <span>Mail: {companyMail}</span>
          </div>
          <div>
            <PhoneIcon fontSize="large" color="primary" />
            <span>Telephone: +{companyTelephone}</span>
          </div>
        </div>
        <div className="infoppp">
          <div>
            <span>Date of Establishment: {companyEstablishTime}</span>
            <CalendarTodayIcon fontSize="large" color="primary" />
          </div>
          <div>
            <span>Number of employees: {companyEmployees}</span>
            <PeopleIcon fontSize="large" color="primary" />
          </div>
          <div>
            <span>Jobs available: Info</span>
            <WorkIcon fontSize="large" color="primary" />
          </div>
        </div>
      </div>
    </div>
  );
}
