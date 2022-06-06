import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAJbYrB1i34pQ8ZW46c2kl0RTTR-oytGKQ",
    authDomain: "finance-tracker-a3961.firebaseapp.com",
    projectId: "finance-tracker-a3961",
    storageBucket: "finance-tracker-a3961.appspot.com",
    messagingSenderId: "401893996583",
    appId: "1:401893996583:web:88cfaf0df567c2e3813602"
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

export { projectFirestore, projectAuth };