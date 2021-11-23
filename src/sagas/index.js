import { fork, all, takeLatest } from 'redux-saga/effects';
import * as Watchers from './watchers';

const sagas = [];

export const insertTakeLatestWatchers = (type, saga) => {
  sagas.push(
    fork(function* () {
      yield takeLatest(type, saga);
    })
  );
};

export default function* sagaFormat() {
  for (const key in Watchers) {
    sagas.push(fork(Watchers[key]));
  }

  yield all(sagas);
}
