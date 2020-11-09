import React, { useState } from "react";
import { database } from "../libraries/firebase";
import { storage } from "../libraries/firebase";

// function to POST information about company to DB 
export  function createCompany (company) {
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

