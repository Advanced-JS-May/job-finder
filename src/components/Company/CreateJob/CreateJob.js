//React
import React, { useState } from 'react';
import { Formik } from 'formik';

//UI
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

//services 
import createJob from '../../../services/job';

//helpers
import { uniqueId } from "lodash";


export default function CreateJob () {

    const [job,setJob]=useState({});
 
    const handleJobInput = ({ target:{ value,name } })=> {
        setJob((e)=>({
          ...e,
          [name]:value,
          id:uniqueId(),
          uid:14,
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


