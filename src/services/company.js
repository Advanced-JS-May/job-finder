import { database, storage } from "../libraries/firebase";

export function createCompany(id, child, company) {
  return database
    .ref("/company/" + id)
    .child(child)
    .set(company);
}

export function getCompanyById(id) {
  return database
    .ref("/company/" + id)
    .once("value")
    .then((snapshot) => snapshot.val());
}

export const uploadImage = (image) => {
  return storage.ref(`images/${image.name}`).put(image);
};

export const uploadImageUrl = (companyId, imageType, imageUrl) => {
  database
    .ref("/company/" + companyId)
    .child(`${imageType}`)
    .set(imageUrl);
};

export function getImageUrl(image) {
  return storage.ref("images").child(image.name).getDownloadURL();
}

export function getAllCompanies() {
  return database
    .ref("/companies")
    .once("value")
    .then(function (response) {
      return response.val();
    });
}
