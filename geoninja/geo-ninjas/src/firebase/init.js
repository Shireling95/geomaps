 import firebase from 'firebase'
 import firestore from 'firebase/firestore'
 
 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDl2eZdTwiOpHs7g7R1VOy8PeQJsh4oezY",
    authDomain: "geo-maps-29102.firebaseapp.com",
    projectId: "geo-maps-29102",
    storageBucket: "geo-maps-29102.appspot.com",
    messagingSenderId: "828614764582",
    appId: "1:828614764582:web:f9b5a11c4bb107d3879ee7"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebaseApp.firestore().settings({ timestampsInSnapshots: true })

  export default firebaseApp.firestore()
