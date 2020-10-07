import firebase, { database } from '../libraries/firebase';

export function writeUserData({ uid, email, emailVerified }, role) {
  firebase
    .database()
    .ref('users/' + uid)
    .set({
      uid,
      email,
      emailVerified,
      role,
    })
    .catch((error) => {
      console.log(error);
    });
}

export function getUsersById(id) {
  return database
    .ref('/users/' + id)
    .once('value')
    .then((snapshot) => snapshot.val());
}
