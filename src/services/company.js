import { database, storage } from "../libraries/firebase";

export function createCompany(id,child,company) {
  return database
     .ref("/companies/" + id)
     .child(child)
     .set(company);
  }

export function getCompanyById (id) {
  return database
    .ref("/companies/" + id)
    .once("value")
    .then((snapshot) => snapshot.val());
}

export const uploadImage = (image) => {
  return storage
     .ref(`images/${image.name}`)
     .put(image);
};

export const uploadImageUrl = (companyId, imageType, imageUrl) => {
   database
    .ref("companies/" + companyId)
    .child(`${imageType}`)
    .set(imageUrl);
};



export function getImageUrl(image) {
  return storage
     .ref("images")
     .child(image.name)
     .getDownloadURL();
}

export function getAllCompanies() {
  return database
    .ref("/companies")
    .once("value")
    .then(function (response) {
      return response.val();
    });
}
