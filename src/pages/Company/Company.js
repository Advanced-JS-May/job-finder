import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCompanyById } from '../../services/company'

//UI
import CardMedia from '@material-ui/core/CardMedia';

//components
import CreateJob from '../../components/Company/CreateJob/CreateJob';

// import CompanyInfo from '../../components/Company/CompanyInfo/CompanyInfo'

export default function Company() {
  const [company, setCompany] = useState({});
  const { id } = useParams ();

  useEffect(() => {
    getCompanyById(id).then((c) => {
      setCompany(c);
    });
  }, [id]);

console.log(company)
  return ( 

    /* <div>
      <CardMedia
        component="img"
        alt="Profile Picture"
        height="50px"
        image="./img_avatar.png"
        title="Profile picture"
      />
    </div>
    <div>
      <p>{company.companyName}</p>
    </div>
    <div>
      <CompanyInfo />
       <CreateJob /> 
    </div>
*/
<CreateJob />

  )
  }