const inititalState = {
  loading: false,
  tripReviews: [],
  error: null,
};
const fetchTripReviewReducer = (state = inititalState, action) => {
  console.log('fetchTripReviewReducer ' + action.type);
  switch (action.type) {
    case 'FETCH_TRIP_REVIEW_REQUEST': {
      return {...state, loading: true};
    }
    case 'FETCH_TRIP_REVIEW_SUCCESS': {
      console.log(action.response);
      const myMap = Object.entries(action.response).map(([key, value]) => {
        return {
          label:
            key +
            ' | ' +
            Array.from(value.tripDetails)
              .map(trip => trip.id)
              .join(" - "),
          value: value,
        };
      });
      console.log(myMap);
      return {
        ...state,
        loading: false,
        tripReviews: myMap,
      };
    }
    case 'FETCH_TRIP_REVIEW_FAILURE': {
      return {...state, error: action.error, loading: false};
    }
  }
  return state;
};
export default fetchTripReviewReducer;
