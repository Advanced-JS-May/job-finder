import firebase, { database } from '../libraries/firebase';

export function createData(path, data, uid) {
  return firebase
    .database()
    .ref(path + uid)
    .set(data);
}

export function getData(path, id) {
  return database
    .ref(path + id)
    .once('value')
    .then((snapshot) => snapshot.val());
}

export function updateData() {}

export function deleteData() {}
