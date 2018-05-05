import axios from 'axios'
import { call, put, takeLatest } from 'redux-saga/effects'
import { LOAD, loadHelloWorldFailure, loadHelloWorldSuccess } from './ducks'

function* loadHelloWorld() {
  try {
    const response = yield call(axios, 'http://localhost:8000/hello')
    yield put(loadHelloWorldSuccess(response.data))
  } catch (error) {
    yield put(loadHelloWorldFailure(error))
  }
}

export default function* appSaga() {
  yield takeLatest(LOAD, loadHelloWorld)
}
