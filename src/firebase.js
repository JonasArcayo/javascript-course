import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAV8Xzrwm85I8gNrIk2UX27q-NS2EcgsP4",
  authDomain: "netflix-clone-ec7dc.firebaseapp.com",
  projectId: "netflix-clone-ec7dc",
  storageBucket: "netflix-clone-ec7dc.appspot.com",
  messagingSenderId: "502510293013",
  appId: "1:502510293013:web:1c505b0d1867aecd423e1c"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;