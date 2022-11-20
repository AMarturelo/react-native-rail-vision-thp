import {combineReducers} from 'redux';
import fetchTripReviewReducer from './fetchTripReviewReducer';
import {reducer as formReducer} from 'redux-form';
import tripReviewReducer from './tripReviewReducer';
import tripFilterReducer from "./tripFilterReducer";

export const combinedReducers = combineReducers({
  form: formReducer,
  fetchTripReviewReducer: fetchTripReviewReducer,
  tripReviewReducer: tripReviewReducer,
  tripFilterReducer: tripFilterReducer,
});
