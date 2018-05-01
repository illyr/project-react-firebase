import * as firebase from "firebase";
import indexRoutes from "routes/index.jsx";
// Required for side-effects
require("firebase/firestore");

var config = {
    apiKey: "AIzaSyB4SPjnYaZGq7maIhNJte7di5SoZhTvlW0",
    authDomain: "react-firebase-3d2a7.firebaseapp.com",
    databaseURL: "https://react-firebase-3d2a7.firebaseio.com",
    projectId: "react-firebase-3d2a7",
    storageBucket: "",
    messagingSenderId: "742827958300"
};
firebase.initializeApp(config);

// Initialize Cloud Firestore through Firebase
const firestore = firebase.firestore();
const settings = {timestampsInSnapshots: true};
firestore.settings(settings);

export {firestore, firebase};