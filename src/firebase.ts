import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';

type AuthState = [firebase.User, boolean, firebase.FirebaseError];

const config = {
  apiKey: 'AIzaSyDQLAHciwtLFm6BIo7m9SkrcBec2dnnCs0',
  authDomain: 'snake-4e27f.firebaseapp.com',
  databaseURL: 'https://snake-4e27f.firebaseio.com',
  projectId: 'snake-4e27f',
  storageBucket: 'snake-4e27f.appspot.com',
  messagingSenderId: '416579751449',
  appId: '1:416579751449:web:e1a1ff37e06dd10bb2a488',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const db = firebase.firestore();
export const timestamp = firebase.firestore.FieldValue.serverTimestamp();
export const providers = {
  google: new firebase.auth.GoogleAuthProvider(),
  github: new firebase.auth.GithubAuthProvider(),
};
export const useAuth = (): AuthState => useAuthState(auth);

export default firebase;
