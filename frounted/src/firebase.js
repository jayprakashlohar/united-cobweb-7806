import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCPikojaQTsqAwO7ArOCNo7cxt7t4khtQg",
  authDomain: "fir-auth-1132-36d79.firebaseapp.com",
  projectId: "fir-auth-1132-36d79",
  storageBucket: "fir-auth-1132-36d79.appspot.com",
  messagingSenderId: "254465869911",
  appId: "1:254465869911:web:7b73b77b6fbb3048bbfb12",
  measurementId: "G-CCBZCPHM6R"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
