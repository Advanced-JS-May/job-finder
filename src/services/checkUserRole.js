import firebase, { database } from "../libraries/firebase";
import { USER_ROLES } from "../constants/user.constants"; //?

export function checkUserRole(id,role) {
  return database
    .ref("/users/" + id)
    .once("value")
    .then((snapshot) => snapshot.val())
    .catch((err)=>console.log(err))
    .then((res) => {
      if (res.role === role) {
        return res
      } else {
        return false
      }
    })
    .catch((err)=>console.log(err))
}
