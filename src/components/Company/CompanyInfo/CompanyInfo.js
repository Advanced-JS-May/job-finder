//React
import React , { useState } from 'react'
import { Link } from 'react-router-dom';

//UI
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

//services
import { createCompany } from '../../../services/company';
import { useAuth } from '../../../services/authentication';




export default function CompanyInfo () {

const [company,setCompany]=useState({})
const { user } = useAuth();

let link =`comapny${user.uid}`

const handleCompanyInput = ({ target:{ value,name } })=> {
   setCompany((e)=>({
     ...e,
     [name]:value,
     id:user.uid,
     }))
};

const handleCreateCompany =()=>{
  createCompany(company);
  // window.location.reload(false)
}




return( <div>
       <form  style={{ textAlign: "center" }}>
          <h3>Company Bio</h3>
          <TextField
            id="outlined-basic"
            label="Description"
            variant="outlined"
            name="description"
            onChange={handleCompanyInput}
            value={company.description}
            width="300px"
          />
          <h2>Basic Info</h2>
          <TextField
            id="outlined-basic"
            label="Company Name"
            variant="outlined"
            name="companyName"
            onChange={handleCompanyInput}
            value={company.title}
          />
          <br />
          <TextField
            id="outlined-basic"
            label="DateOfEstablishment"
            type="number"
            variant="outlined"
            name="establishment"
            onChange={handleCompanyInput}
            value={company.dateOfEstablishment}
          />
          <br />
          <TextField
            id="outlined-basic"
            label="Employees"
            type="number"
            variant="outlined"
            name="employees"
            onChange={handleCompanyInput}
            value={company.numberOfEmployees}
          />
          <br />
          <TextField
            id="outlined-basic"
            label="Tax ID"
            variant="outlined"
            name="taxID"
            onChange={handleCompanyInput}
            value={company.taxId}
          />
          <br />
          <h2>Contact Details</h2>
          <TextField
            id="outlined-basic"
            label="Country"
            type="text"
            variant="outlined"
            name="country"
            onChange={handleCompanyInput}
            value={company.country}
          />
          <br />
          <TextField
            id="outlined-basic"
            label="City"
            type="text"
            variant="outlined"
            name="city"
            onChange={handleCompanyInput}
            value={company.city}
          />
          <br />
          <TextField
            id="outlined-basic"
            label="address"
            variant="outlined"
            name="address"
            onChange={handleCompanyInput}
            value={company.address}
          />
          <br />
          <TextField
            id="outlined-basic"
            label="E-mail"
            type="website"
            variant="outlined"
            name="email"
            onChange={handleCompanyInput}
            value={company.website}
          />
          <br />
          <TextField
            id="outlined-basic"
            label="Tel"
            type="number"
            variant="outlined"
            name="tel"
            onChange={handleCompanyInput}
            value={company.tel}
          />
          <br />
            <Button variant="contained" color="primary" onClick={handleCreateCompany}>
                <Link to = {`/company/${user.uid}`}  >Submit</Link>
            </Button>
        </form>;
    </div>
  );
 } 
