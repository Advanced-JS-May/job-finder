import firebase, { database } from "../libraries/firebase";

export function getAllJobs() {
  return database
    .ref("/jobs")
    .once("value")
    .then(function (response) {
      return response.val();
      console.log(typeof response);
    })
    .catch((err) => console.log(err));
}
