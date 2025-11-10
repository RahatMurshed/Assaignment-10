// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPwyH6Pci58ko7z-sJsdLr1D3pQ6aBUOM",
  authDomain: "assaignment-10-auth.firebaseapp.com",
  projectId: "assaignment-10-auth",
  storageBucket: "assaignment-10-auth.firebasestorage.app",
  messagingSenderId: "493548463023",
  appId: "1:493548463023:web:10afa942d1df4b48a3855a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);