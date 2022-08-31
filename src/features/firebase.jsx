import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBOOBA9yfugPdZ7RteaM5AKaqMYTLgAfsY",
    authDomain: "clone-yt-cef81.firebaseapp.com",
    projectId: "clone-yt-cef81",
    storageBucket: "clone-yt-cef81.appspot.com",
    messagingSenderId: "830620923148",
    appId: "1:830620923148:web:8eb3e7833fc32d85298529"
  };

const firebaseApp =  firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
