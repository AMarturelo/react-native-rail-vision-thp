import {combineReducers} from 'redux';
import tripReviewReducer from './tripReviewReducer';
import {reducer as formReducer} from 'redux-form';

export const combinedReducers = combineReducers({
  form: formReducer,
  tripReviewReducer: tripReviewReducer,
});
