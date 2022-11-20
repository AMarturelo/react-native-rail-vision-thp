const inititalState = {value: null};
const tripReviewReducer = (state = inititalState, action) => {
  switch (action.type) {
    case 'SELECT_TRIP_REVIEW': {
      return {...state, value: action.payload};
    }
  }
  return state;
};
export default tripReviewReducer;
