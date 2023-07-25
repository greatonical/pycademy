import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyCm0Rooru1rQHIoPp9-vKGhfg_w_NYFz40',
  authDomain: 'pycademy-77272.firebaseapp.com',
  databaseURL: 'https://pycademy-77272.firebaseio.com',
  projectId: 'pycademy-77272',
  storageBucket: 'pycademy-77272.appspot.com',
  messagingSenderId: '629765820074',
  appId: '1:629765820074:web:63ccef3039673e332f0ad3',
  measurementId: 'G-YP6GC5QZFV',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
