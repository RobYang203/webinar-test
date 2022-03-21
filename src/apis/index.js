import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const app = initializeApp({
  apiKey: 'AIzaSyBfgmXV1xmnap3b0CydMZrYHGUPmlrvWis',
  authDomain: 'webinar-40627.firebaseapp.com',
  databaseURL: 'https://webinar-40627-default-rtdb.firebaseio.com',
  projectId: 'webinar-40627',
  storageBucket: 'webinar-40627.appspot.com',
  messagingSenderId: '910533890679',
  appId: '1:910533890679:web:72443d6382719210466c72',
});

const db = getFirestore(app);

export function getFirestoreInstance() {
  return db;
}

export const setAPIResult = (success, ...payload) => {
  if(success)
    return {
      success,
      data: payload,
    };
  else throw Error(...payload)
};
