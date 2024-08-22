 

import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail} from 'firebase/auth';
import { getFirestore, doc } from 'firebase/firestore';
 


 
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};
 
class Firebase {


 
   
  constructor() {
    this.app = initializeApp(firebaseConfig);
    this.auth = getAuth(this.app);
    this.db = getFirestore(this.app);
   
  }


   signupUser = (email, password) =>
    createUserWithEmailAndPassword(this.auth, email, password);


  loginUser = (email, password) =>
    signInWithEmailAndPassword(this.auth, email, password);


  signoutUser = () => signOut(this.auth);


  passwordReset = (email) => sendPasswordResetEmail(this.auth, email);
 

  user = (uid) => doc(this.db, `users/${uid}`);
}




export default Firebase;
