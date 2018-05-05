import axios from 'axios'
import { call, put, takeLatest } from 'redux-saga/effects'
import { LOAD, actions } from './ducks'

function* loadHelloWorld() {
  try {
    const response = yield call(axios, 'http://localhost:8000/hello')
    yield put(actions.loadHelloWorldSuccess(response.data))
  } catch (error) {
    yield put(actions.loadHelloWorldFailure(error))
  }
}

export default function* appSaga() {
  yield takeLatest(LOAD, loadHelloWorld)
}
