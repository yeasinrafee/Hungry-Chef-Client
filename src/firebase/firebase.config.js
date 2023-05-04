// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYO9S7uCImB3p_RhgqF2FHw3a5TA7xxoU",
  authDomain: "hungry-chef-client.firebaseapp.com",
  projectId: "hungry-chef-client",
  storageBucket: "hungry-chef-client.appspot.com",
  messagingSenderId: "538382247537",
  appId: "1:538382247537:web:be01354f7aff5dd58e1dd0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
