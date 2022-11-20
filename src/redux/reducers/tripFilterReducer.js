const inititalState = {filter: null, trip: null};
const tripReviewReducer = (state = inititalState, action) => {
  if (action.trips != null) {
    switch (action.type) {
      case 'SELECT_TRIP_FILTER': {
        const trip = Object.entries(action.trips).values();
        return {...state, filter: action.filter, };
      }
    }
  }
  return state;
};
export default tripReviewReducer;
