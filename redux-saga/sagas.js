import { delay } from 'redux-saga'
import { put, takeEvery, all, call } from 'redux-saga/effects'

function* helloSaga() {
  console.log('Hello Sagas!')
}

function* incrementAsync() {
  yield delay(1000)
  yield put({ type: 'INCREMENT' })
}

function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

function* fetchData(action) {
  try {
    const data = yield call(Api.fetchData, action.payload.url)
    yield put({type: 'FETCH_SUCCEEDED', data})
  } catch (error) {
    yield put({type: 'FETCH_FAILED', error})
  }
}

export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrementAsync(),
  ])
}
