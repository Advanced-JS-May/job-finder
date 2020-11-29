import React, { useState , useEffect } from 'react';
import {getCompanyById} from '../../services/company.js'
import {getAllCompanies} from '../../services/company.js'
import CompaniesInfoShow from '../CompaniesInfoShow/CompaniesInfoShow.js'
<<<<<<< HEAD
import CompanyMiniInfo from '../companyMiniInfo/CompanyMiniInfo.js'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '../Select/Select.js'
import { useLocation } from 'react-router-dom'
import fields from "../../constants/jobField.js";
import _ ,{uniqueId} from 'lodash'

let tmpComps = [];
let constComps = [];

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  button: {
    padding: '14px 10px',
    'span': {
      padding: '5px 5px', 
    }
  },
  searchPart: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
=======
import CompanyMiniInfo from '../CompanyMiniInfo/CompanyMiniInfo.js'
>>>>>>> c6dc8bd5a8b77018b31cc5410e75a1d83f311b48

export default function CardMakerForCompanies() {

  const [ companies, setCompanies ] = useState(['']);
  const [ gottenCompany, setGottenCompany ] = useState(1)
  const [ search, setSearch ] = useState('');
  const [fieldValue, setFieldValue] = useState('All'); 
  const classes = useStyles();
  const location = useLocation();

  const mapForComps = companies.map((e) => 
          <CompanyMiniInfo 
            key={_.uniqueId('cmii_')}
            companyName = {e.companyName}
            companyDesc = {e.description}
            companyImg = {e.image}
            companyId = {e.id}
            buttonFunction = {() => {norrmalisingPromise(e.uid)}}
          />
      )

   useEffect(() => {
    if(location.pathname !== '/companies') {
      let lastPartPath = location.pathname.substring(location.pathname.lastIndexOf('/') + 1, location.pathname.lastIndexOf('_'));
    
    if(lastPartPath !== 'companies') {
      setSearch(lastPartPath)
    }
  } 
    
    let lastPartField = decodeURI(location.pathname.substring(location.pathname.lastIndexOf('_') + 1))
    if(lastPartField !== 'All') {
      setFieldValue('All')
    }
    getAllCompanies().then((response) => {
      setCompanies(Object.values(response));
      constComps = Object.values(response)
    });
  }, []);

  function Search(){
    tmpComps = constComps;
    if(search[0] === '' === '' && fieldValue === 'All') {
      setCompanies(constComps)
      return true;
    }
    else if(fieldValue === 'All') {
    const filterComps = tmpComps.filter((e) => {
      for(let i = 0; i < search.length;i++){
        if(e.companyName && e.companyName.toLowerCase().includes(search[i].toLowerCase())){
          return true;

        }
        if(i+1===search.length){
          return false;
        }
      }
    })

    setCompanies(filterComps)
  }
  else if(search[0] === '') {
    const filterComps = tmpComps.filter((e) => {
      if(e.field === fieldValue) {
        return true;
      }
      return false;
    })
    setCompanies(filterComps)
  }
}
  

  function setBack() {
    setGottenCompany(1);
  }

  async function norrmalisingPromise(id) {
    let x = await getCompanyById(id).then((e)=>(e));
    setGottenCompany(x);
  }
  
  function allComps()  {
    return (
      <div>
        <form className={classes.root , classes.searchPart} noValidate autoComplete="off">
          <TextField 
            id="outlined-basic" 
            label="Outlined" 
            variant="outlined" 
            helperText="Write the keywords one by one deviding by ,"
            value={search}
            onChange={(e) => { search[0] !== '' ? setSearch(e.target.value.split(',')):setSearch('')}}
          />
          <Select givenArray={fields} givenFunction={(e)=> {setFieldValue(e.target.value)}} />
          <Button className={classes.button} size="small" variant="contained" color="primary" onClick={() => {Search()}}>
            Search
          </Button>
        </form>
        <div className='containerCompaniesMini'>
          {mapForComps}
        </div>
      </div>
    )
  }
  
if (gottenCompany === 1) {
  return allComps();
} else {
  return (
    <CompaniesInfoShow
      functionBack={() => {
        setGottenCompany(1);
      }}
      companyName={gottenCompany.companyName}
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