import React  from 'react';
import CardMakerForCompanies from '../../components/CardMakerForCompanies/CardMakerForCompanies'
import './AllCompanies.css'


export default function AllCompanies() {

  return (
  	<div className="AllPageContainer">
		<div className="containerAllCompanies" >
	     	<CardMakerForCompanies />
	    </div>
    </div>
  );
}