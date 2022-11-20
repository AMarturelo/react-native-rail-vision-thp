import {combineReducers} from 'redux';
import fetchTripReviewReducer from './fetchTripReviewReducer';
import {reducer as formReducer} from 'redux-form';

export const combinedReducers = combineReducers({
  form: formReducer,
  tripReviewReducer: fetchTripReviewReducer,
});
