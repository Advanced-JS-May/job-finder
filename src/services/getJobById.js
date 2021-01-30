import firebase, { database } from "../libraries/firebase";

export function getJobById (id) {
    return database
      .ref("/jobs/" + id)
      .once("value")
      .then((snapshot) => snapshot.val());
  }