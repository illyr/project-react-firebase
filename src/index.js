
import React from 'react';
import ReactDOM from "react-dom";

import "assets/css/material-dashboard-react.css?v=1.2.0";
import {firestore, firebase} from "firebase/index.jsx";

import SignInScreen from "components/Login/Login.jsx";

/*
firestore.collection("users").add({
  first: "Ada32",
  last: "Lovelace",
  born: 1815
})
.then(function(docRef) {
  console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
  console.error("Error adding document: ", error);
});
*/

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var uid = user.uid;

    ReactDOM.render(
      <SignInScreen isSignedIn={false}/>,
      document.getElementById("root")
    );
  } else {
    ReactDOM.render(
      <SignInScreen isSignedIn={false}/>,
      document.getElementById("root")
    );
  }
}, function(error) {
  console.log(error);
});


