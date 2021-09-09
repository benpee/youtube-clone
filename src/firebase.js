import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAQrLJMP60PQ3eFC-eWx7nQ2gIMb-1wL4g",
    authDomain: "yourtube-f6e89.firebaseapp.com",
    projectId: "yourtube-f6e89",
    storageBucket: "yourtube-f6e89.appspot.com",
    messagingSenderId: "299907572491",
    appId: "1:299907572491:web:9bc3054a4ecfe06293f80e",
    measurementId: "G-J8M5T44KW9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();

const storage = firebase.firestore();

export default auth