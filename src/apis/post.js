import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
} from 'firebase/firestore';
import { getFirestoreInstance, setAPIResult } from './index';
import faker from '@faker-js/faker';

const db = getFirestoreInstance();

const webinarsCollection = collection(db, 'webinars');

const getFirstWebinar = async () => { 
  const queryFirstWebinar = query(webinarsCollection, limit(1));
  const webinarsSnapshot = await getDocs(queryFirstWebinar);

  if(webinarsSnapshot.docs.length === 0) return null;
  return webinarsSnapshot.docs[0];
 }

export const getPostsResult = async ({ lastWebinarIndex, per_page }) => {

  const webinar = !Boolean(lastWebinarIndex)
    ? await getFirstWebinar()
    : await getDoc(doc(db, 'webinars', lastWebinarIndex));

  if (!Boolean(webinar)) return setAPIResult(false, 'last id error');

  const queryWebinars = query(
    webinarsCollection,
    orderBy('created_at'),
    startAfter(webinar),
    limit(per_page)
  );

  const webinarDocs = await getDocs(queryWebinars);

  const data = webinarDocs.docs.map((doc) => {
    return doc.data();
  });

  return setAPIResult(true, data);
};

export const getPostResult = async ({ id }) => {
  const webinar = await getDoc(doc(db, 'webinars', id));

  if (!Boolean(webinar)) return setAPIResult(false, 'id error');

  return setAPIResult(true, webinar);
};

export const insertPostResult = async () => {
  const insertListPromise = Array.from({ length: 51 }, async () => {
    const data = {
      title: faker.lorem.words(),
      content: `<p>${faker.lorem.paragraphs()}</p> <p>${faker.lorem.paragraphs()}</p>`,
      created_at: faker.time.recent('unix'),
    };

    const res = await addDoc(webinarsCollection, data);
    return res.id;
  });

  const results = await Promise.all(insertListPromise);

  return setAPIResult(true, results);
};
