import firebase from "firebase";

// Your web app's Firebase configuration
const data = {
    apiKey: "AIzaSyBRrnrKLX1G1RWWRxtVbAa1irJ3NHt7kqg",
    authDomain: "receitas-befce.firebaseapp.com",
    projectId: "receitas-befce",
    storageBucket: "receitas-befce.appspot.com",
    messagingSenderId: "565114732785",
    appId: "1:565114732785:web:11313caa5ab7cb46dc2950"
  };
  // Initialize Firebase
  firebase.initializeApp(data);

export default firebase;
