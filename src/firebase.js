import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyAPO5KcPGfMDdejpP1LsOcWD60iG1DPxdo",
    authDomain: "tobuy-3cb83.firebaseapp.com",
    databaseURL: "https://tobuy-3cb83.firebaseio.com",
    projectId: "tobuy-3cb83",
    storageBucket: "tobuy-3cb83.appspot.com",
    messagingSenderId: "496576220670",
    appId: "1:496576220670:web:77a0105cd145036806c4af"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;