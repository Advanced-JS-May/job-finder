import firebase from '../libraries/firebase';

export function writeUserData(userId, email, role) {
  firebase
    .database()
    .ref('users/' + userId)
    .set({
      userId,
      email,
      role,
    })
    .catch((error) => {
      console.log(error);
    });
}
