//React
import React, { useState } from 'react';
import { Formik } from 'formik';
import { useParams } from "react-router-dom";
import { useAuth } from '../../../services/authentication';

//UI
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

//services 
import createJob from '../../../services/job';

//helpers
import { uniqueId } from "lodash";


export default function CreateJob () {
    const { id } = useParams();
    const { user }= useAuth()
    const [job,setJob]=useState({});
 
    const handleJobInput = ({ target:{ value,name } })=> {
        setJob((e)=>({
          ...e,
          [name]:value,
          id:uniqueId(),
          uid:user.uid,
           }))
     };
    
     const handleCreateJob =()=>{
        createJob(job)
      };

    return (
<div>
    <form onSubmit={ handleCreateJob } style={{ textAlign: "center" }}>
    <TextField
        id="outlined-basic"
        label="Position Name"
        variant="outlined"
        name="position"
        onChange={handleJobInput}
        value={job.position}
    />
    <Button variant="contained" color="primary" onClick={handleCreateJob}>
        {" "}
        Submit
    </Button>
    </form>;
</div>
      );
}

