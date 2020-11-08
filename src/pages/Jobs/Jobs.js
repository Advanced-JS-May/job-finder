import React, { useEffect , useState } from "react";
import JobCard from "../../components/JobCard/JobCard";
import { makeStyles } from "@material-ui/core/styles";
import {getAllJobs} from "../../services/getAllJobs"

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
});

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    getAllJobs().then((response) => {
      setJobs(Object.values(response));
    });
  }, []);
  console.log("out",jobs);

  // useEffect(() => {
  //   getAllJobs().then((res) => {
  //     console.log("Res before",res);

  //     setJobs((t)=>{t.push(res)})

  //     console.log("JOB",jobs);
  //   }
  //   ); // very bad code 


  
  return (
    <div className={classes.root}>
    {jobs.map(({id,position})=>{
      return(
        <JobCard jobTitle={position} />
      )
    })}
    </div>
  );
}

export default Jobs;