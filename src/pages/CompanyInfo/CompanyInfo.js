import React , { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
// import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { uniqueId } from "lodash";
import { createCompany } from '../../services/company';
import {useAuth} from '../../services/authentication'

export default function Company () {

const [company,setCompany]=useState({country: '',city: '',adress: '',email: '',tel: '',})
const {user}=useAuth();


const handleCompanyInput = ({ target:{ value,name } })=> {
   setCompany((e)=>({
     ...e,
     [name]:value,
     id:uniqueId(),
     uid:user.uid,
   }))
};

const handleCreateCompany =()=>{
  createCompany(company)
}




return (
    <div>
    <h2>gcgfvhvh</h2>
      <form style={{ textAlign: "center" }}>
        <h3>Company Bio</h3>
        <h2>Basic Info</h2>
        <label>
         <TextField id="outlined-basic" label="Company Name"  variant="outlined" name="company-name"onChange={handleCompanyInput} value={company.title}/>
        </label>
        <label>
         <TextField id="outlined-basic" label="Date of Establishment" type="number" variant="outlined" name="date-of-establishment"onChange={handleCompanyInput} value={company.dateOfEstablishment}/>
        </label>
        <label>
         <TextField id="outlined-basic" label="Number of Employees"   type="number"variant="outlined" name="number-of-employees"onChange={handleCompanyInput} value={company.numberOfEmployees}/>
        </label>
        <label>
         <TextField id="outlined-basic" label="Tax ID"  variant="outlined" name="tax-ID"onChange={handleCompanyInput} value={company.taxId} />
        </label>
        <label>
         {/* <TextField id="outlined-basic" label="Tax ID"  variant="outlined" name="tax-ID"onChange={handleCompanyInput} value={company.taxId} /> */}
        </label>
        <label>
                {/* <TextareaAutosize aria-label="minimum height"   rowsMin={3}  placeholder="Write your description here" name="description "onChange={handleCompanyInput} value={company.description}></TextareaAutosize> */}
        </label>
        <h2>Contact Details</h2>
        <label>
         <TextField id="outlined-basic" label="Country" type="text"variant="outlined" name="country"onChange={handleCompanyInput} value={company.country}/>
        </label>
        <label>
         <TextField id="outlined-basic" label="City"    type="text"variant="outlined" name="city"onChange={handleCompanyInput} value={company.city}/>
        </label>
        <label>
         <TextField id="outlined-basic" label="address"   variant="outlined" name="adress"onChange={handleCompanyInput} value={company.address}/>
        </label>
        <label>
         <TextField id="outlined-basic" label="E-mail"   type="email"variant="outlined" name="email"onChange={handleCompanyInput} value={company.email}/>
        </label>
        <label>
         <TextField id="outlined-basic" label="Tel"   type="number" variant="outlined" name="tel"onChange={handleCompanyInput} value={company.tel}/>
        </label>
        <Button variant="contained" color="primary"onClick={handleCreateCompany}> Submit</Button>
      </form>
    </div>
  );
 } 
