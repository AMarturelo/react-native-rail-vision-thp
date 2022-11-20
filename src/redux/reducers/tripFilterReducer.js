const inititalState = {filter: null, trip: null};
const tripReviewReducer = (state = inititalState, action) => {
  switch (action.type) {
    case 'SELECT_TRIP_FILTER': {
      return {...state, filter: action.filter};
    }
  }
  return state;
};
export default tripReviewReducer;
