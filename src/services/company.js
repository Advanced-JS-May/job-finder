  
import { database } from "../libraries/firebase";

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


// function to GET information about company from DB
// export function getCompany (company) {
//   return database()
//   .ref('companies/' + company.id)
//   .once('value')
//   .then(function(company) {
//     console.log(company)
// //   });
// }
// export function getUsersById(id) {
//   return database
//     .ref('/users/' + id)
//     .once('value')
//     .then((snapshot) => snapshot.val());
// }
