//React
import React , { useState } from 'react'
//UI
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
//services
import { createCompany,uploadImage } from '../../../services/company';
import { useAuth } from '../../../services/authentication'

export default function CompanyInfo () {

const [company,setCompany]=useState({})
const [image, setImage] = useState(null);
const { user } = useAuth();
// const { url } = getImageUrl();

const handleCompanyInput = ({ target:{ value,name } })=> {
   setCompany((e)=>({
     ...e,
     [name]:value,
     id:user.uid,
    //  imageUrl:url,
      }))
};

const handleCreateCompany =()=>{
  createCompany(company);
  uploadImage(image);
}

const handleImageUpload  = (e) => {
      setImage(e.target.files[0]);
  };
console.log(image)

return (
 <div>
       <form style={{ textAlign: "center" }}>
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
          <TextField
            id="outlined-basic"
            label="DateOfEstablishment"
            type="number"
            variant="outlined"
            name="establishment"
            onChange={handleCompanyInput}
            value={company.dateOfEstablishment}
          />
          <TextField
            id="outlined-basic"
            label="Employees"
            type="number"
            variant="outlined"
            name="employees"
            onChange={handleCompanyInput}
            value={company.numberOfEmployees}
          />
          <TextField
            id="outlined-basic"
            label="Tax ID"
            variant="outlined"
            name="taxID"
            onChange={handleCompanyInput}
            value={company.taxId}
          />
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
          <TextField
            id="outlined-basic"
            label="City"
            type="text"
            variant="outlined"
            name="city"
            onChange={handleCompanyInput}
            value={company.city}
          />
          <TextField
            id="outlined-basic"
            label="address"
            variant="outlined"
            name="address"
            onChange={handleCompanyInput}
            value={company.address}
          />
          <TextField
            id="outlined-basic"
            label="E-mail"
            type="website"
            variant="outlined"
            name="email"
            onChange={handleCompanyInput}
            value={company.website}
          />
          <TextField
            id="outlined-basic"
            label="Tel"
            type="number"
            variant="outlined"
            name="tel"
            onChange={handleCompanyInput}
            value={company.tel}
          />
            <h4>Image</h4>
            <input type="file" onChange={handleImageUpload}/>
            <Button variant="contained" color="primary" onClick={handleCreateCompany}>
              {" "}
              Submit
            </Button>
        </form>;
    </div>
  );
 } 
