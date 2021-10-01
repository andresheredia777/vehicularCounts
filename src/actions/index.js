import { GET_USERS_SAGA, SET_USERS,SET_CONTEOS, GET_CONTEOS_SAGA, GENERATE_CSV, SET_URL } from '../constants';
export function getConteosSaga() {
  return {
    type: GET_CONTEOS_SAGA
  };
}

export function generateCsv() {
  return {
    type: GENERATE_CSV
  };
}



export function setUsers(users) {
  return {
    type: SET_USERS,
    users
  };
}

export function setConteos(data) {
  return {
    type: SET_CONTEOS,
    data
  };
}

export function setUrlCsv(url) {
  return {
    type: SET_URL,
    url
  };
}

//Sagas
export function getUsersSaga() {
  return {
    type: GET_USERS_SAGA
  };
}

