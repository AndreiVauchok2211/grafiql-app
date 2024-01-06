import { initializeApp } from 'firebase/app';

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from 'firebase/auth';

import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_QRAPHIQL_APP_API_KEY,
  authDomain: import.meta.env.VITE_QRAPHIQL_APP_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_QRAPHIQL_APP_PROJECT_ID,
  storageBucket: import.meta.env.VITE_QRAPHIQL_APP_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_QRAPHIQL_APP_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_QRAPHIQL_APP_APP_ID,
  measurementId: import.meta.env.VITE_QRAPHIQL_APP_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const logInWithEmailAndPassword = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err: unknown) {
    throw err;
  }
};

const registerWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, 'users'), {
      uid: user.uid,
      authProvider: 'local',
      email,
    });
  } catch (err: unknown) {
    throw err;
  }
};

const sendPasswordReset = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert('Password reset link sent!');
  } catch (err: unknown) {
    throw err;
  }
};

const logout = () => {
  signOut(auth);
};

export {
  auth,
  db,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
};
