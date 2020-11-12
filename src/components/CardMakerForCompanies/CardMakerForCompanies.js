import React, { useState , useEffect } from 'react';
import {getCompanyById} from '../../services/company.js'
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
    display: 'inline-block',
    marginTop: '3%',
    marginBottom: '2%',
  },
  media: {
    height: 140,
  },
});

export default function CardMakerForCompanies() {
  const [ companies, setCompanies ] = useState([{img: 'https://play-lh.googleusercontent.com/YFpMBVjnTFQ9D7ln9jOPDxCwTf_AUPgNU0Tz8uskVP-0Esj_5jqBDpqcPm0LwDpcLA', name: 'Company Name(getting from db)', desc: 
    'Company Description(getting from db, 5) \\\ Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum', id:'6n2DrqCLrfTrKjPDcYC8CHEG69K2'}, {img: 'https://play-lh.googleusercontent.com/YFpMBVjnTFQ9D7ln9jOPDxCwTf_AUPgNU0Tz8uskVP-0Esj_5jqBDpqcPm0LwDpcLA', name: 'Company Name(getting from db)', desc: 
    'Company Description(getting from db, Max chars. 50) \\\ Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum', id:'Dwz6NcIoQlg9ilzTb0qJqSFuyz42'},{img: 'https://play-lh.googleusercontent.com/YFpMBVjnTFQ9D7ln9jOPDxCwTf_AUPgNU0Tz8uskVP-0Esj_5jqBDpqcPm0LwDpcLA', name: 'Company Name(getting from db)', desc: 
    'Company Description(getting from db, Max chars. 50) \\\ Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum', id:'H379QYRtNIhVhb23IVJh9uW94us1'},{img: 'https://play-lh.googleusercontent.com/YFpMBVjnTFQ9D7ln9jOPDxCwTf_AUPgNU0Tz8uskVP-0Esj_5jqBDpqcPm0LwDpcLA', name: 'Company Name(getting from db)', desc: 
    'Company Description(getting from db, Max chars. 50) \\\ Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum', id:'TiANllaiPTdp1gRb5LqzeP5fv3z1'},{img: 'https://play-lh.googleusercontent.com/YFpMBVjnTFQ9D7ln9jOPDxCwTf_AUPgNU0Tz8uskVP-0Esj_5jqBDpqcPm0LwDpcLA', name: 'Company Name(getting from db)', desc: 
    'Company Description(getting from db, Max chars. 50) \\\ Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum', id:'ZPAD7oRbfQSwurYDNUlRFWMCyDE2'},{img: 'https://play-lh.googleusercontent.com/YFpMBVjnTFQ9D7ln9jOPDxCwTf_AUPgNU0Tz8uskVP-0Esj_5jqBDpqcPm0LwDpcLA', name: 'Company Name(getting from db)', desc: 
    'Company Description(getting from db, Max chars. 50) \\\ Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum', id:'fq7J4i96oiPTmytVKfjFd0TIh9f2'},{img: 'https://play-lh.googleusercontent.com/YFpMBVjnTFQ9D7ln9jOPDxCwTf_AUPgNU0Tz8uskVP-0Esj_5jqBDpqcPm0LwDpcLA', name: 'Company Name(getting from db)', desc: 
    'Company Description(getting from db, Max chars. 50) \\\ Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum', id:'wlapL7ql6SNjFazSvcwUUhI7cbl1'}]);
  const [ gottenCompany, setGottenCompany ] = useState(1)

  function setBack() {
    setGottenCompany(1);
  }
  async function norrmalisingPromise(id) {
    let x = await getCompanyById(id).then((e)=>(e));
    setGottenCompany(x);
    console.log(x)
  }
  const allComps = () => {
    return (
      companies.map((e) => {
         return <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={e.img}
                    title="logo"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                     {e.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                     {e.desc}
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

  useEffect(() => {
      
  });
  const classes = useStyles();
  
  if(gottenCompany == 1) {
    return(allComps());
  }
  else {

    return(<CompaniesInfoShow functionBack={() => {setGottenCompany(1)}} companyName={gottenCompany.['company-name']} companyDescription={gottenCompany.description} companyImg={gottenCompany.image}  companyAdress={gottenCompany.adress} companyCity={gottenCompany.city} companyCountrey={gottenCompany.country} companyTax={gottenCompany.['tax-ID']} companyMail={gottenCompany.email} companyTelephone={gottenCompany.tel} companyEstablishTime={gottenCompany.['date-of-establishment']} companyEmployees={gottenCompany.['number-of-employees']} />)
  }
                            
}