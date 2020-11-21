import React, { useState , useEffect } from 'react';
import {getCompanyById} from '../../services/company.js'
import {getAllCompanies} from '../../services/company.js'
import CompaniesInfoShow from '../CompaniesInfoShow/CompaniesInfoShow.js'
import CompanyMiniInfo from '../companyMiniInfo/CompanyMiniInfo.js'

export default function CardMakerForCompanies() {
  const [ companies, setCompanies ] = useState([]);
  const [ gottenCompany, setGottenCompany ] = useState(1)
  
   useEffect(() => {
    getAllCompanies().then((response) => {
      setCompanies(Object.values(response));
    });
  }, []);

  function setBack() {
    setGottenCompany(1);
  }

  async function norrmalisingPromise(id) {
    let x = await getCompanyById(id).then((e)=>(e));
    setGottenCompany(x);
  }
  
  const allComps = () => {
    return (
      companies.map((e) => {
         return ( 
          <CompanyMiniInfo 
            companyName = {e['company-name']}
            companyDesc = {e.description}
            companyImg = {e.image}
            companyId = {e.id}
            buttonFunction = {() => {norrmalisingPromise(e.uid)}}
          />
          )
        })
    )
  }
  
if (gottenCompany == 1) {
  return allComps();
} else {
  return (
    <CompaniesInfoShow
      functionBack={() => {
        setGottenCompany(1);
      }}
      companyName={gottenCompany["company-name"]}
      companyDescription={gottenCompany.description}
      companyImg={gottenCompany.image}
      companyAdress={gottenCompany.adress}
      companyCity={gottenCompany.city}
      companyCountrey={gottenCompany.country}
      companyTax={gottenCompany["tax-ID"]}
      companyMail={gottenCompany.email}
      companyTelephone={gottenCompany.tel}
      companyEstablishTime={gottenCompany["date-of-establishment"]}
      companyEmployees={gottenCompany["number-of-employees"]}
    />
  );
}

                            
}