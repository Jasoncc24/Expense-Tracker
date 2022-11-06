import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDraVC5k3zextTnIUViguwp7Ws3OG2qmmw",
  authDomain: "finacne-tracker.firebaseapp.com",
  projectId: "finacne-tracker",
  storageBucket: "finacne-tracker.appspot.com",
  messagingSenderId: "33236871287",
  appId: "1:33236871287:web:96a630caf45286c07dfe72",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
