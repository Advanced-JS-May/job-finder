import React from "react";
import { database } from "../libraries/firebase";

export function getUserFollowings(id) {
  return database
    .ref("/job-seeker/" + id)//change to job-seeker
    .child("following")
    .once("value")
    .then((snapshot) => snapshot.val())
    .catch((err) => console.log(err));
}

export function addUserFollow(id, favorite) {
  return database
    .ref("/job-seeker/" + id)
    .child("following")
    .set(favorite);
}