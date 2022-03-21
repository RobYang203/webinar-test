import { collection, getDocs, query, where } from 'firebase/firestore';
import { getFirestoreInstance, setAPIResult } from './index';

const db = getFirestoreInstance();

const userCollection = collection(db, 'users');

export const authEmailLoginResult = async ({ email, password }) => {
  const queryUser = query(
    userCollection,
    where('email', '==', email),
    where('password', '==', password)
  );

  const usersSnapshot = await getDocs(queryUser);

  const users = usersSnapshot.docs.map((userDoc) => {
    return userDoc.data();
  });

  if (!Boolean(users) || users.length === 0) return setAPIResult(false, 'user not find ');
  else return setAPIResult(true, users[0]);
};

export const authCheckMeResult = async ({ token }) => {
  // const res = await server.post('/auth/me', null, {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // });
  // return res;
};

export const authLogoutResult = async ({ token }) => {
  return setAPIResult(true)
};

export const authSignupResult = async (payload) => {
  // const res = await server.post('/auth/signup', payload);
  // return res;
};
