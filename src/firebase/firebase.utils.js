import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyD7y0-lOH4LH4-iA11t940uJPXP8j0fc70",
  authDomain: "aqua-db.firebaseapp.com",
  databaseURL: "https://aqua-db.firebaseio.com",
  projectId: "aqua-db",
  storageBucket: "aqua-db.appspot.com",
  messagingSenderId: "680436503129",
  appId: "1:680436503129:web:50bbeb30e7c082aa585748",
  measurementId: "G-RFZBG3FTND"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async (userAuth, additionalData) => {
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
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
