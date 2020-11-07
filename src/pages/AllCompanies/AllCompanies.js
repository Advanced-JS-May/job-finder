import React  from 'react';
import CardMakerForCompanies from '../../components/CardMakerForCompanies/CardMakerForCompanies'
/*UI*/
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import './AllCompanies.css'

export default function AllCompanies() {

  return (
    <div className="containerAllCompanies">
     	<CardMakerForCompanies />
    </div>
  );
}