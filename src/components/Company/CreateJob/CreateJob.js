//React
import React, { useState } from 'react';
import { Formik } from 'formik';

//UI
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import createJob from '../../../services/job';
import userEvent from '@testing-library/user-event';

//helpers
import { uniqueId } from "lodash";


export default function CreateJob () {

    const [job,setJob]=useState({});
 
    const handleJobInput = ({ target:{ value,name } })=> {
        setJob((e)=>({
          ...e,
          [name]:value,
          id:uniqueId(),
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
    <Button variant="contained" c olor="primary" onClick={handleCreateJob}>
        {" "}
        Submit
    </Button>
    </form>;
</div>
      );
}


