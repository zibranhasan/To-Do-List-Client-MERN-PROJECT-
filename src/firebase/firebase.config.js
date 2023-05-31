// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCWnS8RMKKY2gTEZp-Z9myrqygYCcPE1zs",
//   authDomain: "to-do-list-8f23d.firebaseapp.com",
//   projectId: "to-do-list-8f23d",
//   storageBucket: "to-do-list-8f23d.appspot.com",
//   messagingSenderId: "758212229647",
//   appId: "1:758212229647:web:413b35b255310f545c017a"
// };

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;