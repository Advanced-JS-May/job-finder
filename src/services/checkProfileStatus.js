import firebase, { database } from "../libraries/firebase";

export function checkProfileStatus(id) {
  return database
    .ref("/users/" + id)
    .once("value")
    .then((snapshot) => snapshot.val())
    .catch((err) => console.log(err))
    .then((res) => {
      if (res.profileCreated) {
        return res;
      } else {
        return false;
      }
    })
    .catch((err) => console.log(err));
}
