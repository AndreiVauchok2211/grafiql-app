import { initializeApp } from 'firebase/app';

import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from 'firebase/auth';

import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from 'firebase/firestore';
import { ValidationError } from 'yup';

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
const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, 'users'), where('uid', '==', user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, 'users'), {
        uid: user.uid,
        name: user.displayName,
        authProvider: 'google',
        email: user.email,
      });
    }
  } catch (err: unknown) {
    if (!(err instanceof ValidationError)) {
      throw err;
    }
  }
};

const logInWithEmailAndPassword = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err: unknown) {
    if (!(err instanceof ValidationError)) {
      throw err;
    }
  }
};

const registerWithEmailAndPassword = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, 'users'), {
      uid: user.uid,
      name,
      authProvider: 'local',
      email,
    });
  } catch (err: unknown) {
    if (!(err instanceof ValidationError)) {
      throw err;
    }
  }
};

const sendPasswordReset = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert('Password reset link sent!');
  } catch (err: unknown) {
    if (!(err instanceof ValidationError)) {
      throw err;
    }
  }
};

const logout = () => {
  signOut(auth);
};

export {
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
};
