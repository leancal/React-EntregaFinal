// import { initializeApp } from "firebase/app";
// import {getFirestore} from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: "tes-del-sur-test.firebaseapp.com",
//   projectId: "tes-del-sur-test",
//   storageBucket: "tes-del-sur-test.appspot.com",
//   messagingSenderId: "609028954318",
//   appId: "1:609028954318:web:6c2b7dbf6707c8a3df189f"
// };


// const app = initializeApp(firebaseConfig);

// export const db = getFirestore(app);

import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "react-coder-9f0d7.firebaseapp.com",
  projectId: "react-coder-9f0d7",
  storageBucket: "react-coder-9f0d7.appspot.com",
  messagingSenderId: "902371214131",
  appId: "1:902371214131:web:03943efadc5caec979f446",
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
