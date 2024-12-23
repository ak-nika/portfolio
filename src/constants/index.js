// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9TXLa6KcBcC5G1fd6YVIaqduKpJ_kHBc",
  authDomain: "portfolio-2586e.firebaseapp.com",
  databaseURL: "https://portfolio-2586e-default-rtdb.firebaseio.com",
  projectId: "portfolio-2586e",
  storageBucket: "portfolio-2586e.firebasestorage.app",
  messagingSenderId: "683739904728",
  appId: "1:683739904728:web:4a7bd6289eb45c91e6b5ad",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const projectRef = collection(db, "projects");
const languageRef = collection(db, "languages");

const about = [
  {
    id: 1,
    title: "Years of Experience",
    text: "1+",
  },
  {
    id: 2,
    title: "Clients",
    text: "5+",
  },
  {
    id: 3,
    title: "Projects Completed",
    text: "40+",
  },
  {
    id: 4,
    title: "Hours of Developing",
    text: "5,000+",
  },
];
export { app, db, projectRef, languageRef, about };
