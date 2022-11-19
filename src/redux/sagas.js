import {all} from 'redux-saga/effects';
import watchFetchTripReviewAsync from '../screens/TripReview/saga';

function* rootSaga() {
  yield all([watchFetchTripReviewAsync()]);
}

export default rootSaga;
