import React, { useState } from "react";
import { database } from "../libraries/firebase";
import { useAuth } from "../services/authentication";

function getUserFollowings() {
  return database
    .ref("jobs/25")
    .child("following")
    .once("value")
    .then((snapshot) => snapshot.val())
    .then((res) => console.log(res));
}

// function setNewFollow(){

// } 

export default getUserFollowings;
