import {fork} from 'redux-saga/effects';
import postSaga from './PostSaga';

export default function * () {
  yield[
    fork(postSaga),
  ];
}