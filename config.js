import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAGkIq_DHO0Ooj7WINA9nZU9IKgNWHq0gM",
    authDomain: "team-voting-97abd.firebaseapp.com",
    projectId: "team-voting-97abd",
    storageBucket: "team-voting-97abd.appspot.com",
    messagingSenderId: "284772837192",
    appId: "1:284772837192:web:160ebd0ef0a2c6814cf57d"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();