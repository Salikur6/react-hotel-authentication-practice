// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBERg_wYqT9OiqKcZyvJg2-k5VWz1nJY2c",
    authDomain: "salik-hotel-practic.firebaseapp.com",
    projectId: "salik-hotel-practic",
    storageBucket: "salik-hotel-practic.appspot.com",
    messagingSenderId: "851096155415",
    appId: "1:851096155415:web:7048f8040c8a8253b47352"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;