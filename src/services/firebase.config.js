// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDh_syZv9kB1pjSvrgq9m0saDIccjOFU9o",
	authDomain: "onomatopeapp.firebaseapp.com",
	projectId: "onomatopeapp",
	storageBucket: "onomatopeapp.appspot.com",
	messagingSenderId: "190481508503",
	appId: "1:190481508503:web:deea336521be1c269d21d2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
