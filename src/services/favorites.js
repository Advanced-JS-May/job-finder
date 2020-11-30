import React from "react";
import { database } from "../libraries/firebase";

export function getUserFollowings(id) {
  return database
    .ref("/users/" + id)//change to job-seeker
    .child("following")
    .once("value")
    .then((snapshot) => snapshot.val())
    .catch((err) => console.log(err));
}

export function addUserFollow(id, favorite) {
  return database
    .ref("/users/" + id)
    .child("following")
    .set(favorite);
}