import firebase from "firebase/app"
import "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyBX1xYh9Hn1SftPcHoupt5CcllDYFMccPA",
  authDomain: "yomosco--foundation.firebaseapp.com",
  projectId: "yomosco--foundation",
  storageBucket: "yomosco--foundation.appspot.com",
  messagingSenderId: "5116003133",
  appId: "1:5116003133:web:1af8ed91f58477ca7c7b54",
  measurementId: "G-02GR1KL9Q2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);