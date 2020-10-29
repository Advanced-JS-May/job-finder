import firebase, { database } from "../libraries/firebase";
import { USER_ROLES } from "../constants/user.constants";

export function checkUserRole(id,role) {
  return database
    .ref("/users/" + id)
    .once("value")
    .then((snapshot) => snapshot.val())
    .then((res) => {
      if (res.role == role) {
        console.log("isEmployer");
        return true
      } else {
        return false
        console.log("USER");
      }
      console.log("Real",res.role);
    });
}
