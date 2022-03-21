import { addDoc, collection, deleteDoc, doc } from 'firebase/firestore';
import { getFirestoreInstance, setAPIResult } from './index';

const db = getFirestoreInstance();

const subscribesCollection = collection(db, 'subscribes');

export const insertFavouriteResult = async ({ ...payload }) => {
  const subscribesDoc = await addDoc(subscribesCollection, payload);

  if (Boolean(subscribesDoc.id)) return setAPIResult(true, subscribesDoc.id);
  else return setAPIResult(false, 'subscribe error');
};

export const deleteFavouritedResult = async ({ token, id }) => {
   await deleteDoc(doc(db, 'subscribes', id));

  return setAPIResult(true, id);
};
