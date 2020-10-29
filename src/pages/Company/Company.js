import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCompanyById } from '../../services/company'
import CardMedia from '@material-ui/core/CardMedia';

export default function Company() {
  const [company, setCompany] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getCompanyById(id).then((c) => {
      setCompany(c);
    });
  }, [id]);

console.log(company)
  return ( 
    <section>
      <div>
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
  </section>)
}
