import { database, storage } from "../libraries/firebase";
import { updateData } from "../services/manipulateDB.service";

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

//update profile image url function
export const updateImageUrl = (id, data) => updateData("company", id, data);

export function getImageUrl(image) {
  return storage.ref("images").child(image.name).getDownloadURL();
}

export function getAllCompanies() {
  return database
    .ref("/company/")
    .once("value")
    .then(function (response) {
      return response.val();
    });
}
