import React, { useState , useEffect } from 'react';
import {getCompanyById} from '../../services/company.js'
import {getAllCompanies} from '../../services/company.js'
import CompaniesInfoShow from '../CompaniesInfoShow/CompaniesInfoShow.js'


import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minWidth: 345,
    display: 'inline-block',
    marginTop: '3%',
    marginBottom: '2%',
  },
  media: {
    height: 140,
  },
});

export default function CardMakerForCompanies() {
  const [ companies, setCompanies ] = useState([{description: ''}]);
  const [ gottenCompany, setGottenCompany ] = useState(1)
  
   useEffect(() => {
    getAllCompanies().then((response) => {
      setCompanies(Object.values(response));
    });
  }, []);

  function ifDescription(prop) {
    if(typeof prop != 'undefined') {
      if(prop.trim != ''){
        if(prop.length < 150) {
          return prop
        }
         return prop.substr(0,150) + '...';
        }
      }
      return 'No description'
    }
   

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
         return <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={e.image}
                    title="logo"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                     {e.['company-name']}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      { ifDescription(e.description)
                        
                     }
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary" onClick={() => {norrmalisingPromise(e.id)}}>
                    More Info
                  </Button>
               </CardActions>
            </Card>
        })
    )
  }

  const classes = useStyles();
  
  if(gottenCompany == 1) {
    return(allComps());
  }
  else {
    return(<CompaniesInfoShow functionBack={() => {setGottenCompany(1)}} companyName={gottenCompany.['company-name']} companyDescription={gottenCompany.description} companyImg={gottenCompany.image}  companyAdress={gottenCompany.adress} companyCity={gottenCompany.city} companyCountrey={gottenCompany.country} companyTax={gottenCompany.['tax-ID']} companyMail={gottenCompany.email} companyTelephone={gottenCompany.tel} companyEstablishTime={gottenCompany.['date-of-establishment']} companyEmployees={gottenCompany.['number-of-employees']} />)
  }
                            
}