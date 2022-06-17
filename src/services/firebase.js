import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAp8pfggk3P0hAPDsso_7pTi5b35TsmWyE",
  authDomain: "buck-t.firebaseapp.com",
  projectId: "buck-t",
  storageBucket: "buck-t.appspot.com",
  messagingSenderId: "434294734438",
  appId: "1:434294734438:web:3c33e150d221b9818cf7a7"
};

firebase.initializeApp(config);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

const login = () => {
  return auth.signInWithPopup(provider);
}

const logout = () => {
  return auth.signOut();
}

export { auth, login, logout };