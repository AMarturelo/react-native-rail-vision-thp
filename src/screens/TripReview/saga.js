import {put, takeEvery} from 'redux-saga/effects';
import {fetchTripReview} from '../../api/fetchTripReview';

function* tripReviewAsync() {
  const response = yield fetchTripReview();
  console.log(response)
  try {
    yield put({type: 'FETCH_TRIP_REVIEW_SUCCESS', response});
  } catch (error) {
    yield put({type: 'FETCH_TRIP_REVIEW_FAILURE', error: error.message});
  }
}

export default function* watchFetchTripReviewAsync() {
  yield takeEvery('FETCH_TRIP_REVIEW_REQUEST', tripReviewAsync);
}
