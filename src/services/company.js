import { set } from "lodash";
import React, { useState } from "react";
import { database,addCommentElement } from "../libraries/firebase";
import { storage } from "../libraries/firebase";

// function to POST information about company to DB 

export  function createCompany (company ) {
  return database.ref('/companies/' + company.id).set(company);
}

export function getCompanyById(id) {
  return database
    .ref('/companies/' + id)
    .once('value')
    .then((snapshot) => snapshot.val());
}

export const uploadImage = (image) => {
   return storage
   .ref(`images/${image.name}`)
   .put(image);
  };

  export const uploadImageUrl = (companyId, imageType, imageUrl) => {
     return  database
     .ref("companies/" + companyId)
     .child(`${imageType}`)
     .set( imageUrl)
  };


export function getImageUrl (image)  {
return storage
 .ref("images")
 .child(image.name)
 .getDownloadURL()
}

export function getAllCompanies() {
  return database
    .ref("/companies")
    .once("value")
    .then(function (response) {
      return response.val();
    });
}	