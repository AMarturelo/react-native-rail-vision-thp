const inititalState = {
  loading: false,
  tripReviews: {},
  error: null,
};
const fetchTripReviewReducer = (state = inititalState, action) => {
  console.log('Marturelo ' + JSON.stringify(action));

  switch (action.type) {
    case 'FETCH_TRIP_REVIEW_REQUEST': {

      return {...state, loading: true};
    }
    case 'FETCH_TRIP_REVIEW_SUCCESS': {
      return {
        ...state,
        loading: false,
        tripReviews: action.response,
      };
    }
    case 'FETCH_TRIP_REVIEW_FAILURE': {
      return {...state, error: action.error, loading: false};
    }
  }
  return state;
};
export default fetchTripReviewReducer;
