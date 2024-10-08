import {initializeApp} from "firebase/app";
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD8ZZb5TXEo6Qscj4ki8E5MKgS9MOXZSuo",
  authDomain: "shindiri-test.firebaseapp.com",
  projectId: "shindiri-test",
  storageBucket: "shindiri-test.appspot.com",
  messagingSenderId: "52617965392",
  appId: "1:52617965392:web:fc3ff399c4d2e6db6e4655",
  measurementId: "G-CBB903KCR9",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const resolveOnUpdate = () => new Promise((resolve) => {
  const unsub = auth.onAuthStateChanged((user) => {
    localStorage.setItem("token", user?.uid || "");
    resolve(true);
    unsub();
  });
});

export const signin = (email: string, password: string) => signInWithEmailAndPassword(auth, email, password).then(resolveOnUpdate);
export const signup = (email: string, password: string) => createUserWithEmailAndPassword(auth, email, password).then(resolveOnUpdate);
export const signout = () => auth.signOut();


