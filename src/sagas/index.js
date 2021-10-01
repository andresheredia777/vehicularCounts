import { all, fork } from 'redux-saga/effects';

import watchGetUsersSaga from './watchers/getUsers';
import watchGetConteosSaga from './watchers/conteosVehiculares'

export default function* root() {
  yield all([
    fork(watchGetUsersSaga),
    fork(watchGetConteosSaga)
  ]);
}
