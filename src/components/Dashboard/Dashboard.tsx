import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import styles from './Dashboard.module.scss';
import { auth, db, logout } from '../../firebase';
import { query, collection, getDocs, where } from 'firebase/firestore';

export function Dashboard() {
  const [user, loading] = useAuthState(auth);
  const [name, setName] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const q = query(collection(db, 'users'), where('uid', '==', user?.uid));
        const doc = await getDocs(q);
        const data = doc.docs[0].data();
        setName(data.name);
      } catch (err) {
        console.error(err);
        alert('An error occurred while fetching user data');
      }
    };
    if (loading) return;
    if (!user) return navigate('/login');
    fetchUserName();
  }, [user, loading, navigate]);
  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboard__container}>
        Logged in as
        <div>{name}</div>
        <div>{user?.email}</div>
        <button className={styles.dashboard__btn} onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}
