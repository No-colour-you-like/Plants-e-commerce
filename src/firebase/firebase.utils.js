import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD1xfOk_QoCKd3kp4Dc2CUiCt4kzo5s6Bc",
  authDomain: "e-commerce--plants.firebaseapp.com",
  projectId: "e-commerce--plants",
  storageBucket: "e-commerce--plants.appspot.com",
  messagingSenderId: "915292682579",
  appId: "1:915292682579:web:c15f4054f00773d761c9a6",
  measurementId: "G-6KD4DVDBYC",
};

export const createUserDoc = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export default firebase;
