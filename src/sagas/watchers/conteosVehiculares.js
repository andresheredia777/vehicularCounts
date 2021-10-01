import { put, takeLatest, call } from 'redux-saga/effects';

import { GET_CONTEOS_SAGA,GENERATE_CSV } from '../../constants';
import { setConteos, setUrlCsv } from '../../actions';
import { getConteos, generateCsv } from '../../lib/api';

function* workerGetConteosSaga() {
  const datos = yield call(getConteos);
  yield put(setConteos(datos));
}

function* workerGenerateCsv() {
  const urlCsv = yield call(generateCsv);
  console.log("workerGenerateCsv",urlCsv)
  yield put(setUrlCsv(urlCsv));
}

export default function* watchGetConteosSaga() {
  yield takeLatest(GET_CONTEOS_SAGA, workerGetConteosSaga);
  yield takeLatest(GENERATE_CSV, workerGenerateCsv);
}
