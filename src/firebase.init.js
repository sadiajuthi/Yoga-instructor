// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBJZLm6ve8uayx1NQx9FB8SBJ9QAyIcCZQ",
    authDomain: "yoga-instractor.firebaseapp.com",
    projectId: "yoga-instractor",
    storageBucket: "yoga-instractor.appspot.com",
    messagingSenderId: "952541467599",
    appId: "1:952541467599:web:4cf37e28af752db66338ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;
