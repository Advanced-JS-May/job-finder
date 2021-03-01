import firebase, { database } from "../libraries/firebase";

export function createData(path, data, uid) {
  return firebase
    .database()
    .ref(path + uid)
    .set(data);
}

export function createChildData(path, id, child, data) {
  return database
    .ref(path + id)
    .child(child)
    .set(data);
}

export function getData(path, id) {
  return database
    .ref(path + id)
    .once("value")
    .then((snapshot) => snapshot.val());
}

export function updateData(path, id, data) {
  return database.ref(`${path}/` + id).update(data);
}

export function deleteData() {}

/**
export function updateUserById(id, data) {
  let userRef = database.ref('users/' + id);

  return firebase.database().ref(`/users/${id}`).update(data);
} */
