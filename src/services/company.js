import { set } from "lodash";
import React, { useState } from "react";
import { database } from "../libraries/firebase";
import { storage } from "../libraries/firebase";

// function to POST information about company to DB 

export  function createCompany (company ) {
  return database.ref('companies/' + company.id).set(company);
}

export function getCompanyById(id) {
  return database
    .ref('/companies/' + id)
    .once('value')
    .then((snapshot) => snapshot.val());
}

export const uploadImage = (image) => {
   return  storage.ref(`images/${image.name}`).put(image);
  };

  export const uploadImageUrl = (companyId, imageType, imageUrl) => {
    imageType === "coverImage"
      ? database.ref("companies/" + companyId).set({ coverImage: imageUrl })
      : database.ref("companies/" + companyId).set({ image: imageUrl });
  };
  
// export const getImageUrl =  () => {
//     storage
//    .ref("images")
//    .child(image.name)
//    .getDownloadURL()
//    .then(url => {
//      setUrl(url);
//    });
//    console.log(url)
// }


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